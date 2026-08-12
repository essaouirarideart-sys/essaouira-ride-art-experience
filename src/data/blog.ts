import type { Locale } from "@/i18n/config";
import { BLOG_PLACEHOLDERS } from "./blogPlaceholders";
import { premiumBlogPosts } from "./blogPostsPremium";

export { BLOG_PLACEHOLDERS } from "./blogPlaceholders";

export interface BlogFaqItem {
  question: { fr: string; en: string };
  answer: { fr: string; en: string };
}

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
  faq?: BlogFaqItem[];
  featured?: boolean;
  trending?: boolean;
  seo: {
    description: { fr: string; en: string };
    keywords: { fr: string[]; en: string[] };
  };
}

const legacyBlogPosts: BlogPost[] = [
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
        "**1. Balade à cheval au coucher du soleil** — L'expérience signature d'Essaouira. Notre [balade à cheval sur la plage de Diabat](/fr/activites/balade-a-cheval-essaouira) vous offre des images inoubliables : silhouettes au galop, écume dorée, ciel orangé. Parfait pour tous niveaux, de 1h à 3h. Guides locaux expérimentés et chevaux calmes.",
        "**2. Quad biking dans les dunes** — Pour les amateurs de sensations fortes, notre [excursion quad à Essaouira](/fr/activites/quad-essaouira) traverse trois univers : dunes atlantiques, forêt d'arganiers, et pistes côtières surplombant Sidi Kaouki. Équipement fourni, briefing sécurité complet.",
        "**3. Balade en dromadaire** — La photo iconique du Maroc : [caravane de dromadaires face à l'océan](/fr/activites/balade-dromadaire-essaouira). Idéal en famille (dès 4 ans), au coucher du soleil. Guides berbères authentiques, animaux bien traités.",
        "**4. Art-thérapie face à l'océan** — Notre [atelier de coloriage anti-stress](/fr/activites/art-experience-essaouira) surprend tous nos visiteurs. Après l'aventure, le calme. Mandala, motifs berbères, aquarelles. Vous repartez avec votre création.",
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
        "**2. Quad Biking in the Dunes** — For thrill-seekers, our [quad biking tour in Essaouira](/en/activities/quad-biking-essaouira) crosses three worlds: Atlantic dunes, argan forest, and coastal tracks overlooking Sidi Kaouki. Equipment provided, full safety briefing.",
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
  // ─────────────── ARTICLE 4: HORSE RIDING GUIDE ───────────────
  {
    slug: {
      fr: "balade-cheval-essaouira-guide-complet",
      en: "horse-riding-essaouira-complete-guide",
    },
    title: {
      fr: "Balade à cheval à Essaouira : le guide ultime pour une expérience inoubliable",
      en: "Horse Riding in Essaouira: The Ultimate Guide for an Unforgettable Experience",
    },
    excerpt: {
      fr: "Tout ce que vous devez savoir avant de galoper sur les plages d'Essaouira : itinéraires, conseils, meilleurs moments et secrets locaux.",
      en: "Everything you need to know before galloping on Essaouira's beaches: routes, tips, best times and local secrets.",
    },
    cover: BLOG_PLACEHOLDERS.horseRiding,
    coverAlt: {
      fr: "Cavaliers au galop sur la plage d'Essaouira au coucher du soleil",
      en: "Riders galloping on Essaouira beach at sunset",
    },
    category: { fr: "Aventure", en: "Adventure" },
    publishedAt: "2025-10-05",
    readingMinutes: 8,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Il y a quelque chose de magique à chevaucher sur une plage marocaine au coucher du soleil. L'écume qui éclabousse les sabots, le vent atlantique qui fouette votre visage, la lumière dorée qui transforme chaque instant en tableau vivant. À Essaouira, cette magie est accessible à tous — débutants comme cavaliers confirmés.",
        "## Pourquoi Essaouira est la destination idéale pour le cheval",
        "Contrairement à d'autres spots équestres au Maroc, Essaouira offre un terrain unique : des kilomètres de plage sauvage, des dunes dorées, une forêt d'arganiers millénaires, et surtout, une lumière incomparable. La plage de Diabat, à quelques minutes du centre-ville, est notre terrain de jeu favori.",
        "Les chevaux locaux — souvent des Barbes ou des croisés Arabes — sont habitués au sable, à l'eau et aux cavaliers de tous niveaux. Nos guides, issus de familles berbères de la région, connaissent chaque dune, chaque passage secret.",
        "## Les différentes formules de balade",
        "**Balade 1 heure** — Parfaite pour une première découverte. Vous longez la plage, entrez dans les dunes, et si le timing est bon, vous assistez au coucher du soleil. Idéal pour les familles avec enfants dès 6 ans. [Voir les tarifs](/fr/tarifs)",
        "**Balade 2 heures** — Notre formule signature. Plage, dunes, forêt d'arganiers, et retour par la côte. Vous avez le temps de galoper (pour ceux qui le souhaitent), de faire des pauses photo, et de vraiment vous immerger dans le paysage.",
        "**Balade coucher de soleil** — Le must absolu. Nous partons 2 heures avant le sunset pour arriver au spot parfait au moment magique. Les photos sont cinématographiques. [Réserver maintenant](/fr/reservation)",
        "## Conseils pratiques avant votre balade",
        "**Que porter ?** Pantalon long et confortable (évitez le jean serré), chaussures fermées, et une couche pour le vent du soir. Nous fournissons les casques.",
        "**Faut-il de l'expérience ?** Non. Nos chevaux sont calmes et nos guides adaptent l'allure à chaque cavalier. Les débutants complets sont les bienvenus.",
        "**Peut-on galoper ?** Oui, si vous avez un minimum d'expérience et que vous le demandez. Nous évaluons votre niveau au début de la balade.",
        "**Et les enfants ?** Dès 6 ans accompagnés. Les plus jeunes peuvent monter avec un parent sur le même cheval.",
        "## Le meilleur moment pour réserver",
        "Septembre et octobre offrent la lumière la plus belle et moins de monde. Mais honnêtement, le coucher de soleil à Essaouira est magique toute l'année. Réservez 24 à 48 heures à l'avance en haute saison.",
        "## Ce qui est inclus dans nos balades",
        "Cheval adapté à votre niveau, casque de sécurité, guide local expérimenté, briefing complet, bouteille d'eau, et photos souvenir offertes. Le transfert depuis votre hôtel est gratuit. [Découvrir notre page activité](/fr/activites/balade-a-cheval-essaouira)",
        "## FAQ rapide",
        "**Quel est le poids maximum ?** Environ 90-95 kg pour le confort du cheval.",
        "**Peut-on réserver le jour même ?** Parfois, mais nous recommandons de réserver à l'avance, surtout pour le coucher du soleil.",
        "**Et s'il pleut ?** Nous reportons ou remboursons. La pluie est rare à Essaouira, mais ça arrive.",
        "Prêt à vivre l'expérience ? [Contactez-nous sur WhatsApp](/fr/contact) ou [réservez directement en ligne](/fr/reservation).",
      ],
      en: [
        "There's something magical about riding on a Moroccan beach at sunset. The foam splashing against hooves, the Atlantic wind whipping your face, the golden light transforming every moment into a living painting. In Essaouira, this magic is accessible to everyone — beginners and experienced riders alike.",
        "## Why Essaouira is the ideal destination for horse riding",
        "Unlike other equestrian spots in Morocco, Essaouira offers unique terrain: kilometers of wild beach, golden dunes, ancient argan forest, and above all, incomparable light. Diabat beach, just minutes from the city center, is our favorite playground.",
        "Local horses — often Barbs or Arab crosses — are accustomed to sand, water, and riders of all levels. Our guides, from Berber families in the region, know every dune, every secret passage.",
        "## The different ride options",
        "**1-hour ride** — Perfect for a first discovery. You ride along the beach, enter the dunes, and if the timing is right, witness the sunset. Ideal for families with children from 6 years. [See prices](/en/prices)",
        "**2-hour ride** — Our signature formula. Beach, dunes, argan forest, and return along the coast. You have time to gallop (for those who wish), take photo breaks, and truly immerse yourself in the landscape.",
        "**Sunset ride** — The absolute must. We leave 2 hours before sunset to arrive at the perfect spot at the magic moment. The photos are cinematic. [Book now](/en/booking)",
        "## Practical tips before your ride",
        "**What to wear?** Long, comfortable pants (avoid tight jeans), closed shoes, and a layer for the evening wind. We provide helmets.",
        "**Do I need experience?** No. Our horses are calm and our guides adapt the pace to each rider. Complete beginners are welcome.",
        "**Can I gallop?** Yes, if you have some experience and request it. We assess your level at the start of the ride.",
        "**What about children?** From 6 years accompanied. Younger children can ride with a parent on the same horse.",
        "## The best time to book",
        "September and October offer the most beautiful light and fewer crowds. But honestly, sunset in Essaouira is magical year-round. Book 24 to 48 hours in advance during high season.",
        "## What's included in our rides",
        "Horse adapted to your level, safety helmet, experienced local guide, full briefing, water bottle, and complimentary souvenir photos. Hotel transfer is free. [Discover our activity page](/en/activities/horse-riding-essaouira)",
        "## Quick FAQ",
        "**What's the maximum weight?** About 90-95 kg for the horse's comfort.",
        "**Can I book same day?** Sometimes, but we recommend booking in advance, especially for sunset.",
        "**What if it rains?** We reschedule or refund. Rain is rare in Essaouira, but it happens.",
        "Ready to live the experience? [Contact us on WhatsApp](/en/contact) or [book directly online](/en/booking).",
      ],
    },
    seo: {
      description: {
        fr: "Guide complet de la balade à cheval à Essaouira : itinéraires, tarifs, conseils, meilleurs moments. Galop sur la plage au coucher du soleil.",
        en: "Complete guide to horse riding in Essaouira: routes, prices, tips, best times. Gallop on the beach at sunset.",
      },
      keywords: {
        fr: [
          "balade cheval essaouira",
          "horse riding essaouira",
          "cheval plage essaouira",
          "équitation essaouira",
          "galop plage maroc",
        ],
        en: [
          "horse riding essaouira",
          "essaouira horse riding",
          "beach horse riding morocco",
          "horseback riding essaouira",
          "sunset horse ride essaouira",
        ],
      },
    },
  },
  // ─────────────── ARTICLE 5: QUAD BIKING ADVENTURE ───────────────
  {
    slug: {
      fr: "quad-essaouira-aventure-dunes",
      en: "quad-biking-essaouira-dunes-adventure",
    },
    title: {
      fr: "Quad à Essaouira : l'aventure ultime dans les dunes atlantiques",
      en: "Quad Biking in Essaouira: The Ultimate Adventure in the Atlantic Dunes",
    },
    excerpt: {
      fr: "Dunes sauvages, forêt d'arganiers, pistes côtières : découvrez pourquoi le quad à Essaouira est une expérience unique au Maroc.",
      en: "Wild dunes, argan forest, coastal tracks: discover why quad biking in Essaouira is a unique experience in Morocco.",
    },
    cover: BLOG_PLACEHOLDERS.quadBiking,
    coverAlt: {
      fr: "Quad dans les dunes dorées près d'Essaouira",
      en: "Quad bike in the golden dunes near Essaouira",
    },
    category: { fr: "Aventure", en: "Adventure" },
    publishedAt: "2025-09-28",
    readingMinutes: 7,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Le rugissement du moteur, le sable qui vole, l'adrénaline qui monte à chaque dune franchie. Le quad à Essaouira n'est pas une simple balade — c'est une immersion totale dans un paysage à couper le souffle.",
        "## Un terrain de jeu unique au monde",
        "Essaouira offre ce que peu d'endroits au monde peuvent offrir : des dunes atlantiques qui plongent vers l'océan, une forêt d'arganiers millénaires, des pistes côtières surplombant des plages sauvages, et des villages berbères authentiques.",
        "Notre circuit signature traverse trois univers en quelques heures : les dunes de Diabat, la forêt enchantée, et les falaises de Cap Sim. Chaque virage révèle un nouveau panorama.",
        "## Les différents circuits disponibles",
        "**Circuit Diabat (1h)** — L'initiation parfaite. Dunes, plage, forêt. Idéal pour une première expérience ou si vous avez peu de temps. [Voir les tarifs](/fr/tarifs)",
        "**Circuit Cap Sim (2h)** — Notre best-seller. Vous allez plus loin, plus haut, avec des vues imprenables sur l'océan. Pause photo garantie au sommet des dunes.",
        "**Circuit Grotte (3h)** — Pour les aventuriers. Inclut une grotte secrète accessible uniquement en quad, une source d'eau douce, et des paysages lunaires.",
        "**Demi-journée ou journée complète** — Explorez jusqu'à Sidi Kaouki ou la cascade de Sidi M'barek. Déjeuner berbère inclus. [Réserver maintenant](/fr/reservation)",
        "## Aucune expérience requise",
        "Nos quads sont automatiques et faciles à manier. Avant le départ, vous recevez un briefing complet : accélération, freinage, virages dans le sable. En 10 minutes, vous êtes prêt.",
        "Deux guides accompagnent chaque groupe : un devant pour montrer le chemin, un derrière pour s'assurer que personne ne reste en arrière.",
        "## Équipement fourni",
        "Quad récent et bien entretenu, casque homologué, lunettes de protection, gants si besoin. Le carburant est inclus. Nous vous conseillons de porter des vêtements que vous n'avez pas peur de salir — le sable s'invite partout !",
        "## Le meilleur moment pour partir",
        "Le matin offre une lumière douce et moins de vent. L'après-midi, les couleurs sont plus chaudes mais le vent peut se lever. Évitez les heures les plus chaudes en été.",
        "## Questions fréquentes",
        "**Âge minimum ?** 16 ans pour conduire seul, 12 ans en passager avec un adulte.",
        "**Peut-on être deux sur un quad ?** Oui, nos quads doubles sont parfaits pour les couples ou parent-enfant.",
        "**Et si je n'ai jamais conduit ?** Aucun problème. 90% de nos clients sont débutants.",
        "L'aventure vous appelle ? [Découvrez notre page quad](/fr/activites/quad-essaouira) ou [contactez-nous](/fr/contact).",
      ],
      en: [
        "The roar of the engine, sand flying, adrenaline rising with each dune conquered. Quad biking in Essaouira isn't just a ride — it's a total immersion in a breathtaking landscape.",
        "## A unique playground in the world",
        "Essaouira offers what few places in the world can: Atlantic dunes plunging toward the ocean, ancient argan forest, coastal tracks overlooking wild beaches, and authentic Berber villages.",
        "Our signature circuit crosses three worlds in just a few hours: Diabat dunes, the enchanted forest, and Cap Sim cliffs. Every turn reveals a new panorama.",
        "## The different circuits available",
        "**Diabat Circuit (1h)** — The perfect initiation. Dunes, beach, forest. Ideal for a first experience or if you're short on time. [See prices](/en/prices)",
        "**Cap Sim Circuit (2h)** — Our best-seller. You go further, higher, with stunning ocean views. Photo stop guaranteed at the top of the dunes.",
        "**Cave Circuit (3h)** — For adventurers. Includes a secret cave accessible only by quad, a freshwater spring, and lunar landscapes.",
        "**Half-day or full day** — Explore to Sidi Kaouki or Sidi M'barek waterfall. Berber lunch included. [Book now](/en/booking)",
        "## No experience required",
        "Our quads are automatic and easy to handle. Before departure, you receive a full briefing: acceleration, braking, turning in sand. In 10 minutes, you're ready.",
        "Two guides accompany each group: one in front to show the way, one behind to ensure no one falls behind.",
        "## Equipment provided",
        "Recent, well-maintained quad, certified helmet, protective goggles, gloves if needed. Fuel is included. We advise wearing clothes you don't mind getting dirty — sand gets everywhere!",
        "## The best time to go",
        "Morning offers soft light and less wind. Afternoon, colors are warmer but wind can pick up. Avoid the hottest hours in summer.",
        "## Frequently asked questions",
        "**Minimum age?** 16 to drive alone, 12 as a passenger with an adult.",
        "**Can two people share a quad?** Yes, our double quads are perfect for couples or parent-child.",
        "**What if I've never driven?** No problem. 90% of our clients are beginners.",
        "Adventure calling? [Discover our quad page](/en/activities/quad-biking-essaouira) or [contact us](/en/contact).",
      ],
    },
    seo: {
      description: {
        fr: "Quad à Essaouira : circuits dans les dunes, forêt d'arganiers, Cap Sim. Guide complet, tarifs, conseils. Aventure garantie.",
        en: "Quad biking in Essaouira: circuits in dunes, argan forest, Cap Sim. Complete guide, prices, tips. Adventure guaranteed.",
      },
      keywords: {
        fr: [
          "quad essaouira",
          "quad biking essaouira",
          "excursion quad essaouira",
          "dunes essaouira quad",
          "aventure quad maroc",
        ],
        en: [
          "quad biking essaouira",
          "essaouira quad tour",
          "atv essaouira",
          "dune buggy essaouira",
          "quad adventure morocco",
        ],
      },
    },
  },
  // ─────────────── ARTICLE 6: CAMEL RIDE EXPERIENCE ───────────────
  {
    slug: {
      fr: "balade-dromadaire-essaouira-experience",
      en: "camel-ride-essaouira-experience",
    },
    title: {
      fr: "Balade en dromadaire à Essaouira : l'expérience authentique du désert atlantique",
      en: "Camel Ride in Essaouira: The Authentic Atlantic Desert Experience",
    },
    excerpt: {
      fr: "Caravane face à l'océan, guides berbères, coucher de soleil doré : vivez le Maroc authentique à dos de dromadaire.",
      en: "Caravan facing the ocean, Berber guides, golden sunset: experience authentic Morocco on camelback.",
    },
    cover: BLOG_PLACEHOLDERS.camelRide,
    coverAlt: {
      fr: "Caravane de dromadaires sur la plage d'Essaouira au coucher du soleil",
      en: "Camel caravan on Essaouira beach at sunset",
    },
    category: { fr: "Expérience", en: "Experience" },
    publishedAt: "2025-09-15",
    readingMinutes: 6,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "La silhouette d'une caravane de dromadaires se découpant sur un coucher de soleil atlantique. C'est l'image iconique du Maroc, et à Essaouira, vous pouvez la vivre — pas seulement la photographier.",
        "## Pourquoi le dromadaire à Essaouira est différent",
        "Oubliez les balades touristiques bondées de Marrakech. Ici, c'est le désert qui rencontre l'océan. Les dunes dorées plongent vers les vagues, la lumière est incomparable, et nos guides berbères partagent des histoires transmises depuis des générations.",
        "Nos dromadaires sont élevés avec respect : alimentation quotidienne de qualité, repos suffisant, soins vétérinaires réguliers. Vous le sentirez dans leur calme et leur docilité.",
        "## Les formules disponibles",
        "**Balade 1 heure** — L'essentiel. Plage, dunes, quelques photos mémorables. Parfait pour les familles avec jeunes enfants (dès 4 ans). [Voir les tarifs](/fr/tarifs)",
        "**Balade 2 heures** — Notre recommandation. Vous avez le temps de vous immerger, de discuter avec le guide, de vivre le moment sans précipitation.",
        "**Demi-journée avec pause thé** — L'expérience complète. Balade étendue, pause thé à la menthe dans un campement berbère, retour au coucher du soleil.",
        "**Journée avec pique-nique** — Pour les aventuriers. Exploration des dunes reculées, déjeuner traditionnel, immersion totale. [Réserver maintenant](/fr/reservation)",
        "## L'expérience au coucher du soleil",
        "C'est le moment magique. Nous partons environ 1h30 avant le sunset pour arriver au spot parfait. La lumière dorée transforme tout : le sable, l'océan, les silhouettes des dromadaires. Les photos sont naturellement cinématographiques.",
        "## Conseils pratiques",
        "**Que porter ?** Vêtements confortables, chaussures fermées ou sandales solides. Prévoyez une couche pour le vent du soir.",
        "**Est-ce confortable ?** Oui, nos selles traditionnelles sont coussinées. Le dromadaire avance lentement — c'est très différent du cheval.",
        "**Pour les enfants ?** Dès 4 ans accompagnés. Les enfants adorent généralement l'expérience.",
        "**Et les photos ?** Nos guides prennent des photos pour vous et les partagent gratuitement.",
        "## Ce qui rend notre expérience unique",
        "Nos guides ne sont pas des employés — ce sont des membres de familles berbères locales qui perpétuent une tradition. Ils partagent des histoires, des chants parfois, et une connexion authentique avec le désert atlantique.",
        "Prêt pour l'aventure ? [Découvrez notre page dromadaire](/fr/activites/balade-dromadaire-essaouira) ou [contactez-nous sur WhatsApp](/fr/contact).",
      ],
      en: [
        "The silhouette of a camel caravan against an Atlantic sunset. It's Morocco's iconic image, and in Essaouira, you can live it — not just photograph it.",
        "## Why camel riding in Essaouira is different",
        "Forget the crowded tourist rides of Marrakech. Here, the desert meets the ocean. Golden dunes plunge toward the waves, the light is incomparable, and our Berber guides share stories passed down through generations.",
        "Our camels are raised with respect: quality daily feeding, sufficient rest, regular veterinary care. You'll feel it in their calm and docility.",
        "## Available options",
        "**1-hour ride** — The essentials. Beach, dunes, some memorable photos. Perfect for families with young children (from 4 years). [See prices](/en/prices)",
        "**2-hour ride** — Our recommendation. You have time to immerse yourself, chat with the guide, live the moment without rushing.",
        "**Half-day with tea break** — The complete experience. Extended ride, mint tea break in a Berber camp, return at sunset.",
        "**Full day with picnic** — For adventurers. Exploration of remote dunes, traditional lunch, total immersion. [Book now](/en/booking)",
        "## The sunset experience",
        "This is the magic moment. We leave about 1h30 before sunset to arrive at the perfect spot. The golden light transforms everything: the sand, the ocean, the camel silhouettes. Photos are naturally cinematic.",
        "## Practical tips",
        "**What to wear?** Comfortable clothes, closed shoes or sturdy sandals. Bring a layer for the evening wind.",
        "**Is it comfortable?** Yes, our traditional saddles are padded. Camels walk slowly — very different from horses.",
        "**For children?** From 4 years accompanied. Children usually love the experience.",
        "**What about photos?** Our guides take photos for you and share them for free.",
        "## What makes our experience unique",
        "Our guides aren't employees — they're members of local Berber families continuing a tradition. They share stories, sometimes songs, and an authentic connection with the Atlantic desert.",
        "Ready for adventure? [Discover our camel page](/en/activities/camel-ride-essaouira) or [contact us on WhatsApp](/en/contact).",
      ],
    },
    seo: {
      description: {
        fr: "Balade en dromadaire à Essaouira : caravane au coucher du soleil, guides berbères, expérience authentique. Guide complet et réservation.",
        en: "Camel ride in Essaouira: sunset caravan, Berber guides, authentic experience. Complete guide and booking.",
      },
      keywords: {
        fr: [
          "balade dromadaire essaouira",
          "camel ride essaouira",
          "chameau essaouira",
          "dromadaire plage maroc",
          "caravane essaouira",
        ],
        en: [
          "camel ride essaouira",
          "essaouira camel tour",
          "camel beach ride morocco",
          "sunset camel ride essaouira",
          "dromedary essaouira",
        ],
      },
    },
  },
  // ─────────────── ARTICLE 7: FAMILY ACTIVITIES ───────────────
  {
    slug: {
      fr: "activites-famille-essaouira",
      en: "family-activities-essaouira",
    },
    title: {
      fr: "Activités en famille à Essaouira : le guide complet pour des vacances inoubliables",
      en: "Family Activities in Essaouira: The Complete Guide for Unforgettable Holidays",
    },
    excerpt: {
      fr: "Cheval, dromadaire, art, plage : découvrez les meilleures activités à faire en famille à Essaouira, adaptées à tous les âges.",
      en: "Horse, camel, art, beach: discover the best family activities in Essaouira, suitable for all ages.",
    },
    cover: BLOG_PLACEHOLDERS.familyActivities,
    coverAlt: {
      fr: "Famille à cheval sur la plage d'Essaouira",
      en: "Family horse riding on Essaouira beach",
    },
    category: { fr: "Famille", en: "Family" },
    publishedAt: "2025-09-08",
    readingMinutes: 7,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Essaouira est une destination de rêve pour les familles. Loin de l'agitation de Marrakech, cette ville fortifiée offre un rythme doux, des plages sûres, et des activités adaptées à tous les âges. Voici notre guide pour des vacances familiales parfaites.",
        "## Pourquoi Essaouira est idéale pour les familles",
        "La médina est piétonne et sécurisée. Les plages sont vastes et peu profondes. Le climat est doux toute l'année (jamais trop chaud grâce aux alizés). Et surtout, les activités sont accessibles dès le plus jeune âge.",
        "## Les meilleures activités famille",
        "**Balade à cheval (dès 6 ans)** — Nos chevaux sont calmes et habitués aux enfants. Les plus petits peuvent monter avec un parent. La balade au coucher du soleil crée des souvenirs pour la vie. [Découvrir](/fr/activites/balade-a-cheval-essaouira)",
        "**Balade en dromadaire (dès 4 ans)** — L'activité préférée des enfants ! Le dromadaire avance doucement, c'est sécurisant et magique. Les guides adorent les enfants et racontent des histoires. [Découvrir](/fr/activites/balade-dromadaire-essaouira)",
        "**Art-thérapie (dès 8 ans)** — Après l'aventure, le calme. Notre [atelier de coloriage](/fr/activites/art-experience-essaouira) face à l'océan est parfait pour se poser en famille. Chacun repart avec sa création.",
        "**Quad en duo (dès 12 ans passager)** — Les enfants adorent être passagers sur nos quads doubles. Sensations garanties, en toute sécurité. [Voir les options](/fr/activites/quad-essaouira)",
        "## Une journée type en famille à Essaouira",
        "**Matin** : Petit-déjeuner sur un toit-terrasse, puis exploration de la médina. Les enfants adorent les chats des remparts et les bateaux bleus du port.",
        "**Midi** : Déjeuner de poisson grillé au port. Frais, local, et les enfants peuvent choisir leur poisson.",
        "**Après-midi** : Activité au choix — cheval, dromadaire, ou art selon l'énergie du jour.",
        "**Soir** : Coucher de soleil sur la plage, puis dîner dans un riad avec vue.",
        "## Conseils pratiques pour les familles",
        "**Réservez à l'avance** — Surtout pour les activités au coucher du soleil, très demandées.",
        "**Prévoyez des couches** — Le vent peut fraîchir en fin de journée, même en été.",
        "**Hydratez** — Nous fournissons de l'eau, mais apportez des gourdes pour la journée.",
        "**Combinez les activités** — Nous proposons des formules famille sur mesure. [Contactez-nous](/fr/contact) pour un programme personnalisé.",
        "## Tarifs famille",
        "Nous offrons des réductions pour les familles et les groupes. [Consultez nos tarifs](/fr/tarifs) ou demandez un devis personnalisé.",
        "Prêt à créer des souvenirs en famille ? [Réservez maintenant](/fr/reservation) ou [contactez-nous sur WhatsApp](/fr/contact).",
      ],
      en: [
        "Essaouira is a dream destination for families. Far from the bustle of Marrakech, this fortified city offers a gentle pace, safe beaches, and activities suitable for all ages. Here's our guide for perfect family holidays.",
        "## Why Essaouira is ideal for families",
        "The medina is pedestrian and secure. Beaches are vast and shallow. The climate is mild year-round (never too hot thanks to trade winds). And above all, activities are accessible from the youngest age.",
        "## The best family activities",
        "**Horse riding (from 6 years)** — Our horses are calm and used to children. Smaller ones can ride with a parent. The sunset ride creates lifelong memories. [Discover](/en/activities/horse-riding-essaouira)",
        "**Camel ride (from 4 years)** — Children's favorite activity! The camel walks slowly, it's safe and magical. Guides love children and tell stories. [Discover](/en/activities/camel-ride-essaouira)",
        "**Art therapy (from 8 years)** — After adventure, calm. Our [coloring workshop](/en/activities/art-experience-essaouira) facing the ocean is perfect for family relaxation. Everyone leaves with their creation.",
        "**Duo quad (from 12 years as passenger)** — Kids love being passengers on our double quads. Thrills guaranteed, in complete safety. [See options](/en/activities/quad-biking-essaouira)",
        "## A typical family day in Essaouira",
        "**Morning**: Rooftop breakfast, then medina exploration. Kids love the rampart cats and blue boats in the port.",
        "**Noon**: Grilled fish lunch at the port. Fresh, local, and children can choose their fish.",
        "**Afternoon**: Activity of choice — horse, camel, or art depending on the day's energy.",
        "**Evening**: Sunset on the beach, then dinner in a riad with a view.",
        "## Practical tips for families",
        "**Book in advance** — Especially for sunset activities, very popular.",
        "**Bring layers** — Wind can cool down in the evening, even in summer.",
        "**Stay hydrated** — We provide water, but bring bottles for the day.",
        "**Combine activities** — We offer custom family packages. [Contact us](/en/contact) for a personalized program.",
        "## Family rates",
        "We offer discounts for families and groups. [Check our prices](/en/prices) or request a custom quote.",
        "Ready to create family memories? [Book now](/en/booking) or [contact us on WhatsApp](/en/contact).",
      ],
    },
    seo: {
      description: {
        fr: "Activités famille Essaouira : cheval, dromadaire, quad, art. Guide complet des meilleures expériences pour enfants et parents.",
        en: "Family activities Essaouira: horse, camel, quad, art. Complete guide to the best experiences for children and parents.",
      },
      keywords: {
        fr: [
          "activités famille essaouira",
          "essaouira avec enfants",
          "vacances famille maroc",
          "que faire essaouira enfants",
          "activités enfants essaouira",
        ],
        en: [
          "family activities essaouira",
          "essaouira with kids",
          "family holidays morocco",
          "things to do essaouira children",
          "kid friendly essaouira",
        ],
      },
    },
  },
  // ─────────────── ARTICLE 8: ROMANTIC ESSAOUIRA ───────────────
  {
    slug: {
      fr: "activites-romantiques-essaouira-couples",
      en: "romantic-activities-essaouira-couples",
    },
    title: {
      fr: "Essaouira romantique : les meilleures expériences pour couples",
      en: "Romantic Essaouira: The Best Experiences for Couples",
    },
    excerpt: {
      fr: "Coucher de soleil à cheval, dîner sur les remparts, art face à l'océan : découvrez Essaouira en amoureux.",
      en: "Sunset horse ride, dinner on the ramparts, art facing the ocean: discover Essaouira as a couple.",
    },
    cover: BLOG_PLACEHOLDERS.romanticEssaouira,
    coverAlt: {
      fr: "Couple à cheval au coucher du soleil à Essaouira",
      en: "Couple horse riding at sunset in Essaouira",
    },
    category: { fr: "Romance", en: "Romance" },
    publishedAt: "2025-08-30",
    readingMinutes: 6,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Il y a des destinations qui semblent faites pour les amoureux. Essaouira en fait partie. La lumière dorée, le rythme lent, les couchers de soleil sur l'Atlantique, les ruelles mystérieuses de la médina... Tout invite à la romance.",
        "## Pourquoi Essaouira est parfaite pour les couples",
        "Contrairement à Marrakech, Essaouira offre une atmosphère intime et apaisante. Pas de sollicitations constantes, pas de foule oppressante. Juste le vent, la mer, et le temps qui s'étire.",
        "Les riads sont des havres de paix avec terrasses privées. Les restaurants offrent des vues imprenables. Et nos activités sont conçues pour créer des moments à deux.",
        "## Les expériences les plus romantiques",
        "**Balade à cheval au coucher du soleil** — L'expérience ultime pour les couples. Galoper côte à côte sur une plage déserte, la lumière dorée, l'écume... C'est le genre de moment qu'on n'oublie jamais. [Réserver pour deux](/fr/reservation)",
        "**Balade en dromadaire privée** — Plus lente, plus contemplative. Parfaite pour les couples qui préfèrent savourer l'instant. Nos guides peuvent vous laisser de l'intimité.",
        "**Art-thérapie en duo** — Notre [atelier créatif](/fr/activites/art-experience-essaouira) face à l'océan est étonnamment romantique. Créer ensemble, en silence, avec le bruit des vagues...",
        "**Quad en duo** — Pour les couples aventuriers. Partager l'adrénaline crée des liens. Et les paysages sont à couper le souffle.",
        "## Une journée romantique parfaite",
        "**Matin** : Grasse matinée dans votre riad, petit-déjeuner sur la terrasse privée.",
        "**Midi** : Déjeuner dans un restaurant caché de la médina. Demandez une table sur le toit.",
        "**Après-midi** : Flânerie dans les galeries d'art, achat d'un souvenir artisanal ensemble.",
        "**17h** : Départ pour une balade à cheval au coucher du soleil.",
        "**Soir** : Dîner aux chandelles sur les remparts, vue sur l'océan.",
        "## Nos formules couple",
        "Nous proposons des expériences privées pour les couples : balade exclusive, photos professionnelles, champagne au retour... [Contactez-nous](/fr/contact) pour créer votre moment parfait.",
        "## Conseils pour les couples",
        "**Réservez une balade privée** — L'intimité change tout.",
        "**Choisissez le coucher de soleil** — La lumière est incomparable.",
        "**Prévoyez une surprise** — Nous pouvons organiser des attentions spéciales (fleurs, champagne, photos).",
        "Prêt à vivre Essaouira en amoureux ? [Réservez votre expérience](/fr/reservation) ou [contactez-nous](/fr/contact) pour une formule sur mesure.",
      ],
      en: [
        "Some destinations seem made for lovers. Essaouira is one of them. The golden light, the slow pace, the Atlantic sunsets, the mysterious medina alleys... Everything invites romance.",
        "## Why Essaouira is perfect for couples",
        "Unlike Marrakech, Essaouira offers an intimate, soothing atmosphere. No constant solicitations, no oppressive crowds. Just the wind, the sea, and time stretching out.",
        "Riads are peaceful havens with private terraces. Restaurants offer stunning views. And our activities are designed to create moments for two.",
        "## The most romantic experiences",
        "**Sunset horse ride** — The ultimate couple experience. Galloping side by side on a deserted beach, golden light, sea spray... It's the kind of moment you never forget. [Book for two](/en/booking)",
        "**Private camel ride** — Slower, more contemplative. Perfect for couples who prefer to savor the moment. Our guides can give you privacy.",
        "**Art therapy for two** — Our [creative workshop](/en/activities/art-experience-essaouira) facing the ocean is surprisingly romantic. Creating together, in silence, with the sound of waves...",
        "**Duo quad** — For adventurous couples. Sharing adrenaline creates bonds. And the landscapes are breathtaking.",
        "## A perfect romantic day",
        "**Morning**: Sleep in at your riad, breakfast on the private terrace.",
        "**Noon**: Lunch in a hidden medina restaurant. Ask for a rooftop table.",
        "**Afternoon**: Stroll through art galleries, buy a handmade souvenir together.",
        "**5pm**: Depart for a sunset horse ride.",
        "**Evening**: Candlelit dinner on the ramparts, ocean view.",
        "## Our couple packages",
        "We offer private experiences for couples: exclusive ride, professional photos, champagne on return... [Contact us](/en/contact) to create your perfect moment.",
        "## Tips for couples",
        "**Book a private ride** — Privacy changes everything.",
        "**Choose sunset** — The light is incomparable.",
        "**Plan a surprise** — We can arrange special touches (flowers, champagne, photos).",
        "Ready to experience Essaouira as a couple? [Book your experience](/en/booking) or [contact us](/en/contact) for a custom package.",
      ],
    },
    seo: {
      description: {
        fr: "Activités romantiques Essaouira : balade à cheval coucher de soleil, dromadaire, art en duo. Guide complet pour couples.",
        en: "Romantic activities Essaouira: sunset horse ride, camel, art for two. Complete guide for couples.",
      },
      keywords: {
        fr: [
          "essaouira romantique",
          "activités couple essaouira",
          "lune de miel essaouira",
          "voyage romantique maroc",
          "coucher soleil couple essaouira",
        ],
        en: [
          "romantic essaouira",
          "couple activities essaouira",
          "honeymoon essaouira",
          "romantic trip morocco",
          "sunset couple essaouira",
        ],
      },
    },
  },
  // ─────────────── ARTICLE 9: HIDDEN GEMS ───────────────
  {
    slug: {
      fr: "lieux-secrets-essaouira-hors-sentiers",
      en: "hidden-gems-essaouira-off-beaten-path",
    },
    title: {
      fr: "Les lieux secrets d'Essaouira : hors des sentiers battus",
      en: "Hidden Gems of Essaouira: Off the Beaten Path",
    },
    excerpt: {
      fr: "Grottes secrètes, villages berbères, plages désertes : découvrez l'Essaouira que les touristes ne voient jamais.",
      en: "Secret caves, Berber villages, deserted beaches: discover the Essaouira tourists never see.",
    },
    cover: BLOG_PLACEHOLDERS.hiddenGems,
    coverAlt: {
      fr: "Paysage secret près d'Essaouira avec dunes et océan",
      en: "Secret landscape near Essaouira with dunes and ocean",
    },
    category: { fr: "Découverte", en: "Discovery" },
    publishedAt: "2025-08-15",
    readingMinutes: 8,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Au-delà de la médina photogénique et des remparts célèbres, Essaouira cache des trésors que seuls les locaux connaissent. Après des années à explorer cette région, voici nos secrets les mieux gardés.",
        "## La grotte de Cap Sim",
        "Accessible uniquement en quad ou à pied après une longue marche, cette grotte surplombe l'océan. À l'intérieur, des formations rocheuses sculptées par le temps. Dehors, une vue à 180° sur l'Atlantique. Nous y emmenons nos clients lors du [circuit quad 3 heures](/fr/activites/quad-essaouira).",
        "## La source d'eau douce des dunes",
        "Au milieu des dunes de sable, une source d'eau douce jaillit. Les locaux y viennent depuis des générations. L'eau est fraîche, pure, et le contraste avec le désert environnant est saisissant.",
        "## Le village de Taguenza",
        "Un petit port de pêche à 30 minutes d'Essaouira. Pas de touristes, juste des pêcheurs qui réparent leurs filets et des enfants qui jouent. Le poisson grillé y est le meilleur de la région.",
        "## La plage de Moulay Bouzerktoun",
        "Plus sauvage que Sidi Kaouki, cette plage est un secret bien gardé des surfeurs locaux. Les vagues sont parfaites, la foule inexistante. Accessible en quad lors de nos circuits demi-journée.",
        "## La forêt d'arganiers de Diabat",
        "Juste derrière les dunes, une forêt millénaire où les chèvres grimpent dans les arbres. Le matin, la lumière y est magique. Nous la traversons lors de nos [balades à cheval](/fr/activites/balade-a-cheval-essaouira).",
        "## Le marabout de Sidi Kaouki",
        "Un sanctuaire blanc perché sur une colline, face à l'océan. Les locaux y viennent pour méditer. Le coucher de soleil depuis ce point est l'un des plus beaux de la région.",
        "## Comment accéder à ces lieux",
        "La plupart de ces endroits ne sont pas accessibles en voiture. C'est ce qui les préserve. Nos excursions en quad, à cheval ou en dromadaire vous y emmènent naturellement.",
        "**Circuit quad Cap Sim** — Grotte, source, dunes sauvages. [Réserver](/fr/reservation)",
        "**Balade cheval forêt** — Arganiers, plage secrète, village de pêcheurs. [Réserver](/fr/reservation)",
        "**Dromadaire demi-journée** — Dunes reculées, pause thé berbère. [Réserver](/fr/reservation)",
        "## Nos conseils pour explorer",
        "**Partez tôt** — La lumière du matin révèle des couleurs uniques.",
        "**Faites confiance aux guides** — Ils connaissent des passages que même Google Maps ignore.",
        "**Respectez les lieux** — Ces endroits sont préservés parce qu'ils sont respectés.",
        "Prêt à découvrir l'Essaouira secrète ? [Contactez-nous](/fr/contact) pour une aventure sur mesure.",
      ],
      en: [
        "Beyond the photogenic medina and famous ramparts, Essaouira hides treasures only locals know. After years exploring this region, here are our best-kept secrets.",
        "## The Cap Sim cave",
        "Accessible only by quad or on foot after a long walk, this cave overlooks the ocean. Inside, rock formations sculpted by time. Outside, a 180° view of the Atlantic. We take our clients there during the [3-hour quad circuit](/en/activities/quad-biking-essaouira).",
        "## The freshwater spring in the dunes",
        "In the middle of sand dunes, a freshwater spring emerges. Locals have come here for generations. The water is fresh, pure, and the contrast with the surrounding desert is striking.",
        "## Taguenza village",
        "A small fishing port 30 minutes from Essaouira. No tourists, just fishermen mending nets and children playing. The grilled fish here is the best in the region.",
        "## Moulay Bouzerktoun beach",
        "Wilder than Sidi Kaouki, this beach is a well-kept secret among local surfers. Waves are perfect, crowds nonexistent. Accessible by quad during our half-day circuits.",
        "## The Diabat argan forest",
        "Just behind the dunes, an ancient forest where goats climb trees. In the morning, the light is magical. We cross it during our [horse rides](/en/activities/horse-riding-essaouira).",
        "## The Sidi Kaouki marabout",
        "A white sanctuary perched on a hill, facing the ocean. Locals come to meditate. The sunset from this point is one of the most beautiful in the region.",
        "## How to access these places",
        "Most of these spots aren't accessible by car. That's what preserves them. Our quad, horse, or camel excursions take you there naturally.",
        "**Cap Sim quad circuit** — Cave, spring, wild dunes. [Book](/en/booking)",
        "**Forest horse ride** — Argan trees, secret beach, fishing village. [Book](/en/booking)",
        "**Half-day camel** — Remote dunes, Berber tea break. [Book](/en/booking)",
        "## Our exploration tips",
        "**Leave early** — Morning light reveals unique colors.",
        "**Trust the guides** — They know passages even Google Maps ignores.",
        "**Respect the places** — These spots are preserved because they're respected.",
        "Ready to discover secret Essaouira? [Contact us](/en/contact) for a custom adventure.",
      ],
    },
    seo: {
      description: {
        fr: "Lieux secrets Essaouira : grottes, villages berbères, plages désertes. Guide local des endroits hors des sentiers battus.",
        en: "Hidden gems Essaouira: caves, Berber villages, deserted beaches. Local guide to off-the-beaten-path spots.",
      },
      keywords: {
        fr: [
          "lieux secrets essaouira",
          "essaouira hors sentiers battus",
          "endroits cachés essaouira",
          "essaouira authentique",
          "découverte essaouira",
        ],
        en: [
          "hidden gems essaouira",
          "essaouira off beaten path",
          "secret places essaouira",
          "authentic essaouira",
          "essaouira discovery",
        ],
      },
    },
  },
  // ─────────────── ARTICLE 10: BEACH ADVENTURES ───────────────
  {
    slug: {
      fr: "plages-essaouira-guide-aventures",
      en: "essaouira-beaches-adventure-guide",
    },
    title: {
      fr: "Les plages d'Essaouira : guide complet des aventures côtières",
      en: "Essaouira Beaches: Complete Guide to Coastal Adventures",
    },
    excerpt: {
      fr: "De Diabat à Sidi Kaouki, découvrez les meilleures plages d'Essaouira et les activités à y pratiquer.",
      en: "From Diabat to Sidi Kaouki, discover Essaouira's best beaches and the activities to enjoy there.",
    },
    cover: BLOG_PLACEHOLDERS.beachAdventures,
    coverAlt: {
      fr: "Plage sauvage près d'Essaouira avec dunes et vagues",
      en: "Wild beach near Essaouira with dunes and waves",
    },
    category: { fr: "Guide", en: "Guide" },
    publishedAt: "2025-08-01",
    readingMinutes: 9,
    author: "Essaouira Ride & Art",
    body: {
      fr: [
        "Essaouira est bénie par des kilomètres de côte atlantique sauvage. Chaque plage a sa personnalité, ses activités, son ambiance. Voici notre guide complet pour choisir votre terrain de jeu.",
        "## La plage principale d'Essaouira",
        "Juste devant la médina, c'est la plus accessible. Idéale pour une promenade, observer les kitesurfeurs, ou simplement regarder le coucher de soleil depuis les cafés du bord de mer. Mais pour les activités, nous préférons aller plus loin.",
        "## La plage de Diabat",
        "Notre terrain de jeu favori. À 10 minutes au sud de la ville, cette plage sauvage est le point de départ de toutes nos aventures. C'est ici que nous organisons nos [balades à cheval](/fr/activites/balade-a-cheval-essaouira) et [en dromadaire](/fr/activites/balade-dromadaire-essaouira).",
        "**Ce qui la rend spéciale** : des dunes dorées qui plongent vers l'océan, peu de monde, une lumière incomparable au coucher du soleil.",
        "**Activités** : cheval, dromadaire, quad, kitesurf, promenade.",
        "## Les dunes de Cap Sim",
        "Plus au sud, les dunes deviennent plus hautes, plus sauvages. C'est le territoire du quad. Notre [circuit Cap Sim](/fr/activites/quad-essaouira) vous emmène au sommet pour des vues à 360°.",
        "**Ce qui la rend spéciale** : paysages lunaires, sensation de bout du monde, peu de touristes.",
        "**Activités** : quad, randonnée, photographie.",
        "## Sidi Kaouki",
        "À 25 minutes d'Essaouira, c'est le paradis des surfeurs. Vagues constantes, ambiance bohème, petits cafés face à l'océan. Nous y organisons des excursions quad journée avec déjeuner inclus.",
        "**Ce qui la rend spéciale** : vagues parfaites, communauté surf, couchers de soleil épiques.",
        "**Activités** : surf, kitesurf, yoga, quad.",
        "## Moulay Bouzerktoun",
        "Le secret des locaux. Plus sauvage, plus isolée, parfaite pour ceux qui cherchent la solitude. Accessible en quad lors de nos circuits avancés.",
        "**Ce qui la rend spéciale** : isolement total, vagues puissantes, nature préservée.",
        "**Activités** : surf avancé, exploration, méditation.",
        "## Quelle plage pour quelle activité ?",
        "**Cheval au coucher du soleil** → Diabat. La lumière y est parfaite.",
        "**Quad aventure** → Cap Sim ou Sidi Kaouki. Terrains variés.",
        "**Dromadaire en famille** → Diabat. Accessible et sécurisé.",
        "**Surf** → Sidi Kaouki ou Moulay Bouzerktoun selon votre niveau.",
        "**Art face à l'océan** → Notre atelier est à Diabat, vue imprenable.",
        "## Conseils pratiques",
        "**Le vent** — Essaouira est ventée, surtout l'après-midi. Le matin est plus calme pour les activités.",
        "**La marée** — Vérifiez les horaires. Certaines zones sont meilleures à marée basse.",
        "**La protection** — Crème solaire, lunettes, chapeau. Le soleil et le vent combinés sont traîtres.",
        "**Le transfert** — Nous assurons le transport gratuit depuis votre hôtel pour toutes nos activités.",
        "Prêt à explorer les plages d'Essaouira ? [Consultez nos activités](/fr/activites) ou [réservez directement](/fr/reservation).",
      ],
      en: [
        "Essaouira is blessed with kilometers of wild Atlantic coastline. Each beach has its personality, activities, and vibe. Here's our complete guide to choosing your playground.",
        "## Essaouira main beach",
        "Right in front of the medina, it's the most accessible. Ideal for a stroll, watching kitesurfers, or simply enjoying sunset from seaside cafés. But for activities, we prefer going further.",
        "## Diabat beach",
        "Our favorite playground. 10 minutes south of town, this wild beach is the starting point for all our adventures. This is where we organize our [horse rides](/en/activities/horse-riding-essaouira) and [camel rides](/en/activities/camel-ride-essaouira).",
        "**What makes it special**: golden dunes plunging toward the ocean, few people, incomparable sunset light.",
        "**Activities**: horse, camel, quad, kitesurf, walking.",
        "## Cap Sim dunes",
        "Further south, dunes become higher, wilder. This is quad territory. Our [Cap Sim circuit](/en/activities/quad-biking-essaouira) takes you to the summit for 360° views.",
        "**What makes it special**: lunar landscapes, end-of-the-world feeling, few tourists.",
        "**Activities**: quad, hiking, photography.",
        "## Sidi Kaouki",
        "25 minutes from Essaouira, it's surfers' paradise. Consistent waves, bohemian vibe, small cafés facing the ocean. We organize full-day quad excursions there with lunch included.",
        "**What makes it special**: perfect waves, surf community, epic sunsets.",
        "**Activities**: surf, kitesurf, yoga, quad.",
        "## Moulay Bouzerktoun",
        "The locals' secret. Wilder, more isolated, perfect for those seeking solitude. Accessible by quad during our advanced circuits.",
        "**What makes it special**: total isolation, powerful waves, preserved nature.",
        "**Activities**: advanced surf, exploration, meditation.",
        "## Which beach for which activity?",
        "**Sunset horse ride** → Diabat. The light is perfect.",
        "**Quad adventure** → Cap Sim or Sidi Kaouki. Varied terrain.",
        "**Family camel ride** → Diabat. Accessible and safe.",
        "**Surf** → Sidi Kaouki or Moulay Bouzerktoun depending on your level.",
        "**Art facing the ocean** → Our workshop is in Diabat, stunning view.",
        "## Practical tips",
        "**The wind** — Essaouira is windy, especially afternoons. Mornings are calmer for activities.",
        "**The tide** — Check times. Some areas are better at low tide.",
        "**Protection** — Sunscreen, sunglasses, hat. Sun and wind combined are treacherous.",
        "**Transfer** — We provide free transport from your hotel for all our activities.",
        "Ready to explore Essaouira's beaches? [Check our activities](/en/activities) or [book directly](/en/booking).",
      ],
    },
    seo: {
      description: {
        fr: "Plages Essaouira : Diabat, Cap Sim, Sidi Kaouki. Guide complet des meilleures plages et activités côtières.",
        en: "Essaouira beaches: Diabat, Cap Sim, Sidi Kaouki. Complete guide to the best beaches and coastal activities.",
      },
      keywords: {
        fr: [
          "plages essaouira",
          "diabat plage",
          "sidi kaouki",
          "activités plage essaouira",
          "surf essaouira",
          "kitesurf essaouira",
        ],
        en: [
          "essaouira beaches",
          "diabat beach",
          "sidi kaouki",
          "beach activities essaouira",
          "surf essaouira",
          "kitesurf essaouira",
        ],
      },
    },
  },
];

