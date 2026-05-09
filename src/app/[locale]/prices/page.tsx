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
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
