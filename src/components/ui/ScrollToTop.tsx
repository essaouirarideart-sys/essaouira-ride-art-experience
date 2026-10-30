"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const RING_RADIUS = 20;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const SHOW_AFTER_PX = 320;

export function ScrollToTop({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > SHOW_AFTER_PX);
      setProgress(maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const label = locale === "fr" ? "Retour en haut" : "Back to top";

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className={cn(
        "group fixed bottom-[5.25rem] left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-bg-primary/75 text-gold shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-gold/60 hover:shadow-gold hover:-translate-y-0.5 sm:bottom-8 sm:left-6 sm:h-14 sm:w-14",
        visible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      )}
    >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90 p-0.5"
            viewBox="0 0 48 48"
            aria-hidden
          >
            <circle
              cx="24"
              cy="24"
              r={RING_RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r={RING_RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-gold transition-[stroke-dashoffset] duration-150"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
            />
          </svg>

      <ChevronUp
        className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-6 sm:w-6"
        strokeWidth={2.25}
      />
    </button>
  );
}
