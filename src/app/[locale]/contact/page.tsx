import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { buildWhatsAppUrl, mailtoLink, telLink } from "@/lib/whatsapp";
import { localizedPath } from "@/lib/paths";

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
    segment: "contact",
    title:
      locale === "fr"
        ? "Contact | Essaouira Ride & Art Experience — Réservation & Info"
        : "Contact | Essaouira Ride & Art Experience — Booking & Info",
    description:
      locale === "fr"
        ? "Contactez-nous pour réserver vos activités à Essaouira : cheval, quad, dromadaire. WhatsApp, téléphone ou email. Réponse rapide garantie."
        : "Contact us to book your activities in Essaouira: horse riding, quad biking, camel rides. WhatsApp, phone or email. Fast response guaranteed.",
    keywords:
      locale === "fr"
        ? ["contact essaouira activités", "réservation essaouira", "whatsapp essaouira tours"]
        : ["contact essaouira activities", "book essaouira", "whatsapp essaouira tours"],
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const cards = [
    {
      icon: Phone,
      label: dict.contact.phoneLabel,
      value: site.contact.phoneDisplay,
      href: telLink(),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.contact.phoneDisplay,
      href: buildWhatsAppUrl({ locale: typedLocale }),
      external: true,
    },
    {
      icon: Mail,
      label: dict.contact.emailLabel,
      value: site.contact.email,
      href: mailtoLink(),
    },
    {
      icon: MapPin,
      label: dict.contact.addressLabel,
      value: `${site.contact.address.street}, ${site.contact.address.city}`,
      href: "https://maps.google.com/?q=Diabat+Essaouira+Morocco",
      external: true,
    },
  ];

  return (
    <>
      <section className="border-b border-border bg-bg-card/40 py-12 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <span className="eyebrow">{dict.contact.title}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {dict.contact.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.contact.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-10 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {cards.map((c, i) => {
              const Ico = c.icon;
              const props = c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <a
                  key={i}
                  href={c.href}
                  {...props}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-bg-card p-5 transition-all duration-500 hover:border-gold/40 hover:bg-bg-elevated sm:gap-5 sm:p-7"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 text-gold transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-bg-primary">
                    <Ico className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest2 text-ink-dim">
                      {c.label}
                    </div>
                    <div className="mt-1 font-display text-lg text-ink">
                      {c.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            <div className="rounded-2xl border border-border bg-bg-card p-5 sm:p-7">
              <div className="flex items-center gap-3 text-gold">
                <Clock className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-widest2">
                  {dict.contact.hoursLabel}
                </span>
              </div>
              <p className="mt-4 font-display text-lg text-ink">
                {dict.contact.hours}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-5 sm:p-7">
              <div className="flex items-center gap-3 text-gold">
                <span className="text-[11px] font-semibold uppercase tracking-widest2">
                  {dict.contact.socialLabel}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={site.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink hover:border-gold hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={site.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink hover:border-gold hover:text-gold"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <span className="ml-2 text-sm text-ink-muted">
                  @{site.social.instagram.handle}
                </span>
              </div>
            </div>
          </div>

          {/* Booking CTA */}
          <Reveal>
            <div className="mt-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-bg-elevated to-bg-card p-6 text-center sm:mt-12 sm:p-8">
              <h2 className="font-display text-2xl text-ink">
                {typedLocale === "fr"
                  ? "Prêt à réserver votre expérience ?"
                  : "Ready to book your experience?"}
              </h2>
              <p className="mt-3 text-sm text-ink-muted">
                {typedLocale === "fr"
                  ? "Réservez en ligne ou contactez-nous directement."
                  : "Book online or contact us directly."}
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href={localizedPath(typedLocale, "booking")}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold sm:px-8 sm:py-4 sm:text-sm"
                >
                  {typedLocale === "fr" ? "Réserver en ligne" : "Book Online"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={localizedPath(typedLocale, "prices")}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3.5 text-xs font-medium text-ink transition-all duration-300 hover:border-gold hover:text-gold sm:px-6 sm:py-4 sm:text-sm"
                >
                  {typedLocale === "fr" ? "Voir les tarifs" : "See Prices"}
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
