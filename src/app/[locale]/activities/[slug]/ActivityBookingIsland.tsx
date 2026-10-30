"use client";

import { useState } from "react";
import { ActivityBookingSection } from "@/components/ui/ActivityBookingSection";
import { InlineBookingForm } from "@/components/ui/InlineBookingForm";
import { ActivityStickyActionBar } from "@/components/ui/ActivityStickyActionBar";
import type { Activity, PricingTier, PricingOption } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { scrollToSection } from "@/lib/scroll";
import { buildPackageWhatsAppUrl } from "@/lib/whatsapp";
import { packageSelectionKey } from "@/components/ui/PricingCardNew";
import {
  premiumPackageSelectionKey,
  premiumPackageToBookingSelection,
} from "@/lib/premiumBooking";
import type { PremiumPackage, PremiumPricingGroup } from "@/data/activities";

export function ActivityBookingIsland({
  activity,
  locale,
  dict,
}: {
  activity: Activity;
  locale: Locale;
  dict: Dictionary;
}) {
  const [selectedPackage, setSelectedPackage] = useState<{
    tier: PricingTier;
    option: PricingOption;
  } | null>(null);
  const [selectedPackageKey, setSelectedPackageKey] = useState<string | null>(
    null
  );

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
      <InlineBookingForm
        activity={activity}
        locale={locale}
        prefilledData={selectedPackage}
      />
    </>
  );
}
