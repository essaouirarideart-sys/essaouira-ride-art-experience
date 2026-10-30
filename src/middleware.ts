import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, segments } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

/** Keep in sync with `activities[].slug.fr` in src/data/activities.ts */
const FR_ACTIVITY_SLUGS = new Set([
  "balade-a-cheval-essaouira",
  "quad-essaouira",
  "balade-dromadaire-essaouira",
  "art-experience-essaouira",
]);

/**
 * Middleware responsibilities:
 * 1. Redirect '/' to the default locale ('/fr').
 * 2. Detect a missing locale prefix and 301 to the default locale (FR / x-default).
 * 3. 301 FR paths that use EN folder segments to canonical FR public slugs
 *    (e.g. '/fr/activities/...' → '/fr/activites/...') to avoid duplicate URLs.
 * 4. Rewrite FR public-facing localized URL segments
 *    (e.g. '/fr/activites/...') to their canonical internal folder names
 *    ('/fr/activities/...') so a single page implementation serves both locales.
 *
 * Do not clone/set request headers here. That opts every HTML route into
 * dynamic rendering (`Cache-Control: private, no-store`) on Next.js 15.
 */
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Skip Next internals & static assets.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/manifest.webmanifest" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const parts = pathname.split("/").filter(Boolean);
  const maybeLocale = parts[0];

  // Root → default locale (308 so `/` is not a competing indexable URL)
  if (parts.length === 0) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    const res = NextResponse.redirect(url, 308);
    res.headers.set("x-locale", defaultLocale);
    return res;
  }

  // Missing/invalid locale → permanent redirect to a single canonical locale.
  // Always FR (x-default / site default). Language negotiation here would
  // 301 the same URL to different locales, which crawlers cache incorrectly.
  if (!isLocale(maybeLocale)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  // FR locale: 301 EN folder segments → canonical FR public segments
  // e.g. /fr/activities → /fr/activites (prevents duplicate crawl paths)
  if (maybeLocale === "fr" && parts.length >= 2) {
    const pathSeg = parts[1];
    const enMatch = Object.entries(segments).find(([, v]) => v.en === pathSeg);
    if (enMatch) {
      const [, segVal] = enMatch;
      if (segVal.fr !== segVal.en && pathSeg === segVal.en) {
        const url = req.nextUrl.clone();
        const newParts = [...parts];
        newParts[1] = segVal.fr;
        url.pathname = "/" + newParts.join("/");
        url.search = search;
        return NextResponse.redirect(url, 301);
      }
    }
  }

  // Locale present → check if FR-localized segment needs rewriting to canonical EN folder.
  if (maybeLocale === "fr" && parts.length >= 2) {
    const frSeg = parts[1];
    const match = Object.entries(segments).find(([, v]) => v.fr === frSeg);
    if (match) {
      const enSeg = match[1].en;
      // Only rewrite if the FR segment differs from the EN folder name.
      if (frSeg !== enSeg) {
        // Unknown FR activity slugs must not be rewritten into `[slug]`,
        // or Next calls notFound() and the pass-through root renders `__next_error__`.
        const detailSlug = parts[2];
        if (
          enSeg === "activities" &&
          detailSlug &&
          !FR_ACTIVITY_SLUGS.has(detailSlug)
        ) {
          const skip = NextResponse.next();
          skip.headers.set("x-locale", maybeLocale);
          return skip;
        }
        const url = req.nextUrl.clone();
        const newParts = [...parts];
        newParts[1] = enSeg;
        url.pathname = "/" + newParts.join("/");
        url.search = search;
        const res = NextResponse.rewrite(url);
        res.headers.set("x-locale", maybeLocale);
        return res;
      }
    }
  }

  const res = NextResponse.next();
  res.headers.set("x-locale", maybeLocale);
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - /_next/...
     * - /api/...
     * - any file with an extension
     */
    "/((?!_next|api|.*\\..*).*)",
  ],
};
