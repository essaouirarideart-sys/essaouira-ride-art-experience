"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryItems, galleryCategories, type GalleryItem } from "@/data/gallery";
import type { Locale } from "@/i18n/config";

export function GalleryWithFilters({ locale }: { locale: Locale }) {
  const [activeCategory, setActiveCategory] = useState<GalleryItem["category"] | "all">("all");
  const [active, setActive] = useState<number | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((img) => img.category === activeCategory);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % filteredImages.length));
  }, [filteredImages.length]);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? null : (i - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-7 sm:gap-2 sm:mb-10">
        {galleryCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategory(cat.key);
              setActive(null);
            }}
            className={cn(
              "rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm",
              activeCategory === cat.key
                ? "bg-gradient-gold text-bg-primary"
                : "border border-border text-ink hover:border-gold hover:text-gold"
            )}
          >
            {cat.label[locale]}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <motion.div
        layout
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 lg:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, i) => (
            <motion.button
              key={`${img.src}-${i}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-gold",
                i % 7 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt[locale]}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/90 text-bg-primary">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </div>
              {/* <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium text-ink truncate">{img.alt[locale]}</p>
              </div> */}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-bg-primary/95 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card text-ink hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-card text-ink hover:border-gold hover:text-gold sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-card text-ink hover:border-gold hover:text-gold sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-[92vw] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[active].src}
                alt={filteredImages[active].alt[locale]}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-bg-card/80 px-4 py-1.5 text-xs text-ink-muted backdrop-blur">
                {filteredImages[active].alt[locale]} · {active + 1} / {filteredImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
