import { site } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { formatEur } from "@/lib/formatPrice";

interface BuildMessageOptions {
  activityTitle?: string;
  locale: Locale;
  customMessage?: string;
}

export interface PackageBookingDetails {
  activityTitle: string;
  packageName: string;
  duration: string;
  optionLabel: string;
  price: number;
  categoryLabel?: string;
  locale: Locale;
}

function formatPrice(details: PackageBookingDetails): string {
  return formatEur(details.price);
}

export function buildPackageBookingMessage(details: PackageBookingDetails): string {
  const language = details.locale === "fr" ? "Français" : "English";
  const priceStr = formatPrice(details);
  const formula = details.categoryLabel
    ? `${details.categoryLabel} — ${details.optionLabel}`
    : `${details.packageName} — ${details.duration}`;

  if (details.locale === "fr") {
    return [
      "Bonjour, je souhaite réserver:",
      `Activité: ${details.activityTitle}`,
      `Formule: ${formula}`,
      ...(details.categoryLabel
        ? [`Catégorie: ${details.packageName}`]
        : [`Option: ${details.optionLabel}`]),
      `Tarif: ${priceStr}`,
      `Langue: ${language}`,
      "Nombre de personnes: ?",
    ].join("\n");
  }

  return [
    "Hello, I would like to book:",
    `Activity: ${details.activityTitle}`,
    `Package: ${formula}`,
    ...(details.categoryLabel
      ? [`Category: ${details.packageName}`]
      : [`Option: ${details.optionLabel}`]),
    `Price: ${priceStr}`,
    `Language: ${language}`,
    "Number of people: ?",
  ].join("\n");
}

export function buildPackageWhatsAppUrl(details: PackageBookingDetails): string {
  return buildWhatsAppUrl({
    locale: details.locale,
    customMessage: buildPackageBookingMessage(details),
  });
}

const TEMPLATES = {
  fr: {
    generic: "Bonjour, je suis intéressé(e) par vos expériences à Essaouira.",
    activity: (a: string) =>
      `Bonjour, je suis intéressé(e) par l'expérience « ${a} ». Pouvez-vous me confirmer les disponibilités ?`,
  },
  en: {
    generic: "Hello, I'm interested in your Essaouira experiences.",
    activity: (a: string) =>
      `Hello, I'm interested in the "${a}" experience. Can you confirm availability?`,
  },
} as const;

export function buildWhatsAppUrl(opts: BuildMessageOptions): string {
  const tpl = TEMPLATES[opts.locale];
  const text = opts.customMessage 
    ? opts.customMessage 
    : opts.activityTitle 
      ? tpl.activity(opts.activityTitle) 
      : tpl.generic;
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function telLink(): string {
  return `tel:${site.contact.phone}`;
}

export function mailtoLink(): string {
  return `mailto:${site.contact.email}`;
}
