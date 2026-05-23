"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Users } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * VIDEO BACKGROUND INSTRUCTIONS:
 * 
 * Option 1: YouTube embed (recommended)
 *   Replace HERO_VIDEO_ID with your YouTube video ID.
 *   Example: "dQw4w9WgXcQ" from https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * 
 * Option 2: Local/hosted video
 *   Replace the iframe with a <video> tag and set src to your video URL.
 *   Example: <video src="/videos/hero.mp4" ... />
 * 
 * Option 3: Vimeo
 *   Use: `https://player.vimeo.com/video/VIDEO_ID?background=1&autoplay=1&loop=1&muted=1`
 */
const HERO_VIDEO_ID = "t2qTFxZn4Y4"; // TODO: Replace with your YouTube video ID
const FALLBACK_IMG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=80&auto=format";

export function HeroVideo({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const hasVideo = HERO_VIDEO_ID.length > 0;

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Video / Image Background */}
      <div className="absolute inset-0">
        {hasVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              border: "none",
              width: "100vw",
              height: "56.25vw", /* 16:9 aspect ratio */
              minHeight: "100vh",
              minWidth: "177.78vh", /* 16:9 aspect ratio inverse */
            }}
            allow="autoplay; encrypted-media"
            onLoad={() => setVideoLoaded(true)}
            title="Hero background video"
          />
        ) : (
          <div
            className="absolute inset-0 animate-slow-zoom bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${FALLBACK_IMG})` }}
          />
        )}

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-bg-primary/60" />
        <div className="absolute inset-0 bg-gradient-radial-sunset opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-page absolute inset-0 flex flex-col justify-center py-14 sm:py-16 lg:py-20">
        <div className="max-w-2xl sm:max-w-3xl lg:max-w-[40rem]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-bg-primary/40 px-3.5 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse sm:h-2 sm:w-2" />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold sm:text-xs">
            {locale === "fr" ? "Essaouira, Maroc" : "Essaouira, Morocco"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="heading-hero text-shadow-cinema mt-4 text-balance text-ink sm:mt-5"
        >
          {locale === "fr" ? (
            <>
              Vivez les <span className="text-gold">meilleures activités</span>
              <br className="hidden sm:block" /> à Essaouira
            </>
          ) : (
            <>
              Experience the <span className="text-gold">best activities</span>
              <br className="hidden sm:block" /> in Essaouira
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="hero-tagline mt-3 max-w-md text-ink/70 sm:mt-4 sm:max-w-lg"
        >
          {locale === "fr"
            ? "Aventure · Coucher de soleil · Plage · Liberté"
            : "Adventure · Sunset · Beach · Freedom"}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.42 }}
          className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3"
        >
          <Link
            href={localizedPath(locale, "booking")}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold sm:px-8 sm:py-4 sm:text-sm"
          >
            {locale === "fr" ? "Réserver maintenant" : "Book Now"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={localizedPath(locale, "activities")}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-gold/40 bg-bg-primary/30 px-6 py-3.5 text-xs font-bold uppercase tracking-widest2 text-ink backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-bg-primary/50 sm:px-8 sm:py-4 sm:text-sm"
          >
            {locale === "fr" ? "Explorer" : "Explore"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.62 }}
          className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-5"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-ink/90">
              {locale === "fr" ? "4.9/5 · 2500+ avis" : "4.9/5 · 2500+ reviews"}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-ink/80">
            <Award className="h-4 w-4 text-gold" />
            {locale === "fr" ? "#1 Essaouira" : "#1 in Essaouira"}
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-ink/80">
            <Users className="h-4 w-4 text-gold" />
            {locale === "fr" ? "Guides locaux certifiés" : "Certified local guides"}
          </div>
        </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute inset-x-0 bottom-6 hidden justify-center sm:flex"
        >
          <div className="flex flex-col items-center gap-2 text-ink-dim">
            <span className="text-[10px] uppercase tracking-widest2">
              {locale === "fr" ? "Découvrir" : "Discover"}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
