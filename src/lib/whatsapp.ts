import { site } from "@/data/site";
import type { Locale } from "@/i18n/config";

interface BuildMessageOptions {
  activityTitle?: string;
  locale: Locale;
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
  const text = opts.activityTitle ? tpl.activity(opts.activityTitle) : tpl.generic;
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function telLink(): string {
  return `tel:${site.contact.phone}`;
}

export function mailtoLink(): string {
  return `mailto:${site.contact.email}`;
}
