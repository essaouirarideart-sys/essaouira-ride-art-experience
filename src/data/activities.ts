import type { Locale } from "@/i18n/config";
import { HORSE_TREK_PRICES_EUR } from "@/data/horseTrekPrices";

export type Difficulty = "easy" | "moderate" | "adventurous";

export type PackageType = "group" | "private" | "couple" | "simple" | "double" | "standard";

export interface PricingOption {
  type: PackageType;
  label: { fr: string; en: string };
  price: number;
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
      fr: "Galoper face à l'océan, au coucher du soleil.",
      en: "Gallop along the ocean, into the sunset.",
    },
    overviewHeading: {
      fr: "Cheval sur la plage à Essaouira — Diabat & coucher de soleil",
      en: "Beach horse riding in Essaouira — Diabat & sunset",
    },
    pricingHeading: {
      fr: "Prix balade à cheval Essaouira — tarifs & formules",
      en: "Horse riding Essaouira prices — packages & rates",
    },
    description: {
      fr: "Une balade équestre cinématographique sur la plage de Diabat et les dunes d'Essaouira. Chevaux soignés, guides expérimentés, lumière dorée garantie.",
      en: "A cinematic horse ride along Diabat beach and the dunes of Essaouira. Well-cared horses, experienced guides, golden light guaranteed.",
    },
    longDescription: {
      fr: [
        "Imaginez : le sable mouillé qui claque sous les sabots, l'océan à votre droite, les dunes ocre à votre gauche, et le vent atlantique qui s'engouffre dans vos cheveux. Notre balade à cheval n'est pas une attraction touristique — c'est une expérience cinématographique.",
        "Nos chevaux sont sélectionnés pour leur calme et leur endurance. Que vous soyez débutant ou cavalier confirmé, nos guides locaux adaptent l'allure et le parcours. Les sorties au coucher du soleil offrent les images les plus mémorables : ciel orangé, silhouettes au galop, écume dorée.",
        "Le départ se fait depuis nos écuries de Diabat, à 5 minutes du centre d'Essaouira. Nous fournissons casque, briefing complet et accompagnement permanent.",
      ],
      en: [
        "Imagine this: the wet sand snapping under hooves, the ocean to your right, the ochre dunes to your left, and the Atlantic wind rushing through your hair. Our horse ride is not a tourist attraction — it's a cinematic experience.",
        "Our horses are selected for their calm and endurance. Whether you're a beginner or a seasoned rider, our local guides adapt the pace and the route. Sunset outings offer the most memorable images: orange sky, galloping silhouettes, golden spray.",
        "Departure is from our Diabat stables, 5 minutes from Essaouira's center. We provide a helmet, full briefing and permanent supervision.",
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
    duration: { fr: "1h à 3h", en: "1h to 3h" },
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
        "Photos souvenir offertes",
        "Transfert hôtel gratuit (centre d'Essaouira)",
      ],
      en: [
        "Horse adapted to your level",
        "Safety helmet",
        "Experienced local guide",
        "Full pre-ride briefing",
        "Water bottle",
        "Souvenir photos included",
        "Free hotel pick-up (central Essaouira)",
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
        "Départ vers la plage de Diabat, les dunes et (selon formule) la forêt",
        "Pour les formules sunset : timing calculé pour le coucher de soleil",
        "Retour aux écuries, photos souvenir et départ",
      ],
      en: [
        "Welcome at the Diabat stables and introduction to the horses",
        "Safety briefing, helmet fitting and horse matched to your level",
        "Ride toward Diabat beach, dunes and (depending on package) the forest",
        "Sunset packages: timing set for golden hour on the beach",
        "Return to the stables, souvenir photos and departure",
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
          { type: "group", label: { fr: "Groupe", en: "Group" }, price: 20 },
          { type: "private", label: { fr: "Privé", en: "Private" }, price: 35 },
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
          { type: "group", label: { fr: "Groupe", en: "Group" }, price: 35 },
          { type: "private", label: { fr: "Privé", en: "Private" }, price: 65 },
        ],
        features: {
          fr: ["Plage, dunes & forêt", "Parcours étendu", "Transfert hôtel gratuit"],
          en: ["Beach, dunes & forest", "Extended route", "Free hotel pick-up"],
        },
      },
      {
        id: "sunset-1h",
        name: { fr: "Coucher de soleil", en: "Sunset Ride" },
        duration: { fr: "1 heure", en: "1 hour" },
        image: PLACEHOLDERS.horseGallery3,
        options: [
          { type: "group", label: { fr: "Groupe", en: "Group" }, price: 25 },
          { type: "private", label: { fr: "Privé", en: "Private" }, price: 40 },
        ],
        features: {
          fr: ["Timing parfait avec le coucher", "Photos cinématographiques", "Transfert hôtel gratuit"],
          en: ["Perfect sunset timing", "Cinematic photos", "Free hotel pick-up"],
        },
      },
      {
        id: "sunset-2h",
        name: { fr: "Coucher de soleil", en: "Sunset Ride" },
        duration: { fr: "2 heures", en: "2 hours" },
        highlighted: true,
        image: PLACEHOLDERS.horseGallery4,
        options: [
          { type: "group", label: { fr: "Groupe", en: "Group" }, price: 40 },
          { type: "private", label: { fr: "Privé", en: "Private" }, price: 70 },
        ],
        features: {
          fr: ["Timing parfait avec le coucher", "Plage de Diabat & forêt", "Photos cinématographiques", "Transfert hôtel gratuit"],
          en: ["Perfect sunset timing", "Diabat beach & forest", "Cinematic photos", "Free hotel pick-up"],
        },
      },
    ],
    premiumPricing: {
      title: {
        fr: "Shooting & Trek Experience",
        en: "Shooting & Trek Experience",
      },
      intro: {
        fr: "Au-delà des balades classiques, vivez une expérience équestre d'exception à Essaouira : shooting cinématographique sur la plage, galop au lever du soleil avec nos chevaux libres, ou un trek équestre multi-jours (dès €300 jusqu'à €900). Une invitation à l'aventure premium — horse riding Essaouira réinventé en voyage de luxe.",
        en: "Beyond classic rides, discover an exceptional equestrian journey in Essaouira: cinematic horse shooting on the beach, sunrise gallop with our freedom horses, or a multi-day luxury horse trek from €300 to €900 along Morocco's coast. Premium horseback riding on Essaouira beach, elevated to a high-end travel experience.",
      },
      groups: [
        {
          id: "shooting",
          title: { fr: "Shooting Experience", en: "Shooting Experience" },
          subtitle: {
            fr: "Cinematic horse shooting & golden hour on the beach",
            en: "Cinematic horse shooting & golden hour on the beach",
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
                fr: "Galop au lever du soleil — Chevaux libres sur la plage",
                en: "Sunrise Gallop With Freedom Horses On The Beach",
              },
              tagline: {
                fr: "Sunrise horse riding — lumière dorée & émotion pure",
                en: "Sunrise horse riding — golden light & pure emotion",
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
          fr: "Deux heures avant le coucher du soleil. C'est à ce moment que la lumière transforme la plage et que les photos sont les plus belles.",
          en: "Two hours before sunset. That's when the light transforms the beach and the photos come out best.",
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
          fr: "Oui. Le transfert hôtel gratuit est inclus depuis le centre d'Essaouira. Nos écuries sont à Diabat, à environ 5 minutes en voiture.",
          en: "Yes. Free hotel pick-up from central Essaouira is included. Our stables are in Diabat, about a 5-minute drive.",
        },
      },
      {
        question: {
          fr: "Quel est le prix d'une balade à cheval à Essaouira ?",
          en: "How much does horse riding in Essaouira cost?",
        },
        answer: {
          fr: "À partir de 20€ par personne en groupe pour 1 heure. Les formules sunset et privées sont affichées sur cette page. Transfert hôtel gratuit inclus.",
          en: "From €20 per person in a group for 1 hour. Sunset and private packages are listed on this page. Free hotel pick-up included.",
        },
      },
    ],
    seoHeading: {
      fr: "Itinéraire, Diabat et conseils pour votre balade à cheval",
      en: "Itinerary, Diabat and tips for your horse ride",
    },
    seoContent: {
      fr: [
        "La balade à cheval à Essaouira est l'une des expériences les plus mémorables de la côte atlantique marocaine. Sur la plage de Diabat, vous galopez face à l'océan avec des couchers de soleil qui transforment chaque sortie en moment cinématographique.",
        "Située à seulement 5 minutes du centre d'Essaouira (anciennement Mogador), la plage de Diabat est le point de départ idéal. Nos chevaux sont sélectionnés pour leur calme et leur endurance, adaptés aux débutants comme aux cavaliers confirmés. Chaque balade est encadrée par des guides locaux qui connaissent le terrain et adaptent l'allure.",
        "Les paysages varient selon la formule : sable mouillé de la plage, dunes ocre, et parfois la forêt d'eucalyptus vers Sidi Kaouki. Les sorties au coucher du soleil offrent la lumière la plus spectaculaire — ciel orangé, silhouettes au galop, écume dorée.",
        "Choisissez une balade d'une heure pour découvrir la plage, ou deux heures pour un parcours plus étendu. Chaque formule inclut casque, briefing, guide et photos souvenir. Le transfert depuis votre hôtel à Essaouira est inclus.",
        "Cette activité convient aux familles (dès 6 ans accompagnés), aux couples et aux groupes. C'est aussi un excellent complément à une sortie quad ou dromadaire pour une journée complète d'activités outdoor à Essaouira.",
      ],
      en: [
        "Horse riding in Essaouira is one of the most memorable experiences on Morocco's Atlantic coast. On Diabat beach, you gallop facing the ocean with sunsets that turn every ride into a cinematic moment.",
        "Just 5 minutes from Essaouira's center (formerly Mogador), Diabat beach is the ideal starting point. Our horses are selected for calm and endurance, suited to beginners and experienced riders. Local guides adapt the pace to your level.",
        "Landscapes vary by package: wet beach sand, ochre dunes, and sometimes the eucalyptus forest toward Sidi Kaouki. Sunset rides offer the most spectacular light — orange sky, galloping silhouettes, golden spray.",
        "Choose a one-hour beach discovery or a two-hour extended ride. Every package includes helmet, briefing, guide and souvenir photos. Hotel pick-up from Essaouira is included.",
        "This activity suits families (from age 6 accompanied), couples and groups. It also pairs well with a quad or camel ride for a full day of outdoor activities in Essaouira.",
      ],
    },
    seo: {
      title: {
        fr: "Balade à Cheval Essaouira | Plage dès 20€ — Sunset Diabat",
        en: "Horse Riding Essaouira | Beach from €20 — Sunset Rides",
      },
      description: {
        fr: "Cheval sur la plage à Essaouira dès 20€. Diabat, sunset, guides locaux, tous niveaux. Transfert hôtel gratuit. Réservez votre balade en ligne.",
        en: "Horse riding Essaouira beach from €20. Diabat sunset rides, local guides, all levels. Free hotel pick-up. Book your ride online.",
      },
      keywords: {
        fr: [
          "balade à cheval essaouira",
          "cheval sur la plage essaouira",
          "cheval essaouira",
          "équitation essaouira",
          "cheval plage essaouira",
          "sunset horse riding essaouira",
          "prix balade cheval essaouira",
        ],
        en: [
          "horse riding essaouira",
          "horse riding in essaouira",
          "beach horse riding essaouira",
          "sunset horse riding essaouira",
          "horse riding essaouira price",
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
      en: "Quad Essaouira — dune, argan forest & Cap Sim tours",
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
        "Le quad, c'est la liberté absolue à Essaouira. En 2 heures, vous traversez trois mondes : les dunes blondes près de l'océan, la forêt parfumée d'arganiers, puis les pistes côtières au-dessus de la plage de Sidi Kaouki.",
        "Nos quads sont récents, parfaitement entretenus et adaptés à tous les niveaux. Le briefing initial est complet : commandes, sécurité, comportement en groupe. Un guide ouvre la route, un autre ferme la marche.",
        "L'expérience est conçue pour offrir le maximum de sensations en toute sécurité. Les amateurs trouveront leur dose d'adrénaline, les débutants leur confiance. Et tout le monde repart avec des images impossibles à oublier.",
      ],
      en: [
        "Quad biking is absolute freedom in Essaouira. In 2 hours, you cross three worlds: the blond dunes near the ocean, the fragrant argan forest, then the coastal tracks above Sidi Kaouki beach.",
        "Our quads are recent, perfectly maintained and suitable for all levels. The initial briefing is complete: controls, safety, group behavior. One guide leads, another closes the ride.",
        "The experience is designed to deliver maximum thrills in complete safety. Thrill-seekers get their adrenaline, beginners build confidence. And everyone leaves with unforgettable images.",
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
    duration: { fr: "1h à 3h", en: "1h to 3h" },
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
      fr: ["Vêtements personnels (chaussures fermées recommandées)"],
      en: ["Personal clothing (closed shoes recommended)"],
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
        "Sélectionnez simple ou double",
        "Réservez en ligne ou WhatsApp",
        "Partez en quad à Essaouira",
      ],
      en: [
        "Choose your circuit (1h to full day)",
        "Select single or double seating",
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
          { type: "simple", label: { fr: "Simple", en: "Single" }, price: 30 },
          { type: "double", label: { fr: "Double", en: "Double" }, price: 45 },
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
          { type: "simple", label: { fr: "Simple", en: "Single" }, price: 50 },
          { type: "double", label: { fr: "Double", en: "Double" }, price: 70 },
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
          { type: "simple", label: { fr: "Simple", en: "Single" }, price: 65 },
          { type: "double", label: { fr: "Double", en: "Double" }, price: 90 },
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
          { type: "simple", label: { fr: "Simple", en: "Single" }, price: 90 },
          { type: "double", label: { fr: "Double", en: "Double" }, price: 110 },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise"],
          en: ["Free hotel pick-up", "No experience needed"],
        },
      },
      {
        id: "circuit-sidi-kaouki",
        name: { fr: "Journée Sidi Kaouki", en: "Sidi Kaouki Day" },
        description: { fr: "Plage sauvage et dunes au bord de la plage, déjeuner inclus", en: "Wild beach and dunes by the beach, lunch included" },
        duration: { fr: "1 journée", en: "1 Day" },
        image: PLACEHOLDERS.quadGallery5,
        options: [
          { type: "simple", label: { fr: "Simple", en: "Single" }, price: 110 },
          { type: "double", label: { fr: "Double", en: "Double" }, price: 140 },
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
          { type: "simple", label: { fr: "Simple", en: "Single" }, price: 140 },
          { type: "double", label: { fr: "Double", en: "Double" }, price: 170 },
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
          fr: "Oui, certains de nos quads sont biplaces. Le passager doit avoir au moins 12 ans et porter le casque fourni.",
          en: "Yes, some of our quads are two-seaters. The passenger must be at least 12 and wear the provided helmet.",
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
          fr: "Le circuit Diabat (1h) commence à 30€ en simple et 45€ en double. Cap Sim (2h) à partir de 50€. Tous les tarifs sont listés ci-dessous, transfert inclus.",
          en: "The Diabat circuit (1h) starts at €30 single and €45 double. Cap Sim (2h) from €50. All rates are listed below, pick-up included.",
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
        "Le circuit Diabat (1h) traverse Dar Soltan, plage, forêt et dunes — parfait pour découvrir. Le circuit Cap Sim (2h), le plus populaire, ajoute dunes sauvages et source d'eau douce. Les formules 3h et journée poussent jusqu'à la grotte, Taguenza ou la cascade de Sidi M'barek.",
        "Âge minimum : 16 ans pour piloter, 12 ans en passager sur biplace. Départs matin et après-midi selon la météo.",
        "Le quad se combine très bien avec une balade à cheval ou en dromadaire pour une journée complète d'activités à Essaouira et Diabat.",
      ],
      en: [
        "Quad biking in Essaouira is an off-road adventure through dunes, argan forest and coastal tracks toward Sidi Kaouki — one of the most popular outdoor activities for thrill-seekers.",
        "Our quads are recent and well maintained. Beginners and experienced riders get a full briefing, two guides per group, helmet and goggles. Free hotel pick-up from Essaouira is included.",
        "The Diabat circuit (1h) covers Dar Soltan, beach, forest and dunes — ideal for a first ride. Cap Sim (2h), our most popular tour, adds wild dunes and a freshwater spring. Longer packages reach the cave, Taguenza or Sidi M'barek waterfall.",
        "Minimum age: 16 to ride solo, 12 as passenger on a two-seater. Departures morning and afternoon depending on weather.",
        "Quad tours pair well with horse or camel rides for a full day of activities in Essaouira and Diabat.",
      ],
    },
    seo: {
      title: {
        fr: "Quad Essaouira | Prix dès 30€ — Diabat & Cap Sim",
        en: "Quad Essaouira | From €30 — Diabat & Cap Sim Tours",
      },
      description: {
        fr: "Prix quad Essaouira dès 30€ (1h). Circuits Diabat, Cap Sim, dunes & arganiers. Guides locaux, transfert hôtel gratuit. Réservez votre excursion.",
        en: "Quad Essaouira price from €30 (1h). Diabat & Cap Sim dune tours. Local guides, free hotel pick-up. Book your ATV excursion online.",
      },
      keywords: {
        fr: [
          "quad essaouira",
          "quad à essaouira",
          "quad essaouira prix",
          "prix quad essaouira",
          "excursion quad essaouira",
          "quad tour essaouira",
        ],
        en: [
          "quad essaouira",
          "quad biking essaouira",
          "quad tour essaouira",
          "quad essaouira price",
          "atv essaouira",
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
      fr: "Balade en dromadaire à Essaouira",
      en: "Camel Ride in Essaouira",
    },
    shortTitle: { fr: "Dromadaire", en: "Camel" },
    tagline: {
      fr: "Le rythme du désert, à deux pas de l'océan.",
      en: "The rhythm of the desert, steps away from the ocean.",
    },
    overviewHeading: {
      fr: "Balade dromadaire à Essaouira — plage Diabat & coucher de soleil",
      en: "Camel ride Essaouira — Diabat beach dunes & sunset",
    },
    pricingHeading: {
      fr: "Prix balade dromadaire Essaouira — tarifs",
      en: "Camel ride Essaouira price — rates & packages",
    },
    description: {
      fr: "Vivez la traversée des dunes d'Essaouira en dromadaire. Une expérience douce, photogénique et profondément marocaine, idéale en famille ou en couple.",
      en: "Cross the dunes of Essaouira on a camel. A gentle, photogenic and deeply Moroccan experience, ideal for families and couples.",
    },
    longDescription: {
      fr: [
        "Le dromadaire est l'âme du Maroc. Sa démarche lente, son regard tranquille, sa présence majestueuse. À Essaouira, l'expérience est unique : vous montez face à l'océan Atlantique, dans des dunes qui descendent jusqu'à la mer.",
        "Notre caravane part au coucher du soleil. Les couleurs du ciel, du sable et de l'eau se fondent en une lumière irréelle. C'est l'image de carte postale du Maroc, mais en vrai, et avec vous dedans.",
        "Nos dromadaires sont traités avec respect : nourriture quotidienne, repos suffisant, vétérinaire régulier. Nos guides — souvent issus de familles berbères — partagent l'histoire et les anecdotes du désert atlantique.",
      ],
      en: [
        "The camel is the soul of Morocco. Its slow walk, its quiet gaze, its majestic presence. In Essaouira, the experience is unique: you ride facing the Atlantic Ocean, in dunes that flow down to the sea.",
        "Our caravan leaves at sunset. The colors of the sky, sand and water blend into an unreal light. It's the Moroccan postcard, but real, and with you inside.",
        "Our camels are treated with respect: daily feed, sufficient rest, regular veterinary care. Our guides — often from Berber families — share the history and stories of the Atlantic desert.",
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
        "Guide berbère local",
        "Briefing & accompagnement",
        "Photos souvenir offertes",
        "Bouteille d'eau",
        "Possibilité thé à la menthe",
        "Transfert hôtel gratuit",
      ],
      en: [
        "Camel & traditional equipment",
        "Local Berber guide",
        "Briefing & escort",
        "Souvenir photos included",
        "Water bottle",
        "Optional mint tea",
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
        "Pause photos (et thé à la menthe selon formule)",
        "Retour et transfert vers votre hébergement",
      ],
      en: [
        "Pick-up and arrival on Diabat beach",
        "Briefing and mounting with guide assistance",
        "Ride across the dunes facing the Atlantic Ocean",
        "Photo stop (and mint tea depending on package)",
        "Return and transfer to your accommodation",
      ],
    },
    bookingSteps: {
      fr: [
        "Choisissez votre durée (1h, 2h, 3h ou journée)",
        "Réservez en ligne ou WhatsApp",
        "Confirmation et détails de prise en charge",
        "Profitez de votre balade dromadaire à Essaouira",
      ],
      en: [
        "Choose your duration (1h, 2h, 3h or full day)",
        "Book online or via WhatsApp",
        "Confirmation and pick-up details",
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
          { type: "standard", label: { fr: "Par personne", en: "Per person" }, price: 20 },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise", "Photos offertes"],
          en: ["Free hotel pick-up", "No experience needed", "Photos included"],
        },
      },
      {
        id: "camel-2h",
        name: { fr: "Balade 2H", en: "2H Ride" },
        duration: { fr: "2 heures", en: "2 hours" },
        highlighted: true,
        image: PLACEHOLDERS.camelGallery2,
        options: [
          { type: "standard", label: { fr: "Par personne", en: "Per person" }, price: 30 },
        ],
        features: {
          fr: ["Transfert hôtel gratuit", "Aucune expérience requise", "Photos offertes"],
          en: ["Free hotel pick-up", "No experience needed", "Photos included"],
        },
      },
      {
        id: "camel-half-day",
        name: { fr: "Demi-journée", en: "Half Day" },
        duration: { fr: "3 heures", en: "3 hours" },
        image: PLACEHOLDERS.camelHero,
        options: [
          { type: "standard", label: { fr: "Par personne", en: "Per person" }, price: 40 },
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
          { type: "standard", label: { fr: "Par personne", en: "Per person" }, price: 75 },
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
          fr: "Oui, c'est même très populaire. Nous proposons un forfait combiné quad + dromadaire avec une remise. Demandez-nous.",
          en: "Yes, it's very popular. We offer a combined quad + camel package with a discount. Just ask us.",
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
          fr: "À partir de 20€ par personne pour 1 heure. Formules 2h, demi-journée et journée avec pique-nique disponibles. Transfert hôtel gratuit inclus.",
          en: "From €20 per person for 1 hour. 2h, half-day and full-day picnic packages available. Free hotel pick-up included.",
        },
      },
    ],
    seoHeading: {
      fr: "À quoi s'attendre pour une balade dromadaire à Essaouira",
      en: "What to expect from a camel ride in Essaouira",
    },
    seoContent: {
      fr: [
        "La balade en dromadaire à Essaouira est une expérience authentique qui vous plonge dans l'atmosphère magique du Maroc. Cette promenade à dos de chameau sur les dunes face à l'océan Atlantique offre un moment unique, particulièrement spectaculaire au coucher du soleil lorsque les couleurs du ciel se reflètent sur le sable et l'eau.",
        "Notre caravane de dromadaires part de la plage de Diabat, à quelques minutes d'Essaouira. Les animaux sont sélectionnés pour leur calme et leur docilité, parfaits pour les familles avec enfants dès 4 ans. Nos guides berbères locaux partagent leur connaissance du désert atlantique et veillent au bien-être des dromadaires avec un suivi vétérinaire régulier et des conditions de vie respectueuses.",
        "L'expérience de balade à dromadaire à Essaouira se distingue par son cadre exceptionnel : contrairement aux balades dans le désert intérieur, ici vous évoluez entre dunes dorées et océan bleu, créant des images de carte postale inoubliables. Le rythme lent et majestueux du dromadaire permet d'apprécier pleinement le paysage et de capturer des photos mémorables.",
        "Plusieurs formules sont disponibles, de la balade d'une heure pour une première découverte, jusqu'à la demi-journée ou la journée complète pour explorer les environs en profondeur. Chaque sortie peut être agrémentée d'un thé à la menthe traditionnel dans les dunes. Le transfert depuis votre hébergement à Essaouira est inclus dans nos forfaits.",
        "Cette activité dromadaire convient parfaitement aux familles, couples et groupes cherchant une expérience culturelle authentique à Essaouira. C'est aussi l'occasion idéale de combiner avec nos autres activités (cheval, quad) pour une journée complète de découverte des paysages marocains.",
      ],
      en: [
        "Camel riding in Essaouira is an authentic experience that immerses you in Morocco's magical atmosphere. This camel trek on the dunes facing the Atlantic Ocean offers a unique moment, particularly spectacular at sunset when the sky's colors reflect on the sand and water.",
        "Our camel caravan departs from Diabat beach, just minutes from Essaouira. The animals are selected for their calm and docile nature, perfect for families with children from 4 years old. Our local Berber guides share their knowledge of the Atlantic desert and ensure the camels' welfare with regular veterinary care and respectful living conditions.",
        "The camel ride experience in Essaouira stands out for its exceptional setting: unlike rides in the interior desert, here you move between golden dunes and blue ocean, creating unforgettable postcard images. The slow and majestic pace of the camel allows you to fully appreciate the landscape and capture memorable photos.",
        "Several packages are available, from a one-hour ride for a first discovery, to a half-day or full-day trek. Each outing can be enhanced with traditional mint tea in the dunes. Transfer from your accommodation in Essaouira is included in our packages.",
        "This camel activity is perfect for families, couples and groups seeking an authentic cultural experience in Essaouira. It's also an ideal opportunity to combine with our other activities (horse, quad) for a full day discovering Moroccan landscapes.",
      ],
    },
    seo: {
      title: {
        fr: "Balade Dromadaire Essaouira | Dès 20€ — Plage & Sunset",
        en: "Camel Ride Essaouira | From €20 — Beach & Sunset",
      },
      description: {
        fr: "Balade dromadaire Essaouira dès 20€. Plage Diabat, sunset, familles dès 4 ans. Guides berbères, transfert inclus. Réservez en ligne.",
        en: "Camel ride Essaouira from €20. Diabat beach sunset, family-friendly from age 4. Berber guides, free pick-up. Book your camel ride online.",
      },
      keywords: {
        fr: [
          "balade dromadaire essaouira",
          "dromadaire essaouira",
          "camel ride essaouira",
          "prix dromadaire essaouira",
          "chameau essaouira",
        ],
        en: [
          "camel ride essaouira",
          "camel ride in essaouira",
          "camel ride essaouira price",
          "sunset camel ride essaouira",
          "essaouira camel tour",
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
      fr: "Art Experience anti-stress à Essaouira",
      en: "Anti-Stress Art Experience in Essaouira",
    },
    shortTitle: { fr: "Art", en: "Art" },
    tagline: {
      fr: "Reconnectez-vous, un trait à la fois.",
      en: "Reconnect with yourself, one stroke at a time.",
    },
    overviewHeading: {
      fr: "Art experience anti-stress face à l'océan à Essaouira",
      en: "Anti-stress art experience by the ocean in Essaouira",
    },
    description: {
      fr: "Un atelier de coloriage anti-stress et d'art-thérapie face à l'océan d'Essaouira. Une parenthèse créative, calme et profondément ressourçante.",
      en: "An anti-stress coloring and art therapy workshop facing the Essaouira ocean. A creative, calm and deeply restorative break.",
    },
    longDescription: {
      fr: [
        "Après l'aventure, le calme. L'Art Experience est notre signature : un atelier de coloriage anti-stress et d'art-thérapie, en petit groupe, dans un cadre simple et épuré face à l'océan.",
        "Vous choisissez votre support : mandala, motifs berbères, paysages d'Essaouira. Vous avez à disposition crayons de qualité, feutres, aquarelles. Aucun talent n'est requis. L'objectif n'est pas de produire une œuvre, mais de se reconnecter au moment présent.",
        "C'est l'expérience parfaite après une balade à cheval ou en quad : votre corps a vécu, votre esprit se pose. Beaucoup de visiteurs nous disent que c'est leur souvenir le plus marquant d'Essaouira. Et ils repartent avec leur création.",
      ],
      en: [
        "After the adventure, the calm. The Art Experience is our signature: an anti-stress coloring and art therapy workshop, in a small group, in a simple and refined setting facing the ocean.",
        "You choose your medium: mandala, Berber patterns, Essaouira landscapes. You have access to quality pencils, markers, watercolors. No talent required. The goal is not to produce art — it's to reconnect with the present moment.",
        "It's the perfect experience after a horse or quad ride: your body has lived, your mind settles. Many visitors tell us it's their most memorable Essaouira moment. And they leave with their creation.",
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
      ],
      en: [
        "All art supplies provided",
        "Various templates (mandala, patterns, landscapes)",
        "Hot drink (tea, coffee)",
        "Ocean-facing setting",
        "Gentle guidance",
        "Take your artwork home",
      ],
    },
    pricing: [
      {
        id: "basic-session",
        name: { fr: "Session Basique", en: "Basic Session" },
        duration: { fr: "1h30", en: "1h30" },
        image: PLACEHOLDERS.artGallery1,
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 12 },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 22 },
          { type: "private", label: { fr: "Privé exclusif", en: "Private exclusive" }, price: 25 },
        ],
        features: {
          fr: ["Tout matériel inclus", "Vue océan"],
          en: ["All supplies included", "Ocean view"],
        },
      },
      {
        id: "snacks-drinks",
        name: { fr: "Snacks + Boissons", en: "Snacks + Drinks" },
        duration: { fr: "1h30", en: "1h30" },
        highlighted: true,
        image: PLACEHOLDERS.artGallery2,
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 15 },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 28 },
          { type: "private", label: { fr: "Privé exclusif", en: "Private exclusive" }, price: 30 },
        ],
        features: {
          fr: ["Tout matériel inclus", "Snacks & boissons", "Vue océan"],
          en: ["All supplies included", "Snacks & drinks", "Ocean view"],
        },
      },
      {
        id: "sunset-experience",
        name: { fr: "Sunset Experience", en: "Sunset Experience" },
        duration: { fr: "2h", en: "2h" },
        image: PLACEHOLDERS.artGallery3,
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 18 },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 34 },
          { type: "private", label: { fr: "Privé exclusif", en: "Private exclusive" }, price: 40 },
        ],
        features: {
          fr: ["Tout matériel inclus", "Snacks & boissons", "Vue coucher de soleil", "Ambiance magique"],
          en: ["All supplies included", "Snacks & drinks", "Sunset view", "Magical atmosphere"],
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
          fr: "C'est même recommandé. Notre formule combo (cheval/quad/dromadaire + art) est la plus appréciée. L'aventure d'abord, la sérénité ensuite.",
          en: "It's actually recommended. Our combo package (horse/quad/camel + art) is the most popular. Adventure first, serenity second.",
        },
      },
      {
        question: {
          fr: "L'atelier est-il en français ou en anglais ?",
          en: "Is the workshop in French or English?",
        },
        answer: {
          fr: "Les deux. Notre équipe accompagne en français, en anglais et parfois en arabe. Tout le monde est à l'aise.",
          en: "Both. Our team guides in French, English and sometimes Arabic. Everyone feels at home.",
        },
      },
    ],
    seo: {
      title: {
        fr: "Art Experience à Essaouira | Coloriage anti-stress face à l'océan",
        en: "Art Experience in Essaouira | Anti-Stress Coloring by the Ocean",
      },
      description: {
        fr: "Atelier de coloriage anti-stress et d'art-thérapie face à l'océan d'Essaouira. Une parenthèse créative et ressourçante. Tout matériel inclus.",
        en: "Anti-stress coloring and art therapy workshop facing the Essaouira ocean. A creative, restorative break. All supplies included.",
      },
      keywords: {
        fr: [
          "art experience essaouira",
          "coloriage anti-stress essaouira",
          "atelier créatif essaouira",
          "art thérapie essaouira",
          "activités essaouira",
        ],
        en: [
          "art experience essaouira",
          "anti-stress coloring essaouira",
          "art workshop essaouira",
          "art therapy essaouira",
          "essaouira activities",
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
