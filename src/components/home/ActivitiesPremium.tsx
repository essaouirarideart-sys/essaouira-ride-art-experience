import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { activities } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";
import { IMAGE_WIDTH, optimizeCloudinaryUrl } from "@/lib/cloudinary";

export function ActivitiesPremium({ locale }: { locale: Locale }) {
  return (
    <section className="relative py-14 sm:py-24 lg:py-32" id="activities">
      <div className="container-page">
        <div className="reveal-up mb-10 text-center sm:mb-16">
          <span className="eyebrow">
            {locale === "fr" ? "Nos expériences" : "Our experiences"}
          </span>
          <h2 className="heading-section mx-auto mt-4 max-w-3xl text-ink">
            {locale === "fr"
              ? "Cheval, quad, dromadaire & art à Essaouira"
              : "Horse, quad, camel & art in Essaouira"}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-muted">
            {locale === "fr"
              ? "Chaque activité est une expérience unique, encadrée par des guides locaux passionnés."
              : "Every activity is a unique experience, led by passionate local guides."}
          </p>
        </div>

        <div className="reveal-stagger grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {activities.map((activity) => {
            const lowestPrice = Math.min(
              ...activity.pricing.flatMap((t) => t.options.map((o) => o.price))
            );
            return (
              <div key={activity.id} className="reveal-up">
                <Link
                  href={localizedPath(locale, "activities", activity.slug[locale])}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/40 hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden sm:h-56 lg:h-64">
                    <Image
                      src={optimizeCloudinaryUrl(activity.heroImage, IMAGE_WIDTH.card)}
                      alt={activity.heroImageAlt[locale]}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
                    <div className="absolute top-4 right-4 rounded-full bg-bg-primary/80 px-3 py-1.5 backdrop-blur-sm">
                      <span className="text-xs font-bold text-gold">
                        {locale === "fr" ? "Dès" : "From"} {lowestPrice}€
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                    <div>
                      <h3 className="font-display text-base leading-tight text-ink transition-colors duration-300 group-hover:text-gold sm:text-xl">
                        {activity.title[locale]}
                      </h3>
                      <p className="mt-2 hidden text-sm leading-relaxed text-ink-muted line-clamp-2 sm:block">
                        {activity.description[locale]}
                      </p>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gold sm:mt-5 sm:text-xs">
                      {locale === "fr" ? "Découvrir" : "Explore"}
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="reveal-up mt-8 flex justify-center sm:mt-12">
          <Link
            href={localizedPath(locale, "activities")}
            className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium uppercase tracking-widest2 text-ink transition-all duration-300 hover:border-gold hover:text-gold"
          >
            {locale === "fr" ? "Voir toutes les activités" : "View all activities"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
