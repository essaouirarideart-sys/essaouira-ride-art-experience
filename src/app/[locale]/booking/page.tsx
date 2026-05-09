import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BookingForm } from "@/components/ui/BookingForm";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { buildWhatsAppUrl, mailtoLink, telLink } from "@/lib/whatsapp";

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
    segment: "booking",
    title:
      locale === "fr"
        ? "Réservation | Activités Essaouira — Cheval, Quad, Dromadaire"
        : "Book Now | Essaouira Activities — Horse Riding, Quad, Camel",
    description:
      locale === "fr"
        ? "Réservez vos activités à Essaouira en ligne. Balade à cheval, quad, dromadaire, art. Confirmation immédiate, transfert hôtel gratuit, annulation flexible."
        : "Book your Essaouira activities online. Horse riding, quad biking, camel ride, art. Instant confirmation, free hotel pick-up, flexible cancellation.",
    keywords:
      locale === "fr"
        ? ["réservation essaouira", "réserver activité essaouira", "book essaouira", "excursion essaouira"]
        : ["book essaouira", "reserve essaouira activity", "essaouira booking", "essaouira excursion"],
  });
}

export default async function BookingPage({
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
            <span className="eyebrow">{dict.booking.title}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {dict.booking.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.booking.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <BookingForm locale={typedLocale} dict={dict} />
            </div>
            <aside className="space-y-4 sm:space-y-5">
              <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-bg-elevated to-bg-card p-5 sm:p-7">
                <h2 className="font-display text-xl text-ink">
                  {dict.booking.sideTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {dict.booking.sideText}
                </p>
                <a
                  href={buildWhatsAppUrl({ locale: typedLocale })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1ebe5b]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-bg-card p-5 sm:p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">
                  {dict.footer.contact}
                </h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a
                      href={telLink()}
                      className="flex items-start gap-3 text-ink-muted hover:text-gold"
                    >
                      <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                      {site.contact.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={mailtoLink()}
                      className="flex items-start gap-3 text-ink-muted hover:text-gold"
                    >
                      <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                      {site.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-ink-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      {site.contact.address.street},{" "}
                      {site.contact.address.city}
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
