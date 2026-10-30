import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Expand, Camera } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";
import { IMAGE_WIDTH, optimizeCloudinaryUrl } from "@/lib/cloudinary";

export function GalleryPreview({ locale }: { locale: Locale }) {
  const preview = galleryItems.slice(0, 8);
  const gridClasses = [
    "col-span-6 sm:col-span-4 row-span-2",
    "col-span-6 sm:col-span-4 row-span-1",
    "col-span-6 sm:col-span-4 row-span-1",
    "col-span-6 sm:col-span-4 row-span-1",
    "col-span-6 sm:col-span-4 row-span-2",
    "col-span-6 sm:col-span-4 row-span-1",
    "col-span-6 sm:col-span-4 row-span-1",
    "col-span-12 sm:col-span-4 row-span-1",
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-card/50 to-bg-primary" />
      <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-page relative">
        <div className="reveal-up mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <Camera className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              {locale === "fr" ? "Galerie" : "Gallery"}
            </span>
          </div>
          <h2 className="heading-section mx-auto max-w-2xl text-ink">
            {locale === "fr"
              ? "Capturez l'instant, gardez le souvenir"
              : "Capture the moment, keep the memory"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            {locale === "fr"
              ? "Chaque aventure mérite d'être immortalisée. Découvrez les moments magiques de nos clients."
              : "Every adventure deserves to be captured. Discover the magical moments of our clients."}
          </p>
        </div>

        <div className="reveal-stagger grid auto-rows-[140px] grid-cols-12 gap-3 sm:auto-rows-[180px] sm:gap-4 lg:auto-rows-[200px]">
          {preview.map((item, i) => (
            <div
              key={i}
              className={`reveal-up group relative cursor-pointer overflow-hidden rounded-2xl ${gridClasses[i] || "col-span-6 sm:col-span-4 row-span-1"}`}
            >
              <Image
                src={optimizeCloudinaryUrl(item.src, IMAGE_WIDTH.gallery)}
                alt={item.alt[locale]}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.1)]" />
              {item.category && (
                <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wider text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.category}
                </span>
              )}
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <Expand className="h-4 w-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-up mt-12 flex flex-wrap items-center justify-center gap-6 text-center sm:gap-12">
          <div>
            <span className="block font-display text-2xl text-gold sm:text-3xl">4</span>
            <span className="text-xs uppercase tracking-widest text-ink-muted">
              {locale === "fr" ? "Activités" : "Activities"}
            </span>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div>
            <span className="block font-display text-2xl text-gold sm:text-3xl">
              Diabat
            </span>
            <span className="text-xs uppercase tracking-widest text-ink-muted">
              Essaouira
            </span>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div>
            <span className="block font-display text-2xl text-gold sm:text-3xl">
              7j/7
            </span>
            <span className="text-xs uppercase tracking-widest text-ink-muted">
              {locale === "fr" ? "Transfert hôtel gratuit" : "Free hotel pick-up"}
            </span>
          </div>
        </div>

        <div className="reveal-up mt-12 flex justify-center">
          <Link
            href={localizedPath(locale, "gallery")}
            className="group inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gradient-to-r from-gold/10 to-gold/5 px-8 py-4 text-sm font-semibold uppercase tracking-widest2 text-gold transition-all duration-300 hover:bg-gold hover:text-bg-primary hover:shadow-gold"
          >
            {locale === "fr" ? "Explorer la galerie complète" : "Explore full gallery"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
