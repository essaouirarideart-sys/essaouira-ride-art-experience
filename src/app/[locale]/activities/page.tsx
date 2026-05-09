import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ActivityCard } from "@/components/ui/ActivityCard";
import { RevealStagger, RevealItem, Reveal } from "@/components/ui/Reveal";
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
    segment: "activities",
    title:
      locale === "fr"
        ? "Activités Essaouira | Cheval, Quad, Dromadaire & Art — Réservez"
        : "Essaouira Activities | Horse Riding, Quad, Camel & Art — Book Now",
    description:
      locale === "fr"
        ? "Toutes nos activités à Essaouira : balade à cheval sur la plage, quad dans les dunes, dromadaire au coucher du soleil, art experience. Guides locaux, transfert gratuit."
        : "All our activities in Essaouira: beach horse riding, quad biking in dunes, sunset camel ride, art experience. Local guides, free hotel pick-up.",
    keywords:
      locale === "fr"
        ? ["activités essaouira", "que faire essaouira", "cheval essaouira", "quad essaouira", "dromadaire essaouira"]
        : ["essaouira activities", "things to do essaouira", "horse riding essaouira", "quad biking essaouira", "camel ride essaouira"],
  });
}

export default async function ActivitiesPage({
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
            <span className="eyebrow">{dict.nav.activities}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {dict.activities.listTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.activities.listSubtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-10 sm:py-20 lg:py-24">
        <Container>
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
            {activities.map((activity, i) => (
              <RevealItem key={activity.id}>
                <ActivityCard
                  activity={activity}
                  locale={typedLocale}
                  dict={dict}
                  index={i}
                />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-bg-card/40 py-12 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-section text-ink">
                {typedLocale === "fr"
                  ? "Prêt à réserver votre expérience ?"
                  : "Ready to book your experience?"}
              </h2>
              <p className="mt-4 text-sm text-ink-muted">
                {typedLocale === "fr"
                  ? "Transfert hôtel gratuit · Aucune expérience requise · Guides locaux certifiés"
                  : "Free hotel pick-up · No experience needed · Certified local guides"}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={localizedPath(typedLocale, "booking")}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold"
                >
                  {typedLocale === "fr" ? "Réserver maintenant" : "Book Now"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildWhatsAppUrl({ locale: typedLocale })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#128C7E]"
                >
                  <MessageCircle className="h-4 w-4" />
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
