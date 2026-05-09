"use client";

import { useState } from "react";
import { Check, Sparkles, Zap } from "lucide-react";
import type { PricingTier, PricingOption } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { cn } from "@/lib/utils";

interface Props {
  tier: PricingTier;
  locale: Locale;
  dict: Dictionary;
  activityTitle: string;
  onBook?: (tier: PricingTier, selectedOption: PricingOption) => void;
}

export function PricingCardNew({ tier, locale, dict, activityTitle, onBook }: Props) {
  const [selectedOption, setSelectedOption] = useState<PricingOption>(tier.options[0]);

  const handleBook = () => {
    if (onBook) {
      onBook(tier, selectedOption);
    }
  };

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-5 transition-all duration-500 sm:p-7",
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

      {/* Pricing Options */}
      <div className="py-5 space-y-2">
        {tier.options.map((option) => (
          <button
            key={option.type}
            type="button"
            onClick={() => setSelectedOption(option)}
            className={cn(
              "w-full flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300",
              selectedOption.type === option.type
                ? "border-gold bg-gold/10"
                : "border-border hover:border-gold/40"
            )}
          >
            <span className="text-sm font-medium text-ink">
              {option.label[locale]}
            </span>
            <span className={cn(
              "font-display text-xl",
              selectedOption.type === option.type ? "text-gold" : "text-ink"
            )}>
              {option.price}€
            </span>
          </button>
        ))}
      </div>

      {/* Features */}
      {tier.features && (
        <ul className="flex-1 space-y-2 border-t border-border pt-4">
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
        {tier.highlighted && (
          <div className="mb-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-gold">
            <Zap className="h-3.5 w-3.5 animate-pulse" />
            {locale === "fr" ? "Places limitées" : "Limited spots"}
          </div>
        )}
        <button
          type="button"
          onClick={handleBook}
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 sm:px-6 sm:py-4 sm:text-sm",
            tier.highlighted
              ? "bg-gradient-gold text-bg-primary shadow-lg hover:shadow-gold hover:-translate-y-[2px]"
              : "border-2 border-border text-ink hover:border-gold hover:bg-gold/5"
          )}
        >
          {locale === "fr" ? "Réserver ce forfait" : "Book This Package"}
        </button>
        <div className="mt-3 text-center text-xs text-ink-muted">
          {selectedOption.price}€ · {tier.duration[locale]}
        </div>
      </div>
    </div>
  );
}
