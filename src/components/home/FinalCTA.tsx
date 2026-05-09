"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCTA({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 sm:py-28 lg:py-36">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial-sunset opacity-60" />
      <div className="absolute inset-0 bg-bg-primary/40" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-gold sm:mb-8 sm:h-20 sm:w-20"
          >
            <Star className="h-7 w-7 text-bg-primary sm:h-10 sm:w-10" fill="currentColor" />
          </motion.div>

          <h2 className="font-display text-[1.75rem] font-bold leading-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl">
            {locale === "fr" ? (
              <>
                Prêt pour votre{" "}
                <span className="text-gold">aventure</span> ?
              </>
            ) : (
              <>
                Ready for your{" "}
                <span className="text-gold">adventure</span>?
              </>
            )}
          </h2>

          <p className="mt-4 text-base text-ink-muted leading-relaxed max-w-xl mx-auto sm:mt-6 sm:text-lg">
            {locale === "fr"
              ? "Réservez maintenant et vivez une expérience inoubliable à Essaouira. Nos guides vous attendent."
              : "Book now and live an unforgettable experience in Essaouira. Our guides are waiting for you."}
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href={localizedPath(locale, "booking")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-xs font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold sm:px-10 sm:py-5 sm:text-sm sm:gap-3"
            >
              {locale === "fr" ? "Réserver maintenant" : "Book Now"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </Link>
            <a
              href={buildWhatsAppUrl({ locale })}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-xs font-bold uppercase tracking-widest2 text-white shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#128C7E] sm:px-10 sm:py-5 sm:text-sm sm:gap-3"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs text-ink-dim sm:mt-8 sm:text-sm">
            {locale === "fr"
              ? "Aucune carte requise · Confirmation immédiate · Annulation flexible"
              : "No card required · Instant confirmation · Flexible cancellation"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