export const blogPosts: BlogPost[] = [...legacyBlogPosts, ...premiumBlogPosts];

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

export function getRelatedBlogPosts(
  currentSlugFr: string,
  count = 3,
  categoryFr?: string
): BlogPost[] {
  const others = blogPosts.filter((p) => p.slug.fr !== currentSlugFr);
  const sameCategory = categoryFr
    ? others.filter((p) => p.category.fr === categoryFr)
    : [];
  const rest = others.filter((p) => p.category.fr !== categoryFr);
  return [...sameCategory, ...rest].slice(0, count);
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}

export function getBlogCategories(locale: Locale): string[] {
  const cats = new Set(blogPosts.map((p) => p.category[locale]));
  return Array.from(cats).sort();
}

export function sortBlogPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );
}

/** Activity id → keyword fragments used to match related blog posts. */
const ACTIVITY_BLOG_KEYWORDS: Record<string, string[]> = {
  "horse-riding": ["cheval", "horse", "équit", "equestrian", "sunset-ride"],
  "quad-biking": ["quad", "atv"],
  "camel-ride": ["dromadaire", "camel", "chameau"],
  "art-experience": ["art", "coloriage", "coloring", "thérapie", "therapy"],
};

/** Blog posts that naturally relate to an activity (by slug/title keywords). */
export function getBlogPostsForActivity(
  activityId: string,
  count = 3
): BlogPost[] {
  const keys = ACTIVITY_BLOG_KEYWORDS[activityId] ?? [];
  if (keys.length === 0) return getRecentBlogPosts(count);

  const scored = blogPosts.map((post) => {
    const hay =
      `${post.slug.fr} ${post.slug.en} ${post.title.fr} ${post.title.en}`.toLowerCase();
    const score = keys.reduce(
      (acc, k) => (hay.includes(k.toLowerCase()) ? acc + 1 : acc),
      0
    );
    return { post, score };
  });

  const matched = scored
    .filter((s) => s.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        (a.post.publishedAt < b.post.publishedAt ? 1 : -1)
    )
    .map((s) => s.post);

  if (matched.length >= count) return matched.slice(0, count);
  const recent = getRecentBlogPosts(count + matched.length).filter(
    (p) => !matched.some((m) => m.slug.fr === p.slug.fr)
  );
  return [...matched, ...recent].slice(0, count);
}

/** Activities referenced in a blog post body. */
export function getRelatedActivityIdsFromPost(post: BlogPost): string[] {
  const body = [...post.body.fr, ...post.body.en].join(" ").toLowerCase();
  const ids: string[] = [];
  if (
    body.includes("balade-a-cheval") ||
    body.includes("horse-riding") ||
    body.includes("cheval")
  ) {
    ids.push("horse-riding");
  }
  if (body.includes("quad")) ids.push("quad-biking");
  if (
    body.includes("dromadaire") ||
    body.includes("camel") ||
    body.includes("chameau")
  ) {
    ids.push("camel-ride");
  }
  if (
    body.includes("art-experience") ||
    body.includes("art-thérapie") ||
    body.includes("art therapy") ||
    body.includes("coloriage")
  ) {
    ids.push("art-experience");
  }
  return [...new Set(ids)];
}
