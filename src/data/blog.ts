import type { Locale } from "@/i18n/config";

export interface BlogPost {
  slug: { fr: string; en: string };
  title: { fr: string; en: string };
  excerpt: { fr: string; en: string };
  cover: string;
  coverAlt: { fr: string; en: string };
  category: { fr: string; en: string };
  publishedAt: string; // ISO
  readingMinutes: number;
  author: string;
  body: { fr: string[]; en: string[] };
  seo: {
    description: { fr: string; en: string };
    keywords: { fr: string[]; en: string[] };
  };
}

/**
 * Direct Cloudinary URLs for blog
 * 
 * TO REPLACE IMAGES:
 * 1. Upload your images to Cloudinary
 * 2. Copy the full Cloudinary URL
 * 3. Paste directly into the image fields below
 * 
 * Example URL format:
 * https://res.cloudinary.com/your-cloud-name/image/upload/q_auto/f_auto/v1234567890/your-image-id.jpg
 */

// Blog cover placeholder URLs
const BLOG_PLACEHOLDERS = {
  thingsToDo: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/beach-boat",
  bestTime: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/nature-mountains",
  sunsetSpots: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/landscape-panorama",
};

export const blogPosts: BlogPost[] = [
  {
    slug: {
      fr: "que-faire-a-essaouira",
      en: "things-to-do-in-essaouira",
    },
    title: {
      fr: "Que faire à Essaouira : 10 expériences à ne pas manquer",
      en: "Things to do in Essaouira: 10 unmissable experiences",
    },
    excerpt: {
      fr: "Au-delà de la médina et du port, Essaouira regorge d'expériences qui marquent. Voici notre sélection locale.",
      en: "Beyond the medina and port, Essaouira is full of unforgettable experiences. Here's our local selection.",
    },
    cover: BLOG_PLACEHOLDERS.thingsToDo,
    coverAlt: {
      fr: "Vue panoramique d'Essaouira au coucher du soleil",
      en: "Panoramic view of Essaouira at sunset",
    },
    category: { fr: "Guide", en: "Guide" },
    publishedAt: "2025-09-12",
    readingMinutes: 7,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Essaouira est l'une des villes les plus authentiques du Maroc. Ancienne Mogador, fortifiée par les Portugais, sublimée par les vents atlantiques, elle attire les voyageurs en quête de calme, de lumière et d'aventure. Voici notre guide complet des meilleures activités à Essaouira.",
        "**1. Balade à cheval au coucher du soleil** — L'expérience signature d'Essaouira. Notre [balade à cheval sur la plage de Diabat](/fr/activities/balade-a-cheval-essaouira) vous offre des images inoubliables : silhouettes au galop, écume dorée, ciel orangé. Parfait pour tous niveaux, de 1h à 3h. Guides locaux expérimentés et chevaux calmes.",
        "**2. Quad biking dans les dunes** — Pour les amateurs de sensations fortes, notre [excursion quad à Essaouira](/fr/activities/quad-essaouira) traverse trois univers : dunes atlantiques, forêt d'arganiers, et pistes côtières surplombant Sidi Kaouki. Équipement fourni, briefing sécurité complet.",
        "**3. Balade en dromadaire** — La photo iconique du Maroc : [caravane de dromadaires face à l'océan](/fr/activities/balade-dromadaire-essaouira). Idéal en famille (dès 4 ans), au coucher du soleil. Guides berbères authentiques, animaux bien traités.",
        "**4. Art-thérapie face à l'océan** — Notre [atelier de coloriage anti-stress](/fr/activities/art-experience-essaouira) surprend tous nos visiteurs. Après l'aventure, le calme. Mandala, motifs berbères, aquarelles. Vous repartez avec votre création.",
        "**5. La médina au lever du jour** — Avant l'ouverture des boutiques, découvrez Essaouira authentique : pêcheurs préparant leurs filets, chats des remparts, lumière dorée sur les murs blancs et bleus.",
        "**6. Le port de pêche vers 11h** — Quand les bateaux bleus rentrent chargés de sardines. Dégustation de poisson grillé sur place, ambiance locale garantie.",
        "**7. La plage de Sidi Kaouki** — À 20 minutes d'Essaouira, paradis des surfeurs et kitesurfeurs. Vent constant, vagues parfaites, ambiance bohème.",
        "**8. L'île de Mogador** — Vue depuis les remparts de la Skala, cette île protégée abrite des faucons d'Éléonore. Meilleure lumière en fin d'après-midi.",
        "**9. Ateliers de marqueterie en thuya** — Dans les ruelles cachées de la médina, artisans travaillant le bois de thuya, spécialité d'Essaouira depuis des siècles.",
        "**10. Dîner sur un toit-terrasse** — Vue panoramique sur l'océan, thé à la menthe, tajine traditionnel. Le moment parfait pour digérer une journée d'aventures.",
        "**Conseil local** : Combinez plusieurs activités pour une expérience complète. Matin : quad dans les dunes. Après-midi : art-thérapie. Fin de journée : balade à cheval au coucher du soleil. C'est notre formule signature depuis Diabat.",
      ],
      en: [
        "Essaouira is one of Morocco's most authentic cities. The former Mogador, fortified by the Portuguese, sublimated by Atlantic winds, attracts travelers seeking calm, light and adventure. Here's our complete guide to the best things to do in Essaouira.",
        "**1. Sunset Horse Riding** — Essaouira's signature experience. Our [horse riding on Diabat beach](/en/activities/horse-riding-essaouira) offers unforgettable images: galloping silhouettes, golden spray, orange sky. Perfect for all levels, 1h to 3h. Experienced local guides and calm horses.",
        "**2. Quad Biking in the Dunes** — For thrill-seekers, our [quad biking tour in Essaouira](/en/activities/quad-essaouira) crosses three worlds: Atlantic dunes, argan forest, and coastal tracks overlooking Sidi Kaouki. Equipment provided, full safety briefing.",
        "**3. Camel Ride** — Morocco's iconic photo: [camel caravan facing the ocean](/en/activities/camel-ride-essaouira). Family-friendly (from 4 years), at sunset. Authentic Berber guides, well-treated animals.",
        "**4. Art Therapy Facing the Ocean** — Our [anti-stress coloring workshop](/en/activities/art-experience-essaouira) surprises all our visitors. After adventure, calm. Mandala, Berber patterns, watercolors. You leave with your creation.",
        "**5. The Medina at Dawn** — Before shops open, discover authentic Essaouira: fishermen preparing nets, rampart cats, golden light on white and blue walls.",
        "**6. The Fishing Port Around 11am** — When blue boats return loaded with sardines. Fresh grilled fish on the spot, guaranteed local atmosphere.",
        "**7. Sidi Kaouki Beach** — 20 minutes from Essaouira, surfers' and kitesurfers' paradise. Constant wind, perfect waves, bohemian vibe.",
        "**8. Mogador Island** — Viewed from Skala ramparts, this protected island hosts Eleonora's falcons. Best light in late afternoon.",
        "**9. Thuya Marquetry Workshops** — In the medina's hidden alleys, artisans working thuya wood, Essaouira's specialty for centuries.",
        "**10. Rooftop Dinner** — Panoramic ocean view, mint tea, traditional tajine. The perfect moment to digest a day of adventures.",
        "**Local Tip**: Combine multiple activities for a complete experience. Morning: quad in the dunes. Afternoon: art therapy. Evening: sunset horse ride. That's our signature formula from Diabat.",
      ],
    },
    seo: {
      description: {
        fr: "Que faire à Essaouira ? Notre guide local des 10 expériences à vivre absolument : cheval, quad, dromadaire, art, médina, port, sunset.",
        en: "What to do in Essaouira? Our local guide to the 10 must-do experiences: horse, quad, camel, art, medina, port, sunset.",
      },
      keywords: {
        fr: [
          "que faire à essaouira",
          "activités essaouira",
          "guide essaouira",
          "expérience essaouira",
        ],
        en: [
          "things to do in essaouira",
          "essaouira activities",
          "essaouira guide",
          "essaouira experiences",
        ],
      },
    },
  },
  {
    slug: {
      fr: "meilleur-moment-pour-visiter-essaouira",
      en: "best-time-to-visit-essaouira",
    },
    title: {
      fr: "Quel est le meilleur moment pour visiter Essaouira ?",
      en: "What is the best time to visit Essaouira?",
    },
    excerpt: {
      fr: "Vent, lumière, foule, prix : tous nos conseils pour choisir la bonne saison à Essaouira.",
      en: "Wind, light, crowds, prices: all our tips to choose the right season in Essaouira.",
    },
    cover: BLOG_PLACEHOLDERS.bestTime,
    coverAlt: {
      fr: "Lumière dorée sur les remparts d'Essaouira",
      en: "Golden light on Essaouira's ramparts",
    },
    category: { fr: "Conseils", en: "Tips" },
    publishedAt: "2025-08-22",
    readingMinutes: 5,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Essaouira a un climat très particulier : doux toute l'année, mais venté. Voici comment choisir votre période.",
        "**Avril à juin** : la haute saison idéale. Températures parfaites (20-25°C), lumière dorée, vent modéré. Réservez à l'avance.",
        "**Juillet et août** : l'été marocain. Beaucoup de monde, mais Essaouira reste fraîche grâce aux alizés. Excellent pour les activités sportives.",
        "**Septembre et octobre** : notre période préférée. Lumière incroyable, moins de monde, prix plus doux. Le coucher de soleil est cinématographique.",
        "**Novembre à mars** : basse saison. Plus calme, prix bas, mais le vent peut être fort. Idéal pour qui cherche la tranquillité et l'authenticité.",
        "Pour les balades à cheval ou en dromadaire, le coucher de soleil est toujours magique. Pour le quad, n'importe quelle saison fonctionne. L'art experience se vit toute l'année.",
      ],
      en: [
        "Essaouira has a very particular climate: mild all year, but windy. Here's how to choose your timing.",
        "**April to June**: the ideal high season. Perfect temperatures (20-25°C), golden light, moderate wind. Book in advance.",
        "**July and August**: Moroccan summer. Crowded, but Essaouira stays cool thanks to the trade winds. Excellent for active experiences.",
        "**September and October**: our favorite period. Incredible light, fewer crowds, softer prices. The sunset is cinematic.",
        "**November to March**: low season. Quieter, lower prices, but the wind can be strong. Ideal if you seek tranquility and authenticity.",
        "For horse or camel rides, sunset is always magical. For quad biking, any season works. The art experience can be enjoyed year-round.",
      ],
    },
    seo: {
      description: {
        fr: "Quand partir à Essaouira ? Saisons, météo, vent, prix, foule : notre guide local pour choisir la meilleure période de voyage.",
        en: "When to visit Essaouira? Seasons, weather, wind, prices, crowds: our local guide to picking the best travel time.",
      },
      keywords: {
        fr: [
          "quand visiter essaouira",
          "meilleure saison essaouira",
          "météo essaouira",
        ],
        en: [
          "best time to visit essaouira",
          "essaouira weather",
          "essaouira seasons",
        ],
      },
    },
  },
  {
    slug: {
      fr: "essaouira-coucher-de-soleil-spots",
      en: "essaouira-sunset-spots",
    },
    title: {
      fr: "Les 5 plus beaux spots de coucher de soleil à Essaouira",
      en: "The 5 most beautiful sunset spots in Essaouira",
    },
    excerpt: {
      fr: "De la plage de Diabat aux dunes secrètes, voici où voir le soleil tomber sur l'Atlantique.",
      en: "From Diabat beach to the hidden dunes, here's where to watch the sun fall on the Atlantic.",
    },
    cover: BLOG_PLACEHOLDERS.sunsetSpots,
    coverAlt: {
      fr: "Coucher de soleil sur la plage d'Essaouira",
      en: "Sunset on Essaouira beach",
    },
    category: { fr: "Inspiration", en: "Inspiration" },
    publishedAt: "2025-07-18",
    readingMinutes: 4,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Le coucher de soleil à Essaouira est une expérience à part entière. Voici nos cinq spots préférés, du plus connu au plus secret.",
        "**1. Les remparts de la Skala.** Le classique. Vue sur l'océan, les canons portugais, l'île de Mogador. À ne pas manquer une fois.",
        "**2. La plage de Diabat.** Notre coup de cœur. Longue, sauvage, parfaite pour une balade à cheval ou en dromadaire au moment magique.",
        "**3. Les dunes de Cap Sim.** À 10 minutes au sud d'Essaouira. Idéal en quad ou à pied. Lumière incroyable.",
        "**4. Sidi Kaouki.** Plage de surf, ambiance hippie, sunsets à se perdre. Allez-y avant ou après une session de ride.",
        "**5. Le toit de votre riad.** Sous-estimé. Un thé à la menthe, le silence, la mer au loin. Parfait après une journée d'activités.",
        "Notre conseil : combinez. Une activité au moment du sunset, puis un toit-terrasse pour le digérer. C'est la définition d'un soir parfait à Essaouira.",
      ],
      en: [
        "Sunset in Essaouira is an experience in itself. Here are our five favorite spots, from the most famous to the most hidden.",
        "**1. The Skala ramparts.** The classic. Views over the ocean, the Portuguese cannons, Mogador island. A must once.",
        "**2. Diabat beach.** Our favorite. Long, wild, perfect for a horse or camel ride at the magic hour.",
        "**3. The Cap Sim dunes.** 10 minutes south of Essaouira. Ideal by quad or on foot. Incredible light.",
        "**4. Sidi Kaouki.** Surf beach, hippie atmosphere, dreamy sunsets. Go before or after a ride session.",
        "**5. Your riad's rooftop.** Underrated. A mint tea, silence, the sea in the distance. Perfect after a full activity day.",
        "Our tip: combine. An activity at sunset, then a rooftop to digest it. That's the definition of a perfect Essaouira evening.",
      ],
    },
    seo: {
      description: {
        fr: "Les 5 plus beaux spots de coucher de soleil à Essaouira : remparts, Diabat, Cap Sim, Sidi Kaouki, riads. Notre guide local.",
        en: "The 5 most beautiful sunset spots in Essaouira: ramparts, Diabat, Cap Sim, Sidi Kaouki, riads. Our local guide.",
      },
      keywords: {
        fr: [
          "coucher de soleil essaouira",
          "expérience coucher de soleil essaouira",
          "spots essaouira",
        ],
        en: [
          "sunset experience essaouira",
          "essaouira sunset",
          "best spots essaouira",
        ],
      },
    },
  },
];

export function getBlogPostBySlug(
  slug: string,
  locale: Locale
): BlogPost | undefined {
  return blogPosts.find((p) => p.slug[locale] === slug);
}

export function getRecentBlogPosts(count = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, count);
}

export function getRelatedBlogPosts(currentSlugFr: string, count = 2): BlogPost[] {
  return blogPosts.filter((p) => p.slug.fr !== currentSlugFr).slice(0, count);
}
