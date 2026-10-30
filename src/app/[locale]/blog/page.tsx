import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import {
  blogPosts,
  getBlogCategories,
  getFeaturedBlogPost,
  sortBlogPostsByDate,
} from "@/data/blog";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { localizedPath } from "@/lib/paths";
import { site } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    segment: "blog",
    title:
      locale === "fr"
        ? "Journal Essaouira | Guides locaux, conseils et récits"
        : "Essaouira Journal | Local guides, tips and stories",
    description:
      locale === "fr"
        ? "Le journal d'Essaouira Ride & Art : conseils pratiques, récits de sorties et guides locaux depuis Diabat. Articles en français et en anglais."
        : "The Essaouira Ride & Art journal: practical tips, outing stories and local guides from Diabat. Articles in French and English.",
    keywords:
      locale === "fr"
        ? [
            "blog essaouira",
            "journal essaouira",
            "conseils essaouira",
            "récits essaouira",
          ]
        : [
            "essaouira blog",
            "essaouira journal",
            "essaouira travel tips",
            "essaouira stories",
          ],
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const sorted = sortBlogPostsByDate(blogPosts);
  const featured = getFeaturedBlogPost();
  const categories = getBlogCategories(typedLocale);

  const breadcrumbs = breadcrumbJsonLd([
    { name: dict.nav.home, url: `${site.url}${localizedPath(typedLocale)}` },
    {
      name: dict.nav.blog,
      url: `${site.url}${localizedPath(typedLocale, "blog")}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="border-b border-border bg-bg-card/40 py-12 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <Breadcrumbs
              items={[
                { name: dict.nav.home, href: localizedPath(typedLocale) },
                { name: dict.nav.blog },
              ]}
            />
            <span className="eyebrow">{dict.blog.title}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {typedLocale === "fr"
                ? "Le journal d'Essaouira Ride & Art"
                : "The Essaouira Ride & Art journal"}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.blog.subtitle}
            </p>
            <Link
              href={localizedPath(typedLocale, "activities")}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
            >
              {typedLocale === "fr"
                ? "Découvrir nos activités"
                : "Discover our activities"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <BlogIndex
        posts={sorted}
        locale={typedLocale}
        dict={dict}
        categories={categories}
        featured={featured}
      />
    </>
  );
}
