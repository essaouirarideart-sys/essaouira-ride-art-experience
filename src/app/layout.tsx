import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Script from "next/script";
import { headers } from "next/headers";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site, absoluteUrl } from "@/data/site";
import { defaultLocale, isLocale } from "@/i18n/config";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description:
    "Aventure, coucher de soleil & art à Essaouira — cheval, quad, dromadaire et art-thérapie.",
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    telephone: true,
    email: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/og-image.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "fr_FR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const GOOGLE_ADS_ID = "AW-18172443907";
const META_PIXEL_ID = "1463205738399992";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const localeHeader = headersList.get("x-locale");
  const lang = isLocale(localeHeader ?? "") ? localeHeader! : defaultLocale;

  return (
    <html lang={lang} className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body className="antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            width={1}
            height={1}
            alt=""
            unoptimized
            className="hidden"
            style={{ display: "none" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
