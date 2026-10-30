import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DeferredChromeWidgets } from "@/components/layout/DeferredChromeWidgets";
import { AppDocument } from "@/components/layout/AppDocument";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { siteJsonLdGraph } from "@/lib/seo";
import { display, sans } from "@/lib/fonts";
import { activities } from "@/data/activities";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    description:
      locale === "fr"
        ? "Essaouira Ride & Art Experience à Diabat : balades à cheval, quad, dromadaire et atelier art. Transfert hôtel gratuit. Réservez auprès de l'équipe locale."
        : "Essaouira Ride & Art Experience in Diabat: horse riding, quad biking, camel rides and art workshop. Free hotel pick-up. Book with the local team.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);
  const activitySlugs = activities.map((a) => a.slug);
  const blogSlugs = blogPosts.map((p) => p.slug);

  return (
    <AppDocument
      locale={typedLocale}
      fontClassName={`${display.variable} ${sans.variable}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteJsonLdGraph()),
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-bg-primary"
      >
        {dict.common.skipToContent}
      </a>
      <Header
        locale={typedLocale}
        dict={dict}
        activitySlugs={activitySlugs}
        blogSlugs={blogSlugs}
      />
      <main id="main" className="overflow-x-clip pt-16 sm:pt-20">
        {children}
      </main>
      <Footer locale={typedLocale} dict={dict} />
      <DeferredChromeWidgets locale={typedLocale} />
      {/* <StickyContactBar locale={typedLocale} dict={dict} /> */}
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-14 sm:hidden" aria-hidden />
    </AppDocument>
  );
}
