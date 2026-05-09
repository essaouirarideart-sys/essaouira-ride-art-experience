"use client";

import { Zap, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";

interface Props {
  locale: Locale;
  variant?: "limited" | "popular" | "book-ahead";
  className?: string;
}

export function UrgencyBadge({ locale, variant = "limited", className = "" }: Props) {
  const badges = {
    limited: {
      icon: Zap,
      text: {
        fr: "Places limitées disponibles",
        en: "Limited spots available",
      },
      color: "text-gold",
      bg: "bg-gold/10",
      border: "border-gold/30",
    },
    popular: {
      icon: Users,
      text: {
        fr: "Expérience la plus populaire",
        en: "Most popular experience",
      },
      color: "text-gold",
      bg: "bg-gold/10",
      border: "border-gold/30",
    },
    "book-ahead": {
      icon: Clock,
      text: {
        fr: "Réservation à l'avance recommandée",
        en: "Advance booking recommended",
      },
      color: "text-gold",
      bg: "bg-gold/10",
      border: "border-gold/30",
    },
  };

  const badge = badges[variant];
  const Icon = badge.icon;

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center gap-2 rounded-full border ${badge.border} ${badge.bg} px-3 py-1.5 ${className}`}
    >
      <Icon className={`h-3.5 w-3.5 ${badge.color} animate-pulse`} />
      <span className={`text-xs font-semibold uppercase tracking-wider ${badge.color}`}>
        {badge.text[locale]}
      </span>
    </motion.div>
  );
}
