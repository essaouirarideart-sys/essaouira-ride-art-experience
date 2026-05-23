import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Zap, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

// Cloudinary CTA banner image
const CLOUD_NAME = "demo";
const BG = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_2000,q_auto,f_auto/samples/landscapes/nature-mountains`;

export function CtaBanner({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src={BG}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-bg-primary/75" />
            <div className="absolute inset-0 bg-gradient-radial-sunset opacity-70" />

            <div className="relative grid gap-10 px-6 py-14 sm:px-12 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 mb-4">
                  <Zap className="h-3.5 w-3.5 text-gold animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gold">
                    {locale === "fr" ? "Places limitées" : "Limited spots"}
                  </span>
                </div>
                <h2 className="heading-section max-w-xl text-balance text-ink">
                  {dict.home.ctaTitle}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/85">
                  {dict.home.ctaSubtitle}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm text-ink/90">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-ink/60">·</span>
                  <span className="font-medium">
                    {locale === "fr" ? "2500+ clients satisfaits" : "2500+ happy clients"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
                <Link
                  href={localizedPath(locale, "booking")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold"
                >
                  {locale === "fr" ? "Réserver maintenant" : "Book Now"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={buildWhatsAppUrl({ locale })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#128C7E] hover:border-[#128C7E]"
                >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
                  {locale === "fr" ? "WhatsApp Direct" : "WhatsApp Direct"}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
