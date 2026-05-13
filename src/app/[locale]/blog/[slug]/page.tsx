import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/data/blog";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import {
  buildMetadata,
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { localizedPath } from "@/lib/paths";
import { formatDate } from "@/lib/utils";
import { site } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const p of blogPosts) {
      params.push({ locale, slug: p.slug[locale] });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getBlogPostBySlug(slug, locale);
  if (!post) return {};
  return buildMetadata({
    locale,
    segment: "blog",
    slug: post.slug[locale],
    title: post.title[locale],
    description: post.seo.description[locale],
    keywords: post.seo.keywords[locale],
    image: post.cover,
    type: "article",
  });
}

/**
 * Render inline markdown: **bold**, [links](/path), and basic formatting.
 * Keeps blog body authoring lightweight without an MD parser dep.
 */
function renderInlineMarkdown(text: string): React.ReactNode[] {
  // First handle links [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const boldRegex = /\*\*([^*]+)\*\*/g;
  
  let result = text;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  // Combined regex for links and bold
  const combinedRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let match;

  while ((match = combinedRegex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      elements.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>);
    }

    if (match[2] && match[3]) {
      // It's a link [text](url)
      elements.push(
        <Link key={key++} href={match[3]} className="text-gold hover:underline">
          {match[2]}
        </Link>
      );
    } else if (match[4]) {
      // It's bold **text**
      elements.push(<strong key={key++}>{match[4]}</strong>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }

  return elements.length > 0 ? elements : [<span key={0}>{text}</span>];
}

/**
 * Render a paragraph, detecting if it's a heading (## or ###)
 */
function renderParagraph(para: string, index: number): React.ReactNode {
  // Check for H2 heading
  if (para.startsWith("## ")) {
    return (
      <h2 key={index} className="font-display text-xl text-ink mt-8 mb-4 first:mt-0">
        {para.slice(3)}
      </h2>
    );
  }
  // Check for H3 heading
  if (para.startsWith("### ")) {
    return (
      <h3 key={index} className="font-display text-lg text-ink mt-6 mb-3">
        {para.slice(4)}
      </h3>
    );
  }
  // Regular paragraph with inline formatting
  return <p key={index}>{renderInlineMarkdown(para)}</p>;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const post = getBlogPostBySlug(slug, typedLocale);
  if (!post) notFound();
  const dict = getDictionary(typedLocale);
  const related = getRelatedBlogPosts(post.slug.fr);

  const url = `${site.url}${localizedPath(typedLocale, "blog", post.slug[typedLocale])}`;

  const breadcrumbs = breadcrumbJsonLd([
    { name: dict.nav.home, url: `${site.url}${localizedPath(typedLocale)}` },
    {
      name: dict.nav.blog,
      url: `${site.url}${localizedPath(typedLocale, "blog")}`,
    },
    { name: post.title[typedLocale], url },
  ]);

  const articleLd = articleJsonLd({
    title: post.title[typedLocale],
    description: post.seo.description[typedLocale],
    image: post.cover,
    url,
    publishedAt: post.publishedAt,
    author: post.author,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      {/* HERO */}
      <section className="relative -mt-16 sm:-mt-20">
        <div className="relative h-[40svh] min-h-[300px] overflow-hidden sm:h-[55svh] sm:min-h-[420px]">
          <Image
            src={post.cover}
            alt={post.coverAlt[typedLocale]}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-bg-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
        </div>
      </section>

      {/* CONTENT */}
      <article className="relative -mt-24 pb-12 sm:-mt-32 sm:pb-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-bg-card p-5 sm:rounded-3xl sm:p-12">
              <Link
                href={localizedPath(typedLocale, "blog")}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest2 text-ink-muted hover:text-gold"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {dict.blog.backToBlog}
              </Link>

              <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-ink-dim">
                <span className="rounded-full border border-gold/30 bg-bg-primary/60 px-3 py-1 text-gold">
                  {post.category[typedLocale]}
                </span>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt, typedLocale)}
                </time>
                <span>·</span>
                <span>
                  {post.readingMinutes} {dict.blog.readingTime}
                </span>
              </div>

              <h1 className="heading-display mt-6 text-balance text-ink">
                {post.title[typedLocale]}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:mt-5 sm:text-lg">
                {post.excerpt[typedLocale]}
              </p>

              <div className="mt-7 space-y-4 text-sm leading-relaxed text-ink/90 sm:mt-10 sm:space-y-5 sm:text-base lg:text-lg">
                {post.body[typedLocale].map((para, i) => renderParagraph(para, i))}
              </div>
            </div>
          </Reveal>
        </Container>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-border bg-bg-card/40 py-12 sm:py-20 lg:py-24">
          <Container>
            <Reveal>
              <span className="eyebrow">{dict.blog.relatedArticles}</span>
              <h2 className="heading-section mt-5 text-balance text-ink">
                {typedLocale === "fr"
                  ? "Continuez la lecture"
                  : "Continue reading"}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug.fr}
                  href={localizedPath(typedLocale, "blog", p.slug[typedLocale])}
                  className="group flex gap-5 overflow-hidden rounded-2xl border border-border bg-bg-card p-4 transition-all duration-500 hover:border-gold/40"
                >
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={p.cover}
                      alt={p.coverAlt[typedLocale]}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] uppercase tracking-widest2 text-gold">
                      {p.category[typedLocale]}
                    </span>
                    <h3 className="mt-1 font-display text-base leading-snug text-ink sm:text-lg">
                      {p.title[typedLocale]}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] uppercase tracking-widest2 text-ink-muted group-hover:text-gold">
                      {dict.blog.readMore}
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border py-10 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-section text-ink">
                {typedLocale === "fr"
                  ? "Prêt à vivre l'expérience ?"
                  : "Ready to live the experience?"}
              </h2>
              <p className="mt-4 text-sm text-ink-muted">
                {typedLocale === "fr"
                  ? "Réservez votre activité à Essaouira et créez des souvenirs inoubliables."
                  : "Book your activity in Essaouira and create unforgettable memories."}
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
