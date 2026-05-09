import type { Locale } from "@/i18n/config";

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
}

export interface FAQItem {
  question: { fr: string; en: string };
  answer: { fr: string; en: string };
}

export interface Activity {
  id: string;
  slug: { fr: string; en: string };
  icon: "horse" | "quad" | "camel" | "palette";
  title: { fr: string; en: string };
  shortTitle: { fr: string; en: string };
  tagline: { fr: string; en: string };
  description: { fr: string; en: string };
  longDescription: { fr: string[]; en: string[] };
  seoContent?: { fr: string[]; en: string[] }; // Long-form SEO content (300-600 words)
  heroImage: string;
  heroImageAlt: { fr: string; en: string };
  gallery: Array<{ src: string; alt: { fr: string; en: string } }>;
  duration: { fr: string; en: string };
  difficulty: Difficulty;
  minAge: number;
  groupSize: { fr: string; en: string };
  includes: { fr: string[]; en: string[] };
  pricing: PricingTier[];
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
  horseHero: "https://res.cloudinary.com/dysaghamv/image/upload/q_auto/f_auto/v1777601608/cd344b0f-ac75-4c2f-996c-230f70abb6db_brkucc.jpg",
  horseGallery1: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/beach-boat",
  horseGallery2: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/nature-mountains",
  horseGallery3: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/animals/three-dogs",
  horseGallery4: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/beach-boat",
  horseGallery5: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/nature-mountains",
  horseGallery6: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/animals/three-dogs",
  
  // Quad
  quadHero: "https://res.cloudinary.com/dysaghamv/image/upload/q_auto/f_auto/v1777601627/d8db3039-d68e-4fd7-b9a0-4cfb91041cf8_dn8qt5.jpg",
  quadGallery1: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/landscape-panorama",
  quadGallery2: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/nature-mountains",
  quadGallery3: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/beach-boat",
  quadGallery4: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/landscape-panorama",
  quadGallery5: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/nature-mountains",
  quadGallery6: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/beach-boat",
  
  // Camel
  camelHero: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/animals/cat",
  camelGallery1: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/animals/cat",
  camelGallery2: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/beach-boat",
  camelGallery3: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/animals/cat",
  camelGallery4: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/nature-mountains",
  camelGallery5: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/animals/cat",
  camelGallery6: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/landscapes/beach-boat",
  
