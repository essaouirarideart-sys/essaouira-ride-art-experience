import Image from "next/image";
import Script from "next/script";
import type { Locale } from "@/i18n/config";

const GOOGLE_ADS_ID = "AW-18172443907";
const META_PIXEL_ID = "1463205738399992";

export function AppDocument({
  locale,
  fontClassName,
  children,
}: {
  locale: Locale;
  fontClassName: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} className={fontClassName}>
      {/* Hoisted by Next into <head>. A custom <head> blocks next/font preloads. */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />
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
        {children}
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
      </body>
    </html>
  );
}
