import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { activities } from "@/data/activities";
import { site } from "@/data/site";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl, mailtoLink, telLink } from "@/lib/whatsapp";
import Image from "next/image";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="relative mt-12 border-t border-border bg-bg-elevated sm:mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-page grid gap-8 py-10 sm:gap-12 sm:py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
           <Link href={localizedPath(locale)} className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80">
            <Image
              src="/logo.svg"
              alt="Essaouira Ride & Art Experience"
              width={56}
              height={56}
              className="h-16 w-16"
              priority
            />
          </Link>
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
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
          <p className="text-center text-xs text-ink-dim sm:text-right">
            {dict.footer.builtWith.split("Mehdi Codes")[0]}
            <a
              href="https://mehdicodes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold transition-colors duration-300 hover:text-gold/80"
            >
              Mehdi Codes
            </a>
            {dict.footer.builtWith.split("Mehdi Codes")[1] ?? ""}
          </p>
        </div>
      </div>
    </footer>
  );
}
