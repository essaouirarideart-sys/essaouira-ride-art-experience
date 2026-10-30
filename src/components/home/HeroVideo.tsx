import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Truck, Clock } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";
import { IMAGE_WIDTH, optimizeCloudinaryUrl } from "@/lib/cloudinary";
import {
  HeroPlaybackRoot,
  HeroIframe,
  HeroPlayButton,
} from "./HeroPlayback";

const HERO_VIDEO_ID = "t2qTFxZn4Y4";
const HERO_POSTER = optimizeCloudinaryUrl(
  "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779122049/palma-quad-camel-sunset-tour-9_zwvmaf.jpg",
  IMAGE_WIDTH.hero
);

export function HeroVideo({ locale }: { locale: Locale }) {
  const hasVideo = HERO_VIDEO_ID.length > 0;
  const posterAlt =
    locale === "fr"
      ? "Coucher de soleil sur les dunes près d'Essaouira"
      : "Sunset over the dunes near Essaouira";

  return (
    <HeroPlaybackRoot>
      <section className="relative h-[100svh] w-full max-w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden bg-bg-primary">
          <Image
            src={HERO_POSTER}
            alt={posterAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover motion-safe:animate-slow-zoom"
          />
          {hasVideo && <HeroIframe locale={locale} videoId={HERO_VIDEO_ID} />}

          <div className="absolute inset-0 bg-bg-primary/60" />
          <div className="absolute inset-0 bg-gradient-radial-sunset opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/50 to-transparent" />
        </div>

        <div className="container-page absolute inset-0 flex flex-col justify-center py-14 sm:py-16 lg:py-20">
          <div className="max-w-2xl sm:max-w-3xl lg:max-w-[40rem]">
            <div className="reveal-hero inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-bg-primary/40 px-3.5 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold motion-safe:animate-pulse sm:h-2 sm:w-2" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold sm:text-xs">
                {locale === "fr" ? "Essaouira, Maroc" : "Essaouira, Morocco"}
              </span>
            </div>

            <h1
              className="reveal-hero heading-hero text-shadow-cinema mt-4 text-balance text-ink sm:mt-5"
              style={{ animationDelay: "0.12s" }}
            >
              {locale === "fr" ? (
                <>
                  Vivez Essaouira autrement, entre{" "}
                  <span className="text-gold">océan, dunes et aventures</span>.
                </>
              ) : (
                <>
                  Discover Essaouira through{" "}
                  <span className="text-gold">
                    unforgettable outdoor experiences
                  </span>
                  .
                </>
              )}
            </h1>

            <p
              className="reveal-hero hero-tagline mt-3 max-w-md text-ink/70 sm:mt-4 sm:max-w-lg"
              style={{ animationDelay: "0.28s" }}
            >
              {locale === "fr"
                ? "Quad dès 30€ · Cheval plage dès 20€ · Dromadaire sunset dès 20€ · Transfert gratuit"
                : "Quad from €30 · Beach horse from €20 · Sunset camel from €20 · Free pick-up"}
            </p>

            <div
              className="reveal-hero mt-5 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3"
              style={{ animationDelay: "0.42s" }}
            >
              <Link
                href={localizedPath(locale, "booking")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest2 text-bg-primary shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-gold sm:px-8 sm:py-4 sm:text-sm"
              >
                {locale === "fr" ? "Réserver maintenant" : "Book Now"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={localizedPath(locale, "activities")}
                className="group inline-flex items-center gap-2 rounded-full border-2 border-gold/40 bg-bg-primary/30 px-6 py-3.5 text-xs font-bold uppercase tracking-widest2 text-ink backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-bg-primary/50 sm:px-8 sm:py-4 sm:text-sm"
              >
                {locale === "fr" ? "Explorer" : "Explore"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              className="reveal-hero mt-5 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-5"
              style={{ animationDelay: "0.62s" }}
            >
              <div className="flex items-center gap-2 text-sm text-ink/90">
                <Truck className="h-4 w-4 text-gold" />
                {locale === "fr" ? "Transfert hôtel gratuit" : "Free hotel pick-up"}
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-ink/80">
                <MapPin className="h-4 w-4 text-gold" />
                {locale === "fr"
                  ? "Guides locaux à Diabat"
                  : "Local guides in Diabat"}
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-ink/80">
                <Clock className="h-4 w-4 text-gold" />
                {locale === "fr" ? "7 jours sur 7" : "7 days a week"}
              </div>
            </div>
          </div>

          {hasVideo && <HeroPlayButton locale={locale} />}

          <div className="absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
            <div className="flex flex-col items-center gap-2 text-ink-dim">
              <span className="text-[10px] uppercase tracking-widest2">
                {locale === "fr" ? "Découvrir" : "Discover"}
              </span>
              <div className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent motion-safe:animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </HeroPlaybackRoot>
  );
}
