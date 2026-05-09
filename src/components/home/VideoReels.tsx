"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import type { Locale } from "@/i18n/config";

/**
 * VIDEO REELS INSTRUCTIONS:
 * 
 * To replace with your YouTube videos:
 * 1. Find the video ID from the YouTube URL (e.g., "dQw4w9WgXcQ")
 * 2. Replace the `youtubeId` field below
 * 3. Replace `thumbnail` with a real thumbnail URL or use:
 *    `https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg`
 */
const REELS = [
  {
    id: "reel-1",
    youtubeId: "", // TODO: Replace with YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: {
      fr: "Galop au coucher du soleil",
      en: "Sunset gallop on the beach",
    },
  },
  {
    id: "reel-2",
    youtubeId: "", // TODO: Replace with YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
    title: {
      fr: "Aventure quad dans les dunes",
      en: "Quad adventure in the dunes",
    },
  },
  {
    id: "reel-3",
    youtubeId: "", // TODO: Replace with YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80",
    title: {
      fr: "Caravane face à l'océan",
      en: "Camel caravan facing the ocean",
    },
  },
];

export function VideoReels({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section ref={ref} className="relative py-14 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 sm:mb-14"
          >
            <span className="eyebrow">
              {locale === "fr" ? "Nos vidéos" : "See the experience"}
            </span>
            <h2 className="heading-section mt-4 text-ink">
              {locale === "fr"
                ? "Ressentez l'aventure"
                : "Feel the adventure"}
            </h2>
          </motion.div>

          <div className="relative -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide">
              {REELS.map((reel, i) => (
                <motion.button
                  key={reel.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  onClick={() => {
                    if (reel.youtubeId) setActiveVideo(reel.youtubeId);
                  }}
                  className="group relative flex-shrink-0 w-[75vw] sm:w-[45vw] lg:w-[30vw] xl:w-[22vw] aspect-[9/14] sm:aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-2xl snap-start"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${reel.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-bg-primary shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gold">
                      <Play className="h-7 w-7 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm font-semibold text-ink text-left leading-tight">
                      {reel.title[locale]}
                    </p>
                  </div>

                  {/* Reel indicator */}
                  <div className="absolute top-4 right-4 rounded-full bg-bg-primary/60 px-3 py-1 backdrop-blur-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      Reel
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary/95 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title="Video"
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary/80 text-ink backdrop-blur-sm hover:bg-bg-primary hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
