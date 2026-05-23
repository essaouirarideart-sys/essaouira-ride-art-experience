"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/data/blog";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";
import { formatDate } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface Props {
  posts: BlogPost[];
  locale: Locale;
  dict: Dictionary;
  categories: string[];
  featured?: BlogPost;
}

export function BlogIndex({ posts, locale, dict, categories, featured }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeCategory) return posts;
    return posts.filter((p) => p.category[locale] === activeCategory);
  }, [posts, activeCategory, locale]);

  const gridPosts = useMemo(() => {
    if (!featured || activeCategory) return filtered;
    return filtered.filter((p) => p.slug.fr !== featured.slug.fr);
  }, [filtered, featured, activeCategory]);

  const allLabel = locale === "fr" ? "Tous" : "All";

  return (
    <>
      {featured && !activeCategory && (
        <section className="border-b border-border bg-bg-card/30 py-8 sm:py-12">
          <Container>
            <p className="eyebrow mb-4">
              {locale === "fr" ? "Article à la une" : "Featured story"}
            </p>
            <Link
              href={localizedPath(locale, "blog", featured.slug[locale])}
              className="group relative grid overflow-hidden rounded-3xl border border-gold/25 bg-bg-card lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
                <Image
                  src={featured.cover}
                  alt={featured.coverAlt[locale]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-bg-primary/40" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                <span className="text-[11px] uppercase tracking-widest2 text-gold">
                  {featured.category[locale]}
                </span>
                <h2 className="heading-section mt-4 text-balance text-ink transition-colors group-hover:text-gold">
                  {featured.title[locale]}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {featured.excerpt[locale]}
                </p>
                <div className="mt-4 flex gap-3 text-[11px] uppercase tracking-widest2 text-ink-dim">
                  <time dateTime={featured.publishedAt}>
                    {formatDate(featured.publishedAt, locale)}
                  </time>
                  <span>·</span>
                  <span>
                    {featured.readingMinutes} {dict.blog.readingTime}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest2 text-gold">
                  {dict.blog.readMore}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Container>
        </section>
      )}

      <section className="py-10 sm:py-16 lg:py-20">
        <Container>
          <div className="mb-8 flex flex-wrap gap-2 sm:mb-10">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300",
                activeCategory === null
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border text-ink-muted hover:border-gold/40 hover:text-ink"
              )}
            >
              {allLabel}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all duration-300",
                  activeCategory === cat
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border text-ink-muted hover:border-gold/40 hover:text-ink"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post, i) => (
              <BlogCard
                key={post.slug.fr}
                post={post}
                locale={locale}
                dict={dict}
                index={i}
              />
            ))}
          </div>

          {gridPosts.length === 0 && (
            <p className="py-12 text-center text-ink-muted">
              {locale === "fr"
                ? "Aucun article dans cette catégorie."
                : "No articles in this category."}
            </p>
          )}
        </Container>
      </section>

      <section className="border-t border-border bg-bg-card/40 py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-section text-ink">
              {locale === "fr"
                ? "Prêt à découvrir Essaouira ?"
                : "Ready to discover Essaouira?"}
            </h2>
            <p className="mt-4 text-sm text-ink-muted">
              {locale === "fr"
                ? "Réservez votre expérience et vivez l'aventure."
                : "Book your experience and live the adventure."}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={localizedPath(locale, "booking")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold"
              >
                {locale === "fr" ? "Réserver maintenant" : "Book Now"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={buildWhatsAppUrl({ locale })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#128C7E]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
