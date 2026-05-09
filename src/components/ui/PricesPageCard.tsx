"use client";

import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import type { PricingTier } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { cn } from "@/lib/utils";
import { localizedPath } from "@/lib/paths";

interface Props {
  tier: PricingTier;
  locale: Locale;
  dict: Dictionary;
  activitySlug: string;
}

export function PricesPageCard({ tier, locale, dict, activitySlug }: Props) {
  const lowestPrice = Math.min(...tier.options.map(o => o.price));
  const highestPrice = Math.max(...tier.options.map(o => o.price));
  const priceRange = lowestPrice === highestPrice 
    ? `${lowestPrice}€` 
    : `${lowestPrice}€ - ${highestPrice}€`;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-500",
        tier.highlighted
          ? "border-gold/50 bg-gradient-to-b from-bg-elevated to-bg-card shadow-gold"
          : "border-border bg-bg-card hover:border-gold/30"
      )}
    >
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-bg-primary">
          <Sparkles className="h-3 w-3" />
          {dict.prices.popular}
        </div>
      )}

      <div className="border-b border-border pb-4">
        <h3 className="font-display text-xl text-ink">{tier.name[locale]}</h3>
        <p className="mt-1 text-xs uppercase tracking-widest2 text-ink-dim">
          {tier.duration[locale]}
        </p>
        {tier.description && (
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">
            {tier.description[locale]}
          </p>
        )}
      </div>

      {/* Price Display */}
      <div className="py-5">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-3xl text-gold">
            {priceRange}
          </span>
        </div>
        <p className="mt-1 text-xs text-ink-dim">{dict.activities.perPerson}</p>
      </div>

      {/* Options Preview */}
      <div className="space-y-2 border-t border-border pt-4">
        {tier.options.map((option) => (
          <div
            key={option.type}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-ink-muted">{option.label[locale]}</span>
            <span className="font-medium text-ink">{option.price}€</span>
          </div>
        ))}
      </div>

      {/* Features */}
      {tier.features && (
        <ul className="flex-1 space-y-2 border-t border-border pt-4 mt-4">
          {tier.features[locale].map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink/90">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Book Button */}
      <div className="mt-5">
        <Link
          href={`${localizedPath(locale, "activities", activitySlug)}#booking`}
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
            tier.highlighted
              ? "bg-gradient-gold text-bg-primary hover:shadow-gold hover:-translate-y-[1px]"
              : "border border-border text-ink hover:border-gold hover:text-gold"
          )}
        >
          {dict.activities.bookThis}
        </Link>
      </div>
    </div>
  );
}
