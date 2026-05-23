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
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    image: "/og-image.jpg",
    title:
      locale === "fr"
        ? "Activités Essaouira | Horse Riding, Quad, Camel Ride & Art Experience"
        : "Things to Do Essaouira | Horse Riding, Quad Biking, Camel Ride & Art",
    description: 
      locale === "fr"
        ? "Découvrez les meilleures activités à Essaouira : balade à cheval sur la plage, quad dans les dunes, camel ride au coucher du soleil. Réservation en ligne, guides locaux."
        : "Discover the best things to do in Essaouira: beach horse riding, quad biking in dunes, sunset camel ride. Book online with local guides.",
    keywords:
      locale === "fr"
        ? [
            "activités essaouira",
            "que faire essaouira",
            "horse riding essaouira",
            "balade cheval essaouira",
            "quad biking essaouira",
            "quad essaouira",
            "camel ride essaouira",
            "dromadaire essaouira",
            "things to do essaouira",
            "excursion essaouira",
          ]
        : [
            "things to do essaouira",
            "essaouira activities",
            "horse riding essaouira",
            "quad biking essaouira",
            "camel ride essaouira",
            "essaouira tours",
            "best activities essaouira",
            "essaouira excursions",
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
