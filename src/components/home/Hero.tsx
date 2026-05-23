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
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
