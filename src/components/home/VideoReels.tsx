"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    youtubeId: "9zWJt-xE2eA", // TODO: Replace with YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: {
      fr: "Galop au coucher du soleil",
      en: "Sunset gallop on the beach",
    },
  },
  {
    id: "reel-2",
    youtubeId: "tkkUeHMF9iI", // TODO: Replace with YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
    title: {
      fr: "Aventure quad dans les dunes",
      en: "Quad adventure in the dunes",
    },
  },
  {
    id: "reel-3",
    youtubeId: "HsuI-AMHVb0", // TODO: Replace with YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80",
    title: {
      fr: "Caravane face à l'ocean",
      en: "Camel caravan facing the ocean",
    },
  },
  {
    id: "reel-4",
    youtubeId: "dItdB50RPvA", // TODO: Replace with YouTube video ID
    thumbnail: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80",
    title: {
      fr: "Caravane face à l'ocean",
      en: "Camel caravan facing the ocean",
    },
  },
];

function VideoCard({
  reel,
  locale,
  index,
  isInView,
}: {
  reel: (typeof REELS)[number];
  locale: Locale;
  index: number;
  isInView: boolean;
}) {
  const hasVideo = reel.youtubeId.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative flex-shrink-0 w-[75vw] sm:w-[45vw] lg:w-[30vw] xl:w-[22vw] aspect-[9/14] sm:aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-2xl snap-start"
    >
      {hasVideo ? (
        <>
          {/* Autoplaying muted YouTube embed */}
          <iframe
            src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&muted=1&mute=1&loop=1&playlist=${reel.youtubeId}&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&vq=hd1080&hd=1`}
            className="absolute inset-0 h-[140%] w-[140%] -translate-x-[20%] -translate-y-[20%]"
            style={{ border: "none" }}
            allow="autoplay; encrypted-media"
            title={reel.title[locale]}
          />
          {/* Full overlay to block YouTube controls and make video non-interactive */}
          <div className="absolute inset-0 z-[5]" />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 z-[6] bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          {/* Thumbnail fallback when no video ID */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${reel.thumbnail})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent" />
          <div className="absolute top-4 right-4 rounded-full bg-bg-primary/60 px-3 py-1 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
              Reel
            </span>
          </div>
        </>
      )}

      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <p className="text-sm font-semibold text-white text-left leading-tight drop-shadow-lg">
          {reel.title[locale]}
        </p>
      </div>
    </motion.div>
  );
}

export function VideoReels({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-14 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-14"
        >
          <span className="eyebrow">
            {locale === "fr" ? "Nos videos" : "See the experience"}
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
              <VideoCard
                key={reel.id}
                reel={reel}
                locale={locale}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
