# Essaouira Ride & Art Experience

Premium tourism experience website for **Essaouira Ride & Art Experience** —
horse riding, quad biking, camel rides, and anti-stress art workshops in
Diabat, Essaouira, Morocco.

Dark cinematic UI · French-first · Bilingual FR/EN · SEO-optimized · Mobile-first.

---

## Stack

- **Next.js 15** (App Router, RSC, Server Actions)
- **TypeScript**
- **Tailwind CSS v3** — custom dark/gold/sunset design tokens
- **Framer Motion** — subtle cinematic motion
- **Lucide React** — icons
- **next/image** — automatic AVIF/WebP, lazy loading
- **next/font** — self-hosted Cormorant Garamond + Inter

No CMS, no database — all content lives in typed `/src/data` files.
Migrate to a headless CMS later if needed.

---

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) — it redirects to
`/fr` (default locale).

### Available scripts

| Command         | Purpose                            |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the local dev server         |
| `npm run build` | Production build                   |
| `npm run start` | Run the built production server    |
| `npm run lint`  | Run Next.js / ESLint               |

---

## Project Structure

```
src/
├── app/                            Next.js App Router
│   ├── layout.tsx                  Root HTML shell, fonts, global metadata
│   ├── page.tsx                    Root → redirects to /fr
│   ├── not-found.tsx               404
│   ├── globals.css                 Tailwind + design system
│   ├── sitemap.ts                  Auto-generated sitemap
│   ├── robots.ts                   Robots config
│   └── [locale]/                   Locale-aware routes (fr | en)
│       ├── layout.tsx              Header, Footer, sticky bars, JSON-LD
│       ├── page.tsx                Home
│       ├── activities/             Activities listing + dynamic detail
│       │   ├── page.tsx
│       │   └── [slug]/page.tsx
│       ├── prices/page.tsx
│       ├── gallery/page.tsx
│       ├── about/page.tsx
│       ├── contact/page.tsx
│       ├── booking/page.tsx
│       └── blog/
│           ├── page.tsx
│           └── [slug]/page.tsx
│
├── components/
│   ├── home/                       Hero, ActivitiesGrid, WhyUs,
│   │                               Testimonials, CtaBanner
│   ├── layout/                     Header, Footer, Logo, LanguageSwitcher
│   └── ui/                         Button, Container, SectionHeading,
│                                   Reveal, ActivityCard, PricingCard,
│                                   FAQAccordion, ImageGallery,
│                                   WhatsAppFloat, StickyContactBar,
│                                   BookingForm, ActivityIcon
│
├── data/                           Single source of truth — typed
│   ├── site.ts                     Brand, contact, social, address
│   ├── activities.ts               4 activities, full SEO + i18n content
│   ├── blog.ts                     Blog posts with FR/EN bodies
│   ├── gallery.ts                  Aggregated gallery items
│   └── testimonials.ts             Customer reviews
│
├── i18n/
│   ├── config.ts                   Locales + localized URL segments
│   ├── getDictionary.ts
│   └── dictionaries/
│       ├── fr.ts                   Default locale
│       └── en.ts
│
├── lib/
│   ├── paths.ts                    Localized URL builder
│   ├── seo.ts                      Metadata + JSON-LD helpers
│   ├── whatsapp.ts                 WhatsApp / tel / mailto deep links
│   └── utils.ts                    cn(), formatPrice(), formatDate()
│
└── middleware.ts                   Locale detection + FR slug rewrites
```

---

## i18n Routing Strategy

The site uses **localized URL segments** for maximum SEO impact in each
language, while internally serving from a **single page implementation**
per route.

| Public URL                                          | Internal route              |
| --------------------------------------------------- | --------------------------- |
| `/fr/activites/balade-a-cheval-essaouira`           | `/fr/activities/[slug]`     |
| `/en/activities/horse-riding-essaouira`             | `/en/activities/[slug]`     |
| `/fr/tarifs`                                        | `/fr/prices`                |
| `/fr/galerie`                                       | `/fr/gallery`               |
| `/fr/a-propos`                                      | `/fr/about`                 |
| `/fr/reservation`                                   | `/fr/booking`               |
| `/fr/blog/que-faire-a-essaouira`                    | `/fr/blog/[slug]`           |
| `/en/blog/things-to-do-in-essaouira`                | `/en/blog/[slug]`           |

The `src/middleware.ts` rewrites French public segments
(`activites`, `tarifs`, `galerie`, `a-propos`, `reservation`) to their
canonical English folder names internally. The user's URL bar never
changes — Google sees the FR-keyword-rich URL.

The mapping is centralized in `src/i18n/config.ts → segments`. To add a
new localized segment, update that single map.

---

## Activities & Blog Slugs

Each activity stores a slug pair `{ fr, en }` (see
`src/data/activities.ts`):

```ts
{
  id: "horse-riding",
  slug: {
    fr: "balade-a-cheval-essaouira",
    en: "horse-riding-essaouira",
  },
  // ...
}
```

The `[slug]` page looks up the matching activity by `(locale, slug)` via
`getActivityBySlug()`. Same approach for blog posts.

The `LanguageSwitcher` translates the current path to the alternate
locale by walking the path parts and substituting:
1. The locale prefix
2. The localized segment (via `segments` map)
3. The activity / blog slug (by data lookup)

---

## SEO Architecture

Built into every page automatically via `lib/seo.ts → buildMetadata()`:

