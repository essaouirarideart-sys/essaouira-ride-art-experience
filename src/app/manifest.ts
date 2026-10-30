import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Activités outdoor à Essaouira, Maroc — balade à cheval, quad, dromadaire et art experience.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    orientation: "portrait-primary",
    lang: "fr",
    dir: "ltr",
    categories: ["travel", "lifestyle"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "40x40",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
