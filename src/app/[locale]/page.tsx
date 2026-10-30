import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { HeroVideo } from "@/components/home/HeroVideo";
import { TrustBadges } from "@/components/home/TrustBadges";
import { VideoReels } from "@/components/home/VideoReels";
import { ActivitiesPremium } from "@/components/home/ActivitiesPremium";
import { SocialProofBanner } from "@/components/home/SocialProofBanner";
import { WhyUs } from "@/components/home/WhyUs";
import { ExperienceStory } from "@/components/home/ExperienceStory";
import { PricingPreview } from "@/components/home/PricingPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

const Testimonials = dynamic(
  () =>
    import("@/components/home/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  {
    ssr: true,
    loading: () => <div className="min-h-[28rem]" aria-hidden />,
  }
);
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
      ? "Essaouira Ride & Art | Cheval, Quad, Dromadaire & Art à Diabat"
      : "Essaouira Ride & Art | Horse, Quad, Camel & Art in Diabat";

  return buildMetadata({
    locale,
    image: site.defaultOgImage,
    title: { absolute: homeTitle },
    description:
      locale === "fr"
        ? "Essaouira Ride & Art Experience à Diabat : balades à cheval, quad, dromadaire et atelier art. Transfert hôtel gratuit. Réservez auprès de l'équipe locale."
        : "Essaouira Ride & Art Experience in Diabat: horse riding, quad biking, camel rides and art workshop. Free hotel pick-up. Book with the local team.",
    keywords:
      locale === "fr"
        ? [
            "essaouira ride art",
            "essaouira ride & art",
            "diabat essaouira",
            "guides locaux essaouira",
            "réserver activité essaouira",
          ]
        : [
            "essaouira ride art",
            "essaouira ride and art",
            "diabat essaouira",
            "local guides essaouira",
            "book essaouira experience",
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
      <HeroVideo locale={typedLocale} />

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
    </>
  );
}
