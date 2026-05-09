"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Award, Users, Shield, Star, MapPin } from "lucide-react";
import type { Locale } from "@/i18n/config";

const badges = [
  {
    icon: Truck,
    label: { fr: "Transfert hôtel gratuit", en: "Free hotel pick-up" },
    description: { fr: "On vient vous chercher", en: "We come to you" },
  },
  {
    icon: Users,
    label: { fr: "Aucune expérience requise", en: "No experience needed" },
    description: { fr: "Débutants bienvenus", en: "Beginners welcome" },
  },
  {
    icon: Award,
    label: { fr: "Guides certifiés locaux", en: "Certified local guides" },
    description: { fr: "Experts passionnés", en: "Passionate experts" },
  },
  {
    icon: Star,
    label: { fr: "Meilleure expérience", en: "Best experience" },
    description: { fr: "#1 à Essaouira", en: "#1 in Essaouira" },
  },
  {
    icon: Shield,
    label: { fr: "Sécurité garantie", en: "Safety guaranteed" },
    description: { fr: "Équipement pro", en: "Pro equipment" },
  },
  {
    icon: MapPin,
    label: { fr: "Spots secrets", en: "Secret spots" },
    description: { fr: "Hors des sentiers battus", en: "Off the beaten path" },
  },
];

export function TrustBadges({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="border-y border-border bg-bg-card/30 py-8 sm:py-12 lg:py-16">
      <div className="container-page">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:grid-cols-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label.en}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold sm:h-12 sm:w-12">
                <badge.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="mt-2 text-[11px] font-semibold text-ink sm:mt-3 sm:text-sm">
                {badge.label[locale]}
              </h3>
              <p className="mt-0.5 hidden text-xs text-ink-muted sm:block">
                {badge.description[locale]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
