"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/config";

export function WhatsAppFloat({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = buildWhatsAppUrl({ locale });
  const label = locale === "fr" ? "Discuter sur WhatsApp" : "Chat on WhatsApp";

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="wa-float"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-24 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 hover:bg-[#1ebe5b] sm:bottom-6 sm:flex"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
          <MessageCircle className="relative h-6 w-6" strokeWidth={2} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-bg-card px-3 py-1.5 text-xs text-ink opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            {label}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
