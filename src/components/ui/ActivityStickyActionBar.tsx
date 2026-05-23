"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { buildWhatsAppUrl, telLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const SCROLL_SHOW_THRESHOLD = 8;
const SCROLL_COMPACT_THRESHOLD = 360;
const EASE = [0.16, 1, 0.3, 1] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

interface Props {
  locale: Locale;
  dict: Dictionary;
  activityTitle: string;
  onReserve: () => void;
}

export function ActivityStickyActionBar({
  locale,
  dict,
  activityTitle,
  onReserve,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);
  const waUrl = buildWhatsAppUrl({ locale, activityTitle });

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
  const whatsappLabel = "WhatsApp";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label={locale === "fr" ? "Actions de réservation" : "Booking actions"}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE }}
          className={cn(
            "pointer-events-none fixed inset-x-0 z-[45]",
            "top-[4.25rem] sm:top-20",
            "max-sm:top-auto max-sm:bottom-[3.75rem]"
          )}
        >
          <motion.div
            className="container-page pointer-events-auto px-3 sm:px-4"
            animate={{
              scale: compact ? 0.97 : 1,
              opacity: compact ? 0.96 : 1,
            }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <motion.div
              layout
              className={cn(
                "relative overflow-hidden rounded-2xl border",
                "bg-bg-primary/75 backdrop-blur-xl backdrop-saturate-150",
                "max-sm:rounded-full",
                compact
                  ? "border-gold/20 shadow-[0_10px_32px_rgba(0,0,0,0.45)]"
                  : "border-gold/30 shadow-[0_16px_48px_rgba(0,0,0,0.55),0_0_32px_rgba(212,165,116,0.12)]"
              )}
              transition={{ duration: 0.4, ease: EASE }}
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

              <motion.div
                layout
                className={cn(
                  "relative flex items-center gap-2 sm:gap-3",
                  compact ? "p-1.5 sm:p-2" : "p-2 sm:p-2.5"
                )}
                transition={{ duration: 0.35, ease: EASE }}
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

                {/* <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "relative flex flex-1 items-center justify-center gap-1.5 rounded-full",
                    "border border-[#25D366]/50 bg-[#25D366] font-semibold text-white",
                    "transition-all duration-300 hover:bg-[#128C7E] hover:shadow-[0_0_20px_rgba(37,211,102,0.45)]",
                    "active:scale-[0.98]",
                    compact
                      ? "min-h-[40px] px-2.5 py-2 text-[9px] sm:min-h-[42px] sm:text-[10px]"
                      : "min-h-[44px] px-3 py-2.5 text-[10px] sm:min-h-[48px] sm:gap-2 sm:px-5 sm:py-3 sm:text-xs"
                  )}
                >
                  <span className="absolute inline-flex h-full w-full rounded-full">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 opacity-75" />
                  </span>
                  <WhatsAppIcon
                    className={cn("relative", compact ? "h-3.5 w-3.5" : "h-4 w-4 sm:h-5 sm:w-5")}
                  />
                  <span className="relative text-[10px] font-bold uppercase tracking-wider sm:text-xs sm:font-semibold sm:normal-case sm:tracking-normal">
                    <span className="sm:hidden">WA</span>
                    <span className="hidden sm:inline">{whatsappLabel}</span>
                  </span>
                </a> */}

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
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
