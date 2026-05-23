"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { VideoReel } from "@/data/activities";
import type { Locale } from "@/i18n/config";

interface Props {
  reel: VideoReel;
  locale: Locale;
}

export function ActivityVideoReel({ reel, locale }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${reel.youtubeId}/maxresdefault.jpg`;

  return (
    <>
      {/* Thumbnail Card - Click to Play */}
      <div
        onClick={() => setIsPlaying(true)}
        className="group relative aspect-[9/16] w-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-xl"
      >
        {/* Thumbnail */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gold">
            <Play className="h-7 w-7 text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Title */}
        {/* <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-sm font-semibold text-white drop-shadow-lg">
            {reel.title[locale]}
          </p>
        </div> */}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsPlaying(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                className="absolute inset-0 h-full w-full"
                style={{ border: "none" }}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title={reel.title[locale]}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
