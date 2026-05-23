import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ActivityCard } from "@/components/ui/ActivityCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { activities } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";

export function ActivitiesGrid({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative py-24 sm:py-32" id="activities">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={dict.home.activitiesEyebrow}
            title={dict.home.activitiesTitle}
            subtitle={dict.home.activitiesSubtitle}
          />
          <Link
            href={localizedPath(locale, "activities")}
            className="group hidden items-center gap-2 text-sm font-medium uppercase tracking-widest2 text-gold lg:inline-flex"
          >
            {dict.cta.seeAll}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <RevealStagger className="mt-12 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {activities.map((activity, i) => (
            <RevealItem key={activity.id} className="h-full">
              <ActivityCard
                activity={activity}
                locale={locale}
                dict={dict}
                index={i}
              />
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-12 flex justify-center lg:hidden">
          <Link
            href={localizedPath(locale, "activities")}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-widest2 text-ink hover:border-gold hover:text-gold"
          >
            {dict.cta.seeAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
