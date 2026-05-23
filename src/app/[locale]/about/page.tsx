import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Heart, ShieldCheck, Sparkles, Leaf, Award, Users, ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const ICONS = [Heart, ShieldCheck, Sparkles, Leaf, Award, Users] as const;

// Cloudinary about page images - TODO: Replace with your actual Cloudinary public IDs
const ABOUT_IMG = `https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600152/11_ehyrc0.jpg`;
const ABOUT_IMG_2 = `https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600151/16_ojynt2.jpg`;
const ABOUT_IMG_3 = `https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600151/15_vfgiwf.jpg`;

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
    segment: "about",
    title:
      locale === "fr"
        ? "À Propos | Essaouira Ride & Art Experience — Guides Locaux"
        : "About Us | Essaouira Ride & Art Experience — Local Guides",
    description:
      locale === "fr"
        ? "Découvrez notre équipe de guides locaux passionnés à Essaouira. Depuis 2018, nous offrons les meilleures activités : cheval, quad, dromadaire et art."
        : "Meet our passionate local guides in Essaouira. Since 2018, we offer the best activities: horse riding, quad biking, camel rides and art experiences.",
    keywords:
      locale === "fr"
        ? ["guide local essaouira", "activités essaouira", "essaouira maroc", "excursion essaouira"]
        : ["local guide essaouira", "essaouira activities", "essaouira morocco", "essaouira tours"],
  });
}

export default async function AboutPage({
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
      {/* Hero Section */}
      <section className="relative border-b border-border py-14 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ABOUT_IMG}
            alt={typedLocale === "fr" ? "Équipe Essaouira Ride & Art Experience" : "Essaouira Ride & Art Experience team"}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/90 to-bg-primary" />
        </div>
        <Container className="relative">
          <Reveal>
            <span className="eyebrow">{dict.about.title}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {dict.about.subtitle}
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">{dict.about.storyTitle}</span>
              <h2 className="heading-section mt-5 text-balance text-ink">
                {typedLocale === "fr"
                  ? "Une passion née à Essaouira"
                  : "A passion born in Essaouira"}
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                  {dict.about.storyBody}
                </p>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                  {dict.about.storyBody2}
                </p>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                  {dict.about.storyBody3}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={ABOUT_IMG_2}
                    alt={typedLocale === "fr" ? "Coucher de soleil à Essaouira" : "Sunset in Essaouira"}
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] mt-8 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={ABOUT_IMG_3}
                    alt={typedLocale === "fr" ? "Balade à cheval" : "Horse riding"}
                    fill
                    sizes="(max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-gold">{dict.about.missionTitle}</span>
              <p className="mt-6 font-display text-2xl leading-relaxed text-ink sm:text-3xl">
                &ldquo;{dict.about.missionBody}&rdquo;
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="text-center mb-14">
              <span className="eyebrow">{dict.about.valuesTitle}</span>
              <h2 className="heading-section mt-5 text-ink">
                {typedLocale === "fr"
                  ? "Ce qui nous distingue"
                  : "What sets us apart"}
              </h2>
            </div>
          </Reveal>
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {dict.about.values.map((v, i) => {
              const Icon = ICONS[i] ?? Heart;
              return (
                <RevealItem key={i}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-card">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-bg-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-6 font-display text-xl text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {v.text}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-bg-card/40 py-12 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-section text-ink">
                {typedLocale === "fr"
                  ? "Prêt à vivre l'aventure ?"
                  : "Ready to live the adventure?"}
              </h2>
              <p className="mt-5 text-base text-ink-muted leading-relaxed">
                {typedLocale === "fr"
                  ? "Réservez maintenant et découvrez Essaouira avec nos guides locaux passionnés."
                  : "Book now and discover Essaouira with our passionate local guides."}
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
