"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import type { Locale } from "@/i18n/config";

const VIDEO_URL = "https://player.vimeo.com/external/434045526.hd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=175";

export function VideoSection({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-bg-primary py-20 sm:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <span className="eyebrow">
            {locale === "fr" ? "L'expérience en vidéo" : "Experience in motion"}
          </span>
          <h2 className="heading-section mt-4 text-ink">
            {locale === "fr"
              ? "Ressentez l'aventure avant de la vivre"
              : "Feel the adventure before you live it"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-2xl"
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="h-full w-full object-cover"
            loop
            muted={isMuted}
            playsInline
            autoPlay
            onPlay={() => setIsPlaying(true)}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Play button overlay */}
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-bg-primary/40 transition-opacity duration-300 hover:bg-bg-primary/30"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold text-bg-primary shadow-gold transition-transform duration-300 hover:scale-110">
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </div>
            </button>
          )}

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary/80 text-ink backdrop-blur-sm transition-all duration-300 hover:bg-bg-primary hover:text-gold"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </button>

          {/* Caption */}
          <div className="absolute bottom-4 left-4 rounded-full bg-bg-primary/80 px-4 py-2 backdrop-blur-sm">
            <span className="text-xs font-medium text-ink">
              {locale === "fr"
                ? "Coucher de soleil sur la plage d'Essaouira"
                : "Sunset on Essaouira beach"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
