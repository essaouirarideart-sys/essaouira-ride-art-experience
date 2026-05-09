"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { activities } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";

export function PricingPreview({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Pick the highlighted tier from the first 3 activities
  const previewCards = activities.slice(0, 3).map((activity) => {
    const highlighted =
      activity.pricing.find((t) => t.highlighted) || activity.pricing[0];
    const lowestPrice = Math.min(...highlighted.options.map((o) => o.price));
    return {
      id: activity.id,
      name: activity.shortTitle[locale],
      tier: highlighted.name[locale],
      duration: highlighted.duration[locale],
      price: lowestPrice,
      features: highlighted.features?.[locale]?.slice(0, 4) || [],
      slug: activity.slug[locale],
      icon: activity.icon,
    };
  });

  return (
    <section ref={ref} className="relative py-14 sm:py-24 lg:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-14"
        >
          <span className="eyebrow">
            {locale === "fr" ? "Tarifs" : "Pricing"}
          </span>
          <h2 className="heading-section mt-4 text-ink">
            {locale === "fr"
              ? "Des prix accessibles, des souvenirs inestimables"
              : "Affordable prices, priceless memories"}
          </h2>
          <p className="mt-4 text-ink-muted max-w-xl mx-auto">
            {locale === "fr"
              ? "Transfert hôtel gratuit inclus. Aucune carte requise à la réservation."
              : "Free hotel pick-up included. No card required at booking."}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
          {previewCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link
                href={localizedPath(locale, "activities", card.slug)}
                className="group flex flex-col h-full rounded-2xl border border-border bg-bg-card p-5 transition-all duration-500 hover:border-gold/40 hover:shadow-2xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-ink group-hover:text-gold transition-colors">
                    {card.name}
                  </h3>
                  <div className="rounded-full bg-gold/10 px-3 py-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      {card.tier}
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-xs text-ink-muted">{card.duration}</p>

                <div className="mt-4 flex items-baseline gap-1 sm:mt-6">
                  <span className="font-display text-3xl text-gold sm:text-4xl">
                    {card.price}
                  </span>
                  <span className="text-sm text-ink-muted">€</span>
                  <span className="ml-1 text-xs text-ink-dim">
                    / {locale === "fr" ? "pers." : "pp"}
                  </span>
                </div>

                {card.features.length > 0 && (
                  <ul className="mt-4 space-y-2 flex-1 sm:mt-6 sm:space-y-2.5">
                    {card.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-ink/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 pt-4 border-t border-border">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                    {locale === "fr" ? "Voir les détails" : "View details"}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex justify-center sm:mt-12"
        >
          <Link
            href={localizedPath(locale, "prices")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold"
          >
            {locale === "fr" ? "Voir tous les tarifs" : "See all prices"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
