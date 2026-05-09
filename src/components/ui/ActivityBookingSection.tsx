"use client";

import { Check } from "lucide-react";
import type { Activity, PricingTier, PricingOption } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { PricingCardNew } from "./PricingCardNew";

interface Props {
  activity: Activity;
  locale: Locale;
  dict: Dictionary;
  onSelectPackage: (tier: PricingTier, option: PricingOption) => void;
}

export function ActivityBookingSection({ activity, locale, dict, onSelectPackage }: Props) {
  const handleSelectPackage = (tier: PricingTier, option: PricingOption) => {
    onSelectPackage(tier, option);
  };


  return (
    <section className="py-10 sm:py-16 lg:py-20 border-t border-border" id="booking">
      <div className="container-page">
        <div className="mb-7 sm:mb-10">
          <span className="eyebrow">
            {locale === "fr" ? "Réservation" : "Booking"}
          </span>
          <h2 className="heading-section mt-4 text-ink">
            {locale === "fr" ? "Choisissez votre forfait" : "Choose your package"}
          </h2>
          <p className="mt-3 text-ink-muted max-w-2xl">
            {locale === "fr"
              ? "Sélectionnez un forfait et réservez directement via WhatsApp. Transfert hôtel gratuit inclus."
              : "Select a package and book directly via WhatsApp. Free hotel pick-up included."}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activity.pricing.map((tier) => (
            <PricingCardNew
              key={tier.id}
              tier={tier}
              locale={locale}
              dict={dict}
              activityTitle={activity.title[locale]}
              onBook={handleSelectPackage}
            />
          ))}
        </div>

        {/* Free Hotel Pick-up Banner */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gold/30 bg-bg-card/50 p-4 text-center sm:mt-8 sm:gap-6 sm:p-5">
          <div className="flex items-center gap-2 text-sm text-ink">
            <Check className="h-4 w-4 text-gold" />
            <span>{locale === "fr" ? "Transfert hôtel gratuit" : "Free hotel pick-up"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-ink">
            <Check className="h-4 w-4 text-gold" />
            <span>{locale === "fr" ? "Aucune expérience requise" : "No experience needed"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-ink">
            <Check className="h-4 w-4 text-gold" />
            <span>{locale === "fr" ? "Confirmation WhatsApp" : "WhatsApp confirmation"}</span>
          </div>
        </div>
      </div>

    </section>
  );
}
