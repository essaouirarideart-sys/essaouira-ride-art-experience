"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { telLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const SCROLL_SHOW_THRESHOLD = 8;
const SCROLL_COMPACT_THRESHOLD = 360;

interface Props {
  locale: Locale;
  dict: Dictionary;
  activityTitle: string;
  onReserve: () => void;
}

export function ActivityStickyActionBar({
  locale,
  dict,
  onReserve,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > SCROLL_SHOW_THRESHOLD);
      setCompact(y > SCROLL_COMPACT_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reserveLabel = locale === "fr" ? "Réserver" : "Book Now";

  return (
    <div
      role="region"
      aria-label={locale === "fr" ? "Actions de réservation" : "Booking actions"}
      aria-hidden={!visible}
      inert={!visible ? true : undefined}
      className={cn(
        "pointer-events-none fixed inset-x-0 z-[45] top-[4.25rem] sm:top-20",
        "transition-all duration-300",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
      )}
    >
      <div
        className={cn(
          "container-page px-3 sm:px-4 transition-transform duration-300",
          visible && "pointer-events-auto",
          compact ? "scale-[0.97] opacity-95" : "scale-100 opacity-100"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border transition-all duration-300",
            "bg-bg-primary/75 backdrop-blur-xl backdrop-saturate-150",
            "max-sm:rounded-full",
            compact
              ? "border-gold/20 shadow-[0_10px_32px_rgba(0,0,0,0.45)]"
              : "border-gold/30 shadow-[0_16px_48px_rgba(0,0,0,0.55),0_0_32px_rgba(212,165,116,0.12)]"
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"
            aria-hidden
          />
          <div
            className={cn(
              "pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500",
              compact ? "opacity-40" : "opacity-70"
            )}
            style={{
              background:
                "linear-gradient(135deg, rgba(212,165,116,0.22) 0%, transparent 42%, transparent 58%, rgba(212,165,116,0.14) 100%)",
            }}
            aria-hidden
          />

          <div
            className={cn(
              "relative flex items-center gap-2 sm:gap-3 transition-[padding] duration-300",
              compact ? "p-1.5 sm:p-2" : "p-2 sm:p-2.5"
            )}
          >
            <button
              type="button"
              onClick={onReserve}
              className={cn(
                "group relative flex flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-full",
                "bg-gradient-gold font-bold uppercase tracking-widest2 text-bg-primary",
                "shadow-[0_0_24px_rgba(212,165,116,0.35)] transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-gold active:scale-[0.98]",
                compact
                  ? "min-h-[40px] px-2.5 py-2 text-[9px] sm:min-h-[42px] sm:text-[10px]"
                  : "min-h-[44px] px-3 py-2.5 text-[10px] sm:min-h-[48px] sm:gap-2 sm:px-5 sm:py-3 sm:text-xs"
              )}
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">{reserveLabel}</span>
              <ArrowRight
                className={cn(
                  "relative transition-transform duration-300 group-hover:translate-x-0.5",
                  compact ? "h-3 w-3" : "h-3.5 w-3.5 sm:h-4 sm:w-4"
                )}
              />
            </button>

            <a
              href={telLink()}
              className={cn(
                "flex shrink-0 items-center justify-center gap-1.5 rounded-full",
                "border border-white/10 bg-white/5 font-medium text-ink backdrop-blur-sm",
                "transition-all duration-300 hover:border-gold/40 hover:bg-gold/10 hover:text-gold",
                "active:scale-[0.98]",
                compact
                  ? "min-h-[40px] min-w-[40px] px-2.5 py-2 sm:min-h-[42px] sm:min-w-[42px]"
                  : "min-h-[44px] px-3 py-2.5 text-[10px] sm:min-h-[48px] sm:px-4 sm:py-3 sm:text-xs"
              )}
            >
              <Phone
                className={cn("shrink-0", compact ? "h-3.5 w-3.5" : "h-4 w-4")}
                strokeWidth={2}
              />
              <span className="hidden sm:inline">{dict.cta.callNow}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
