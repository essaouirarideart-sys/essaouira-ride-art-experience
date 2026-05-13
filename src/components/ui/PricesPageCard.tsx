"use client";

import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
        "group relative flex h-full min-h-[420px] flex-col rounded-2xl border overflow-hidden transition-all duration-500",
        tier.highlighted
          ? "border-gold/50 shadow-gold"
          : "border-border hover:border-gold/30"
      )}
    >
      {/* Full-cover background image */}
      {tier.image && (
        <Image
          src={tier.image}
          alt={tier.name[locale]}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      )}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

      {/* Popular badge */}
      {tier.highlighted && (
        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-bg-primary">
          <Sparkles className="h-3 w-3" />
          {dict.prices.popular}
        </div>
      )}

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        {/* Header */}
        <div className="mb-3">
          <h3 className="font-display text-xl text-white">{tier.name[locale]}</h3>
          <p className="mt-1 text-xs uppercase tracking-widest2 text-white/70">
            {tier.duration[locale]}
          </p>
          {tier.description && (
            <p className="mt-2 text-sm text-white/80 leading-relaxed line-clamp-2">
              {tier.description[locale]}
            </p>
          )}
        </div>

        {/* Price Display */}
        <div className="mb-3">
          <span className="font-display text-3xl text-gold">
            {priceRange}
          </span>
          <p className="mt-0.5 text-xs text-white/60">{dict.activities.perPerson}</p>
        </div>

        {/* Options Preview */}
        <div className="space-y-1.5 border-t border-white/20 pt-3 mb-3">
          {tier.options.map((option) => (
            <div
              key={option.type}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-white/70">{option.label[locale]}</span>
              <span className="font-medium text-white">{option.price}€</span>
            </div>
          ))}
        </div>

        {/* Features */}
        {tier.features && (
          <ul className="space-y-1.5 border-t border-white/20 pt-3 mb-4">
            {tier.features[locale].slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Book Button */}
        <Link
          href={`${localizedPath(locale, "activities", activitySlug)}#booking`}
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
            tier.highlighted
              ? "bg-gradient-gold text-bg-primary hover:shadow-gold hover:-translate-y-[1px]"
              : "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:border-gold"
          )}
        >
          {dict.activities.bookThis}
        </Link>
      </div>
    </div>
  );
}
