/**
 * Tiny class-name combiner — no extra deps.
 */
export function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(" ");
}

export function formatPrice(amount: number): string {
  return `${amount}€`;
}

export function formatDate(iso: string, locale: "fr" | "en"): string {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
