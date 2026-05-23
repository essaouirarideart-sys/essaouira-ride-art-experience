"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Activity as ActivityIc,
  Users,
  Baby,
  Check,
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { ActivityCard } from "@/components/ui/ActivityCard";
import { ActivityIcon } from "@/components/ui/ActivityIcon";
import { ActivityBookingSection } from "@/components/ui/ActivityBookingSection";
import { InlineBookingForm } from "@/components/ui/InlineBookingForm";
import { ActivityVideoReel } from "@/components/ui/ActivityVideoReel";
import { ActivityStickyActionBar } from "@/components/ui/ActivityStickyActionBar";
import type { Activity, PricingTier, PricingOption } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";
import { scrollToSection } from "@/lib/scroll";
import {
  buildPackageWhatsAppUrl,
  buildWhatsAppUrl,
  telLink,
} from "@/lib/whatsapp";
import { packageSelectionKey } from "@/components/ui/PricingCardNew";
import {
  premiumPackageSelectionKey,
  premiumPackageToBookingSelection,
} from "@/lib/premiumBooking";
import type { PremiumPackage, PremiumPricingGroup } from "@/data/activities";

interface Props {
  activity: Activity;
  locale: Locale;
  dict: Dictionary;
  related: Activity[];
  galleryImages: Array<{ src: string; alt: string }>;
}

