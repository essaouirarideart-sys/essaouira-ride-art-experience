import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";
import { cn } from "@/lib/utils";

/**
 * Inline gold-on-dark wordmark.
 * The provided /logo.svg is a 254KB raster-embedded SVG (heavy, white background).
 * Until an optimized vector mark is supplied, we render a clean typographic logo
 * that fits the dark/gold brand. Swap to <Image src="/logo.svg" /> when optimized.
 */
export function Logo({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <Link
      href={localizedPath(locale)}
      aria-label="Essaouira Ride & Art Experience"
      className={cn("group flex items-center gap-3", className)}
    >
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gold/30 bg-bg-primary transition-colors duration-500 group-hover:border-gold">
        <span className="absolute inset-0 bg-gradient-sunset opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
        <span className="relative font-display text-base text-gold">E</span>
        <span className="relative -ml-1 font-display text-base text-gold/70">R</span>
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-[15px] tracking-tight text-ink">
          Essaouira Ride
        </span>
        <span className="mt-0.5 text-[10px] uppercase tracking-widest2 text-gold">
          & Art Experience
        </span>
      </span>
    </Link>
  );
}
