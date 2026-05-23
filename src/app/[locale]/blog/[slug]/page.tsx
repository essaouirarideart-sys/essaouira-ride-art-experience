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
import { BlogShareBar } from "@/components/blog/BlogShareBar";
import {
  buildMetadata,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
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
    slugByLocale: post.slug,
    title: post.title[locale],
    description: post.seo.description[locale],
    keywords: post.seo.keywords[locale],
    image: post.cover,
    type: "article",
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [post.author],
      section: post.category[locale],
    },
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
  const related = getRelatedBlogPosts(post.slug.fr, 3, post.category.fr);

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
    readingMinutes: post.readingMinutes,
    keywords: post.seo.keywords[typedLocale],
  });

  const faqLd =
    post.faq && post.faq.length > 0
      ? faqJsonLd(
          post.faq.map((item) => ({
            question: item.question[typedLocale],
            answer: item.answer[typedLocale],
          }))
        )
      : null;

  return (
    <>
      <BlogShareBar
        url={url}
        title={post.title[typedLocale]}
        locale={typedLocale}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

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

              {post.faq && post.faq.length > 0 && (
                <div className="mt-10 border-t border-border pt-8 sm:mt-12">
                  <h2 className="font-display text-xl text-ink sm:text-2xl">
                    {typedLocale === "fr"
                      ? "Questions fréquentes"
                      : "Frequently asked questions"}
                  </h2>
                  <dl className="mt-6 space-y-6">
                    {post.faq.map((item, i) => (
                      <div key={i}>
                        <dt className="font-medium text-ink">
                          {item.question[typedLocale]}
                        </dt>
                        <dd className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                          {item.answer[typedLocale]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
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
            <div className="mt-8 grid auto-rows-fr gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
