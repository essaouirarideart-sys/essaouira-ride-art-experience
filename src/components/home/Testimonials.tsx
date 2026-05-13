"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { testimonials, happyClientsCount } from "@/data/testimonials";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export function Testimonials({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 4;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = () => setActiveIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setActiveIndex((i) => Math.max(i - 1, 0));

  return (
    <section ref={ref} className="py-24 sm:py-32 overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow={dict.home.testimonialsEyebrow}
            title={dict.home.testimonialsTitle}
          />
          <div className="flex items-center gap-4">
            <div className="text-sm text-ink-muted">
              <span className="font-display text-2xl text-gold">{happyClientsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}+</span>
              <span className="ml-2">{locale === "fr" ? "clients satisfaits" : "happy clients"}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-all duration-300 hover:border-gold hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                disabled={activeIndex === maxIndex}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-all duration-300 hover:border-gold hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="flex gap-5 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * (100 / visibleCount + 1.25)}%)` }}
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex-shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] flex flex-col rounded-2xl border border-border bg-bg-card p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-card"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/20" />
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink">
                &ldquo;{t.quote[locale]}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-display text-base text-ink">{t.name}</div>
                <div className="text-[11px] uppercase tracking-widest2 text-ink-dim">
                  {t.origin[locale]} · {t.activity[locale]}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Mobile navigation dots */}
        <div className="flex sm:hidden justify-center gap-2 mt-6">
          {testimonials.slice(0, maxIndex + 1).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-gold" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
