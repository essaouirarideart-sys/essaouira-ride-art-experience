import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppChatWidget } from "@/components/ui/WhatsAppChatWidget";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { StickyContactBar } from "@/components/ui/StickyContactBar";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { siteJsonLdGraph } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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

  return (
    <>
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
      <Header locale={typedLocale} dict={dict} />
      <main id="main" className="overflow-x-clip pt-16 sm:pt-20">
        {children}
      </main>
      <Footer locale={typedLocale} dict={dict} />
      <WhatsAppChatWidget locale={typedLocale} />
      <ScrollToTop locale={typedLocale} />
      {/* <StickyContactBar locale={typedLocale} dict={dict} /> */}
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-14 sm:hidden" aria-hidden />
    </>
  );
}
