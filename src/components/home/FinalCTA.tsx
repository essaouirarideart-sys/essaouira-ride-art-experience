import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCTA({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-28 lg:py-36">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial-sunset opacity-60" />
      <div className="absolute inset-0 bg-bg-primary/40" />

      <div className="container-page relative">
        <div className="reveal-up mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-gold sm:mb-8 sm:h-20 sm:w-20">
            <Star className="h-7 w-7 text-bg-primary sm:h-10 sm:w-10" fill="currentColor" />
          </div>

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
              href={localizedPath(locale, "activities")}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/40 px-7 py-4 text-xs font-bold uppercase tracking-widest2 text-ink transition-all duration-300 hover:border-gold hover:text-gold sm:px-10 sm:py-5 sm:text-sm sm:gap-3"
            >
              {locale === "fr" ? "Voir les activités" : "View activities"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </Link>
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
              className="group inline-flex items-center gap-2 rounded-full bg-[#107A6B] px-7 py-4 text-xs font-bold uppercase tracking-widest2 text-white shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#0E6B5F] sm:px-10 sm:py-5 sm:text-sm sm:gap-3"
            >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
              WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs text-ink-dim sm:mt-8 sm:text-sm">
            {locale === "fr"
              ? "Aucune carte requise · Confirmation selon l'activité · Disponible 7j/7"
              : "No card required · Confirmation depends on the activity · Available 7 days a week"}
          </p>
        </div>
      </div>
    </section>
  );
}
