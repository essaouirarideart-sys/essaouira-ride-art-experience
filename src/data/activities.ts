import type { Locale } from "@/i18n/config";
import { HORSE_TREK_PRICES_EUR } from "@/data/horseTrekPrices";

export type Difficulty = "easy" | "moderate" | "adventurous";

export type PackageType = "group" | "private" | "couple" | "simple" | "double" | "standard";

export interface PricingOption {
  type: PackageType;
  label: { fr: string; en: string };
  price: number;
  /** Visible price unit. Omit when the unit is unconfirmed. */
  unit?: { fr: string; en: string };
}

export interface PricingTier {
  id: string;
  name: { fr: string; en: string };
  description?: { fr: string; en: string };
  duration: { fr: string; en: string };
  highlighted?: boolean;
  options: PricingOption[];
  features?: { fr: string[]; en: string[] };
  image?: string;
}

export type PremiumPackageIcon = "photography" | "sunrise" | "trek" | "luxury";

export interface PremiumPackage {
  id: string;
  name: { fr: string; en: string };
  tagline?: { fr: string; en: string };
  duration?: { fr: string; en: string };
  priceEur: number;
  icon: PremiumPackageIcon;
  image?: string;
  highlighted?: boolean;
}

export interface PremiumPricingGroup {
  id: string;
  title: { fr: string; en: string };
  subtitle?: { fr: string; en: string };
  icon: PremiumPackageIcon;
  backgroundImage?: string;
  packages: PremiumPackage[];
}

export interface PremiumPricingCategory {
  title: { fr: string; en: string };
  intro: { fr: string; en: string };
  groups: PremiumPricingGroup[];
}

export interface FAQItem {
  question: { fr: string; en: string };
  answer: { fr: string; en: string };
}

export interface VideoReel {
  youtubeId: string;
  title: { fr: string; en: string };
}

export interface Activity {
  id: string;
  slug: { fr: string; en: string };
  icon: "horse" | "quad" | "camel" | "palette";
  title: { fr: string; en: string };
  shortTitle: { fr: string; en: string };
  tagline: { fr: string; en: string };
  /** Intent-focused H2 under the experience section (not the marketing tagline). */
  overviewHeading: { fr: string; en: string };
  /** H2 for the pricing section — targets prix / price queries. */
  pricingHeading?: { fr: string; en: string };
  description: { fr: string; en: string };
  longDescription: { fr: string[]; en: string[] };
  seoContent?: { fr: string[]; en: string[] };
  /** H2 for the seoContent block. */
  seoHeading?: { fr: string; en: string };
  /** Step-by-step experience outline from real package info. */
  itinerary?: { fr: string[]; en: string[] };
  meetingPoint?: { fr: string; en: string };
  suitableFor?: { fr: string[]; en: string[] };
  notIncluded?: { fr: string[]; en: string[] };
  bookingSteps?: { fr: string[]; en: string[] };
  heroImage: string;
  heroImageAlt: { fr: string; en: string };
  gallery: Array<{ src: string; alt: { fr: string; en: string } }>;
  videoReels?: VideoReel[];
  duration: { fr: string; en: string };
  difficulty: Difficulty;
  minAge: number;
  groupSize: { fr: string; en: string };
  includes: { fr: string[]; en: string[] };
  pricing: PricingTier[];
  premiumPricing?: PremiumPricingCategory;
  faq: FAQItem[];
  seo: {
    title: { fr: string; en: string };
    description: { fr: string; en: string };
    keywords: { fr: string[]; en: string[] };
  };
}

/**
 * Direct Cloudinary URLs
 * 
 * TO REPLACE IMAGES:
 * 1. Upload your images to Cloudinary
 * 2. Copy the full Cloudinary URL
 * 3. Paste directly into the image fields below
 * 
 * Example URL format:
 * https://res.cloudinary.com/your-cloud-name/image/upload/q_auto/f_auto/v1234567890/your-image-id.jpg
 */

// Temporary placeholder URLs using Cloudinary demo account
// Replace these with your actual uploaded Cloudinary URLs
const PLACEHOLDERS = {
  // Horse riding
  horseHero: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117111/5_t6sbn9.png",
  horseGallery1: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117111/5_t6sbn9.png",
  horseGallery2: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117110/4_vhy9ng.png",
  horseGallery3: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600151/5_xom00w.jpg",
  horseGallery4: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117110/8_zsk5tv.png",
  horseGallery5: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600151/6_o2zvcq.jpg",
  horseGallery6: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117110/3_ywchmf.png",
  
  // Quad
  quadHero: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976879/5_lf7ed9.png",
  quadGallery1: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976879/5_lf7ed9.png",
  quadGallery2: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976878/4_pcypep.png",
  quadGallery3: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976879/6_jarktc.png",
  quadGallery4: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976878/3_rdtntg.png",
  quadGallery5: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976878/2_yf6a60.png",
  quadGallery6: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778976879/8_n4ylet.png",
  
  // Camel
  camelHero: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600154/28_h0pkn1.jpg",
  camelGallery1: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/26_u6qd85.jpg",
  camelGallery2: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/27_nhdxee.jpg",
  camelGallery3: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779122049/palma-quad-camel-sunset-tour-9_zwvmaf.jpg",
  camelGallery4: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600154/28_h0pkn1.jpg",
  camelGallery5: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779122049/palma-quad-camel-sunset-tour-11_kuqnos.jpg",
  camelGallery6: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779122049/palma-quad-camel-sunset-tour-5_gky6dt.jpg",
  
  // Art
  artHero: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/24_hinlho.jpg",
  artGallery1: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/25_iug3oh.jpg",
  artGallery2: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/21_alocv8.jpg",
  artGallery3: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600152/19_to2pcz.jpg",
  artGallery4: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600153/22_vlku4f.jpg",
  artGallery5: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600152/17_chbp0e.jpg",
  artGallery6: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1778600152/18_rl32io.jpg",
};

