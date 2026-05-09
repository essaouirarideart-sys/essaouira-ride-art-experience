"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, X, Zap } from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function StickyBookingCTA({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollY > windowHeight * 0.3 && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 inset-x-0 z-40 border-t-2 border-gold/30 bg-bg-primary/98 backdrop-blur-lg shadow-2xl lg:hidden"
        >
          <div className="px-4 pt-2 pb-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="h-3.5 w-3.5 text-gold animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                {locale === "fr" ? "Places limitées disponibles" : "Limited spots available"}
              </span>
              <Zap className="h-3.5 w-3.5 text-gold animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={localizedPath(locale, "booking")}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-bold uppercase tracking-wider text-bg-primary shadow-lg transition-all duration-300 hover:shadow-gold active:scale-[0.97]"
              >
                <Calendar className="h-4 w-4" />
                {locale === "fr" ? "Réserver maintenant" : "Book Now"}
              </Link>
              <a
                href={buildWhatsAppUrl({ locale })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsDismissed(true)}
                aria-label={locale === "fr" ? "Fermer" : "Close"}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-ink-muted hover:text-ink transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
