"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Check } from "lucide-react";
import { activities } from "@/data/activities";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { cn } from "@/lib/utils";

interface Props {
  locale: Locale;
  dict: Dictionary;
  preselectedActivity?: string;
}

export function BookingForm({ locale, dict, preselectedActivity }: Props) {
  const [activity, setActivity] = useState(preselectedActivity ?? "");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const date = String(fd.get("date") ?? "");
    const people = String(fd.get("people") ?? "");
    const message = String(fd.get("message") ?? "");
    const act = String(fd.get("activity") ?? "");

    const lines =
      locale === "fr"
        ? [
            `Bonjour, je souhaite réserver une expérience.`,
            `Nom : ${name}`,
            `Email : ${email}`,
            `Téléphone : ${phone}`,
            `Activité : ${act || "À définir"}`,
            `Date souhaitée : ${date || "Flexible"}`,
            `Personnes : ${people || "1"}`,
            message ? `Message : ${message}` : "",
          ]
        : [
            `Hello, I'd like to book an experience.`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Activity: ${act || "To be defined"}`,
            `Preferred date: ${date || "Flexible"}`,
            `People: ${people || "1"}`,
            message ? `Message: ${message}` : "",
          ];

    const text = lines.filter(Boolean).join("\n");
    const url = `https://wa.me/212768170147?text=${encodeURIComponent(text)}`;
    setSent(true);
    setTimeout(() => window.open(url, "_blank"), 600);
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-bg-primary/60 px-4 py-3 text-sm text-ink placeholder:text-ink-dim outline-none transition-colors duration-300 focus:border-gold";
  const labelClass =
    "block text-[11px] font-medium uppercase tracking-widest2 text-ink-muted mb-2";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-gold/40 bg-bg-card p-12 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-bg-primary">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h3 className="font-display text-2xl text-ink">
          {dict.booking.form.success}
        </h3>
        <p className="text-sm text-ink-muted">
          {dict.booking.form.successWhatsapp}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {dict.booking.form.name}
          </label>
          <input id="name" name="name" required type="text" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {dict.booking.form.email}
          </label>
          <input id="email" name="email" required type="email" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            {dict.booking.form.phone}
          </label>
          <input id="phone" name="phone" required type="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="people" className={labelClass}>
            {dict.booking.form.people}
          </label>
          <input
            id="people"
            name="people"
            type="number"
            min={1}
            max={20}
            defaultValue={2}
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="activity" className={labelClass}>
            {dict.booking.form.activity}
          </label>
          <select
            id="activity"
            name="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className={cn(fieldClass, "appearance-none")}
          >
            <option value="">{dict.booking.form.activityChoose}</option>
            {activities.map((a) => (
              <option key={a.id} value={a.title[locale]}>
                {a.title[locale]}
              </option>
            ))}
            <option value="">{dict.booking.form.anyActivity}</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className={labelClass}>
            {dict.booking.form.date}
          </label>
          <input id="date" name="date" type="date" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            {dict.booking.form.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={cn(fieldClass, "resize-none")}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-dim">
          {locale === "fr"
            ? "Aucune carte requise. Confirmation par WhatsApp."
            : "No card required. WhatsApp confirmation."}
        </p>
        <div className="flex gap-3">
          <a
            href={buildWhatsAppUrl({ locale })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-medium text-ink hover:border-[#25D366] hover:text-[#25D366]"
          >
           <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {dict.booking.form.whatsappAlt}
          </a>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-xs font-semibold tracking-wide text-bg-primary transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-gold"
          >
            <Send className="h-4 w-4" />
            {dict.booking.form.submit}
          </button>
        </div>
      </div>
    </form>
  );
}
