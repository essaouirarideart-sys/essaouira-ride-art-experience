import type {
  PremiumPackage,
  PremiumPricingGroup,
  PricingOption,
  PricingTier,
} from "@/data/activities";

export function premiumPackageSelectionKey(
  groupId: string,
  packageId: string
): string {
  return `premium-${groupId}-${packageId}`;
}

export function premiumPackageToBookingSelection(
  group: PremiumPricingGroup,
  pkg: PremiumPackage,
  categoryTitle: { fr: string; en: string }
): { tier: PricingTier; option: PricingOption } {
  const option: PricingOption = {
    type: "standard",
    label: pkg.name,
    price: pkg.priceEur,
  };

  return {
    tier: {
      id: `premium-${group.id}`,
      name: group.title,
      duration: pkg.duration ?? categoryTitle,
      description: group.subtitle,
      options: [option],
    },
    option,
  };
}