- **Per-page `<title>` + `<meta description>`** (FR + EN)
- **`hreflang` alternates** for every locale + `x-default`
- **Canonical URL**
- **OpenGraph + Twitter cards** with cinematic share images
- **JSON-LD structured data:**
  - `TouristTrip` (organization-level, on root layout)
  - `TouristAttraction` + `Offer` (per activity)
  - `FAQPage` (per activity)
  - `BreadcrumbList` (per dynamic page)
  - `Article` (per blog post)
- **Sitemap** auto-built from data files (`app/sitemap.ts`)
- **`robots.ts`**

### SEO keywords targeted

**French:**
quad essaouira · balade à cheval essaouira · balade dromadaire essaouira ·
activités essaouira · que faire à essaouira ·
expérience coucher de soleil essaouira

**English:**
quad biking essaouira · horse riding essaouira · camel ride essaouira ·
things to do in essaouira · essaouira activities · sunset experience essaouira

---

## Conversion Strategy

- **Hero CTAs:** primary "Book" + secondary "WhatsApp"
- **Sticky mobile contact bar:** Call · WhatsApp · Book (always visible,
  thumb-reachable)
- **Floating WhatsApp bubble** on desktop after scroll
- **Per-activity pricing cards** with one-click WhatsApp prefilled with
  the chosen package name
- **Booking form** that submits via WhatsApp (no backend needed at launch)
- **Phone tap** (`tel:`) on every contact surface

---

## Design System

Tokens defined in `tailwind.config.ts` and `globals.css`:

| Token             | Value      | Usage                          |
| ----------------- | ---------- | ------------------------------ |
| `bg-bg-primary`   | `#0A0A0A`  | Page background                |
| `bg-bg-card`      | `#141414`  | Cards / sections               |
| `bg-bg-elevated`  | `#1E1E1E`  | Header, footer, modals         |
| `text-gold`       | `#C8A050`  | Primary accent · CTAs · borders |
| `text-sunset`     | `#D4763A`  | Energy / warmth · gradients    |
| `text-ink`        | `#F5F0E8`  | Warm off-white body text       |
| `font-display`    | Cormorant Garamond | Headings               |
| `font-sans`       | Inter      | Body                           |

Reusable utility classes: `.container-page`, `.eyebrow`,
`.heading-display`, `.heading-section`, `.gold-divider`,
`.text-shadow-cinema`.

---

## Logo Note

The provided `public/logo.svg` is a **254 KB SVG that embeds a raster
JPEG on a white background** — it is heavy and does not match the dark
brand identity. It is therefore **not used directly in the header**.

Instead, `src/components/layout/Logo.tsx` renders a clean typographic
mark in gold-on-dark. The raster logo remains available at `/logo.svg`
for the JSON-LD `logo` field and social shares.

**Recommended next step:** export an optimized vector SVG of the brand
mark (transparent background, gold-on-dark variant), drop it into
`public/`, and swap the `<Logo />` component to render it via
`next/image`.

---

## Image Strategy

Hero / gallery / blog cover images are currently linked to **Unsplash CDN**
URLs as high-quality placeholders that match the cinematic aesthetic.
`next.config.ts` whitelists `images.unsplash.com` for `next/image`.

**Before launch:** replace Unsplash URLs in `src/data/activities.ts`,
`src/data/blog.ts`, `src/data/gallery.ts` with real photos of your
experiences. Recommended sizes:
- Hero images: 2400×1500
- Gallery: 1200×900
- Blog covers: 1600×1000
- Format: WebP/AVIF preferred (Next will optimize JPG/PNG too)

Place real photos in `public/images/` and reference them as
`/images/horse-sunset.jpg` etc.

---

## Adding a New Activity

1. Open `src/data/activities.ts`.
2. Append a new object to the `activities` array following the
   `Activity` interface (slug pair, FR + EN content, gallery, pricing
   tiers, FAQ, SEO).
3. The new activity will automatically appear on:
   - Homepage card grid
   - `/activities` listing
   - Footer links
   - Sitemap
   - `[slug]` detail page (via `generateStaticParams`)

No further code changes needed.

---

## Adding a New Blog Post

1. Open `src/data/blog.ts`.
2. Append a new object to `blogPosts` with FR/EN slug pair, body
   paragraphs (supports `**bold**` inline), cover image, etc.
3. Auto-listed on `/blog` and accessible at
   `/fr/blog/[slug-fr]` and `/en/blog/[slug-en]`.

---

## Deployment

The site is a standard Next.js 15 App Router project. Recommended host:
**Vercel** (zero-config). Also works on:

- Netlify (with `@netlify/plugin-nextjs`)
- Cloudflare Pages (`@cloudflare/next-on-pages`)
- Any Node.js host (`npm run build && npm run start`)

Set `NEXT_PUBLIC_SITE_URL` in production env to the canonical domain so
SEO tags and sitemap point to the right host. Update `src/data/site.ts
→ url` accordingly.

---

## Roadmap (future improvements)

- Replace Unsplash placeholders with real photos
- Add a true vector logo (light + dark variants)
- Wire booking form to a real backend (email API or Resend / Formspark)
- Add Google reviews / TripAdvisor embed
- Add cookie banner if needed (no analytics by default)
- Add Plausible or Umami analytics
- Add a Stripe-based deposit payment if desired

---

© Essaouira Ride & Art Experience — Diabat, Essaouira, Morocco.
# essaouira-ride-art-experience