export function ActivityPageClient({ activity, locale, dict, related, galleryImages }: Props) {
  const [selectedPackage, setSelectedPackage] = useState<{
    tier: PricingTier;
    option: PricingOption;
  } | null>(null);
  const [selectedPackageKey, setSelectedPackageKey] = useState<string | null>(null);

  const waGeneric = buildWhatsAppUrl({
    locale,
    activityTitle: activity.title[locale],
  });

  const selectPackage = (tier: PricingTier, option: PricingOption) => {
    setSelectedPackage({ tier, option });
    setSelectedPackageKey(packageSelectionKey(tier.id, option.type));
  };

  const handleReserveWhatsApp = (tier: PricingTier, option: PricingOption) => {
    selectPackage(tier, option);
    const url = buildPackageWhatsAppUrl({
      locale,
      activityTitle: activity.title[locale],
      packageName: tier.name[locale],
      duration: tier.duration[locale],
      optionLabel: option.label[locale],
      price: option.price,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleReserveForm = (tier: PricingTier, option: PricingOption) => {
    selectPackage(tier, option);
    requestAnimationFrame(() => scrollToSection("booking-form"));
  };

  const scrollToPricing = () => {
    scrollToSection("pricing");
  };

  const handlePremiumReserveWhatsApp = (
    group: PremiumPricingGroup,
    pkg: PremiumPackage
  ) => {
    if (!activity.premiumPricing) return;
    const { tier, option } = premiumPackageToBookingSelection(
      group,
      pkg,
      activity.premiumPricing.title
    );
    setSelectedPackage({ tier, option });
    setSelectedPackageKey(premiumPackageSelectionKey(group.id, pkg.id));
    const url = buildPackageWhatsAppUrl({
      locale,
      activityTitle: activity.title[locale],
      packageName: group.title[locale],
      duration:
        pkg.duration?.[locale] ?? activity.premiumPricing.title[locale],
      optionLabel: pkg.name[locale],
      price: pkg.priceEur,
      categoryLabel: activity.premiumPricing.title[locale],
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handlePremiumReserveForm = (
    group: PremiumPricingGroup,
    pkg: PremiumPackage
  ) => {
    if (!activity.premiumPricing) return;
    const { tier, option } = premiumPackageToBookingSelection(
      group,
      pkg,
      activity.premiumPricing.title
    );
    setSelectedPackage({ tier, option });
    setSelectedPackageKey(premiumPackageSelectionKey(group.id, pkg.id));
    requestAnimationFrame(() => scrollToSection("booking-form"));
  };

  return (
    <>
      <ActivityStickyActionBar
        locale={locale}
        dict={dict}
        activityTitle={activity.title[locale]}
        onReserve={scrollToPricing}
      />

      {/* HERO */}
      <section className="relative -mt-16 min-h-[65svh] overflow-hidden sm:-mt-20 sm:min-h-[80svh]">
        <div className="absolute inset-0">
          <Image
            src={activity.heroImage}
            alt={activity.heroImageAlt[locale]}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-bg-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
        </div>

        <div className="container-page relative flex min-h-[65svh] flex-col justify-end pt-24 pb-10 sm:min-h-[80svh] sm:pt-40 sm:pb-16">
          <Link
            href={localizedPath(locale, "activities")}
            className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-ink/70 hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {dict.nav.activities}
          </Link>

          <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-bg-primary/50 px-3 py-1.5 backdrop-blur">
            <ActivityIcon
              icon={activity.icon}
              className="h-3.5 w-3.5 text-gold"
            />
            <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
              {activity.shortTitle[locale]}
            </span>
          </div>

          <h1 className="heading-display text-shadow-cinema mt-4 max-w-4xl text-balance text-ink sm:mt-6">
            {activity.title[locale]}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/80 sm:mt-4 sm:text-lg">
            {activity.tagline[locale]}
          </p>

          {/* Trust indicators */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-ink/90 sm:mt-6 sm:gap-4 sm:text-sm">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-gold text-gold" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold">4.9/5</span>
            </div>
            <span className="text-ink/60">·</span>
            <span className="font-medium">
              {locale === "fr" ? "2500+ clients satisfaits" : "2500+ happy clients"}
            </span>
            <span className="text-ink/60">·</span>
            <span className="font-medium text-gold">
              {locale === "fr" ? "⚡ Réservez à l'avance" : "⚡ Book in advance"}
            </span>
          </div>

          <div
            id="activity-hero-ctas"
            className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3"
          >
            <button
              type="button"
              onClick={scrollToPricing}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-xs font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold sm:px-8 sm:py-4 sm:text-sm"
            >
              {locale === "fr" ? "Réserver" : "Book Now"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </button>
            <a
              href={waGeneric}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-4 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#128C7E] hover:border-[#128C7E] sm:px-6 sm:py-4 sm:text-sm"
            >
               <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
              WhatsApp
            </a>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/40 px-4 py-3 text-xs font-medium text-ink backdrop-blur-md hover:border-gold hover:text-gold sm:px-6 sm:py-4 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {dict.cta.callNow}
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW + KEY DETAILS */}
      <section className="border-y border-border bg-bg-card/40 py-12 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 sm:gap-14 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <span className="eyebrow">
                {locale === "fr" ? "L'expérience" : "The experience"}
              </span>
              <h2 className="heading-section mt-5 text-balance text-ink">
                {activity.tagline[locale]}
              </h2>
              <div className="mt-5 space-y-4 text-sm text-ink-muted leading-relaxed sm:mt-8 sm:space-y-5 sm:text-lg">
                {activity.longDescription[locale].map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-bg-card p-7">
                <h3 className="font-display text-lg text-ink">
                  {locale === "fr" ? "En un coup d'œil" : "At a glance"}
                </h3>
                <ul className="mt-6 grid grid-cols-2 gap-5">
                  {[
                    {
                      icon: Clock,
                      label: dict.activities.duration,
                      value: activity.duration[locale],
                    },
                    {
                      icon: ActivityIc,
                      label: dict.activities.difficulty,
                      value: dict.activities.difficultyLevels[activity.difficulty],
                    },
                    {
                      icon: Baby,
                      label: dict.activities.minAge,
                      value: `${activity.minAge}+`,
                    },
                    {
                      icon: Users,
                      label: dict.activities.groupSize,
                      value: activity.groupSize[locale],
                    },
                  ].map((item, i) => {
                    const Ico = item.icon;
                    return (
                      <li key={i} className="flex flex-col gap-1.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-gold">
                          <Ico className="h-3.5 w-3.5" strokeWidth={1.7} />
                        </span>
                        <span className="text-[10px] uppercase tracking-widest2 text-ink-dim">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium text-ink">
                          {item.value}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                    {dict.activities.includes}
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {activity.includes[locale].map((inc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-ink/90"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          strokeWidth={2.5}
                        />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SEO CONTENT */}
      {activity.seoContent && (
        <section className="border-y border-border bg-bg-card/30 py-12 sm:py-20 lg:py-24">
          <Container>
            <div className="prose prose-invert max-w-4xl mx-auto">
              <h2 className="heading-section text-ink mb-8">
                {locale === "fr" 
                  ? `Tout savoir sur ${activity.title[locale].toLowerCase()}`
                  : `Everything about ${activity.title[locale].toLowerCase()}`
                }
              </h2>
              <div className="space-y-6 text-base leading-relaxed text-ink-muted">
                {activity.seoContent[locale].map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* GALLERY */}
      <section className="py-12 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow={dict.activities.galleryTitle}
            title={
              locale === "fr"
                ? "Des images, pas des promesses."
                : "Real images, not promises."
            }
          />
          <div className="mt-8 sm:mt-12">
            <ImageGallery images={galleryImages} />
          </div>
        </Container>
      </section>

      {/* VIDEO REELS */}
      {activity.videoReels && activity.videoReels.length > 0 && (
        <section className="border-t border-border py-12 sm:py-20 lg:py-24">
          <Container>
            <SectionHeading
              eyebrow={locale === "fr" ? "Vidéos" : "Videos"}
              title={
                locale === "fr"
                  ? "Vivez l'expérience en vidéo"
                  : "Experience it in video"
              }
            />
            <div className="mt-8 sm:mt-12 flex justify-center gap-4 sm:gap-6">
              {activity.videoReels.map((reel, index) => (
                <div key={index} className="w-40 sm:w-48 lg:w-56">
                  <ActivityVideoReel reel={reel} locale={locale} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* BOOKING SECTION */}
      <ActivityBookingSection
        activity={activity}
        locale={locale}
        dict={dict}
        selectedPackageKey={selectedPackageKey}
        onReserveWhatsApp={handleReserveWhatsApp}
        onReserveForm={handleReserveForm}
        onPremiumReserveWhatsApp={
          activity.premiumPricing ? handlePremiumReserveWhatsApp : undefined
        }
        onPremiumReserveForm={
          activity.premiumPricing ? handlePremiumReserveForm : undefined
        }
      />

      {/* INLINE BOOKING FORM */}
      <InlineBookingForm
        activity={activity}
        locale={locale}
        prefilledData={selectedPackage}
      />

      {/* FAQ */}
      <section className="py-12 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title={dict.activities.faqTitle}
            align="center"
          />
          <div className="mx-auto mt-8 max-w-3xl sm:mt-12">
            <FAQAccordion
              items={activity.faq.map((q) => ({
                question: q.question[locale],
                answer: q.answer[locale],
              }))}
            />
          </div>
        </Container>
      </section>

      {/* RELATED ACTIVITIES */}
      {related.length > 0 && (
        <section className="border-t border-border py-12 sm:py-20 lg:py-24">
          <Container>
            <SectionHeading
              eyebrow={dict.activities.relatedTitle}
              title={
                locale === "fr"
                  ? "Découvrez aussi"
                  : "Discover also"
              }
            />
            <div className="mt-8 grid auto-rows-fr items-stretch gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {related.map((a, i) => (
                <div key={a.id} className="h-full">
                  <ActivityCard
                    activity={a}
                    locale={locale}
                    dict={dict}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
