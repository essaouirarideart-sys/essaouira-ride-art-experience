import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  activities,
  getActivityBySlug,
  getRelatedActivities,
} from "@/data/activities";
import { getBlogPostsForActivity } from "@/data/blog";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import {
  buildMetadata,
  activityJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  premiumPackagesJsonLd,
} from "@/lib/seo";
import { localizedPath } from "@/lib/paths";
import { site } from "@/data/site";
import { ActivityPageClient } from "./ActivityPageClient";

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const a of activities) {
      params.push({ locale, slug: a.slug[locale] });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const activity = getActivityBySlug(slug, locale);
  if (!activity) return {};
  return buildMetadata({
    locale,
    segment: "activities",
    slug: activity.slug[locale],
    slugByLocale: activity.slug,
    title: activity.seo.title[locale],
    description: activity.seo.description[locale],
    keywords: activity.seo.keywords[locale],
    image: activity.heroImage,
  });
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const activity = getActivityBySlug(slug, typedLocale);
  if (!activity) notFound();
  const dict = getDictionary(typedLocale);
  const related = getRelatedActivities(activity.id);
  const relatedPosts = getBlogPostsForActivity(activity.id, 3);

  const galleryImages = activity.gallery.map((g) => ({
    src: g.src,
    alt: g.alt[typedLocale],
  }));

  const breadcrumbs = breadcrumbJsonLd([
    { name: dict.nav.home, url: `${site.url}${localizedPath(typedLocale)}` },
    {
      name: dict.nav.activities,
      url: `${site.url}${localizedPath(typedLocale, "activities")}`,
    },
    {
      name: activity.title[typedLocale],
      url: `${site.url}${localizedPath(typedLocale, "activities", activity.slug[typedLocale])}`,
    },
  ]);

  const lowestPrice = Math.min(...activity.pricing.flatMap(t => t.options.map(o => o.price)));
  const activityPageUrl = `${site.url}${localizedPath(typedLocale, "activities", activity.slug[typedLocale])}`;
  const activityLd = activityJsonLd({
    locale: typedLocale,
    name: activity.title[typedLocale],
    description: activity.seo.description[typedLocale],
    image: activity.heroImage,
    slug: activity.slug[typedLocale],
    priceFrom: lowestPrice,
    currency: "EUR",
    offers: activity.pricing.flatMap((tier) =>
      tier.options.map((option) => ({
        name: `${tier.name[typedLocale]} — ${option.label[typedLocale]} (${tier.duration[typedLocale]})`,
        price: option.price,
        url: `${activityPageUrl}#pricing`,
      }))
    ),
  });

  const faqLd = faqJsonLd(
    activity.faq.map((q) => ({
      question: q.question[typedLocale],
      answer: q.answer[typedLocale],
    }))
  );

  const premiumLd = activity.premiumPricing
    ? premiumPackagesJsonLd({
        activityName: activity.title[typedLocale],
        pageUrl: activityPageUrl,
        packages: activity.premiumPricing.groups.flatMap((group) =>
          group.packages.map((pkg) => ({
            name: `${group.title[typedLocale]} — ${pkg.name[typedLocale]}`,
            priceEur: pkg.priceEur,
          }))
        ),
      })
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(activityLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {premiumLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(premiumLd) }}
        />
      )}

      <ActivityPageClient
        activity={activity}
        locale={typedLocale}
        dict={dict}
        related={related}
        relatedPosts={relatedPosts}
        galleryImages={galleryImages}
      />
    </>
  );
}
