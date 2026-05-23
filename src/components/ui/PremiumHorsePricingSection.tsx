"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Sunrise,
  Mountain,
  Crown,
  Sparkles,
  MessageCircle,
  FileText,
  ArrowRight,
} from "lucide-react";
import type {
  PremiumPackage,
  PremiumPackageIcon,
  PremiumPricingCategory,
  PremiumPricingGroup,
} from "@/data/activities";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { premiumPackageSelectionKey } from "@/lib/premiumBooking";
import { formatEur } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";

const ICONS: Record<
  PremiumPackageIcon,
  React.ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  photography: Camera,
  sunrise: Sunrise,
  trek: Mountain,
  luxury: Crown,
};

interface Props {
  category: PremiumPricingCategory;
  locale: Locale;
  dict: Dictionary;
  selectedPackageKey: string | null;
  onReserveWhatsApp: (
    group: PremiumPricingGroup,
    pkg: PremiumPackage
  ) => void;
  onReserveForm: (group: PremiumPricingGroup, pkg: PremiumPackage) => void;
}

function PremiumPackageCard({
  pkg,
  group,
  locale,
  dict,
  isSelected,
  onReserveWhatsApp,
  onReserveForm,
  index,
}: {
  pkg: PremiumPackage;
  group: PremiumPricingGroup;
  locale: Locale;
  dict: Dictionary;
  isSelected: boolean;
  onReserveWhatsApp: Props["onReserveWhatsApp"];
  onReserveForm: Props["onReserveForm"];
  index: number;
}) {
  const Icon = ICONS[pkg.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border transition-[box-shadow,border-color] duration-500",
        pkg.highlighted
          ? "border-gold/50 shadow-[0_0_56px_rgba(212,165,116,0.18)]"
          : "border-white/10 hover:border-gold/35",
        isSelected && "ring-2 ring-gold/60 shadow-gold"
      )}
    >
      {pkg.image && (
        <div className="absolute inset-0">
          <Image
            src={pkg.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover opacity-25 transition-opacity duration-700 group-hover:opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/92 to-[#0a0a0a]/75" />
        </div>
      )}
      {!pkg.image && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#141210] via-[#0a0a0a] to-[#1a1510]" />
      )}

      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

      <div className="relative flex flex-1 flex-col p-4 sm:p-6">
        {pkg.highlighted && (
          <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest2 text-gold sm:text-[10px]">
            <Sparkles className="h-3 w-3" />
            {locale === "fr" ? "Signature" : "Signature"}
          </span>
        )}

        <div className="mb-4 flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold shadow-[0_0_20px_rgba(212,165,116,0.12)] sm:h-11 sm:w-11">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="font-display text-base leading-snug text-ink sm:text-lg">
              {pkg.name[locale]}
            </h4>
            {pkg.tagline && (
              <p className="mt-1 text-xs leading-relaxed text-ink-muted sm:text-sm">
                {pkg.tagline[locale]}
              </p>
            )}
          </div>
        </div>

        {pkg.duration && (
          <p className="mb-3 text-[10px] uppercase tracking-widest2 text-gold/80 sm:text-[11px]">
            {pkg.duration[locale]}
          </p>
        )}

        <div className="mt-auto border-t border-white/10 pt-4">
          <p className="font-display text-2xl tracking-tight text-gold sm:text-3xl">
            {formatEur(pkg.priceEur)}
          </p>

          <button
            type="button"
            onClick={() => onReserveForm(group, pkg)}
            className={cn(
              "mt-4 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 sm:py-3.5 sm:text-xs",
              pkg.highlighted
                ? "bg-gradient-gold text-bg-primary shadow-lg hover:-translate-y-0.5 hover:shadow-gold"
                : "border border-gold/40 bg-gold/5 text-ink hover:border-gold hover:bg-gold/15 hover:shadow-[0_0_24px_rgba(212,165,116,0.15)]"
            )}
          >
            {/* <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> */}
            {dict.activities.bookThis}
            <ArrowRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5" />
          </button>
          {/* <button
            type="button"
            onClick={() => onReserveForm(group, pkg)}
            className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-wider text-ink-muted transition-colors hover:border-gold/30 hover:text-gold sm:text-[10px]"
          >
            <FileText className="h-3 w-3" />
            {locale === "fr" ? "Formulaire" : "Online form"}
          </button> */}
        </div>
      </div>
    </motion.article>
  );
}

function PremiumGroupBlock({
  group,
  locale,
  dict,
  selectedPackageKey,
  onReserveWhatsApp,
  onReserveForm,
  groupIndex,
}: {
  group: PremiumPricingGroup;
  locale: Locale;
  dict: Dictionary;
  selectedPackageKey: string | null;
  onReserveWhatsApp: Props["onReserveWhatsApp"];
  onReserveForm: Props["onReserveForm"];
  groupIndex: number;
}) {
  const GroupIcon = ICONS[group.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: groupIndex * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative overflow-hidden rounded-3xl border border-gold/20 bg-[#080808]"
    >
      {group.backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={group.backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/95 to-[#0a0a0a]" />
        </div>
      )}

      <div className="relative px-4 py-6 sm:px-8 sm:py-9">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold/5 text-gold">
              <GroupIcon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="font-display text-xl text-ink sm:text-2xl">
                {group.title[locale]}
              </h3>
              {group.subtitle && (
                <p className="mt-1 max-w-lg text-xs leading-relaxed text-ink-muted sm:text-sm">
                  {group.subtitle[locale]}
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-3 sm:gap-4",
            group.packages.length >= 5
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : group.packages.length > 2
                ? "sm:grid-cols-2"
                : "lg:grid-cols-2"
          )}
        >
          {group.packages.map((pkg, i) => (
            <PremiumPackageCard
              key={pkg.id}
              pkg={pkg}
              group={group}
              locale={locale}
              dict={dict}
              isSelected={
                selectedPackageKey ===
                premiumPackageSelectionKey(group.id, pkg.id)
              }
              onReserveWhatsApp={onReserveWhatsApp}
              onReserveForm={onReserveForm}
              index={i}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function PremiumHorsePricingSection({
  category,
  locale,
  dict,
  selectedPackageKey,
  onReserveWhatsApp,
  onReserveForm,
}: Props) {
  return (
    <div
      id="premium-pricing"
      className="relative mt-14 scroll-mt-24 border-t border-gold/20 pt-12 sm:mt-20 sm:scroll-mt-28 sm:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 text-center sm:mb-12"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-gold">
          <Crown className="h-3 w-3" />
          {locale === "fr" ? "Collection Premium" : "Premium Collection"}
        </span>
        <h3 className="heading-section mt-5 text-balance text-ink">
          {category.title[locale]}
        </h3>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
          {category.intro[locale]}
        </p>
      </motion.div>

      <div className="space-y-6 sm:space-y-8">
        {category.groups.map((group, i) => (
          <PremiumGroupBlock
            key={group.id}
            group={group}
            locale={locale}
            dict={dict}
            selectedPackageKey={selectedPackageKey}
            onReserveWhatsApp={onReserveWhatsApp}
            onReserveForm={onReserveForm}
            groupIndex={i}
          />
        ))}
      </div>
    </div>
  );
}