export const activities: Activity[] = [
  // ─────────────── HORSE RIDING ───────────────
  {
    id: "horse-riding",
    slug: {
      fr: "balade-a-cheval-essaouira",
      en: "horse-riding-essaouira",
    },
    icon: "horse",
    title: {
      fr: "Balade à cheval sur la plage à Essaouira",
      en: "Horse Riding on the Beach in Essaouira",
    },
    shortTitle: { fr: "Cheval", en: "Horse" },
    tagline: {
      fr: "Balades 1h ou 2h sur la plage de Diabat — groupe ou privé.",
      en: "1-hour and 2-hour rides on Diabat beach — group or private.",
    },
    overviewHeading: {
      fr: "Balade à cheval sur la plage à Essaouira — 1h ou 2h",
      en: "Horse riding on the beach in Essaouira — 1h or 2h",
    },
    pricingHeading: {
      fr: "Prix balade à cheval Essaouira — tarifs & formules",
      en: "Horse riding Essaouira prices — packages & rates",
    },
    description: {
      fr: "Une balade à cheval sur la plage de Diabat et les dunes d'Essaouira. Formules 1h ou 2h, journée ou coucher de soleil, groupe ou privé. Transfert hôtel gratuit.",
      en: "A horse ride on Diabat beach and the dunes of Essaouira. 1-hour or 2-hour options, day or sunset, group or private. Free hotel pick-up.",
    },
    longDescription: {
      fr: [
        "Imaginez : le sable mouillé qui claque sous les sabots, l'océan à votre droite, les dunes ocre à votre gauche, et le vent atlantique qui s'engouffre dans vos cheveux. Notre balade à cheval n'est pas une attraction touristique — c'est une expérience cinématographique.",
        "Nos chevaux sont sélectionnés pour leur calme et leur endurance. Que vous soyez débutant ou cavalier confirmé, nos guides locaux adaptent l'allure et le parcours. Les formules journée et coucher de soleil existent en 1 heure ou 2 heures, en groupe ou en privé — tarifs par personne.",
        "Le départ se fait depuis nos écuries de Diabat, à 5 minutes du centre d'Essaouira. Casque, briefing et transfert hôtel gratuit sont inclus.",
      ],
      en: [
        "Imagine this: the wet sand snapping under hooves, the ocean to your right, the ochre dunes to your left, and the Atlantic wind rushing through your hair. Our horse ride is not a tourist attraction — it's a cinematic experience.",
        "Our horses are selected for their calm and endurance. Whether you're a beginner or a seasoned rider, our local guides adapt the pace and the route. Day and sunset rides are available in 1 hour or 2 hours, group or private — prices per person.",
        "Departure is from our Diabat stables, 5 minutes from Essaouira's center. Helmet, briefing and free hotel pick-up are included.",
      ],
    },
    heroImage: PLACEHOLDERS.horseHero,
    heroImageAlt: {
      fr: "Cavalier galopant sur la plage d'Essaouira au coucher du soleil",
      en: "Rider galloping on Essaouira beach at sunset",
    },
    gallery: [
      {
        src: PLACEHOLDERS.horseGallery1,
        alt: {
          fr: "Cheval blanc face à l'océan à Essaouira",
          en: "White horse facing the ocean in Essaouira",
        },
      },
      {
        src: PLACEHOLDERS.horseGallery2,
        alt: {
          fr: "Galop sur la plage de Diabat",
          en: "Gallop on Diabat beach",
        },
      },
      {
        src: PLACEHOLDERS.horseGallery3,
        alt: {
          fr: "Coucher de soleil et chevaux",
          en: "Sunset and horses",
        },
      },
      {
        src: PLACEHOLDERS.horseGallery4,
        alt: {
          fr: "Cavaliers en bord de mer",
          en: "Riders along the seashore",
        },
      },
      {
        src: PLACEHOLDERS.horseGallery5,
        alt: {
          fr: "Chevaux dans les dunes",
          en: "Horses in the dunes",
        },
      },
      {
        src: PLACEHOLDERS.horseGallery6,
        alt: {
          fr: "Détail crinière et lumière dorée",
          en: "Mane detail and golden light",
        },
      },
    ],
    videoReels: [
      {
        youtubeId: "TiIAYCIxmKc",
        title: { fr: "Galop au coucher du soleil", en: "Sunset gallop on the beach" },
      },
     
    ],
    duration: { fr: "1h à 2h", en: "1h to 2h" },
    difficulty: "easy",
    minAge: 6,
    groupSize: { fr: "1 à 8 cavaliers", en: "1 to 8 riders" },
    includes: {
      fr: [
        "Cheval adapté à votre niveau",
        "Casque de sécurité",
        "Guide local expérimenté",
        "Briefing complet avant le départ",
        "Bouteille d'eau",
        "Transfert hôtel gratuit",
      ],
      en: [
        "Horse adapted to your level",
        "Safety helmet",
        "Experienced local guide",
        "Full pre-ride briefing",
        "Water bottle",
        "Free hotel pick-up",
      ],
    },
    notIncluded: {
      fr: ["Vêtements et chaussures personnels (pantalon long, chaussures fermées)"],
      en: ["Personal clothing and footwear (long pants, closed shoes)"],
    },
    meetingPoint: {
      fr: "Écuries de Diabat, à environ 5 minutes du centre d'Essaouira (anciennement Mogador).",
      en: "Diabat stables, about 5 minutes from Essaouira city center (formerly Mogador).",
    },
    suitableFor: {
      fr: [
        "Débutants et cavaliers confirmés",
        "Familles avec enfants dès 6 ans (accompagnés)",
        "Couples (surtout au coucher du soleil)",
        "Photographes et petits groupes",
      ],
      en: [
        "Beginners and experienced riders",
        "Families with children from 6 (accompanied)",
        "Couples (especially at sunset)",
        "Photographers and small groups",
      ],
    },
    itinerary: {
      fr: [
        "Accueil aux écuries de Diabat et présentation des chevaux",
        "Briefing sécurité, casque et attribution d'un cheval adapté à votre niveau",
        "Départ vers la plage de Diabat et les dunes",
        "Formules coucher de soleil : départ en fin de journée",
        "Retour aux écuries et départ",
      ],
      en: [
        "Welcome at the Diabat stables and introduction to the horses",
        "Safety briefing, helmet fitting and horse matched to your level",
        "Ride toward Diabat beach and the dunes",
        "Sunset packages: late-afternoon departure",
        "Return to the stables and departure",
      ],
    },
    bookingSteps: {
      fr: [
        "Choisissez votre durée (1h ou 2h) et jour / sunset",
        "Réservez en ligne ou via WhatsApp",
        "Recevez la confirmation et les détails de prise en charge",
        "Profitez de votre balade à cheval à Essaouira",
      ],
      en: [
        "Choose your duration (1h or 2h) and day / sunset package",
        "Book online or via WhatsApp",
        "Receive confirmation and pick-up details",
        "Enjoy your horse ride in Essaouira",
      ],
    },
    pricing: [
      {
        id: "day-1h",
        name: { fr: "Balade Journée", en: "Day Ride" },
        duration: { fr: "1 heure", en: "1 hour" },
        image: PLACEHOLDERS.horseGallery1,
        options: [
          { type: "group", label: { fr: "Groupe", en: "Group" }, price: 20, unit: { fr: "par personne", en: "per person" } },
          { type: "private", label: { fr: "Privé", en: "Private" }, price: 35, unit: { fr: "par personne", en: "per person" } },
        ],
        features: {
          fr: ["Plage & dunes", "Idéal débutants", "Transfert hôtel gratuit"],
          en: ["Beach & dunes", "Ideal for beginners", "Free hotel pick-up"],
        },
      },
      {
        id: "day-2h",
        name: { fr: "Balade Journée", en: "Day Ride" },
        duration: { fr: "2 heures", en: "2 hours" },
        image: PLACEHOLDERS.horseGallery2,
        options: [
          { type: "group", label: { fr: "Groupe", en: "Group" }, price: 35, unit: { fr: "par personne", en: "per person" } },
          { type: "private", label: { fr: "Privé", en: "Private" }, price: 65, unit: { fr: "par personne", en: "per person" } },
        ],
        features: {
          fr: ["Plage & dunes", "Parcours plus long", "Transfert hôtel gratuit"],
          en: ["Beach & dunes", "Longer ride", "Free hotel pick-up"],
        },
      },
      {
        id: "sunset-1h",
        name: { fr: "Coucher de soleil", en: "Sunset Ride" },
        duration: { fr: "1 heure", en: "1 hour" },
        image: PLACEHOLDERS.horseGallery3,
        options: [
          { type: "group", label: { fr: "Groupe", en: "Group" }, price: 25, unit: { fr: "par personne", en: "per person" } },
          { type: "private", label: { fr: "Privé", en: "Private" }, price: 40, unit: { fr: "par personne", en: "per person" } },
        ],
        features: {
          fr: ["Formule en fin de journée", "Plage de Diabat", "Transfert hôtel gratuit"],
          en: ["Late-afternoon ride", "Diabat beach", "Free hotel pick-up"],
        },
      },
      {
        id: "sunset-2h",
        name: { fr: "Coucher de soleil", en: "Sunset Ride" },
        duration: { fr: "2 heures", en: "2 hours" },
        highlighted: true,
        image: PLACEHOLDERS.horseGallery4,
        options: [
          { type: "group", label: { fr: "Groupe", en: "Group" }, price: 40, unit: { fr: "par personne", en: "per person" } },
          { type: "private", label: { fr: "Privé", en: "Private" }, price: 70, unit: { fr: "par personne", en: "per person" } },
        ],
        features: {
          fr: ["Formule en fin de journée", "Parcours plus long", "Transfert hôtel gratuit"],
          en: ["Late-afternoon ride", "Longer ride", "Free hotel pick-up"],
        },
      },
    ],
    premiumPricing: {
      title: {
        fr: "Shooting & Trek Experience",
        en: "Shooting & Trek Experience",
      },
      intro: {
        fr: "Au-delà des balades 1h et 2h : séance photo et vidéo à cheval, galop au lever du soleil, ou trek équestre de 2 à 6 jours (de 100€ à 900€).",
        en: "Beyond the 1-hour and 2-hour rides: on-horse photo and video session, sunrise gallop, or a 2- to 6-day horse trek (from €100 to €900).",
      },
      groups: [
        {
          id: "shooting",
          title: { fr: "Shooting Experience", en: "Shooting Experience" },
          subtitle: {
            fr: "Séance photo à cheval sur la plage",
            en: "On-horse photo session on the beach",
          },
          icon: "photography",
          backgroundImage: PLACEHOLDERS.horseGallery3,
          packages: [
            {
              id: "photos-videos",
              name: { fr: "Photos & Vidéos", en: "Photos & Videos" },
              tagline: {
                fr: "Séance photo & vidéo professionnelle à cheval",
                en: "Professional on-horse photo & video session",
              },
              duration: { fr: "Séance dédiée", en: "Dedicated session" },
              priceEur: 100,
              icon: "photography",
              image: PLACEHOLDERS.horseGallery1,
            },
            {
              id: "sunrise-gallop",
              name: {
                fr: "Galop au lever du soleil sur la plage",
                en: "Sunrise Gallop On The Beach",
              },
              tagline: {
                fr: "Balade au lever du soleil sur la plage",
                en: "Sunrise horse ride on the beach",
              },
              duration: { fr: "Lever du soleil", en: "Sunrise" },
              priceEur: 150,
              icon: "sunrise",
              image: PLACEHOLDERS.horseGallery3,
              highlighted: true,
            },
          ],
        },
        {
          id: "multi-day-trek",
          title: { fr: "Multi-Day Trek", en: "Multi-Day Trek" },
          subtitle: {
            fr: "Trek équestre 2 à 6 jours — €300 · €450 · €600 · €750 · €900",
            en: "Multi-day horse trek Morocco — €300 · €450 · €600 · €750 · €900",
          },
          icon: "trek",
          backgroundImage: PLACEHOLDERS.horseGallery5,
          packages: [
            {
              id: "trek-2d",
              name: { fr: "2 Jours", en: "2 Days" },
              tagline: {
                fr: "Première immersion trek équestre",
                en: "First multi-day horseback adventure",
              },
              duration: { fr: "2 jours", en: "2 days" },
              priceEur: HORSE_TREK_PRICES_EUR["2d"],
              icon: "trek",
            },
            {
              id: "trek-3d",
              name: { fr: "3 Jours", en: "3 Days" },
              duration: { fr: "3 jours", en: "3 days" },
              priceEur: HORSE_TREK_PRICES_EUR["3d"],
              icon: "trek",
            },
            {
              id: "trek-4d",
              name: { fr: "4 Jours", en: "4 Days" },
              duration: { fr: "4 jours", en: "4 days" },
              priceEur: HORSE_TREK_PRICES_EUR["4d"],
              icon: "trek",
            },
            {
              id: "trek-5d",
              name: { fr: "5 Jours", en: "5 Days" },
              duration: { fr: "5 jours", en: "5 days" },
              priceEur: HORSE_TREK_PRICES_EUR["5d"],
              icon: "trek",
            },
            {
              id: "trek-6d",
              name: { fr: "6 Jours", en: "6 Days" },
              tagline: {
                fr: "L'expérience trek ultime — désert & océan",
                en: "The ultimate trek — desert & ocean",
              },
              duration: { fr: "6 jours", en: "6 days" },
              priceEur: HORSE_TREK_PRICES_EUR["6d"],
              icon: "luxury",
              highlighted: true,
            },
          ],
        },
      ],
    },
    faq: [
      {
        question: {
          fr: "Faut-il avoir de l'expérience pour monter ?",
          en: "Do I need experience to ride?",
        },
        answer: {
          fr: "Non. Nos chevaux sont calmes et nos guides adaptent l'allure à chaque cavalier. Les débutants sont les bienvenus, même les enfants à partir de 6 ans accompagnés.",
          en: "No. Our horses are calm and our guides adapt the pace to every rider. Beginners are welcome, including accompanied children from 6 years old.",
        },
      },
      {
        question: {
          fr: "Quel est le meilleur moment pour partir ?",
          en: "What's the best time to ride?",
        },
        answer: {
          fr: "Les formules coucher de soleil partent en fin de journée, environ deux heures avant le sunset. Les formules journée se réservent en 1h ou 2h.",
          en: "Sunset rides leave in the late afternoon, about two hours before sunset. Day rides are booked as 1h or 2h.",
        },
      },
      {
        question: {
          fr: "Que dois-je porter ?",
          en: "What should I wear?",
        },
        answer: {
          fr: "Pantalon long, chaussures fermées, et une veste légère car le vent atlantique peut être frais. Nous fournissons les casques.",
          en: "Long pants, closed shoes, and a light jacket since the Atlantic wind can be cool. We provide helmets.",
        },
      },
      {
        question: {
          fr: "Le transport est-il inclus ?",
          en: "Is transport included?",
        },
        answer: {
          fr: "Oui. Le transfert hôtel gratuit est inclus. Nos écuries sont à Diabat, près d'Essaouira.",
          en: "Yes. Free hotel pick-up is included. Our stables are in Diabat, near Essaouira.",
        },
      },
      {
        question: {
          fr: "Quel est le prix d'une balade à cheval à Essaouira ?",
          en: "How much does horse riding in Essaouira cost?",
        },
        answer: {
          fr: "Tous les tarifs Groupe et Privé sont par personne. Journée 1h : 20€ groupe, 35€ privé. Journée 2h : 35€ / 65€. Coucher de soleil 1h : 25€ / 40€. Coucher de soleil 2h : 40€ / 70€. Transfert hôtel gratuit inclus.",
          en: "All Group and Private rates are per person. Day 1h: €20 group, €35 private. Day 2h: €35 / €65. Sunset 1h: €25 / €40. Sunset 2h: €40 / €70. Free hotel pick-up included.",
        },
      },
    ],
    seoHeading: {
      fr: "Balade à cheval sur la plage à Essaouira : 1h, 2h, groupe et privé",
      en: "Horse riding on the beach in Essaouira: 1h, 2h, group and private",
    },
    seoContent: {
      fr: [
        "La balade à cheval à Essaouira se déroule sur la plage de Diabat, face à l'océan. C'est l'activité à réserver si vous cherchez une sortie équestre à Essaouira, avec des tarifs clairs par personne.",
        "Les écuries sont à Diabat, à quelques minutes du centre d'Essaouira (anciennement Mogador). Nos chevaux sont sélectionnés pour leur calme et leur endurance, adaptés aux débutants comme aux cavaliers confirmés. Chaque balade est encadrée par des guides locaux.",
        "Deux durées : 1 heure ou 2 heures. Deux moments : journée ou coucher de soleil. Deux formules : groupe ou privé, toutes par personne. Le transfert hôtel est gratuit.",
        "La formule 1h convient pour découvrir la plage. La formule 2h allonge la sortie. Casque, briefing et guide sont inclus.",
        "Cette activité convient aux familles (dès 6 ans accompagnés), aux couples et aux groupes. Elle se combine avec une sortie quad ou dromadaire si vous organisez une journée d'activités à Essaouira.",
      ],
      en: [
        "Horse riding in Essaouira takes place on Diabat beach, facing the ocean. This is the page to book a beach horse ride in Essaouira, with prices listed per person.",
        "The stables are in Diabat, a few minutes from Essaouira's center (formerly Mogador). Our horses are selected for calm and endurance, suited to beginners and experienced riders. Local guides accompany each ride.",
        "Two durations: 1 hour or 2 hours. Two times of day: daytime or sunset. Two formulas: group or private, all per person. Hotel pick-up is free.",
        "The 1-hour ride is a first look at the beach. The 2-hour ride is longer. Helmet, briefing and guide are included.",
        "This activity suits families (from age 6 accompanied), couples and groups. It also pairs with a quad or camel ride if you are planning a day of activities in Essaouira.",
      ],
    },
    seo: {
      title: {
        fr: "Balade à cheval Essaouira | Plage dès 20€ — 1h ou 2h",
        en: "Horse Riding on the Beach in Essaouira | From €20",
      },
      description: {
        fr: "Balade à cheval sur la plage à Essaouira dès 20€ par personne. Formules 1h ou 2h, groupe ou privé. Transfert hôtel gratuit. Réservez.",
        en: "Horse riding on the beach in Essaouira from €20 per person. 1-hour and 2-hour rides, group or private. Free hotel pick-up. Book your ride.",
      },
      keywords: {
        fr: [
          "balade à cheval essaouira",
          "cheval sur la plage essaouira",
          "prix balade cheval essaouira",
          "balade cheval essaouira",
          "cheval plage essaouira",
          "équitation essaouira",
        ],
        en: [
          "horse riding essaouira",
          "horse riding on the beach essaouira",
          "horse riding essaouira price",
          "horse riding in essaouira",
          "beach horse riding essaouira",
          "diabat horse riding",
        ],
      },
    },
  },

  // ─────────────── QUAD BIKING ───────────────
  {
    id: "quad-biking",
    slug: {
      fr: "quad-essaouira",
      en: "quad-biking-essaouira",
    },
    icon: "quad",
    title: {
      fr: "Quad à Essaouira",
      en: "Quad Biking in Essaouira",
    },
    shortTitle: { fr: "Quad", en: "Quad" },
    tagline: {
      fr: "L'aventure pure, des dunes à la forêt.",
      en: "Pure adventure, from the dunes to the forest.",
    },
    overviewHeading: {
      fr: "Quad Essaouira — circuits dunes, forêt d'arganiers & Cap Sim",
      en: "Quad biking in Essaouira — dune, argan forest & Cap Sim tours",
    },
    pricingHeading: {
      fr: "Prix quad Essaouira — tarifs des circuits",
      en: "Quad Essaouira prices — tour rates",
    },
    description: {
      fr: "Pilotez un quad à travers les dunes, la forêt d'arganiers et les pistes côtières d'Essaouira. Sensations garanties, paysages spectaculaires.",
      en: "Ride a quad through the dunes, the argan forest and the coastal tracks of Essaouira. Guaranteed thrills, spectacular landscapes.",
    },
    longDescription: {
      fr: [
        "Le quad à Essaouira, c'est la liberté sur dunes, forêt d'arganiers et pistes côtières. Les circuits vont d'une heure à Diabat jusqu'à une journée vers Sidi Kaouki ou Sidi M'barek — Cap Sim (2h) reste la formule la plus demandée.",
        "Nos quads sont récents, parfaitement entretenus et adaptés à tous les niveaux. Le briefing initial est complet : commandes, sécurité, comportement en groupe. Un guide ouvre la route, un autre ferme la marche.",
        "Simple : un quad pour une personne. Double : un quad pour deux personnes. Transfert hôtel gratuit inclus. Le déjeuner n'est inclus que sur les circuits journée Sidi Kaouki et Sidi M'barek.",
      ],
      en: [
        "Quad biking in Essaouira is freedom across dunes, argan forest and coastal tracks. Circuits range from one hour in Diabat to a full day toward Sidi Kaouki or Sidi M'barek — Cap Sim (2h) remains the most requested tour.",
        "Our quads are recent, perfectly maintained and suitable for all levels. The initial briefing is complete: controls, safety, group behavior. One guide leads, another closes the ride.",
        "Single: one-person quad. Double: one quad for two people. Free hotel pick-up included. Lunch is included only on the Sidi Kaouki and Sidi M'barek full-day circuits.",
      ],
    },
    heroImage: PLACEHOLDERS.quadHero,
    heroImageAlt: {
      fr: "Quad sur les dunes au-dessus d'Essaouira",
      en: "Quad bike on the dunes above Essaouira",
    },
    gallery: [
      {
        src: PLACEHOLDERS.quadGallery1,
        alt: {
          fr: "Dunes dorées d'Essaouira",
          en: "Golden dunes of Essaouira",
        },
      },
      {
        src: PLACEHOLDERS.quadGallery2,
        alt: { fr: "Quad en action", en: "Quad in action" },
      },
      {
        src: PLACEHOLDERS.quadGallery3,
        alt: { fr: "Forêt d'arganiers", en: "Argan forest" },
      },
      {
        src: PLACEHOLDERS.quadGallery4,
        alt: { fr: "Piste côtière", en: "Coastal track" },
      },
      {
        src: PLACEHOLDERS.quadGallery5,
        alt: { fr: "Aventure en quad", en: "Quad adventure" },
      },
      {
        src: PLACEHOLDERS.quadGallery6,
        alt: { fr: "Plage de Sidi Kaouki", en: "Sidi Kaouki beach" },
      },
    ],
    videoReels: [
      {
        youtubeId: "8KoYGQ9S9Nc",
        title: { fr: "Aventure quad dans les dunes", en: "Quad adventure in the dunes" },
      },
      {
        youtubeId: "HsuI-AMHVb0",
        title: { fr: "Circuit Cap Sim", en: "Cap Sim circuit" },
      },
      {
        youtubeId: "bBp5BrlqF7o",
        title: { fr: "Circuit Cap Sim", en: "Cap Sim circuit" },
      },
    ],
    duration: { fr: "1h à journée complète", en: "1h to full day" },
    difficulty: "moderate",
    minAge: 16,
    groupSize: { fr: "1 à 10 pilotes", en: "1 to 10 riders" },
    includes: {
      fr: [
        "Quad récent & entretenu",
        "Casque & lunettes",
        "Briefing sécurité complet",
        "2 guides pour le groupe",
        "Carburant inclus",
        "Bouteille d'eau",
        "Transfert hôtel gratuit",
      ],
      en: [
        "Recent, well-maintained quad",
        "Helmet & goggles",
        "Full safety briefing",
        "2 guides per group",
        "Fuel included",
        "Water bottle",
        "Free hotel pick-up",
      ],
    },
    notIncluded: {
      fr: [
        "Vêtements personnels (chaussures fermées recommandées)",
        "Déjeuner (sauf journées Sidi Kaouki et Sidi M'barek)",
      ],
      en: [
        "Personal clothing (closed shoes recommended)",
        "Lunch (except Sidi Kaouki and Sidi M'barek full-day tours)",
      ],
    },
    meetingPoint: {
      fr: "Départ depuis Diabat, près d'Essaouira — transfert hôtel gratuit depuis le centre.",
      en: "Departure from Diabat, near Essaouira — free hotel pick-up from the center.",
    },
    suitableFor: {
      fr: [
        "Pilotes dès 16 ans",
        "Passagers dès 12 ans (quad biplace)",
        "Débutants (briefing complet inclus)",
        "Groupes en quête d'adrénaline",
      ],
      en: [
        "Riders from 16 years old",
        "Passengers from 12 (two-seater quads)",
        "Beginners (full briefing included)",
        "Groups looking for thrills",
      ],
    },
    itinerary: {
      fr: [
        "Prise en charge hôtel ou rendez-vous à Diabat",
        "Briefing sécurité, équipement et prise en main du quad",
        "Circuit selon la formule — ex. Circuit Diabat (1h) : Dar Soltan, plage, forêt, dunes",
        "Formules plus longues : Cap Sim, source d'eau douce, grotte, Taguenza ou cascade de Sidi M'barek",
        "Retour, photos et transfert vers votre hébergement",
      ],
      en: [
        "Hotel pick-up or meeting in Diabat",
        "Safety briefing, gear and quad familiarization",
        "Route by package — e.g. Diabat Circuit (1h): Dar Soltan, beach, forest, dunes",
        "Longer tours: Cap Sim dunes, freshwater spring, cave, Taguenza or Sidi M'barek waterfall",
        "Return, photos and transfer to your accommodation",
      ],
    },
    bookingSteps: {
      fr: [
        "Choisissez votre circuit (1h à journée complète)",
        "Choisissez Simple (1 personne) ou Double (1 quad pour 2)",
        "Réservez en ligne ou WhatsApp",
        "Partez en quad à Essaouira",
      ],
      en: [
        "Choose your circuit (1h to full day)",
        "Choose Single (1 person) or Double (1 quad for 2)",
        "Book online or via WhatsApp",
        "Ride a quad in Essaouira",
      ],
    },
    pricing: [
      {
        id: "circuit-1h",
        name: { fr: "Circuit Diabat", en: "Diabat Circuit" },
        description: { fr: "Diabat, Dar Soltan, plage, forêt, dunes", en: "Diabat, Dar Soltan, beach, forest, dunes" },
        duration: { fr: "1 heure", en: "1 hour" },
        image: PLACEHOLDERS.quadGallery1,
        options: [
          { type: "simple", label: { fr: "Simple (1 personne)", en: "Single (1 person)" }, price: 30 },
          { type: "double", label: { fr: "Double (1 quad / 2 pers.)", en: "Double (1 quad for 2)" }, price: 45 },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Free hotel pick-up", "No experience needed"],
        },
      },
      {
        id: "circuit-2h",
        name: { fr: "Circuit Cap Sim", en: "Cap Sim Circuit" },
        description: { fr: "Diabat, plage, forêt, dunes sauvages, source d'eau douce et dunes Cap Sim", en: "Diabat, beach, forest, wild dunes, freshwater spring and Cap Sim dunes" },
        duration: { fr: "2 heures", en: "2 hours" },
        highlighted: true,
        image: PLACEHOLDERS.quadGallery2,
        options: [
          { type: "simple", label: { fr: "Simple (1 personne)", en: "Single (1 person)" }, price: 50 },
          { type: "double", label: { fr: "Double (1 quad / 2 pers.)", en: "Double (1 quad for 2)" }, price: 70 },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Free hotel pick-up", "No experience needed"],
        },
      },
      {
        id: "circuit-3h",
        name: { fr: "Circuit Grotte", en: "Cave Circuit" },
        description: { fr: "Diabat, plage, forêt, source d'eau douce, Cap Sim et la grotte", en: "Diabat, beach, forest, freshwater spring, Cap Sim and the cave" },
        duration: { fr: "3 heures", en: "3 hours" },
        image: PLACEHOLDERS.quadGallery3,
        options: [
          { type: "simple", label: { fr: "Simple (1 personne)", en: "Single (1 person)" }, price: 65 },
          { type: "double", label: { fr: "Double (1 quad / 2 pers.)", en: "Double (1 quad for 2)" }, price: 90 },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Free hotel pick-up", "No experience needed"],
        },
      },
      {
        id: "circuit-half-day",
        name: { fr: "Demi-journée", en: "Half Day" },
        description: { fr: "Diabat, plage, forêt, source d'eau douce, Cap Sim, Taguenza, petit port et village berbère", en: "Diabat, beach, forest, freshwater spring, Cap Sim, Taguenza, small port and Berber village" },
        duration: { fr: "Demi-journée", en: "Half Day" },
        image: PLACEHOLDERS.quadGallery4,
        options: [
          { type: "simple", label: { fr: "Simple (1 personne)", en: "Single (1 person)" }, price: 90 },
          { type: "double", label: { fr: "Double (1 quad / 2 pers.)", en: "Double (1 quad for 2)" }, price: 110 },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise", "Déjeuner non inclus"],
          en: ["Free hotel pick-up", "No experience needed", "Lunch not included"],
        },
      },
      {
        id: "circuit-sidi-kaouki",
        name: { fr: "Journée Sidi Kaouki", en: "Sidi Kaouki Day" },
        description: { fr: "Plage sauvage et dunes au bord de la plage, déjeuner inclus", en: "Wild beach and dunes by the beach, lunch included" },
        duration: { fr: "1 journée", en: "1 Day" },
        image: PLACEHOLDERS.quadGallery5,
        options: [
          { type: "simple", label: { fr: "Simple (1 personne)", en: "Single (1 person)" }, price: 110 },
          { type: "double", label: { fr: "Double (1 quad / 2 pers.)", en: "Double (1 quad for 2)" }, price: 140 },
        ],
        features: {
          fr: ["Déjeuner inclus", "Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Lunch included", "Free hotel pick-up", "No experience needed"],
        },
      },
      {
        id: "circuit-sidi-mbarek",
        name: { fr: "Journée Sidi M'barek", en: "Sidi M'barek Day" },
        description: { fr: "Cascade de Sidi M'barek, plage sauvage et dunes au bord de la plage, déjeuner inclus", en: "Sidi M'barek waterfall, wild beach and dunes by the beach, lunch included" },
        image: PLACEHOLDERS.quadGallery6,
        duration: { fr: "1 journée", en: "1 Day" },
        options: [
          { type: "simple", label: { fr: "Simple (1 personne)", en: "Single (1 person)" }, price: 140 },
          { type: "double", label: { fr: "Double (1 quad / 2 pers.)", en: "Double (1 quad for 2)" }, price: 170 },
        ],
        features: {
          fr: ["Déjeuner inclus", "Cascade", "Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Lunch included", "Waterfall", "Free hotel pick-up", "No experience needed"],
        },
      },
    ],
    faq: [
      {
        question: {
          fr: "Faut-il un permis pour piloter ?",
          en: "Do I need a license to ride?",
        },
        answer: {
          fr: "Non, aucun permis n'est requis. Un briefing complet est dispensé avant le départ. L'âge minimum est de 16 ans pour piloter seul.",
          en: "No license is required. A full briefing is given before departure. Minimum age is 16 to ride solo.",
        },
      },
      {
        question: {
          fr: "Peut-on monter à deux sur un quad ?",
          en: "Can two people share a quad?",
        },
        answer: {
          fr: "Oui. Le tarif Double est le prix d'un quad pour deux personnes, pas un tarif par personne. Le passager doit avoir au moins 12 ans et porter le casque fourni.",
          en: "Yes. The Double price is for one quad carrying two people, not a per-person rate. The passenger must be at least 12 and wear the provided helmet.",
        },
      },
      {
        question: {
          fr: "Que se passe-t-il en cas de mauvais temps ?",
          en: "What if the weather is bad?",
        },
        answer: {
          fr: "À Essaouira, le vent est constant mais la pluie rare. En cas d'annulation pour conditions extrêmes, nous reportons sans frais.",
          en: "Essaouira is windy but rarely rainy. In case of cancellation due to extreme conditions, we reschedule at no cost.",
        },
      },
      {
        question: {
          fr: "Le quad est-il adapté aux familles ?",
          en: "Is quad biking family-friendly?",
        },
        answer: {
          fr: "Oui, à partir de 12 ans en passager et 16 ans pour piloter. Le circuit Diabat (1h) est idéal pour une première découverte en famille.",
          en: "Yes, from 12 years old as a passenger and 16 to ride. The Diabat circuit (1h) is ideal for a first family discovery.",
        },
      },
      {
        question: {
          fr: "Quel est le prix d'un quad à Essaouira ?",
          en: "What is the price of quad Essaouira?",
        },
        answer: {
          fr: "Le circuit Diabat (1h) commence à 30€ en Simple (1 personne) et 45€ en Double (un quad pour deux personnes). Cap Sim (2h) à partir de 50€. Tous les tarifs sont listés ci-dessous, transfert hôtel inclus. Demi-journée et journées Sidi Kaouki / Sidi M'barek aussi disponibles.",
          en: "The Diabat circuit (1h) starts at €30 Single (one person) and €45 Double (one quad for two people). Cap Sim (2h) from €50. All rates are listed below, hotel pick-up included. Half-day and Sidi Kaouki / Sidi M'barek full-day tours are also available.",
        },
      },
    ],
    seoHeading: {
      fr: "Circuits quad Essaouira : Diabat, Cap Sim et dunes",
      en: "Essaouira quad circuits: Diabat, Cap Sim and dunes",
    },
    seoContent: {
      fr: [
        "Le quad à Essaouira offre une aventure tout-terrain à travers dunes, forêt d'arganiers et pistes côtières vers Sidi Kaouki. C'est l'une des activités outdoor les plus demandées pour les voyageurs en quête de sensations.",
        "Nos quads sont récents et entretenus. Débutants comme confirmés : briefing complet, deux guides par groupe, casque et lunettes fournis. Le transfert hôtel depuis Essaouira est gratuit.",
        "Le circuit Diabat (1h) traverse Dar Soltan, plage, forêt et dunes — parfait pour découvrir. Le circuit Cap Sim (2h), le plus populaire, ajoute dunes sauvages et source d'eau douce. La demi-journée et les journées Sidi Kaouki / Sidi M'barek (déjeuner inclus sur ces deux journées uniquement) vont plus loin, jusqu'à Taguenza, la grotte ou la cascade.",
        "Âge minimum : 16 ans pour piloter, 12 ans en passager sur biplace. Départs matin et après-midi selon la météo.",
        "Le quad se combine très bien avec une balade à cheval ou en dromadaire pour une journée complète d'activités à Essaouira et Diabat.",
      ],
      en: [
        "Quad biking in Essaouira is an off-road adventure through dunes, argan forest and coastal tracks toward Sidi Kaouki — one of the most popular outdoor activities for thrill-seekers.",
        "Our quads are recent and well maintained. Beginners and experienced riders get a full briefing, two guides per group, helmet and goggles. Free hotel pick-up from Essaouira is included.",
        "The Diabat circuit (1h) covers Dar Soltan, beach, forest and dunes — ideal for a first ride. Cap Sim (2h), our most popular tour, adds wild dunes and a freshwater spring. Half-day and Sidi Kaouki / Sidi M'barek full-day tours (lunch included on those two full-day circuits only) go further, to Taguenza, the cave or the waterfall.",
        "Minimum age: 16 to ride solo, 12 as passenger on a two-seater. Departures morning and afternoon depending on weather.",
        "Quad tours pair well with horse or camel rides for a full day of activities in Essaouira and Diabat.",
      ],
    },
    seo: {
      title: {
        fr: "Quad Essaouira | Circuits Diabat & Cap Sim — Prix dès 30€",
        en: "Quad Biking in Essaouira | Tours from €30 — Diabat & Cap Sim",
      },
      description: {
        fr: "Quad Essaouira : circuits Diabat (1h), Cap Sim (2h) et journées Sidi Kaouki. Prix dès 30€. Transfert hôtel gratuit. Réservez votre excursion.",
        en: "Quad biking in Essaouira: Diabat, Cap Sim and full-day tours. From €30 for a one-person quad. Free hotel pick-up. Book your Essaouira quad tour.",
      },
      keywords: {
        fr: [
          "quad essaouira",
          "prix quad essaouira",
          "excursion quad essaouira",
          "circuit quad essaouira",
          "quad diabat",
          "quad cap sim",
        ],
        en: [
          "quad biking essaouira",
          "quad tour essaouira",
          "essaouira quad price",
          "quad biking in essaouira morocco",
          "quad essaouira",
          "essaouira quad tour",
        ],
      },
    },
  },

  // ─────────────── CAMEL RIDE ───────────────
  {
    id: "camel-ride",
    slug: {
      fr: "balade-dromadaire-essaouira",
      en: "camel-ride-essaouira",
    },
    icon: "camel",
    title: {
      fr: "Balade en dromadaire sur la plage à Essaouira",
      en: "Camel Ride on the Beach in Essaouira",
    },
    shortTitle: { fr: "Dromadaire", en: "Camel" },
    tagline: {
      fr: "Balades 1h, 2h, demi-journée ou journée sur la plage de Diabat.",
      en: "1h, 2h, half-day or full-day rides on Diabat beach.",
    },
    overviewHeading: {
      fr: "Balade dromadaire à Essaouira — plage de Diabat",
      en: "Camel ride in Essaouira — Diabat beach",
    },
    pricingHeading: {
      fr: "Prix balade dromadaire Essaouira — tarifs par personne",
      en: "Camel ride Essaouira price — rates per person",
    },
    description: {
      fr: "Une balade en dromadaire sur la plage de Diabat, face à l'océan. Formules 1h, 2h, demi-journée ou journée. Transfert hôtel gratuit.",
      en: "A camel ride on Diabat beach, facing the ocean. 1h, 2h, half-day or full-day packages. Free hotel pick-up.",
    },
    longDescription: {
      fr: [
        "Le dromadaire avance lentement, face à l'océan Atlantique, dans les dunes de Diabat qui descendent jusqu'à la mer. La balade en dromadaire à Essaouira convient aux familles, aux couples et à tous les niveaux — aucune expérience n'est requise.",
        "Les formules vont d'une heure à une journée avec pique-nique. Une sortie en fin d'après-midi est possible selon la formule choisie ; la lumière et le ciel dépendent du jour.",
        "Le départ se fait depuis la plage de Diabat, à quelques minutes du centre d'Essaouira. Briefing, accompagnement et transfert hôtel gratuit sont inclus.",
      ],
      en: [
        "The camel walks slowly, facing the Atlantic Ocean, across the Diabat dunes that run down to the sea. A camel ride in Essaouira suits families, couples and all levels — no experience is required.",
        "Packages range from one hour to a full day with picnic. A late-afternoon ride is possible depending on the package; light and sky vary with the day.",
        "Departure is from Diabat beach, a few minutes from Essaouira's center. Briefing, accompaniment and free hotel pick-up are included.",
      ],
    },
    heroImage: PLACEHOLDERS.camelHero,
    heroImageAlt: {
      fr: "Caravane de dromadaires au coucher du soleil à Essaouira",
      en: "Camel caravan at sunset in Essaouira",
    },
    gallery: [
      {
        src: PLACEHOLDERS.camelGallery1,
        alt: { fr: "Dromadaire dans les dunes", en: "Camel in the dunes" },
      },
      {
        src: PLACEHOLDERS.camelGallery2,
        alt: { fr: "Caravane berbère", en: "Berber caravan" },
      },
      {
        src: PLACEHOLDERS.camelGallery3,
        alt: { fr: "Détail dromadaire", en: "Camel close-up" },
      },
      {
        src: PLACEHOLDERS.camelGallery4,
        alt: {
          fr: "Coucher de soleil sur les dunes",
          en: "Sunset over the dunes",
        },
      },
      {
        src: PLACEHOLDERS.camelGallery5,
        alt: { fr: "Désert et océan", en: "Desert and ocean" },
      },
      {
        src: PLACEHOLDERS.camelGallery6,
        alt: { fr: "Lumière dorée Essaouira", en: "Essaouira golden light" },
      },
    ],
    videoReels: [
      {
        youtubeId: "9zWJt-xE2eA",
        title: { fr: "Caravane face à l'océan", en: "Camel caravan facing the ocean" },
      },
    ],
    duration: { fr: "1h à 1 journée", en: "1h to full day" },
    difficulty: "easy",
    minAge: 4,
    groupSize: { fr: "1 à 12 personnes", en: "1 to 12 people" },
    includes: {
      fr: [
        "Dromadaire & équipement traditionnel",
        "Guide local",
        "Briefing & accompagnement",
        "Bouteille d'eau",
        "Transfert hôtel gratuit",
      ],
      en: [
        "Camel & traditional equipment",
        "Local guide",
        "Briefing & escort",
        "Water bottle",
        "Free hotel pick-up",
      ],
    },
    notIncluded: {
      fr: ["Vêtements personnels (chapeau et crème solaire conseillés)"],
      en: ["Personal clothing (hat and sunscreen recommended)"],
    },
    meetingPoint: {
      fr: "Plage de Diabat, à quelques minutes du centre d'Essaouira — transfert hôtel gratuit.",
      en: "Diabat beach, minutes from Essaouira center — free hotel pick-up.",
    },
    suitableFor: {
      fr: [
        "Familles avec enfants dès 4 ans",
        "Couples (surtout au coucher du soleil)",
        "Tous niveaux — aucune expérience requise",
        "Voyageurs cherchant une expérience douce et photogénique",
      ],
      en: [
        "Families with children from 4 years old",
        "Couples (especially at sunset)",
        "All levels — no experience needed",
        "Travelers seeking a gentle, photogenic experience",
      ],
    },
    itinerary: {
      fr: [
        "Prise en charge et arrivée sur la plage de Diabat",
        "Briefing et montage du dromadaire avec l'aide du guide",
        "Traversée des dunes face à l'océan Atlantique",
        "Retour et transfert vers votre hébergement",
      ],
      en: [
        "Pick-up and arrival on Diabat beach",
        "Briefing and mounting with guide assistance",
        "Ride across the dunes facing the Atlantic Ocean",
        "Return and transfer to your accommodation",
      ],
    },
    bookingSteps: {
      fr: [
        "Choisissez votre durée (1h, 2h, demi-journée ou journée)",
        "Réservez en ligne ou via WhatsApp",
        "Recevez la confirmation et les détails de prise en charge",
        "Profitez de votre balade dromadaire à Essaouira",
      ],
      en: [
        "Choose your duration (1h, 2h, half-day or full day)",
        "Book online or via WhatsApp",
        "Receive confirmation and pick-up details",
        "Enjoy your camel ride in Essaouira",
      ],
    },
    pricing: [
      {
        id: "camel-1h",
        name: { fr: "Balade 1H", en: "1H Ride" },
        duration: { fr: "1 heure", en: "1 hour" },
        image: PLACEHOLDERS.camelGallery1,
        options: [
          { type: "standard", label: { fr: "Par personne", en: "Per person" }, price: 20, unit: { fr: "par personne", en: "per person" } },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Free hotel pick-up", "No experience needed"],
        },
      },
      {
        id: "camel-2h",
        name: { fr: "Balade 2H", en: "2H Ride" },
        duration: { fr: "2 heures", en: "2 hours" },
        highlighted: true,
        image: PLACEHOLDERS.camelGallery2,
        options: [
          { type: "standard", label: { fr: "Par personne", en: "Per person" }, price: 30, unit: { fr: "par personne", en: "per person" } },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Free hotel pick-up", "No experience needed"],
        },
      },
      {
        id: "camel-half-day",
        name: { fr: "Demi-journée", en: "Half Day" },
        duration: { fr: "3 heures", en: "3 hours" },
        image: PLACEHOLDERS.camelHero,
        options: [
          { type: "standard", label: { fr: "Par personne", en: "Per person" }, price: 40, unit: { fr: "par personne", en: "per person" } },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise", "Pause thé"],
          en: ["Free hotel pick-up", "No experience needed", "Tea break"],
        },
      },
      {
        id: "camel-day",
        name: { fr: "Journée avec pique-nique", en: "Day with Picnic" },
        duration: { fr: "Journée", en: "Full Day" },
        image: PLACEHOLDERS.camelGallery1,
        options: [
          { type: "standard", label: { fr: "Par personne", en: "Per person" }, price: 75, unit: { fr: "par personne", en: "per person" } },
        ],
        features: {
          fr: ["Pique-nique inclus", "Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Picnic included", "Free hotel pick-up", "No experience needed"],
        },
      },
    ],
    faq: [
      {
        question: {
          fr: "C'est confortable de monter sur un dromadaire ?",
          en: "Is camel riding comfortable?",
        },
        answer: {
          fr: "Oui, nos selles traditionnelles sont coussinées et adaptées. Le dromadaire avance lentement, c'est très différent du cheval. Les enfants adorent.",
          en: "Yes, our traditional saddles are padded and adapted. Camels walk slowly — quite different from horses. Kids love it.",
        },
      },
      {
        question: {
          fr: "À partir de quel âge peut-on monter ?",
          en: "What's the minimum age?",
        },
        answer: {
          fr: "Dès 4 ans, accompagné d'un parent. C'est une activité parfaitement adaptée aux familles avec jeunes enfants.",
          en: "From 4 years old, accompanied by a parent. It's perfectly suited for families with young children.",
        },
      },
      {
        question: {
          fr: "Peut-on faire la balade et le quad le même jour ?",
          en: "Can I combine camel and quad on the same day?",
        },
        answer: {
          fr: "Oui. Il est possible d'enchaîner les deux le même jour. Contactez-nous pour organiser les horaires.",
          en: "Yes. Both can be arranged on the same day. Contact us to plan the schedule.",
        },
      },
      {
        question: {
          fr: "Les dromadaires sont-ils bien traités ?",
          en: "Are the camels well treated?",
        },
        answer: {
          fr: "Absolument. Repos quotidien, nourriture de qualité, suivi vétérinaire régulier. Le bien-être animal est non-négociable pour nous.",
          en: "Absolutely. Daily rest, quality feed, regular veterinary care. Animal welfare is non-negotiable for us.",
        },
      },
      {
        question: {
          fr: "Quel est le prix d'une balade dromadaire à Essaouira ?",
          en: "What is the camel ride Essaouira price?",
        },
        answer: {
          fr: "À partir de 20€ par personne pour 1 heure. Formules 2h (30€), demi-journée 3h (40€) et journée avec pique-nique (75€). Tous les tarifs sont par personne. Transfert hôtel gratuit inclus.",
          en: "From €20 per person for 1 hour. 2h (€30), half-day 3h (€40) and full-day picnic (€75) packages. All rates are per person. Free hotel pick-up included.",
        },
      },
      {
        question: {
          fr: "Le transport est-il inclus ?",
          en: "Is transport included?",
        },
        answer: {
          fr: "Oui. Le transfert hôtel gratuit est inclus. La balade part de la plage de Diabat, près d'Essaouira.",
          en: "Yes. Free hotel pick-up is included. The ride starts from Diabat beach, near Essaouira.",
        },
      },
    ],
    seoHeading: {
      fr: "Balade en dromadaire sur la plage à Essaouira : 1h, 2h, demi-journée et journée",
      en: "Camel ride on the beach in Essaouira: 1h, 2h, half-day and full day",
    },
    seoContent: {
      fr: [
        "La balade en dromadaire à Essaouira se déroule sur la plage de Diabat, face à l'océan. C'est la page à réserver pour une promenade à dos de dromadaire, avec des tarifs indiqués par personne.",
        "Le départ est à Diabat, à quelques minutes du centre d'Essaouira (anciennement Mogador). Le rythme est lent, adapté aux familles dès 4 ans accompagnés. Un guide local encadre la sortie.",
        "Quatre formules : 1 heure (20€), 2 heures (30€), demi-journée de 3 heures (40€) et journée avec pique-nique (75€). Tous ces tarifs sont par personne. Le transfert hôtel est gratuit.",
        "La formule 1h convient pour une première découverte de la plage. La formule 2h allonge la sortie. La demi-journée inclut une pause thé. La journée ajoute un pique-nique.",
        "Cette activité convient aux familles, aux couples et aux groupes. Elle se combine avec une sortie cheval ou quad si vous organisez une journée d'activités à Essaouira.",
      ],
      en: [
        "A camel ride in Essaouira takes place on Diabat beach, facing the ocean. This is the page to book a beach camel ride in Essaouira, with prices listed per person.",
        "Departure is in Diabat, a few minutes from Essaouira's center (formerly Mogador). The pace is slow, suited to families with accompanied children from age 4. A local guide accompanies the ride.",
        "Four packages: 1 hour (€20), 2 hours (€30), a 3-hour half-day (€40) and a full day with picnic (€75). All of these rates are per person. Hotel pick-up is free.",
        "The 1-hour ride is a first look at the beach. The 2-hour ride is longer. The half-day includes a tea break. The full day adds a picnic.",
        "This activity suits families, couples and groups. It also pairs with a horse or quad ride if you are planning a day of activities in Essaouira.",
      ],
    },
    seo: {
      title: {
        fr: "Balade dromadaire Essaouira | Plage dès 20€ — 1h à journée",
        en: "Camel Ride on the Beach in Essaouira | From €20",
      },
      description: {
        fr: "Balade dromadaire sur la plage à Essaouira dès 20€ par personne. Formules 1h, 2h, demi-journée ou journée. Transfert hôtel gratuit. Réservez.",
        en: "Camel ride on the beach in Essaouira from €20 per person. 1h, 2h, half-day or full-day packages. Free hotel pick-up. Book your ride.",
      },
      keywords: {
        fr: [
          "balade dromadaire essaouira",
          "dromadaire plage essaouira",
          "prix balade dromadaire essaouira",
          "promenade dromadaire essaouira",
          "balade à dos de chameau essaouira",
        ],
        en: [
          "camel ride essaouira",
          "camel ride on the beach essaouira",
          "camel ride essaouira price",
          "camel riding essaouira morocco",
          "essaouira camel ride",
        ],
      },
    },
  },

  // ─────────────── ART EXPERIENCE ───────────────
  {
    id: "art-experience",
    slug: {
      fr: "art-experience-essaouira",
      en: "art-experience-essaouira",
    },
    icon: "palette",
    title: {
      fr: "Atelier créatif anti-stress à Essaouira",
      en: "Creative Art Workshop in Essaouira",
    },
    shortTitle: { fr: "Art", en: "Art" },
    tagline: {
      fr: "Atelier créatif de 1h30 à 2h face à l'océan — matériel inclus.",
      en: "1h30 to 2h creative workshop facing the ocean — supplies included.",
    },
    overviewHeading: {
      fr: "Atelier créatif à Essaouira — coloriage anti-stress face à l'océan",
      en: "Art workshop in Essaouira — anti-stress coloring by the ocean",
    },
    pricingHeading: {
      fr: "Prix atelier créatif Essaouira — tarifs & formules",
      en: "Essaouira art workshop prices — packages & rates",
    },
    description: {
      fr: "Un atelier créatif de coloriage anti-stress face à l'océan à Essaouira. Sessions 1h30 ou 2h, matériel inclus. Transfert hôtel gratuit.",
      en: "A creative anti-stress coloring workshop facing the ocean in Essaouira. 1h30 or 2h sessions, supplies included. Free hotel pick-up.",
    },
    longDescription: {
      fr: [
        "Après l'aventure, le calme. L'Art Experience est un atelier créatif de coloriage anti-stress, en petit groupe, dans un cadre simple face à l'océan à Essaouira.",
        "Les supports proposés dans l'atelier : mandala, motifs berbères, paysages d'Essaouira. Crayons, feutres et aquarelles sont fournis. Aucun talent n'est requis : le but est de se poser, pas de produire une œuvre.",
        "La session convient après une balade à cheval, en quad ou en dromadaire. Vous repartez avec votre création. Transfert hôtel gratuit inclus.",
      ],
      en: [
        "After the adventure, the calm. The Art Experience is a creative anti-stress coloring workshop, in a small group, in a simple setting facing the ocean in Essaouira.",
        "Workshop templates include mandala, Berber patterns and Essaouira landscapes. Pencils, markers and watercolors are provided. No talent is required: the aim is to slow down, not to produce a masterpiece.",
        "The session pairs well after a horse, quad or camel ride. You leave with your creation. Free hotel pick-up is included.",
      ],
    },
    heroImage: PLACEHOLDERS.artHero,
    heroImageAlt: {
      fr: "Atelier de coloriage anti-stress face à l'océan",
      en: "Anti-stress coloring workshop facing the ocean",
    },
    gallery: [
      {
        src: PLACEHOLDERS.artGallery1,
        alt: { fr: "Mandala et crayons", en: "Mandala and pencils" },
      },
      {
        src: PLACEHOLDERS.artGallery2,
        alt: { fr: "Coloriage détaillé", en: "Detailed coloring" },
      },
      {
        src: PLACEHOLDERS.artGallery3,
        alt: { fr: "Aquarelle créative", en: "Creative watercolor" },
      },
      {
        src: PLACEHOLDERS.artGallery4,
        alt: { fr: "Atelier serein", en: "Serene workshop" },
      },
      {
        src: PLACEHOLDERS.artGallery5,
        alt: {
          fr: "Carnet et matériel d'art",
          en: "Notebook and art supplies",
        },
      },
      {
        src: PLACEHOLDERS.artGallery6,
        alt: { fr: "Vue océan Essaouira", en: "Essaouira ocean view" },
      },
    ],
    videoReels: [
      {
        youtubeId: "dItdB50RPvA",
        title: { fr: "Atelier créatif face à l'océan", en: "Creative workshop facing the ocean" },
      },
    ],
    duration: { fr: "1h30 à 2h", en: "1h30 to 2h" },
    difficulty: "easy",
    minAge: 8,
    groupSize: { fr: "1 à 8 personnes", en: "1 to 8 people" },
    includes: {
      fr: [
        "Tout le matériel artistique",
        "Supports variés (mandala, motifs, paysages)",
        "Boisson chaude (thé, café)",
        "Cadre face à l'océan",
        "Accompagnement bienveillant",
        "Vous repartez avec votre œuvre",
        "Transfert hôtel gratuit",
      ],
      en: [
        "All art supplies provided",
        "Various templates (mandala, patterns, landscapes)",
        "Hot drink (tea, coffee)",
        "Ocean-facing setting",
        "Gentle guidance",
        "Take your artwork home",
        "Free hotel pick-up",
      ],
    },
    notIncluded: {
      fr: ["Vêtements personnels"],
      en: ["Personal clothing"],
    },
    meetingPoint: {
      fr: "Atelier à Diabat, près d'Essaouira — transfert hôtel gratuit.",
      en: "Workshop in Diabat, near Essaouira — free hotel pick-up.",
    },
    suitableFor: {
      fr: [
        "Débutants — aucun dessin requis",
        "Familles avec enfants dès 8 ans",
        "Couples",
        "Après une sortie cheval, quad ou dromadaire",
      ],
      en: [
        "Beginners — no drawing required",
        "Families with children from 8",
        "Couples",
        "After a horse, quad or camel ride",
      ],
    },
    itinerary: {
      fr: [
        "Accueil à l'atelier de Diabat",
        "Choix du support (mandala, motifs, paysages)",
        "Session de coloriage et d'aquarelle, matériel fourni",
        "Vous repartez avec votre création",
      ],
      en: [
        "Welcome at the Diabat workshop",
        "Choice of template (mandala, patterns, landscapes)",
        "Coloring and watercolor session, supplies provided",
        "You leave with your creation",
      ],
    },
    bookingSteps: {
      fr: [
        "Choisissez votre session (1h30 ou 2h) et la formule",
        "Réservez en ligne ou via WhatsApp",
        "Recevez la confirmation et les détails de prise en charge",
        "Profitez de l'atelier créatif à Essaouira",
      ],
      en: [
        "Choose your session (1h30 or 2h) and package",
        "Book online or via WhatsApp",
        "Receive confirmation and pick-up details",
        "Enjoy the creative workshop in Essaouira",
      ],
    },
    pricing: [
      {
        id: "basic-session",
        name: { fr: "Session Basique", en: "Basic Session" },
        duration: { fr: "1h30", en: "1h30" },
        image: PLACEHOLDERS.artGallery1,
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 12, unit: { fr: "par personne", en: "per person" } },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 22 },
          { type: "private", label: { fr: "Privé exclusif", en: "Private exclusive" }, price: 25 },
        ],
        features: {
          fr: ["Tout matériel inclus", "Vue océan", "Transfert hôtel gratuit"],
          en: ["All supplies included", "Ocean view", "Free hotel pick-up"],
        },
      },
      {
        id: "snacks-drinks",
        name: { fr: "Snacks + Boissons", en: "Snacks + Drinks" },
        duration: { fr: "1h30", en: "1h30" },
        highlighted: true,
        image: PLACEHOLDERS.artGallery2,
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 15, unit: { fr: "par personne", en: "per person" } },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 28 },
          { type: "private", label: { fr: "Privé exclusif", en: "Private exclusive" }, price: 30 },
        ],
        features: {
          fr: ["Tout matériel inclus", "Snacks & boissons", "Vue océan", "Transfert hôtel gratuit"],
          en: ["All supplies included", "Snacks & drinks", "Ocean view", "Free hotel pick-up"],
        },
      },
      {
        id: "sunset-experience",
        name: { fr: "Sunset Experience", en: "Sunset Experience" },
        duration: { fr: "2h", en: "2h" },
        image: PLACEHOLDERS.artGallery3,
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 18, unit: { fr: "par personne", en: "per person" } },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 34 },
          { type: "private", label: { fr: "Privé exclusif", en: "Private exclusive" }, price: 40 },
        ],
        features: {
          fr: ["Tout matériel inclus", "Snacks & boissons", "Session en fin de journée", "Transfert hôtel gratuit"],
          en: ["All supplies included", "Snacks & drinks", "Late-afternoon session", "Free hotel pick-up"],
        },
      },
    ],
    faq: [
      {
        question: {
          fr: "Faut-il savoir dessiner ?",
          en: "Do I need to know how to draw?",
        },
        answer: {
          fr: "Pas du tout. Le coloriage anti-stress part de motifs déjà tracés. Le but est la détente, pas la performance artistique.",
          en: "Not at all. Anti-stress coloring starts from pre-drawn patterns. The goal is relaxation, not artistic performance.",
        },
      },
      {
        question: {
          fr: "Est-ce adapté aux enfants ?",
          en: "Is it suitable for children?",
        },
        answer: {
          fr: "Oui, à partir de 8 ans. Les enfants apprécient particulièrement le calme de l'atelier après les activités plus intenses.",
          en: "Yes, from 8 years old. Children especially enjoy the calm of the workshop after the more intense activities.",
        },
      },
      {
        question: {
          fr: "Peut-on combiner avec une autre activité ?",
          en: "Can I combine it with another activity?",
        },
        answer: {
          fr: "Oui. L'atelier se combine bien après une sortie cheval, quad ou dromadaire. Contactez-nous pour enchaîner les horaires.",
          en: "Yes. The workshop pairs well after a horse, quad or camel ride. Contact us to schedule both.",
        },
      },
      {
        question: {
          fr: "L'atelier est-il en français ou en anglais ?",
          en: "Is the workshop in French or English?",
        },
        answer: {
          fr: "Les deux. Notre équipe accompagne en français, en anglais et parfois en arabe.",
          en: "Both. Our team guides in French, English and sometimes Arabic.",
        },
      },
      {
        question: {
          fr: "Le transport est-il inclus ?",
          en: "Is transport included?",
        },
        answer: {
          fr: "Oui. Le transfert hôtel gratuit est inclus. L'atelier est à Diabat, près d'Essaouira.",
          en: "Yes. Free hotel pick-up is included. The workshop is in Diabat, near Essaouira.",
        },
      },
    ],
    seoHeading: {
      fr: "Atelier créatif à Essaouira : coloriage anti-stress, 1h30 ou 2h",
      en: "Art workshop in Essaouira: anti-stress coloring, 1h30 or 2h",
    },
    seoContent: {
      fr: [
        "L'Art Experience à Essaouira est un atelier créatif de coloriage anti-stress, face à l'océan. C'est la page à réserver pour un atelier artistique à Essaouira, avec du matériel fourni.",
        "L'atelier se tient à Diabat. Les supports sont des motifs déjà tracés : mandala, motifs berbères, paysages. Crayons, feutres et aquarelles sont inclus. Aucun dessin n'est exigé.",
        "Sessions de 1h30 (session basique ou snacks + boissons) ou 2h (sunset experience). Formules groupe par personne, couple (2 personnes) ou privé. Le transfert hôtel est gratuit.",
        "Vous repartez avec votre création. L'atelier convient dès 8 ans et se combine avec une sortie cheval, quad ou dromadaire.",
      ],
      en: [
        "The Art Experience in Essaouira is a creative anti-stress coloring workshop facing the ocean. This is the page to book an art workshop in Essaouira, with supplies included.",
        "The workshop is in Diabat. Templates are pre-drawn: mandala, Berber patterns, landscapes. Pencils, markers and watercolors are included. No drawing skill is required.",
        "Sessions last 1h30 (basic or snacks + drinks) or 2h (sunset experience). Group rates are per person; couple is for two people; private is a private session. Hotel pick-up is free.",
        "You leave with your artwork. The workshop suits ages 8 and up and pairs with a horse, quad or camel ride.",
      ],
    },
    seo: {
      title: {
        fr: "Atelier créatif Essaouira | Art Experience dès 12€",
        en: "Art Workshop in Essaouira | Art Experience from €12",
      },
      description: {
        fr: "Atelier créatif anti-stress à Essaouira dès 12€ par personne. Coloriage face à l'océan, matériel inclus, 1h30 ou 2h. Transfert hôtel gratuit.",
        en: "Creative art workshop in Essaouira from €12 per person. Ocean-facing coloring, supplies included, 1h30 or 2h. Free hotel pick-up.",
      },
      keywords: {
        fr: [
          "atelier créatif essaouira",
          "atelier artistique essaouira",
          "expérience artistique essaouira",
          "atelier art essaouira",
          "activité créative essaouira",
        ],
        en: [
          "art workshop essaouira",
          "art experience essaouira",
          "creative workshop essaouira",
          "artistic experience essaouira",
          "art workshop essaouira morocco",
        ],
      },
    },
  },
];

export function getActivityBySlug(slug: string, locale: Locale): Activity | undefined {
  return activities.find((a) => a.slug[locale] === slug);
}

export function getActivityById(id: string): Activity | undefined {
  return activities.find((a) => a.id === id);
}

export function getRelatedActivities(currentId: string, count = 3): Activity[] {
  return activities.filter((a) => a.id !== currentId).slice(0, count);
}
