import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GalleryWithFilters } from "@/components/ui/GalleryWithFilters";
import { Reveal } from "@/components/ui/Reveal";
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
    segment: "gallery",
    title:
      locale === "fr"
        ? "Galerie Photos | Activités à Essaouira — Cheval, Quad, Dromadaire"
        : "Photo Gallery | Essaouira Activities — Horse, Quad, Camel",
    description:
      locale === "fr"
        ? "Photos de nos activités à Essaouira : balade à cheval sur la plage de Diabat, quad dans les dunes, dromadaire au coucher du soleil."
        : "Photos of our Essaouira activities: horse riding on Diabat beach, quad biking in the dunes, sunset camel rides.",
    keywords:
      locale === "fr"
        ? [
            "photos essaouira",
            "galerie activités essaouira",
            "cheval plage essaouira",
            "quad dunes essaouira",
          ]
        : [
            "essaouira photos",
            "essaouira activities gallery",
            "horse riding beach essaouira",
            "quad dunes essaouira",
          ],
  });
}

export default async function GalleryPage({
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
            <span className="eyebrow">{dict.gallery.title}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {typedLocale === "fr"
                ? "Des images qui parlent d'elles-mêmes"
                : "Images that speak for themselves"}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.gallery.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <GalleryWithFilters locale={typedLocale} />
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-bg-card/40 py-12 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-section text-ink">
                {typedLocale === "fr"
                  ? "Envie de vivre ces moments ?"
                  : "Want to live these moments?"}
              </h2>
              <p className="mt-4 text-sm text-ink-muted">
                {typedLocale === "fr"
                  ? "Réservez votre activité et créez vos propres souvenirs."
                  : "Book your activity and create your own memories."}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={localizedPath(typedLocale, "activities")}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/40 px-6 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  {typedLocale === "fr" ? "Voir les activités" : "View activities"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
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
