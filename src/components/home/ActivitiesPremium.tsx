"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { activities } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";

export function ActivitiesPremium({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-14 sm:py-24 lg:py-32" id="activities">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="eyebrow">
            {locale === "fr" ? "Nos expériences" : "Our experiences"}
          </span>
          <h2 className="heading-section mt-4 text-ink max-w-3xl mx-auto">
            {locale === "fr"
              ? "Cheval, quad, dromadaire & art à Essaouira"
              : "Horse, quad, camel & art in Essaouira"}
          </h2>
          <p className="mt-5 text-ink-muted max-w-xl mx-auto text-base">
            {locale === "fr"
              ? "Chaque activité est une expérience unique, encadrée par des guides locaux passionnés."
              : "Every activity is a unique experience, led by passionate local guides."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {activities.map((activity, i) => {
            const lowestPrice = Math.min(
              ...activity.pricing.flatMap((t) => t.options.map((o) => o.price))
            );
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <Link
                  href={localizedPath(locale, "activities", activity.slug[locale])}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-all duration-500 hover:border-gold/40 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden sm:h-56 lg:h-64">
                    <Image
                      src={activity.heroImage}
                      alt={activity.heroImageAlt[locale]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />

                    {/* Price badge */}
                    <div className="absolute top-4 right-4 rounded-full bg-bg-primary/80 px-3 py-1.5 backdrop-blur-sm">
                      <span className="text-xs font-bold text-gold">
                        {locale === "fr" ? "Dès" : "From"} {lowestPrice}€
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                    <div>
                      <h3 className="font-display text-base text-ink leading-tight group-hover:text-gold transition-colors duration-300 sm:text-xl">
                        {activity.title[locale]}
                      </h3>
                      <p className="mt-2 hidden text-sm text-ink-muted leading-relaxed line-clamp-2 sm:block">
                        {activity.description[locale]}
                      </p>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gold sm:mt-5 sm:text-xs">
                      {locale === "fr" ? "Découvrir" : "Explore"}
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex justify-center sm:mt-12"
        >
          <Link
            href={localizedPath(locale, "activities")}
            className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium uppercase tracking-widest2 text-ink transition-all duration-300 hover:border-gold hover:text-gold"
          >
            {locale === "fr" ? "Voir toutes les activités" : "View all activities"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
