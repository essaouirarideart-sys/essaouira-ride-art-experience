import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, Zap } from "lucide-react";
import type { Activity } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";
import { ActivityIcon } from "./ActivityIcon";

interface Props {
  activity: Activity;
  locale: Locale;
  dict: Dictionary;
  index?: number;
}

export function ActivityCard({ activity, locale, dict, index = 0 }: Props) {
  const href = localizedPath(locale, "activities", activity.slug[locale]);
  const lowestPrice = Math.min(
    ...activity.pricing.flatMap((t) => t.options.map((o) => o.price))
  );

  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/40 hover:shadow-card"
    >
      <div className="relative aspect-[4/5] shrink-0 overflow-hidden sm:aspect-[4/5]">
        <Image
          src={activity.heroImage}
          alt={activity.heroImageAlt[locale]}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          priority={index < 2}
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-bg-primary/60 px-2.5 py-1 backdrop-blur sm:left-5 sm:top-5 sm:gap-2 sm:px-3 sm:py-1.5">
          <ActivityIcon icon={activity.icon} className="h-3.5 w-3.5 text-gold" />
          <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
            {activity.shortTitle[locale]}
          </span>
        </div>

        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-primary/60 text-ink backdrop-blur transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-bg-primary sm:right-5 sm:top-5 sm:h-9 sm:w-9">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="relative -mt-12 flex min-h-0 flex-1 flex-col p-4 sm:-mt-16 sm:p-6 lg:p-7">
        <div className="flex flex-1 flex-col gap-3 sm:gap-4">
          <h3 className="line-clamp-2 min-h-[2.75rem] font-display text-lg leading-tight text-ink sm:min-h-[3.25rem] sm:text-2xl lg:min-h-[3.5rem] lg:text-[26px]">
            {activity.title[locale]}
          </h3>
          <p className="line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed text-ink-muted sm:min-h-[2.75rem]">
            {activity.tagline[locale]}
          </p>

          <div className="flex min-h-[1.25rem] flex-wrap items-center gap-2 text-xs sm:min-h-[1.5rem] sm:gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-gold text-gold" />
              ))}
              <span className="ml-1 font-semibold text-ink">4.9</span>
            </div>
            <span className="text-ink/40">·</span>
            <div className="flex items-center gap-1.5 text-gold">
              <Zap className="h-3 w-3 animate-pulse" />
              <span className="font-medium">
                {locale === "fr" ? "Places limitées" : "Limited spots"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex shrink-0 items-center justify-between gap-3 border-t border-border pt-4 sm:mt-6">
          <div className="min-w-0">
            <div className="text-[11px] uppercase tracking-widest2 text-ink-dim">
              {dict.activities.fromPrice}
            </div>
            <div className="font-display text-xl text-gold">{lowestPrice}€</div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-bg-primary transition-transform duration-300 group-hover:scale-105">
            {locale === "fr" ? "Réserver" : "Book Now"}
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
