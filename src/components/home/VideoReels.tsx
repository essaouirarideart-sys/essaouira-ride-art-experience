import type { Locale } from "@/i18n/config";
import { VideoReelCard } from "./VideoReelCard";

const REELS = [
  {
    id: "reel-0",
    youtubeId: "8KoYGQ9S9Nc",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976879/5_lf7ed9.png",
    title: {
      fr: "Excursion quad en groupe",
      en: "Group quad excursion",
    },
  },
  {
    id: "reel-1",
    youtubeId: "9zWJt-xE2eA",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779122049/palma-quad-camel-sunset-tour-9_zwvmaf.jpg",
    title: {
      fr: "Excursion dromadaire au coucher du soleil",
      en: "Sunset camel ride excursion",
    },
  },
  {
    id: "reel-2",
    youtubeId: "fcKWdQawV_Y",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976879/6_jarktc.png",
    title: {
      fr: "Organisation & préparation de l'excursion quad",
      en: "Quad excursion briefing & prep",
    },
  },
  {
    id: "reel-3",
    youtubeId: "Z6aT2T9gklQ",
    thumbnail: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
    title: {
      fr: "Aventure quad dans les dunes",
      en: "Quad adventure in the dunes",
    },
  },
  {
    id: "reel-4",
    youtubeId: "HsuI-AMHVb0",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976878/4_pcypep.png",
    title: {
      fr: "Quad en action",
      en: "Quad in action",
    },
  },
  {
    id: "reel-5",
    youtubeId: "TiIAYCIxmKc",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117111/5_t6sbn9.png",
    title: {
      fr: "Balade à cheval sur la plage",
      en: "Horse ride on the beach",
    },
  },
  {
    id: "reel-6",
    youtubeId: "dItdB50RPvA",
    thumbnail:
      "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/24_hinlho.jpg",
    title: {
      fr: "Pack Art Experience",
      en: "Art Experience pack",
    },
  },
];

export function VideoReels({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-x-clip py-14 sm:py-24 lg:py-32">
      <div className="container-page">
        <div className="reveal-up mb-8 text-center sm:mb-14">
          <span className="eyebrow">
            {locale === "fr" ? "Nos videos" : "See the experience"}
          </span>
          <h2 className="heading-section mt-4 text-ink">
            {locale === "fr" ? "Ressentez l'aventure" : "Feel the adventure"}
          </h2>
        </div>

        <div className="relative -mx-5 px-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth overscroll-x-contain pb-4">
            {REELS.map((reel) => (
              <VideoReelCard
                key={reel.id}
                youtubeId={reel.youtubeId}
                thumbnail={reel.thumbnail}
                title={reel.title[locale]}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
