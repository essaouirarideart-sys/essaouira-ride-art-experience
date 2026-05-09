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
                  <MessageCircle className="h-4 w-4" />
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
