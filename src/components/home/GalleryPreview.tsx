"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Expand, Camera } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";

export function GalleryPreview({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Take 8 images for the preview grid
  const preview = galleryItems.slice(0, 8);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-card/50 to-bg-primary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container-page relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <Camera className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              {locale === "fr" ? "Galerie" : "Gallery"}
            </span>
          </div>
          <h2 className="heading-section text-ink max-w-2xl mx-auto">
            {locale === "fr"
              ? "Capturez l'instant, gardez le souvenir"
              : "Capture the moment, keep the memory"}
          </h2>
          <p className="mt-4 text-ink-muted max-w-xl mx-auto">
            {locale === "fr"
              ? "Chaque aventure mérite d'être immortalisée. Découvrez les moments magiques de nos clients."
              : "Every adventure deserves to be captured. Discover the magical moments of our clients."}
          </p>
        </motion.div>

        {/* Modern Bento Grid */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
          {preview.map((item, i) => {
            // Define grid spans for bento layout
            const gridClasses = [
              "col-span-6 sm:col-span-4 row-span-2", // Large left
              "col-span-6 sm:col-span-4 row-span-1", // Top middle
              "col-span-6 sm:col-span-4 row-span-1", // Top right
              "col-span-6 sm:col-span-4 row-span-1", // Middle
              "col-span-6 sm:col-span-4 row-span-2", // Large right
              "col-span-6 sm:col-span-4 row-span-1", // Bottom left
              "col-span-6 sm:col-span-4 row-span-1", // Bottom middle
              "col-span-12 sm:col-span-4 row-span-1", // Bottom full/right
            ][i] || "col-span-6 sm:col-span-4 row-span-1";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${gridClasses}`}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.alt[locale]}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.1)]" />

                {/* Content overlay */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col justify-end p-4"
                    >
                      {/* <p className="text-sm font-medium text-white drop-shadow-lg line-clamp-2">
                        {item.alt[locale]}
                      </p> */}
                      {item.category && (
                        <span className="mt-1 text-xs text-gold font-semibold uppercase tracking-wider">
                          {item.category}
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4 text-white" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gold/20 rotate-45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-center"
        >
          <div>
            <span className="block text-2xl sm:text-3xl font-display text-gold">500+</span>
            <span className="text-xs uppercase tracking-widest text-ink-muted">
              {locale === "fr" ? "Photos partagées" : "Photos shared"}
            </span>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block" />
          <div>
            <span className="block text-2xl sm:text-3xl font-display text-gold">4.9★</span>
            <span className="text-xs uppercase tracking-widest text-ink-muted">
              {locale === "fr" ? "Note moyenne" : "Average rating"}
            </span>
          </div>
          <div className="h-8 w-px bg-border hidden sm:block" />
          <div>
            <span className="block text-2xl sm:text-3xl font-display text-gold">100%</span>
            <span className="text-xs uppercase tracking-widest text-ink-muted">
              {locale === "fr" ? "Souvenirs garantis" : "Memories guaranteed"}
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href={localizedPath(locale, "gallery")}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-gold transition-all duration-300 hover:bg-gold hover:text-bg-primary hover:shadow-gold"
          >
            {locale === "fr" ? "Explorer la galerie complète" : "Explore full gallery"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
