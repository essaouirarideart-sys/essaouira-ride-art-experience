import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales, segments } from "@/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

/**
 * Middleware responsibilities:
 * 1. Redirect '/' to the default locale ('/fr').
 * 2. Detect a missing locale prefix and redirect to the negotiated locale.
 * 3. Rewrite FR public-facing localized URL segments
 *    (e.g. '/fr/activites/...') to their canonical internal folder names
 *    ('/fr/activities/...') so a single page implementation serves both locales.
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

  // Root → default locale
  if (parts.length === 0) {
    const url = req.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    const res = NextResponse.redirect(url);
    res.headers.set("x-locale", defaultLocale);
    return res;
  }

  // Missing/invalid locale → prepend default locale
  if (!isLocale(maybeLocale)) {
    const url = req.nextUrl.clone();
    const negotiated = negotiateLocale(req);
    url.pathname = `/${negotiated}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Locale present → check if FR-localized segment needs rewriting to canonical EN folder.
  if (maybeLocale === "fr" && parts.length >= 2) {
    const frSeg = parts[1];
    const match = Object.entries(segments).find(([, v]) => v.fr === frSeg);
    if (match) {
      const enSeg = match[1].en;
      // Only rewrite if the FR segment differs from the EN folder name.
      if (frSeg !== enSeg) {
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
  if (isLocale(maybeLocale)) {
    res.headers.set("x-locale", maybeLocale);
  }
  return res;
}

function negotiateLocale(req: NextRequest): string {
  const header = req.headers.get("accept-language") ?? "";
  const lower = header.toLowerCase();
  for (const loc of locales) {
    if (lower.includes(loc)) return loc;
  }
  return defaultLocale;
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
