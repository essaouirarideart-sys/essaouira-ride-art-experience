"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Sparkles } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface Props {
  post: BlogPost;
  locale: Locale;
  dict: Dictionary;
  index?: number;
  featured?: boolean;
}

export function BlogCard({ post, locale, dict, index = 0, featured }: Props) {
  const href = localizedPath(locale, "blog", post.slug[locale]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className={cn("h-full", featured && "sm:col-span-2 lg:col-span-2")}
    >
      <Link
        href={href}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card",
          "transition-[border-color,box-shadow] duration-500",
          "hover:border-gold/45 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_40px_rgba(212,165,116,0.1)]"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden",
            featured ? "aspect-[21/10] sm:aspect-[2/1]" : "aspect-[4/3]"
          )}
        >
          <Image
            src={post.cover}
            alt={post.coverAlt[locale]}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 90vw, 33vw"
            }
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
            <span className="rounded-full border border-gold/30 bg-bg-primary/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-gold backdrop-blur-md">
              {post.category[locale]}
            </span>
            {post.trending && (
              <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/40 bg-orange-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-300">
                <Flame className="h-3 w-3" />
                Trending
              </span>
            )}
            {post.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                <Sparkles className="h-3 w-3" />
                {locale === "fr" ? "À la une" : "Featured"}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest2 text-ink-dim sm:text-[11px]">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt, locale)}
            </time>
            <span>·</span>
            <span>
              {post.readingMinutes} {dict.blog.readingTime}
            </span>
          </div>
          <h2
            className={cn(
              "line-clamp-2 font-display leading-tight text-ink transition-colors duration-300 group-hover:text-gold",
              featured ? "text-xl sm:text-3xl" : "text-lg sm:text-xl"
            )}
          >
            {post.title[locale]}
          </h2>
          <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted">
            {post.excerpt[locale]}
          </p>
          <span className="mt-auto text-xs font-medium uppercase tracking-widest2 text-gold transition-transform duration-300 group-hover:translate-x-1">
            {dict.blog.readMore} →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
