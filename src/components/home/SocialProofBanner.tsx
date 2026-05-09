"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Star, ThumbsUp } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { happyClientsCount } from "@/data/testimonials";

export function SocialProofBanner({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: { fr: "Clients satisfaits", en: "Happy clients" },
    },
    {
      icon: Star,
      value: "4.9/5",
      label: { fr: "Note moyenne", en: "Average rating" },
    },
    {
      icon: ThumbsUp,
      value: "98%",
      label: { fr: "Recommandent", en: "Recommend us" },
    },
  ];

  return (
    <div ref={ref} className="border-y border-gold/20 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 py-6 sm:py-8">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label.en}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold sm:h-10 sm:w-10">
                <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <div className="font-display text-xl text-gold sm:text-2xl">{stat.value}</div>
                <div className="text-[11px] text-ink-muted sm:text-xs">{stat.label[locale]}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
