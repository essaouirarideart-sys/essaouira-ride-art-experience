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