  // Art
  artHero: "https://res.cloudinary.com/dysaghamv/image/upload/q_auto/f_auto/v1777601637/23652914-6433-4c9e-bc4c-ba660804175e_b9vf1o.jpg",
  artGallery1: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/food/spices",
  artGallery2: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/food/pot-mussels",
  artGallery3: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/food/spices",
  artGallery4: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/food/pot-mussels",
  artGallery5: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/food/spices",
  artGallery6: "https://res.cloudinary.com/demo/image/upload/q_auto/f_auto/samples/food/pot-mussels",
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
      fr: "Balade à cheval à Essaouira",
      en: "Horse Riding in Essaouira",
    },
    shortTitle: { fr: "Cheval", en: "Horse" },
    tagline: {
      fr: "Galoper face à l'océan, au coucher du soleil.",
      en: "Gallop along the ocean, into the sunset.",
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
      ],
      en: [
        "Horse adapted to your level",
        "Safety helmet",
        "Experienced local guide",
        "Full pre-ride briefing",
        "Water bottle",
        "Souvenir photos included",
      ],
    },
    pricing: [
      {
        id: "day-1h",
        name: { fr: "Balade Journée", en: "Day Ride" },
        duration: { fr: "1 heure", en: "1 hour" },
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
          fr: "Pour les hôtels du centre d'Essaouira, nous proposons un transfert aller-retour sur demande. Diabat est à 5 minutes en voiture.",
          en: "For hotels in central Essaouira, we offer round-trip transfers on request. Diabat is a 5-minute drive away.",
        },
      },
    ],
    seoContent: {
      fr: [
        "La balade à cheval à Essaouira est l'une des expériences les plus mémorables que vous puissiez vivre au Maroc. Notre équitation sur la plage de Diabat vous offre une aventure unique face à l'océan Atlantique, avec des couchers de soleil spectaculaires qui transforment chaque sortie en moment cinématographique.",
        "Située à seulement 5 minutes du centre d'Essaouira, la plage de Diabat est le point de départ idéal pour une randonnée équestre inoubliable. Nos chevaux sont sélectionnés pour leur calme et leur endurance, parfaits pour les cavaliers débutants comme confirmés. Chaque balade est encadrée par des guides locaux expérimentés qui connaissent parfaitement le terrain et adaptent l'allure à votre niveau.",
        "L'expérience de horse riding à Essaouira se distingue par sa diversité de paysages : vous galopez sur le sable mouillé de la plage, explorez les dunes ocre qui bordent l'océan, et traversez parfois la forêt d'eucalyptus qui mène à Sidi Kaouki. Le timing est crucial : nos sorties au coucher du soleil offrent les images les plus spectaculaires, avec le ciel orangé qui se reflète sur l'eau et les silhouettes des chevaux au galop.",
        "Que vous choisissiez une balade d'une heure pour découvrir la plage ou une randonnée de trois heures pour explorer les environs, chaque formule inclut le matériel de sécurité (casque), un briefing complet avant le départ, et l'accompagnement permanent de nos guides. Le transfert depuis votre hôtel à Essaouira est disponible sur demande.",
        "Cette activité équestre convient à tous : familles avec enfants (à partir de 6 ans), couples en quête de romantisme, ou groupes d'amis cherchant l'aventure. Les photographes apprécient particulièrement la lumière unique d'Essaouira, idéale pour capturer des souvenirs exceptionnels de leur voyage au Maroc.",
      ],
      en: [
        "Horse riding in Essaouira is one of the most memorable experiences you can have in Morocco. Our beach horseback riding on Diabat beach offers a unique adventure facing the Atlantic Ocean, with spectacular sunsets that transform every outing into a cinematic moment.",
        "Located just 5 minutes from Essaouira's center, Diabat beach is the perfect starting point for an unforgettable equestrian adventure. Our horses are selected for their calm temperament and endurance, perfect for both beginner and experienced riders. Each ride is supervised by experienced local guides who know the terrain perfectly and adapt the pace to your level.",
        "The horse riding experience in Essaouira stands out for its diverse landscapes: you gallop on the wet sand of the beach, explore the ochre dunes bordering the ocean, and sometimes cross the eucalyptus forest leading to Sidi Kaouki. Timing is crucial: our sunset rides offer the most spectacular images, with the orange sky reflecting on the water and silhouettes of galloping horses.",
        "Whether you choose a one-hour ride to discover the beach or a three-hour trek to explore the surroundings, each package includes safety equipment (helmet), a complete pre-departure briefing, and permanent supervision by our guides. Transfer from your hotel in Essaouira is available on request.",
        "This equestrian activity suits everyone: families with children (from 6 years old), couples seeking romance, or groups of friends looking for adventure. Photographers particularly appreciate Essaouira's unique light, ideal for capturing exceptional memories of their trip to Morocco.",
      ],
    },
    seo: {
      title: {
        fr: "Balade à Cheval Essaouira | Horse Riding Plage & Coucher de Soleil",
        en: "Horse Riding Essaouira | Sunset Beach Horseback Riding Morocco",
      },
      description: {
        fr: "Balade à cheval sur la plage d'Essaouira au coucher du soleil. Randonnée équestre avec guides locaux, chevaux calmes, tous niveaux. Réservation en ligne.",
        en: "Horse riding Essaouira beach at sunset. Horseback riding tours with local guides, calm horses, all levels welcome. Book online now.",
      },
      keywords: {
        fr: [
          "balade à cheval essaouira",
          "horse riding essaouira",
          "équitation essaouira",
          "randonnée cheval essaouira",
          "cheval plage essaouira",
          "activité essaouira",
          "que faire essaouira",
        ],
        en: [
          "horse riding essaouira",
          "horseback riding essaouira",
          "essaouira sunset ride",
          "diabat horse",
          "essaouira beach ride",
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
      ],
      en: [
        "Recent, well-maintained quad",
        "Helmet & goggles",
        "Full safety briefing",
        "2 guides per group",
        "Fuel included",
        "Water bottle",
      ],
    },
    pricing: [
      {
        id: "circuit-1h",
        name: { fr: "Circuit Diabat", en: "Diabat Circuit" },
        description: { fr: "Diabat, Dar Soltan, plage, forêt, dunes", en: "Diabat, Dar Soltan, beach, forest, dunes" },
        duration: { fr: "1 heure", en: "1 hour" },
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
          fr: "Oui, à partir de 12 ans en passager et 16 ans pour piloter. Notre formule Express est parfaite pour une première découverte en famille.",
          en: "Yes, from 12 years old as a passenger and 16 to ride. Our Express package is perfect for a first family discovery.",
        },
      },
    ],
    seoContent: {
      fr: [
        "Le quad à Essaouira offre une aventure tout-terrain exceptionnelle à travers les paysages les plus spectaculaires de la région. Cette excursion en quad vous emmène des dunes dorées de l'Atlantique à la forêt d'arganiers, en passant par les pistes côtières qui surplombent la plage de Sidi Kaouki.",
        "Notre centre de quad biking à Essaouira dispose de véhicules récents et parfaitement entretenus, adaptés à tous les niveaux d'expérience. Que vous soyez débutant ou pilote confirmé, nos guides locaux vous accompagnent tout au long du parcours et adaptent l'itinéraire à vos capacités. Le briefing de sécurité complet avant le départ garantit une expérience à la fois excitante et sécurisée.",
        "L'aventure en quad dans les environs d'Essaouira se distingue par la diversité des terrains : sable fin des dunes, chemins rocailleux de la forêt, et pistes panoramiques offrant des vues imprenables sur l'océan. Le parcours de 2 heures, notre formule la plus populaire, combine parfaitement sensations fortes et découverte des paysages marocains authentiques.",
        "Cette activité quad convient aux adultes et adolescents à partir de 16 ans pour piloter seul, ou 12 ans en passager sur nos quads biplaces. L'équipement de sécurité (casque, lunettes) est fourni, et le transfert depuis votre hôtel à Essaouira est disponible gratuitement. Les départs sont organisés matin et après-midi selon les conditions météo optimales.",
        "Pour les groupes et familles cherchant une activité outdoor à Essaouira, le quad biking représente l'alternative parfaite aux balades à cheval ou dromadaire. L'expérience combine adrénaline, découverte de la nature marocaine, et moments de convivialité dans un cadre exceptionnel.",
      ],
      en: [
        "Quad biking in Essaouira offers an exceptional off-road adventure through the region's most spectacular landscapes. This ATV tour takes you from the golden Atlantic dunes to the argan forest, passing by coastal tracks overlooking Sidi Kaouki beach.",
        "Our quad biking center in Essaouira features recent and perfectly maintained vehicles, suitable for all experience levels. Whether you're a beginner or experienced rider, our local guides accompany you throughout the route and adapt the itinerary to your abilities. The comprehensive safety briefing before departure ensures an experience that's both exciting and secure.",
        "The quad adventure around Essaouira stands out for its terrain diversity: fine sand dunes, rocky forest paths, and panoramic tracks offering breathtaking ocean views. The 2-hour tour, our most popular package, perfectly combines thrills with discovery of authentic Moroccan landscapes.",
        "This quad activity is suitable for adults and teenagers from 16 years old to ride solo, or 12 years old as a passenger on our two-seater quads. Safety equipment (helmet, goggles) is provided, and free transfer from your hotel in Essaouira is available. Departures are organized morning and afternoon according to optimal weather conditions.",
        "For groups and families looking for an outdoor activity in Essaouira, quad biking represents the perfect alternative to horse or camel rides. The experience combines adrenaline, discovery of Moroccan nature, and moments of conviviality in an exceptional setting.",
      ],
    },
    seo: {
      title: {
        fr: "Quad Essaouira | Quad Biking Dunes & Forêt d'Arganiers Morocco",
        en: "Quad Biking Essaouira | ATV Tours Dunes & Argan Forest Morocco",
      },
      description: {
        fr: "Quad biking Essaouira : excursion tout-terrain dans les dunes, forêt d'arganiers et côte atlantique. Quads récents, guides experts, tous niveaux. Réservez maintenant.",
        en: "Quad biking Essaouira: off-road adventure in dunes, argan forest and Atlantic coast. Recent ATVs, expert guides, all levels. Book now.",
      },
      keywords: {
        fr: [
          "quad essaouira",
          "quad biking essaouira",
          "excursion quad essaouira",
          "activité quad maroc",
          "dunes essaouira quad",
          "que faire essaouira",
          "activités essaouira",
        ],
        en: [
          "quad biking essaouira",
          "atv essaouira",
          "quad tour essaouira",
          "essaouira quad adventure",
          "things to do essaouira",
          "essaouira activities",
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
    duration: { fr: "30min à 2h", en: "30min to 2h" },
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
      ],
      en: [
        "Camel & traditional equipment",
        "Local Berber guide",
        "Briefing & escort",
        "Souvenir photos included",
        "Water bottle",
        "Optional mint tea",
      ],
    },
    pricing: [
      {
        id: "camel-1h",
        name: { fr: "Balade 1H", en: "1H Ride" },
        duration: { fr: "1 heure", en: "1 hour" },
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
    ],
    seoContent: {
      fr: [
        "La balade en dromadaire à Essaouira est une expérience authentique qui vous plonge dans l'atmosphère magique du Maroc. Cette promenade à dos de chameau sur les dunes face à l'océan Atlantique offre un moment unique, particulièrement spectaculaire au coucher du soleil lorsque les couleurs du ciel se reflètent sur le sable et l'eau.",
        "Notre caravane de dromadaires part de la plage de Diabat, à quelques minutes d'Essaouira. Les animaux sont sélectionnés pour leur calme et leur docilité, parfaits pour les familles avec enfants dès 4 ans. Nos guides berbères locaux partagent leur connaissance du désert atlantique et veillent au bien-être des dromadaires avec un suivi vétérinaire régulier et des conditions de vie respectueuses.",
        "L'expérience de balade à dromadaire à Essaouira se distingue par son cadre exceptionnel : contrairement aux balades dans le désert intérieur, ici vous évoluez entre dunes dorées et océan bleu, créant des images de carte postale inoubliables. Le rythme lent et majestueux du dromadaire permet d'apprécier pleinement le paysage et de capturer des photos mémorables.",
        "Plusieurs formules sont disponibles, de la courte balade de 30 minutes pour une première découverte, jusqu'à la randonnée de 2 heures pour explorer les environs en profondeur. Chaque sortie peut être agrémentée d'un thé à la menthe traditionnel dans les dunes. Le transfert depuis votre hébergement à Essaouira est inclus dans nos forfaits.",
        "Cette activité dromadaire convient parfaitement aux familles, couples et groupes cherchant une expérience culturelle authentique à Essaouira. C'est aussi l'occasion idéale de combiner avec nos autres activités (cheval, quad) pour une journée complète de découverte des paysages marocains.",
      ],
      en: [
        "Camel riding in Essaouira is an authentic experience that immerses you in Morocco's magical atmosphere. This camel trek on the dunes facing the Atlantic Ocean offers a unique moment, particularly spectacular at sunset when the sky's colors reflect on the sand and water.",
        "Our camel caravan departs from Diabat beach, just minutes from Essaouira. The animals are selected for their calm and docile nature, perfect for families with children from 4 years old. Our local Berber guides share their knowledge of the Atlantic desert and ensure the camels' welfare with regular veterinary care and respectful living conditions.",
        "The camel ride experience in Essaouira stands out for its exceptional setting: unlike rides in the interior desert, here you move between golden dunes and blue ocean, creating unforgettable postcard images. The slow and majestic pace of the camel allows you to fully appreciate the landscape and capture memorable photos.",
        "Several packages are available, from a short 30-minute ride for a first discovery, to a 2-hour trek to explore the surroundings in depth. Each outing can be enhanced with traditional mint tea in the dunes. Transfer from your accommodation in Essaouira is included in our packages.",
        "This camel activity is perfect for families, couples and groups seeking an authentic cultural experience in Essaouira. It's also an ideal opportunity to combine with our other activities (horse, quad) for a full day discovering Moroccan landscapes.",
      ],
    },
    seo: {
      title: {
        fr: "Balade Dromadaire Essaouira | Camel Ride Sunset Plage Morocco",
        en: "Camel Ride Essaouira | Sunset Camel Trekking Beach Morocco",
      },
      description: {
        fr: "Balade en dromadaire Essaouira face à l'océan au coucher du soleil. Camel ride avec guides berbères, animaux bien traités, idéal familles. Réservez en ligne.",
        en: "Camel ride Essaouira facing the ocean at sunset. Camel trekking with Berber guides, well-treated animals, family-friendly. Book online now.",
      },
      keywords: {
        fr: [
          "balade dromadaire essaouira",
          "camel ride essaouira",
          "chameau essaouira",
          "dromadaire plage essaouira",
          "activité dromadaire maroc",
          "que faire essaouira",
          "activités essaouira",
        ],
        en: [
          "camel ride essaouira",
          "camel trekking essaouira",
          "essaouira camel tour",
          "camel beach essaouira",
          "things to do essaouira",
          "essaouira activities",
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
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 12 },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 30 },
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
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 15 },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 35 },
          { type: "private", label: { fr: "Privé exclusif", en: "Private exclusive" }, price: 28 },
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
        options: [
          { type: "group", label: { fr: "Groupe / personne", en: "Group / person" }, price: 18 },
          { type: "couple", label: { fr: "Couple (2 pers.)", en: "Couple (2 people)" }, price: 40 },
          { type: "private", label: { fr: "Privé exclusif", en: "Private exclusive" }, price: 30 },
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
