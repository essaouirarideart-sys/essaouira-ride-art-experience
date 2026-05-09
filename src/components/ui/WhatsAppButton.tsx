"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  return (
    <motion.a
      href={buildWhatsAppUrl({ locale })}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, type: "spring" }}
      className="group fixed bottom-6 right-6 z-50 hidden lg:flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl px-5 py-3"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold text-sm whitespace-nowrap">
        {locale === "fr" ? "Réserver par WhatsApp" : "Book via WhatsApp"}
      </span>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-[#128C7E]" />
      </span>
    </motion.a>
  );
}
