"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useHeroPlayback } from "./HeroPlayback";

export type HeroSlide = {
  src: string;
  alt: string;
  title: string;
  shortTitle: string;
  href: string;
  price: number;
};

const INTERVAL_MS = 5200;

const HeroSlidesContext = createContext<{
  slides: HeroSlide[];
  index: number;
  setIndex: (value: number | ((current: number) => number)) => void;
  locale: "fr" | "en";
} | null>(null);

function useHeroSlides() {
  const ctx = useContext(HeroSlidesContext);
  if (!ctx) {
    throw new Error("Hero slide components must be wrapped in HeroSlidesRoot");
  }
  return ctx;
}

export function HeroSlidesRoot({
  locale,
  slides,
  children,
}: {
  locale: "fr" | "en";
  slides: HeroSlide[];
  children: ReactNode;
}) {
  const { playing } = useHeroPlayback();
  const [index, setIndex] = useState(0);
  const count = slides.length;

  useEffect(() => {
    if (playing || count < 2) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [playing, count]);

  return (
    <HeroSlidesContext.Provider value={{ slides, index, setIndex, locale }}>
      {children}
    </HeroSlidesContext.Provider>
  );
}

export function HeroSlideshow() {
  const { playing } = useHeroPlayback();
  const { slides, index } = useHeroSlides();

  return (
    <>
      {slides.map((slide, i) =>
        i === 0 ? null : (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            loading="lazy"
            className={`object-cover transition-opacity duration-1000 ${
              i === index && !playing ? "opacity-100" : "opacity-0"
            }`}
          />
        ),
      )}
    </>
  );
}

export function HeroSlideChrome() {
  const { playing } = useHeroPlayback();
  const { slides, index, setIndex, locale } = useHeroSlides();
  const current = slides[index] ?? slides[0];
  const count = slides.length;

  if (playing || !current) return null;

  return (
    <>
      <Link
        href={current.href}
        className="group absolute right-8 top-1/2 z-[6] hidden w-[17.5rem] -translate-y-1/2 overflow-hidden rounded-2xl border border-gold/30 bg-bg-primary/55 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-gold/60 lg:block"
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
          <div className="absolute right-3 top-3 rounded-full bg-bg-primary/80 px-3 py-1.5">
            <span className="text-xs font-bold text-gold">
              {locale === "fr" ? "Dès" : "From"} {current.price}€
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">
              {current.shortTitle}
            </p>
            <p className="mt-1 font-display text-lg leading-tight text-ink">
              {current.title}
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
              {locale === "fr" ? "Découvrir" : "Explore"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>

      <div className="absolute bottom-8 left-5 z-[6] flex items-center gap-3 sm:bottom-10 sm:left-8">
        <button
          type="button"
          onClick={() => setIndex((i) => (i - 1 + count) % count)}
          aria-label={locale === "fr" ? "Slide précédente" : "Previous slide"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-bg-primary/40 text-ink backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center" role="tablist">
          {slides.map((slide, i) => (
            <button
              key={slide.href}
              type="button"
              role="tab"
              aria-label={slide.shortTitle}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-gold" : "w-1.5 bg-white/35"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIndex((i) => (i + 1) % count)}
          aria-label={locale === "fr" ? "Slide suivante" : "Next slide"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-bg-primary/40 text-ink backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
