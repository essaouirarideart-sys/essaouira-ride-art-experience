import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroVideo } from "@/components/home/HeroVideo";
import { TrustBadges } from "@/components/home/TrustBadges";
import { VideoReels } from "@/components/home/VideoReels";
import { ActivitiesPremium } from "@/components/home/ActivitiesPremium";
import { SocialProofBanner } from "@/components/home/SocialProofBanner";
import { WhyUs } from "@/components/home/WhyUs";
import { ExperienceStory } from "@/components/home/ExperienceStory";
import { PricingPreview } from "@/components/home/PricingPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { StickyBookingCTA } from "@/components/ui/StickyBookingCTA";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const homeTitle =
    locale === "fr"
      ? "Activités Essaouira | Quad, Cheval, Dromadaire — Dès 20€"
      : "Essaouira Activities | Horse, Quad, Camel Tours — From €20";

  return buildMetadata({
    locale,
    image: site.defaultOgImage,
    title: { absolute: homeTitle },
    description:
      locale === "fr"
        ? "Que faire à Essaouira ? Quad dès 30€, cheval sur la plage dès 20€, dromadaire sunset dès 20€. Guides locaux à Diabat, transfert gratuit. Réservez vos tours."
        : "Things to do in Essaouira: quad from €30, beach horse riding from €20, sunset camel from €20. Local guides in Diabat, free pick-up. Book Essaouira tours.",
    keywords:
      locale === "fr"
        ? [
            "activités essaouira",
            "activités à essaouira",
            "que faire à essaouira",
            "excursions essaouira",
            "quad essaouira",
            "balade à cheval essaouira",
            "dromadaire essaouira",
          ]
        : [
            "essaouira activities",
            "activities essaouira",
            "things to do in essaouira",
            "essaouira tours",
            "best activities in essaouira",
            "outdoor activities essaouira",
          ],
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <>
      {/* 1. Cinematic Hero with Video Background */}
      <HeroVideo locale={typedLocale} dict={dict} />

      {/* 2. Trust Badges Strip */}
      <TrustBadges locale={typedLocale} />

      {/* 3. Video Reels */}
      <VideoReels locale={typedLocale} />

      {/* 4. Premium Activities */}
      <ActivitiesPremium locale={typedLocale} />

      {/* 5. Social Proof Stats */}
      <SocialProofBanner locale={typedLocale} />

      {/* 6. Why Choose Us */}
      <WhyUs locale={typedLocale} dict={dict} />

      {/* 7. Experience Storytelling */}
      <ExperienceStory locale={typedLocale} />

      {/* 8. Pricing Preview */}
      <PricingPreview locale={typedLocale} />

      {/* 9. Gallery Preview */}
      <GalleryPreview locale={typedLocale} />

      {/* 10. Testimonials */}
      <Testimonials locale={typedLocale} dict={dict} />

      {/* 11. Final CTA */}
      <FinalCTA locale={typedLocale} />

      {/* Persistent CTAs */}
      {/* <StickyBookingCTA locale={typedLocale} /> */}
      {/* <WhatsAppButton locale={typedLocale} /> */}
    </>
  );
}
