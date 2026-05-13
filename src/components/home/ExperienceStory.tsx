"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import type { Locale } from "@/i18n/config";

const IMAGES = [
  "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/21_alocv8.jpg",
  "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/23_uztexk.jpg",
  "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600151/6_o2zvcq.jpg",
];

export function ExperienceStory({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-border bg-bg-card/30 py-14 sm:py-24 lg:py-32"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-radial-sunset opacity-30" />

      <div className="container-page relative">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">
              {locale === "fr" ? "L'expérience" : "The experience"}
            </span>
            <h2 className="heading-section mt-4 text-ink max-w-lg">
              {locale === "fr"
                ? "Là où le désert rencontre l'océan"
                : "Where the desert meets the ocean"}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-muted sm:mt-8 sm:space-y-6 sm:text-base">
              <p>
                {locale === "fr"
                  ? "Imaginez galoper sur une plage infinie au coucher du soleil, le vent atlantique dans les cheveux, les dunes dorées à perte de vue. Essaouira n'est pas une destination comme les autres — c'est une expérience sensorielle totale."
                  : "Imagine galloping on an endless beach at sunset, the Atlantic wind in your hair, golden dunes stretching to the horizon. Essaouira is not just a destination — it's a total sensory experience."}
              </p>
              <p>
                {locale === "fr"
                  ? "Entre les murs bleus et blancs de la médina, les arômes d'épices et de sel marin, et la lumière unique qui baigne chaque instant — chaque activité devient un souvenir gravé pour toujours."
                  : "Between the blue and white walls of the medina, the aromas of spices and sea salt, and the unique light that bathes every moment — each activity becomes a memory engraved forever."}
              </p>
              <p>
                {locale === "fr"
                  ? "Nos guides locaux vous emmènent dans les meilleurs spots : plage de Diabat, forêt d'arganiers, dunes secrètes face à Sidi Kaouki. Des lieux que seuls les locaux connaissent."
                  : "Our local guides take you to the best spots: Diabat beach, argan forest, secret dunes facing Sidi Kaouki. Places only locals know."}
              </p>
            </div>

            {/* Keywords */}
            <div className="mt-6 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {(locale === "fr"
                ? ["Coucher de soleil", "Plage", "Dunes", "Océan", "Liberté"]
                : ["Sunset", "Beach", "Dunes", "Ocean", "Freedom"]
              ).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold sm:px-4 sm:py-1.5 sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative grid grid-cols-2 gap-3 sm:gap-4"
          >
            {/* Large image */}
            <div className="col-span-2 relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <Image
                src={IMAGES[0]}
                alt={
                  locale === "fr"
                    ? "Coucher de soleil sur la plage d'Essaouira"
                    : "Sunset on Essaouira beach"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent" />
            </div>
            {/* Two smaller images */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={IMAGES[1]}
                alt={
                  locale === "fr"
                    ? "Aventure dans les dunes d'Essaouira"
                    : "Adventure in Essaouira dunes"
                }
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 to-transparent" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={IMAGES[2]}
                alt={
                  locale === "fr"
                    ? "Océan Atlantique à Essaouira"
                    : "Atlantic Ocean in Essaouira"
                }
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-bg-primary/90 px-4 py-2 backdrop-blur-sm shadow-lg sm:px-6 sm:py-3">
              <span className="text-xs font-display text-gold sm:text-sm">
                {locale === "fr"
                  ? "✨ Depuis 2018 à Essaouira"
                  : "✨ Since 2018 in Essaouira"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
