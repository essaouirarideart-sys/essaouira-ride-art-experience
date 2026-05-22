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
            <MessageCircle className="h-4 w-4" />
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
