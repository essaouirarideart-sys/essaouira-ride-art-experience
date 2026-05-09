import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { Logo } from "./Logo";
import { activities } from "@/data/activities";
import { site } from "@/data/site";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl, mailtoLink, telLink } from "@/lib/whatsapp";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="relative mt-12 border-t border-border bg-bg-elevated sm:mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-page grid gap-8 py-10 sm:gap-12 sm:py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo locale={locale} />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
            {dict.meta.tagline}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={buildWhatsAppUrl({ locale })}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">
            {dict.nav.activities}
          </h4>
          <ul className="mt-5 space-y-3">
            {activities.map((a) => (
              <li key={a.id}>
                <Link
                  href={localizedPath(locale, "activities", a.slug[locale])}
                  className="text-sm text-ink-muted transition-colors duration-300 hover:text-gold"
                >
                  {a.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">
            {dict.footer.quickLinks}
          </h4>
          <ul className="mt-5 space-y-3">
            {(
              [
                ["prices", dict.nav.prices],
                ["gallery", dict.nav.gallery],
                ["about", dict.nav.about],
                ["blog", dict.nav.blog],
                ["contact", dict.nav.contact],
                ["booking", dict.nav.book],
              ] as const
            ).map(([seg, label]) => (
              <li key={seg}>
                <Link
                  href={localizedPath(locale, seg)}
                  className="text-sm text-ink-muted transition-colors duration-300 hover:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-gold">
            {dict.footer.contact}
          </h4>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={telLink()}
                className="group flex items-start gap-3 text-sm text-ink-muted hover:text-gold"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{site.contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={mailtoLink()}
                className="group flex items-start gap-3 text-sm text-ink-muted hover:text-gold"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{site.contact.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-ink-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {site.contact.address.street}, {site.contact.address.city}
                <br />
                {site.contact.address.country[locale]}
              </span>
            </li>
            <li className="text-xs text-ink-dim">
              {site.hours[locale]}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 sm:flex-row sm:py-6">
          <p className="text-xs text-ink-dim">
            © {new Date().getFullYear()} {site.name}. {dict.footer.rights}
          </p>
          <p className="text-xs text-ink-dim">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
