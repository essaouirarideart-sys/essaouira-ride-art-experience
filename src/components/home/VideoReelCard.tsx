"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { IMAGE_WIDTH, optimizeCloudinaryUrl } from "@/lib/cloudinary";

export function VideoReelCard({
  youtubeId,
  thumbnail,
  title,
  locale,
}: {
  youtubeId: string;
  thumbnail: string;
  title: string;
  locale: Locale;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasVideo = youtubeId.length > 0;
  const playLabel =
    locale === "fr" ? `Lire la vidéo : ${title}` : `Play video: ${title}`;

  return (
    <div className="reveal-up group relative aspect-[9/14] w-[75vw] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-2xl sm:aspect-[9/16] sm:w-[45vw] lg:w-[30vw] xl:w-[22vw]">
      {hasVideo && isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          className="absolute inset-0 h-full w-full"
          style={{ border: "none" }}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          title={title}
        />
      ) : (
        <>
          <Image
            src={optimizeCloudinaryUrl(thumbnail, IMAGE_WIDTH.card)}
            alt={title}
            fill
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 22vw"
            loading="lazy"
            className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          {hasVideo ? (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={playLabel}
              className="absolute inset-0 z-[5] flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm motion-safe:transition-all motion-safe:duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:bg-gold">
                <Play className="ml-1 h-7 w-7 text-white" fill="white" />
              </span>
            </button>
          ) : (
            <div className="absolute top-4 right-4 rounded-full bg-bg-primary/60 px-3 py-1 backdrop-blur-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                Reel
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5">
            <p className="text-left text-sm font-semibold leading-tight text-white drop-shadow-lg">
              {title}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
