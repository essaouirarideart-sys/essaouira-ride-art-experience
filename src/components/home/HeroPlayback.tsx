"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { Play } from "lucide-react";
import type { Locale } from "@/i18n/config";

const HeroPlaybackContext = createContext<{
  playing: boolean;
  play: () => void;
} | null>(null);

function useHeroPlayback() {
  const ctx = useContext(HeroPlaybackContext);
  if (!ctx) {
    throw new Error("HeroPlayback components must be wrapped in HeroPlaybackRoot");
  }
  return ctx;
}

export function HeroPlaybackRoot({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  return (
    <HeroPlaybackContext.Provider
      value={{ playing, play: () => setPlaying(true) }}
    >
      {children}
    </HeroPlaybackContext.Provider>
  );
}

export function HeroIframe({
  locale,
  videoId,
}: {
  locale: Locale;
  videoId: string;
}) {
  const { playing } = useHeroPlayback();
  if (!playing) return null;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1&rel=0`}
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0"
      style={{
        width: "max(100%, 177.78vh)",
        height: "max(100%, 56.25vw)",
      }}
      allow="autoplay; encrypted-media"
      title={
        locale === "fr"
          ? "Vidéo d'accueil Essaouira Ride & Art"
          : "Essaouira Ride & Art hero video"
      }
    />
  );
}

export function HeroPlayButton({ locale }: { locale: Locale }) {
  const { playing, play } = useHeroPlayback();
  if (playing) return null;

  const playLabel =
    locale === "fr" ? "Lire la vidéo d'accueil" : "Play the hero video";

  return (
    <button
      type="button"
      onClick={play}
      aria-label={playLabel}
      className="absolute bottom-8 right-5 z-[5] flex items-center gap-2 rounded-full border border-gold/40 bg-bg-primary/50 px-3.5 py-2.5 text-left backdrop-blur-sm transition-colors hover:border-gold hover:bg-bg-primary/70 sm:bottom-10 sm:right-8 sm:px-4 sm:py-3"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 motion-safe:transition-transform motion-safe:hover:scale-105 sm:h-12 sm:w-12">
        <Play
          className="ml-0.5 h-5 w-5 text-white sm:h-6 sm:w-6"
          fill="white"
        />
      </span>
      <span className="pr-1 text-[10px] font-bold uppercase tracking-widest2 text-ink sm:text-xs">
        {locale === "fr" ? "Lire la vidéo" : "Play video"}
      </span>
    </button>
  );
}
