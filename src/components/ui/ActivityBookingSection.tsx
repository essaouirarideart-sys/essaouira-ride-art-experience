"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type {
  Activity,
  PremiumPackage,
  PremiumPricingGroup,
  PricingTier,
  PricingOption,
} from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { PremiumHorsePricingSection } from "./PremiumHorsePricingSection";
import { PricingCardNew } from "./PricingCardNew";

interface Props {
  activity: Activity;
  locale: Locale;
  dict: Dictionary;
  selectedPackageKey: string | null;
  onReserveWhatsApp: (tier: PricingTier, option: PricingOption) => void;
  onReserveForm: (tier: PricingTier, option: PricingOption) => void;
  onPremiumReserveWhatsApp?: (
    group: PremiumPricingGroup,
    pkg: PremiumPackage
  ) => void;
  onPremiumReserveForm?: (
    group: PremiumPricingGroup,
    pkg: PremiumPackage
  ) => void;
}

export function ActivityBookingSection({
  activity,
  locale,
  dict,
  selectedPackageKey,
  onReserveWhatsApp,
  onReserveForm,
  onPremiumReserveWhatsApp,
  onPremiumReserveForm,
}: Props) {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-t border-border py-10 sm:py-16 lg:py-20 sm:scroll-mt-28"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 sm:mb-10"
        >
          <span className="eyebrow">
            {locale === "fr" ? "Tarifs & formules" : "Pricing & packages"}
          </span>
          <h2 className="heading-section mt-4 text-ink">
            {locale === "fr" ? "Choisissez votre formule" : "Choose your package"}
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            {locale === "fr"
              ? "Comparez les offres, puis confirmez par WhatsApp ou via le formulaire — transfert hôtel gratuit inclus."
              : "Compare packages, then confirm via WhatsApp or the form — free hotel pick-up included."}
          </p>
        </motion.div>

        <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest2 text-ink-dim">
          {locale === "fr" ? "Balades & sorties" : "Rides & outings"}
        </p>
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activity.pricing.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <PricingCardNew
                tier={tier}
                locale={locale}
                dict={dict}
                selectedPackageKey={selectedPackageKey}
                onReserveWhatsApp={onReserveWhatsApp}
                onReserveForm={onReserveForm}
              />
            </motion.div>
          ))}
        </div>

        {activity.premiumPricing &&
          onPremiumReserveWhatsApp &&
          onPremiumReserveForm && (
            <PremiumHorsePricingSection
              category={activity.premiumPricing}
              locale={locale}
              dict={dict}
              selectedPackageKey={selectedPackageKey}
              onReserveWhatsApp={onPremiumReserveWhatsApp}
              onReserveForm={onPremiumReserveForm}
            />
          )}

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
            <span>{locale === "fr" ? "Confirmation rapide" : "Fast confirmation"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
