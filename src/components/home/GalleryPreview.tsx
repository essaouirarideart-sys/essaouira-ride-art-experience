"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";

export function GalleryPreview({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Take 6 images for the preview grid
  const preview = galleryItems.slice(0, 6);

  return (
    <section
      ref={ref}
      className="relative border-y border-border bg-bg-card/30 py-24 sm:py-32"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="eyebrow">
            {locale === "fr" ? "Galerie" : "Gallery"}
          </span>
          <h2 className="heading-section mt-4 text-ink">
            {locale === "fr"
              ? "Des images qui parlent d'elles-mêmes"
              : "Images that speak for themselves"}
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {preview.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-xl border border-border transition-all duration-500 hover:border-gold/40 hover:shadow-xl ${
                i === 0 ? "row-span-2 aspect-[3/4] sm:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt[locale]}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-bg-primary/0 transition-colors duration-500 group-hover:bg-bg-primary/20" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href={localizedPath(locale, "gallery")}
            className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium uppercase tracking-widest2 text-ink transition-all duration-300 hover:border-gold hover:text-gold"
          >
            {locale === "fr" ? "Voir toute la galerie" : "View full gallery"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
