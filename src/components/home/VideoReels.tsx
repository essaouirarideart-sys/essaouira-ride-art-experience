"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { IMAGE_WIDTH, optimizeCloudinaryUrl } from "@/lib/cloudinary";

const REELS = [
  {
    id: "reel-0",
    youtubeId: "8KoYGQ9S9Nc",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976879/5_lf7ed9.png",
    title: {
      fr: "Excursion quad en groupe",
      en: "Group quad excursion",
    },
  },
  {
    id: "reel-1",
    youtubeId: "9zWJt-xE2eA",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779122049/palma-quad-camel-sunset-tour-9_zwvmaf.jpg",
    title: {
      fr: "Excursion dromadaire au coucher du soleil",
      en: "Sunset camel ride excursion",
    },
  },
  {
    id: "reel-2",
    youtubeId: "fcKWdQawV_Y",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976879/6_jarktc.png",
    title: {
      fr: "Organisation & préparation de l'excursion quad",
      en: "Quad excursion briefing & prep",
    },
  },
  {
    id: "reel-3",
    youtubeId: "Z6aT2T9gklQ",
    thumbnail: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
    title: {
      fr: "Aventure quad dans les dunes",
      en: "Quad adventure in the dunes",
    },
  },
  {
    id: "reel-4",
    youtubeId: "HsuI-AMHVb0",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976878/4_pcypep.png",
    title: {
      fr: "Quad en action",
      en: "Quad in action",
    },
  },
  {
    id: "reel-5",
    youtubeId: "TiIAYCIxmKc",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117111/5_t6sbn9.png",
    title: {
      fr: "Balade à cheval sur la plage",
      en: "Horse ride on the beach",
    },
  },
  {
    id: "reel-6",
    youtubeId: "dItdB50RPvA",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/24_hinlho.jpg",
    title: {
      fr: "Pack Art Experience",
      en: "Art Experience pack",
    },
  },
];

function VideoCard({
  reel,
  locale,
}: {
  reel: (typeof REELS)[number];
  locale: Locale;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasVideo = reel.youtubeId.length > 0;
  const title = reel.title[locale];
  const playLabel =
    locale === "fr" ? `Lire la vidéo : ${title}` : `Play video: ${title}`;

  return (
    <div className="reveal-up group relative aspect-[9/14] w-[75vw] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-2xl sm:aspect-[9/16] sm:w-[45vw] lg:w-[30vw] xl:w-[22vw]">
      {hasVideo && isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          className="absolute inset-0 h-full w-full"
          style={{ border: "none" }}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          title={title}
        />
      ) : (
        <>
          <Image
            src={optimizeCloudinaryUrl(reel.thumbnail, IMAGE_WIDTH.card)}
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
          <div className="absolute inset-x-0 bottom-0 z-10 p-5 pointer-events-none">
            <p className="text-sm font-semibold text-white text-left leading-tight drop-shadow-lg">
              {title}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export function VideoReels({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-x-clip py-14 sm:py-24 lg:py-32">
      <div className="container-page">
        <div className="reveal-up mb-8 text-center sm:mb-14">
          <span className="eyebrow">
            {locale === "fr" ? "Nos videos" : "See the experience"}
          </span>
          <h2 className="heading-section mt-4 text-ink">
            {locale === "fr"
              ? "Ressentez l'aventure"
              : "Feel the adventure"}
          </h2>
        </div>

        <div className="relative -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-4 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide">
            {REELS.map((reel) => (
              <VideoCard
                key={reel.id}
                reel={reel}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
