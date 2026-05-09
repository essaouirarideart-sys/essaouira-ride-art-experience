import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blog";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { buildMetadata } from "@/lib/seo";
import { localizedPath } from "@/lib/paths";
import { formatDate } from "@/lib/utils";
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
    segment: "blog",
    title:
      locale === "fr"
        ? "Blog | Que Faire à Essaouira — Conseils & Guides Activités"
        : "Blog | Things to Do in Essaouira — Tips & Activity Guides",
    description:
      locale === "fr"
        ? "Découvrez nos articles et guides sur Essaouira : que faire, meilleurs spots, coucher de soleil, activités plage. Conseils de locaux."
        : "Discover our articles and guides about Essaouira: things to do, best spots, sunset, beach activities. Local tips.",
    keywords:
      locale === "fr"
        ? ["blog essaouira", "que faire essaouira", "guide essaouira", "activités essaouira blog"]
        : ["essaouira blog", "things to do essaouira", "essaouira guide", "essaouira activities blog"],
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  const sorted = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );

  return (
    <>
      <section className="border-b border-border bg-bg-card/40 py-12 sm:py-20 lg:py-28">
        <Container>
          <Reveal>
            <span className="eyebrow">{dict.blog.title}</span>
            <h1 className="heading-display mt-5 max-w-3xl text-balance text-ink">
              {typedLocale === "fr"
                ? "Guides & conseils pour votre séjour"
                : "Guides & tips for your stay"}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {dict.blog.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-10 sm:py-20 lg:py-24">
        <Container>
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <RevealItem key={post.slug.fr}>
                <Link
                  href={localizedPath(typedLocale, "blog", post.slug[typedLocale])}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/40 hover:shadow-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.coverAlt[typedLocale]}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-bg-primary/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-gold backdrop-blur">
                      {post.category[typedLocale]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-ink-dim">
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt, typedLocale)}
                      </time>
                      <span>·</span>
                      <span>
                        {post.readingMinutes} {dict.blog.readingTime}
                      </span>
                    </div>
                    <h2 className="font-display text-xl leading-tight text-ink sm:text-2xl">
                      {post.title[typedLocale]}
                    </h2>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {post.excerpt[typedLocale]}
                    </p>
                    <span className="mt-auto text-xs font-medium uppercase tracking-widest2 text-gold transition-transform duration-300 group-hover:translate-x-1">
                      {dict.blog.readMore} →
                    </span>
                  </div>
                </Link>
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
                  ? "Prêt à découvrir Essaouira ?"
                  : "Ready to discover Essaouira?"}
              </h2>
              <p className="mt-4 text-sm text-ink-muted">
                {typedLocale === "fr"
                  ? "Réservez votre expérience et vivez l'aventure."
                  : "Book your experience and live the adventure."}
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
