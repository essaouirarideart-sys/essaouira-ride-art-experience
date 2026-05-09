"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Users, Award } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Cloudinary hero image - TODO: Replace with your actual Cloudinary public ID
const CLOUD_NAME = "demo";
const HERO_IMG = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_2400,q_auto,f_auto/samples/landscapes/beach-boat`;

export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative -mt-16 min-h-[100svh] overflow-hidden sm:-mt-20">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt={
            locale === "fr"
              ? "Coucher de soleil cinématographique sur la plage d'Essaouira"
              : "Cinematic sunset over Essaouira beach"
          }
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover"
        />
        {/* Cinematic stack of overlays */}
        <div className="absolute inset-0 bg-bg-primary/40" />
        <div className="absolute inset-0 bg-gradient-radial-sunset" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20 sm:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          {dict.home.heroEyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display text-balance text-shadow-cinema mt-6 max-w-4xl text-ink"
        >
          {dict.home.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/85 sm:text-lg"
        >
          {dict.home.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href={localizedPath(locale, "booking")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold"
          >
            {locale === "fr" ? "Réserver maintenant" : "Book Now"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={buildWhatsAppUrl({ locale })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#128C7E] hover:border-[#128C7E]"
          >
            <MessageCircle className="h-4 w-4" />
            {locale === "fr" ? "WhatsApp Direct" : "WhatsApp Direct"}
          </a>
          <Link
            href={localizedPath(locale, "activities")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/30 px-6 py-4 text-sm font-medium text-ink backdrop-blur-md transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            {dict.home.heroSecondary}
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-8 flex flex-wrap items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-ink">
              {locale === "fr" ? "4.9/5 · 2500+ avis" : "4.9/5 · 2500+ reviews"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-ink">
            <Award className="h-4 w-4 text-gold" />
            {locale === "fr" ? "Top expérience Essaouira" : "Top Essaouira Experience"}
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-ink">
            <Users className="h-4 w-4 text-gold" />
            {locale === "fr" ? "Réservez à l'avance" : "Book in advance"}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute inset-x-0 bottom-8 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-ink-dim">
            <span className="text-[10px] uppercase tracking-widest2">
              {locale === "fr" ? "Faire défiler" : "Scroll"}
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
