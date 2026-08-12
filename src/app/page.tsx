import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";
import { site, absoluteUrl } from "@/data/site";

const ogImage = absoluteUrl(site.defaultOgImage);

/** OG for `/` before redirect — crawlers that hit the root URL still see the brand image. */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description:
    "Aventure, coucher de soleil & art à Essaouira — cheval, quad, dromadaire et art-thérapie.",
  robots: { index: true, follow: true },
  openGraph: {
    title: site.name,
    description:
      "Activités à Essaouira : balade à cheval, quad, dromadaire et art experience sur la côte atlantique.",
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: site.name, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "Activités à Essaouira : balade à cheval, quad, dromadaire et art experience sur la côte atlantique.",
    images: [ogImage],
  },
};

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
