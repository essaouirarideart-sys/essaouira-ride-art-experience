"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import type { Activity, PricingTier, PricingOption } from "@/data/activities";
import type { Locale } from "@/i18n/config";
import { buildPackageWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  activity: Activity;
  locale: Locale;
  prefilledData?: {
    tier: PricingTier;
    option: PricingOption;
  } | null;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export function InlineBookingForm({ activity, locale, prefilledData }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    people: "2",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Update form when prefilled data changes
  useEffect(() => {
    if (prefilledData) {
      // Scroll to form with smooth animation
      const formElement = document.getElementById("booking-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
        // Add highlight effect
        formElement.classList.add("form-highlight");
        setTimeout(() => {
          formElement.classList.remove("form-highlight");
        }, 2000);
      }
    }
  }, [prefilledData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          date: formData.date || undefined,
          people: formData.people,
          activity: activity.title[locale],
          packageName: prefilledData?.tier.name[locale] || "Standard",
          duration: prefilledData?.tier.duration[locale] || "",
          price: prefilledData?.option.price || 0,
          message: formData.message || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send booking request");
      }

      setStatus("success");
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          people: "2",
          message: "",
        });
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="booking-form"
      className="scroll-mt-20 border-y border-border bg-bg-card/40 py-12 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-center mb-7 sm:mb-10">
            <span className="eyebrow">
              {locale === "fr" ? "Réservation" : "Booking"}
            </span>
            <h2 className="heading-section mt-4 text-ink">
              {locale === "fr"
                ? "Réservez votre expérience"
                : "Book Your Experience"}
            </h2>
            <p className="mt-4 text-base text-ink-muted">
              {locale === "fr"
                ? "Remplissez le formulaire ci-dessous et nous vous contacterons rapidement pour confirmer votre réservation."
                : "Fill out the form below and we'll contact you shortly to confirm your booking."}
            </p>
          </div>

          {/* Selected Package Display */}
          {prefilledData && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8 rounded-2xl border border-gold/30 bg-gold/5 p-6"
            >
              <h3 className="font-display text-lg text-gold mb-4">
                {locale === "fr" ? "Forfait sélectionné" : "Selected Package"}
              </h3>
              <div className="grid gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-muted">
                    {locale === "fr" ? "Forfait" : "Package"}:
                  </span>
                  <span className="font-semibold text-ink">
                    {prefilledData.tier.name[locale]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">
                    {locale === "fr" ? "Durée" : "Duration"}:
                  </span>
                  <span className="font-semibold text-ink">
                    {prefilledData.tier.duration[locale]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">
                    {locale === "fr" ? "Option" : "Option"}:
                  </span>
                  <span className="font-semibold text-ink">
                    {prefilledData.option.label[locale]}
                  </span>
                </div>
                <div className="flex justify-between border-t border-gold/20 pt-3">
                  <span className="text-ink-muted">
                    {locale === "fr" ? "Prix" : "Price"}:
                  </span>
                  <span className="font-display text-xl text-gold">
                    {prefilledData.option.price}€
                  </span>
                </div>
              </div>
              <a
                href={buildPackageWhatsAppUrl({
                  locale,
                  activityTitle: activity.title[locale],
                  packageName: prefilledData.tier.name[locale],
                  duration: prefilledData.tier.duration[locale],
                  optionLabel: prefilledData.option.label[locale],
                  price: prefilledData.option.price,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#128C7E] sm:text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                {locale === "fr"
                  ? "Confirmer sur WhatsApp"
                  : "Confirm on WhatsApp"}
              </a>
            </motion.div>
          )}

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  {locale === "fr" ? "Nom complet" : "Full Name"}{" "}
                  <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-ink placeholder:text-ink-dim focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder={locale === "fr" ? "Votre nom" : "Your name"}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  {locale === "fr" ? "Téléphone / WhatsApp" : "Phone / WhatsApp"}{" "}
                  <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-ink placeholder:text-ink-dim focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="+212 6XX XXX XXX"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  Email {locale === "fr" ? "(optionnel)" : "(optional)"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-ink placeholder:text-ink-dim focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="email@example.com"
                />
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  {locale === "fr" ? "Date souhaitée" : "Preferred Date"}
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>
            </div>

            {/* Number of People */}
            <div>
              <label
                htmlFor="people"
                className="block text-sm font-medium text-ink mb-2"
              >
                {locale === "fr" ? "Nombre de personnes" : "Number of People"}
              </label>
              <select
                id="people"
                name="people"
                value={formData.people}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? (locale === "fr" ? "personne" : "person") : (locale === "fr" ? "personnes" : "people")}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink mb-2"
              >
                {locale === "fr" ? "Message (optionnel)" : "Message (optional)"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-bg-card px-4 py-3 text-ink placeholder:text-ink-dim focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
                placeholder={
                  locale === "fr"
                    ? "Questions ou demandes spéciales..."
                    : "Questions or special requests..."
                }
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "loading" && (
                  <Loader2 className="h-5 w-5 animate-spin" />
                )}
                {status === "success" && <Check className="h-5 w-5" />}
                {status === "idle" && <Send className="h-5 w-5" />}
                {status === "error" && <Send className="h-5 w-5" />}
                
                {status === "loading" && (locale === "fr" ? "Envoi en cours..." : "Sending...")}
                {status === "success" && (locale === "fr" ? "Envoyé !" : "Sent!")}
                {(status === "idle" || status === "error") && (locale === "fr" ? "Envoyer la demande" : "Send Request")}
              </button>
            </div>

            {/* Success Message */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center"
              >
                <Check className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-green-500">
                  {locale === "fr"
                    ? "Votre demande de réservation a été envoyée. Nous vous contacterons bientôt."
                    : "Your booking request has been sent. We will contact you soon."}
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center"
              >
                <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-red-500">
                  {errorMessage ||
                    (locale === "fr"
                      ? "Une erreur s'est produite. Veuillez réessayer."
                      : "An error occurred. Please try again.")}
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes highlight {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212, 165, 116, 0); }
          50% { box-shadow: 0 0 30px 10px rgba(212, 165, 116, 0.3); }
        }
        
        :global(.form-highlight) {
          animation: highlight 2s ease-in-out;
        }
      `}</style>
    </section>
  );
}
