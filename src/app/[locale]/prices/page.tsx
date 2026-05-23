import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PricesPageCard } from "@/components/ui/PricesPageCard";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { activities } from "@/data/activities";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    segment: "prices",
    title:
      locale === "fr"
        ? "Tarifs Activités Essaouira | Cheval, Quad, Dromadaire — Prix 2025"
        : "Essaouira Activities Prices | Horse Riding, Quad, Camel — 2025 Rates",
    description:
      locale === "fr"
        ? "Découvrez nos tarifs pour toutes les activités à Essaouira. Balade à cheval dès 25€, quad dès 35€, dromadaire dès 20€. Transfert hôtel gratuit inclus."
        : "Discover our prices for all activities in Essaouira. Horse riding from 25€, quad biking from 35€, camel ride from 20€. Free hotel pick-up included.",
    keywords:
      locale === "fr"
        ? ["prix activités essaouira", "tarif cheval essaouira", "prix quad essaouira", "tarif dromadaire essaouira"]
        : ["essaouira activities prices", "horse riding essaouira price", "quad biking essaouira cost", "camel ride essaouira price"],
  });
}

export default async function PricesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <>
      <section className="border-b border-border bg-bg-card/40 py-12 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <span className="eyebrow">{dict.prices.title}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {dict.prices.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.prices.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-20 lg:py-24">
        <Container>
          <div className="space-y-12 sm:space-y-20">
            {activities.map((activity) => (
              <div key={activity.id}>
                <Reveal>
                  <div className="mb-6 flex flex-col gap-2 sm:mb-10">
                    <span className="eyebrow">
                      {activity.shortTitle[typedLocale]}
                    </span>
                    <h2 className="heading-section text-ink">
                      {activity.title[typedLocale]}
                    </h2>
                  </div>
                </Reveal>
                <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
                  {activity.pricing.map((tier) => (
                    <RevealItem key={tier.id}>
                      <PricesPageCard
                        tier={tier}
                        locale={typedLocale}
                        dict={dict}
                        activitySlug={activity.slug[typedLocale]}
                      />
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            ))}
          </div>

          {/* Free Hotel Pick-up Banner */}
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-gold/30 bg-bg-card/50 p-4 text-center sm:mt-16 sm:gap-6 sm:p-6">
              <div className="flex items-center gap-2 text-sm text-ink">
                <Check className="h-4 w-4 text-gold" />
                <span>{typedLocale === "fr" ? "Transfert hôtel gratuit" : "Free hotel pick-up"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink">
                <Check className="h-4 w-4 text-gold" />
                <span>{typedLocale === "fr" ? "Aucune expérience requise" : "No experience needed"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink">
                <Check className="h-4 w-4 text-gold" />
                <span>{typedLocale === "fr" ? "Prix en euros (€)" : "Prices in euros (€)"}</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-center text-sm text-ink-muted">
              {dict.prices.note}
            </p>
          </Reveal>

          {/* Booking CTA */}
          <Reveal>
            <div className="mt-10 rounded-2xl border border-gold/30 bg-gradient-to-br from-bg-elevated to-bg-card p-6 text-center sm:mt-16 sm:p-10">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                {typedLocale === "fr"
                  ? "Prêt à réserver ?"
                  : "Ready to book?"}
              </h2>
              <p className="mt-3 text-sm text-ink-muted max-w-lg mx-auto">
                {typedLocale === "fr"
                  ? "Aucune carte requise à la réservation. Confirmation immédiate. Annulation flexible."
                  : "No card required at booking. Instant confirmation. Flexible cancellation."}
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  href={localizedPath(typedLocale, "booking")}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold sm:px-8 sm:py-4 sm:text-sm"
                >
                  {typedLocale === "fr" ? "Réserver maintenant" : "Book Now"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                </Link>
                <a
                  href={buildWhatsAppUrl({ locale: typedLocale })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#128C7E] sm:px-6 sm:py-4 sm:text-sm"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
