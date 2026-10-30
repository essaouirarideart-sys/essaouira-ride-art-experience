import { MapPin, Clock, Compass } from "lucide-react";
import type { Locale } from "@/i18n/config";

export function SocialProofBanner({ locale }: { locale: Locale }) {
  const stats = [
    {
      icon: Compass,
      value: "4",
      label: { fr: "Activités à Diabat", en: "Activities in Diabat" },
    },
    {
      icon: MapPin,
      value: "Diabat",
      label: { fr: "Essaouira, Maroc", en: "Essaouira, Morocco" },
    },
    {
      icon: Clock,
      value: "7j/7",
      label: { fr: "8h – 20h", en: "8am – 8pm" },
    },
  ];

  return (
    <div className="border-y border-gold/20 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 py-6 sm:py-8">
      <div className="container-page">
        <div className="reveal-stagger flex flex-wrap items-center justify-center gap-6 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label.en} className="reveal-up flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold sm:h-10 sm:w-10">
                <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <div className="font-display text-xl text-gold sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-[11px] text-ink-muted sm:text-xs">
                  {stat.label[locale]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
