import { Compass, Users, Sun, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

const ICONS = [Compass, Users, Sun, MessageCircle] as const;

export function WhyUs({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-card/40 py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-radial-sunset opacity-50" />
      <Container className="relative">
        <SectionHeading
          eyebrow={dict.home.whyEyebrow}
          title={dict.home.whyTitle}
          align="center"
        />

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.whyItems.map((item, i) => {
            const Icon = ICONS[i] ?? Compass;
            return (
              <RevealItem key={i}>
                <div className="group flex h-full flex-col items-start rounded-2xl border border-border bg-bg-card p-7 transition-all duration-500 hover:border-gold/40 hover:bg-bg-elevated">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-bg-primary text-gold transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-bg-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.text}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
