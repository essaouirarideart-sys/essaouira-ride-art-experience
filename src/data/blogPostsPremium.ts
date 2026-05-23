import type { BlogPost } from "./blog";
import { BLOG_PLACEHOLDERS } from "./blogPlaceholders";

const IMG = BLOG_PLACEHOLDERS;
const AUTHOR = "Essaouira Ride & Art";

/** Ten additional premium SEO articles (do not replace legacy posts). */
export const premiumBlogPosts: BlogPost[] = [
  {
    slug: {
      fr: "meilleurs-spots-balade-cheval-coucher-soleil-essaouira",
      en: "best-sunset-horse-riding-spots-essaouira",
    },
    title: {
      fr: "Les meilleurs spots de balade à cheval au coucher du soleil à Essaouira",
      en: "Best Sunset Horse Riding Spots in Essaouira",
    },
    excerpt: {
      fr: "Diabat, dunes dorées, forêt d'eucalyptus : où galoper quand le ciel devient cinéma — guide local des spots signature.",
      en: "Diabat, golden dunes, eucalyptus forest: where to gallop as the sky turns cinematic — a local guide to signature spots.",
    },
    cover: IMG.horseRiding,
    coverAlt: {
      fr: "Cavaliers au coucher du soleil sur la plage de Diabat",
      en: "Riders at sunset on Diabat beach",
    },
    category: { fr: "Cheval", en: "Horse Riding" },
    publishedAt: "2026-01-15",
    readingMinutes: 9,
    author: AUTHOR,
    featured: true,
    body: {
      fr: [
        "À Essaouira, le coucher du soleil n'est pas un décor : c'est le personnage principal. Sur le dos d'un cheval, la lumière dorée transforme chaque foulée en image de film. Voici les spots que nos guides choisissent pour des [balades à cheval](/fr/activities/balade-a-cheval-essaouira) inoubliables.",
        "## 1. La plage de Diabat — le classique absolu",
        "À cinq minutes de la médina, Diabat offre une ligne droite infinie : sable humide, océan d'un côté, dunes de l'autre. C'est ici que nous organisons la majorité de nos sorties **sunset horse riding Essaouira**. Le timing est calculé pour arriver au point parfait quand le soleil touche l'horizon.",
        "## 2. La lisière de la forêt d'eucalyptus",
        "Pour une ambiance plus mystique, nous traversons parfois la lisière boisée avant d'émerger sur la plage. Les rayons filtrent entre les troncs — idéal pour les photographes et les couples.",
        "## 3. Les dunes atlantiques au sud",
        "Quand le vent est doux, nous poussons vers les dunes basses au sud de Diabat. Silhouettes au galop, sable ocre, ciel orangé : l'essence du **horseback riding beach Essaouira**.",
        "## 4. Le retour face à Mogador",
        "Certaines sorties longues (2h) incluent une pause thé à la menthe avec vue sur l'île de Mogador. Le contraste entre l'Atlantique sauvage et les remparts au loin est saisissant.",
        "### Conseils pour un sunset parfait",
        "Réservez 48h à l'avance en haute saison. Portez des couches : le vent peut fraîchir en dix minutes. Nos chevaux sont sélectionnés pour leur calme au crépuscule.",
        "Consultez nos [tarifs](/fr/prices) et la [galerie](/fr/gallery) pour vous projeter avant le départ.",
        "## Questions fréquentes",
      ],
      en: [
        "In Essaouira, sunset is not a backdrop — it's the main character. On horseback, golden light turns every stride into a film frame. Here are the spots our guides choose for unforgettable [horse riding](/en/activities/horse-riding-essaouira) at dusk.",
        "## 1. Diabat Beach — the absolute classic",
        "Five minutes from the medina, Diabat offers an endless straight line: wet sand, ocean on one side, dunes on the other. This is where we run most of our **sunset horse riding Essaouira** outings, timed to reach the perfect point as the sun meets the horizon.",
        "## 2. The eucalyptus forest edge",
        "For a more mystical mood, we sometimes cross the wooded edge before emerging onto the beach. Filtered light through the trunks — ideal for photographers and couples.",
        "## 3. Atlantic dunes to the south",
        "When the wind is gentle, we push toward the low dunes south of Diabat. Galloping silhouettes, ochre sand, orange sky: the essence of **horseback riding on Essaouira beach**.",
        "## 4. Facing Mogador on the return",
        "Some longer rides (2h) include mint tea with a view of Mogador Island. The contrast between wild Atlantic and distant ramparts is striking.",
        "### Tips for a perfect sunset ride",
        "Book 48 hours ahead in high season. Layer up — the wind can cool down in ten minutes. Our horses are selected for calm temperaments at dusk.",
        "Check our [prices](/en/prices) and [gallery](/en/gallery) before you go.",
        "## Frequently asked questions",
      ],
    },
    faq: [
      {
        question: {
          fr: "Faut-il être cavaliers confirmés pour une balade au coucher du soleil ?",
          en: "Do I need to be an experienced rider for a sunset ride?",
        },
        answer: {
          fr: "Non. Nos guides adaptent l'allure : pas, trot léger ou galop selon votre niveau. Les débutants sont les bienvenus.",
          en: "No. Our guides adapt the pace: walk, light trot or canter depending on your level. Beginners are welcome.",
        },
      },
      {
        question: {
          fr: "Quelle est la meilleure saison pour le sunset à cheval ?",
          en: "What is the best season for sunset horse riding?",
        },
        answer: {
          fr: "Septembre à novembre et mars à mai offrent une lumière exceptionnelle et un vent modéré.",
          en: "September to November and March to May offer exceptional light and moderate wind.",
        },
      },
      {
        question: {
          fr: "Le transfert depuis mon hôtel est-il inclus ?",
          en: "Is hotel transfer included?",
        },
        answer: {
          fr: "Oui, sur demande depuis le centre d'Essaouira. Précisez-le lors de votre [réservation](/fr/booking).",
          en: "Yes, on request from central Essaouira. Mention it when you [book](/en/booking).",
        },
      },
    ],
    seo: {
      description: {
        fr: "Meilleurs spots de balade à cheval au coucher du soleil à Essaouira : Diabat, dunes, forêt. Guide local, conseils photo et réservation.",
        en: "Best sunset horse riding spots in Essaouira: Diabat, dunes, forest. Local guide, photo tips and booking.",
      },
      keywords: {
        fr: [
          "balade cheval coucher soleil essaouira",
          "horse riding sunset essaouira",
          "diabat cheval",
          "activités coucher soleil essaouira",
        ],
        en: [
          "sunset horse riding essaouira",
          "horse riding beach essaouira",
          "diabat horse ride",
          "sunset activities essaouira",
        ],
      },
    },
  },
  {
    slug: {
      fr: "pourquoi-essaouira-aventuriers",
      en: "why-essaouira-adventure-lovers",
    },
    title: {
      fr: "Pourquoi Essaouira est parfaite pour les amoureux d'aventure",
      en: "Why Essaouira Is Perfect for Adventure Lovers",
    },
    excerpt: {
      fr: "Vent, océan, dunes et liberté : découvrez pourquoi la perle atlantique attire les voyageurs en quête d'adrénaline douce.",
      en: "Wind, ocean, dunes and freedom: why the Atlantic pearl attracts travelers seeking soft adrenaline.",
    },
    cover: IMG.quadBiking,
    coverAlt: {
      fr: "Quad dans les dunes près d'Essaouira",
      en: "Quad biking in dunes near Essaouira",
    },
    category: { fr: "Aventure", en: "Adventure" },
    publishedAt: "2026-01-22",
    readingMinutes: 8,
    author: AUTHOR,
    trending: true,
    body: {
      fr: [
        "Essaouira n'est pas Marrakech. Ici, l'aventure sent le sel, le thuya et le vent. C'est une ville où l'on peut enchaîner quad, cheval, surf et dromadaire en une seule journée — sans sacrifier le charme.",
        "## Un terrain de jeu naturel",
        "Dunes, forêt d'arganiers, falaises, plages infinies : la diversité géographique est rare à cette échelle. Nos [excursions quad](/fr/activities/quad-essaouira) exploitent ce relief ; nos [balades à cheval](/fr/activities/balade-a-cheval-essaouira) le subliment au ralenti.",
        "## Le vent comme allié",
        "Les alizés font d'Essaouira la capitale marocaine du kitesurf et du surf. Même sans board, le vent sculpte la lumière — parfaite pour des photos cinématographiques.",
        "## Accessibilité & authenticité",
        "Pas besoin de 4x4 pendant des heures : tout est à portée de 20 minutes. Pourtant, on reste loin des circuits surpeuplés. Diabat, Sidi Kaouki, Cap Sim : autant de mondes différents.",
        "## Aventure sans brutalité",
        "Chez Essaouira Ride & Art, l'aventure reste humaine : guides locaux, animaux respectés, briefings sécurité. Vous repartez fatigué du bonheur, pas épuisé du stress.",
        "Explorez toutes nos [activités Essaouira](/fr/activities) ou [réservez directement](/fr/booking).",
        "## Questions fréquentes",
      ],
      en: [
        "Essaouira is not Marrakech. Here, adventure smells of salt, thuya and wind. You can chain quad, horse, surf and camel in a single day — without losing charm.",
        "## A natural playground",
        "Dunes, argan forest, cliffs, endless beaches: geographic diversity is rare at this scale. Our [quad tours](/en/activities/quad-essaouira) use the terrain; our [horse rides](/en/activities/horse-riding-essaouira) elevate it at a slower pace.",
        "## Wind as an ally",
        "Trade winds make Essaouira Morocco's kitesurf and surf capital. Even without a board, wind sculpts the light — perfect for cinematic photos.",
        "## Accessibility & authenticity",
        "No need for hours in a 4x4: everything is within 20 minutes. Yet you avoid overcrowded circuits. Diabat, Sidi Kaouki, Cap Sim: different worlds.",
        "## Adventure without harshness",
        "At Essaouira Ride & Art, adventure stays human: local guides, respected animals, safety briefings. You leave tired from joy, not stress.",
        "Explore all our [Essaouira activities](/en/activities) or [book directly](/en/booking).",
        "## Frequently asked questions",
      ],
    },
    faq: [
      {
        question: {
          fr: "Quelle activité choisir en premier à Essaouira ?",
          en: "Which activity to choose first in Essaouira?",
        },
        answer: {
          fr: "Le coucher de soleil à cheval est notre signature ; le quad convient aux amateurs de sensations.",
          en: "Sunset horse riding is our signature; quad suits thrill-seekers.",
        },
      },
      {
        question: {
          fr: "Les activités sont-elles adaptées aux enfants ?",
          en: "Are activities suitable for children?",
        },
        answer: {
          fr: "Oui, dromadaire dès 4 ans, cheval dès 6 ans accompagnés. Voir notre article famille ou [contactez-nous](/fr/contact).",
          en: "Yes, camel from 4 years, horse from 6 with accompaniment. See our family article or [contact us](/en/contact).",
        },
      },
    ],
    seo: {
      description: {
        fr: "Pourquoi Essaouira séduit les amoureux d'aventure : quad, cheval, surf, dunes. Guide local des activités outdoor au Maroc.",
        en: "Why Essaouira attracts adventure lovers: quad, horse, surf, dunes. Local guide to outdoor activities in Morocco.",
      },
      keywords: {
        fr: ["aventure essaouira", "activités outdoor essaouira", "quad essaouira", "que faire essaouira aventure"],
        en: ["essaouira adventure", "outdoor activities essaouira", "things to do essaouira adventure"],
      },
    },
  },
  {
    slug: {
      fr: "experience-luxe-essaouira-voyage-premium",
      en: "ultimate-luxury-travel-experience-essaouira",
    },
    title: {
      fr: "L'expérience de voyage de luxe ultime à Essaouira",
      en: "The Ultimate Luxury Travel Experience in Essaouira",
    },
    excerpt: {
      fr: "Chevaux, lumière dorée, shooting cinématographique et trek multi-jours : le Maroc atlantique version haute couture.",
      en: "Horses, golden light, cinematic shoots and multi-day treks: Atlantic Morocco, haute couture style.",
    },
    cover: IMG.romanticEssaouira,
    coverAlt: {
      fr: "Expérience équestre premium au coucher du soleil",
      en: "Premium equestrian experience at sunset",
    },
    category: { fr: "Luxe", en: "Luxury" },
    publishedAt: "2026-02-03",
    readingMinutes: 10,
    author: AUTHOR,
    body: {
      fr: [
        "Le luxe à Essaouira ne ressemble pas à celui des palaces fermés. Ici, il est ouvert : vent dans les cheveux, sable sous les sabots, silence entre deux galops.",
        "## Le cheval comme fil conducteur",
        "Notre collection **Shooting & Trek** sur la page [balade à cheval](/fr/activities/balade-a-cheval-essaouira) propose des expériences signature : séance photo à cheval, galop au lever du soleil, treks de 2 à 6 jours.",
        "## Un rythme sur mesure",
        "Pas de bus de 40 personnes. Groupes réduits, guides dédiés, transferts privés depuis votre riad. Vous choisissez l'heure, l'allure, l'intensité.",
        "## L'art après l'adrénaline",
        "Terminez par notre [expérience art-thérapie](/fr/activities/art-experience-essaouira) face à l'océan : mandala, aquarelle, silence. Le contraste est le vrai luxe.",
        "## Où séjourner",
        "Riads de la médina, lodges de Sidi Kaouki, villas avec vue sur l'Atlantique — nous vous conseillons selon votre programme.",
        "Découvrez nos [tarifs premium](/fr/prices) et [réservez votre expérience](/fr/booking).",
        "## Questions fréquentes",
      ],
      en: [
        "Luxury in Essaouira doesn't look like closed palaces. Here it's open: wind in your hair, sand under hooves, silence between gallops.",
        "## The horse as a thread",
        "Our **Shooting & Trek** collection on the [horse riding](/en/activities/horse-riding-essaouira) page offers signature experiences: on-horse photo sessions, sunrise gallop, 2–6 day treks.",
        "## A bespoke pace",
        "No 40-person buses. Small groups, dedicated guides, private transfers from your riad. You choose time, pace and intensity.",
        "## Art after adrenaline",
        "Finish with our [art experience](/en/activities/art-experience-essaouira) facing the ocean: mandala, watercolor, silence. Contrast is the real luxury.",
        "## Where to stay",
        "Medina riads, Sidi Kaouki lodges, Atlantic-view villas — we advise based on your itinerary.",
        "See our [premium pricing](/en/prices) and [book your experience](/en/booking).",
        "## Frequently asked questions",
      ],
    },
    faq: [
      {
        question: {
          fr: "Proposez-vous des treks équestres multi-jours ?",
          en: "Do you offer multi-day horse treks?",
        },
        answer: {
          fr: "Oui, de 2 à 6 jours. Tarifs sur la page activité cheval, section premium.",
          en: "Yes, 2 to 6 days. Rates on the horse activity page, premium section.",
        },
      },
    ],
    seo: {
      description: {
        fr: "Voyage de luxe à Essaouira : trek à cheval, shooting, expériences premium. Guide exclusif et réservation privée.",
        en: "Luxury travel in Essaouira: horse trek, shooting, premium experiences. Exclusive guide and private booking.",
      },
      keywords: {
        fr: ["luxe essaouira", "expérience premium maroc", "trek cheval luxe", "voyage essaouira"],
        en: ["luxury essaouira", "luxury morocco experience", "premium horse trek essaouira"],
      },
    },
  },
  {
    slug: {
      fr: "meilleures-activites-couples-essaouira",
      en: "best-couple-activities-essaouira",
    },
    title: {
      fr: "Les meilleures activités en couple à Essaouira",
      en: "Best Couple Activities in Essaouira",
    },
    excerpt: {
      fr: "Cheval au sunset, dromadaire, art-thérapie : des moments à deux qui restent gravés — loin des clichés touristiques.",
      en: "Sunset horse, camel, art therapy: moments for two that stay with you — beyond tourist clichés.",
    },
    cover: IMG.romanticEssaouira,
    coverAlt: {
      fr: "Couple à cheval sur la plage d'Essaouira",
      en: "Couple horse riding on Essaouira beach",
    },
    category: { fr: "Couple", en: "Couples" },
    publishedAt: "2026-02-12",
    readingMinutes: 8,
    author: AUTHOR,
    body: {
      fr: [
        "Essaouira est une ville romantique sans être mièvre. Le vent, la lumière et l'océan créent une intimité naturelle — parfaite pour les couples qui veulent vivre quelque chose, pas seulement le regarder.",
        "## 1. Balade à cheval au coucher du soleil",
        "Notre expérience la plus demandée par les couples. Galoper côte à côte sur Diabat quand le ciel brûle — [réserver une balade](/fr/activities/balade-a-cheval-essaouira).",
        "## 2. Dromadaire privé dans les dunes",
        "Plus lent, plus contemplatif. Idéal pour une demande en mariage ou un anniversaire. [Balade dromadaire](/fr/activities/balade-dromadaire-essaouira) au crépuscule.",
        "## 3. Atelier art à deux",
        "Créez ensemble face à l'Atlantique. [Art experience](/fr/activities/art-experience-essaouira) : mandala, couleurs, silence partagé.",
        "## 4. Quad en duo",
        "Pour les couples aventuriers : sensations fortes, paysages sauvages. [Quad Essaouira](/fr/activities/quad-essaouira).",
        "Voir la [galerie](/fr/gallery) pour vous inspirer, puis [contactez-nous](/fr/contact) pour un programme sur mesure.",
        "## Questions fréquentes",
      ],
      en: [
        "Essaouira is romantic without being sentimental. Wind, light and ocean create natural intimacy — perfect for couples who want to live something, not just watch it.",
        "## 1. Sunset horse riding",
        "Our most requested couple experience. Canter side by side on Diabat as the sky burns — [book a ride](/en/activities/horse-riding-essaouira).",
        "## 2. Private camel in the dunes",
        "Slower, more contemplative. Ideal for proposals or anniversaries. [Camel ride](/en/activities/camel-ride-essaouira) at dusk.",
        "## 3. Art workshop for two",
        "Create together facing the Atlantic. [Art experience](/en/activities/art-experience-essaouira): mandala, colors, shared silence.",
        "## 4. Quad as a duo",
        "For adventurous couples: thrills, wild landscapes. [Quad Essaouira](/en/activities/quad-essaouira).",
        "Browse the [gallery](/en/gallery), then [contact us](/en/contact) for a tailor-made program.",
        "## Frequently asked questions",
      ],
    },
    faq: [
      {
        question: {
          fr: "Peut-on privatiser une balade à cheval ?",
          en: "Can we privatize a horse ride?",
        },
        answer: {
          fr: "Oui, formule privée disponible sur notre page tarifs et activité cheval.",
          en: "Yes, private option on our prices and horse activity pages.",
        },
      },
    ],
    seo: {
      description: {
        fr: "Meilleures activités couple à Essaouira : cheval sunset, dromadaire, art. Idées romantiques et réservation.",
        en: "Best couple activities in Essaouira: sunset horse, camel, art. Romantic ideas and booking.",
      },
      keywords: {
        fr: ["activités couple essaouira", "romantique essaouira", "balade cheval couple"],
        en: ["couple activities essaouira", "romantic experiences essaouira", "essaouira for couples"],
      },
    },
  },
  {
    slug: {
      fr: "que-emmener-balade-cheval-maroc",
      en: "what-to-pack-horse-riding-morocco",
    },
    title: {
      fr: "Que emporter pour une balade à cheval au Maroc ?",
      en: "What To Pack For Horse Riding in Morocco",
    },
    excerpt: {
      fr: "Chaussures, couches, protection solaire : la checklist locale pour galoper confortablement à Essaouira toute l'année.",
      en: "Shoes, layers, sun protection: the local checklist to ride comfortably in Essaouira year-round.",
    },
    cover: IMG.horseRiding,
    coverAlt: {
      fr: "Préparation pour une balade à cheval",
      en: "Preparing for a horse ride",
    },
    category: { fr: "Conseils", en: "Tips" },
    publishedAt: "2026-02-20",
    readingMinutes: 7,
    author: AUTHOR,
    body: {
      fr: [
        "Une balade à cheval à Essaouira se prépare en dix minutes — si vous avez les bons éléments. Voici ce que nos guides recommandent avant chaque départ depuis Diabat.",
        "## Chaussures fermées obligatoires",
        "Baskets ou boots avec petite bride. Pas de sandales, pas de tongs. Le sable peut être humide et frais.",
        "## Pantalon long & couches",
        "Jean ou pantalon souple. Le vent atlantique change vite : t-shirt + veste légère ou coupe-vent, même en été.",
        "## Protection solaire",
        "Crème SPF 50, lunettes, casquette sous le casque (nous fournissons le casque). La réflexion sur le sable intensifie les UV.",
        "## Téléphone & photo",
        "Pochette étanche recommandée. Nos guides connaissent les meilleurs angles pour vos photos sunset.",
        "## Ce que nous fournissons",
        "Casque, briefing sécurité, eau. Pour réserver : [activité cheval](/fr/activities/balade-a-cheval-essaouira) ou [booking](/fr/booking).",
        "## Questions fréquentes",
      ],
      en: [
        "A horse ride in Essaouira takes ten minutes to prepare — if you have the right items. Here's what our guides recommend before every departure from Diabat.",
        "## Closed shoes required",
        "Sneakers or boots with a small heel. No sandals, no flip-flops. Sand can be wet and cool.",
        "## Long pants & layers",
        "Jeans or flexible trousers. Atlantic wind shifts fast: t-shirt + light jacket or windbreaker, even in summer.",
        "## Sun protection",
        "SPF 50, sunglasses, cap under the helmet (we provide helmets). Sand reflection intensifies UV.",
        "## Phone & photos",
        "Waterproof pouch recommended. Our guides know the best angles for sunset shots.",
        "## What we provide",
        "Helmet, safety briefing, water. To book: [horse activity](/en/activities/horse-riding-essaouira) or [booking](/en/booking).",
        "## Frequently asked questions",
      ],
    },
    faq: [
      {
        question: {
          fr: "Puis-je porter un short ?",
          en: "Can I wear shorts?",
        },
        answer: {
          fr: "Déconseillé : frottement et vent. Un pantalon léger est préférable.",
          en: "Not recommended: chafing and wind. Light trousers are better.",
        },
      },
    ],
    seo: {
      description: {
        fr: "Que emporter pour une balade à cheval au Maroc ? Checklist Essaouira : tenue, sécurité, saisons. Conseils locaux.",
        en: "What to pack for horse riding in Morocco? Essaouira checklist: clothing, safety, seasons. Local tips.",
      },
      keywords: {
        fr: ["équipement balade cheval", "préparer balade cheval maroc", "horse riding essaouira conseils"],
        en: ["what to wear horse riding morocco", "horse riding packing list", "essaouira horse tips"],
      },
    },
  },
  {
    slug: {
      fr: "meilleure-periode-visiter-essaouira-activites",
      en: "best-time-year-visit-essaouira-activities",
    },
    title: {
      fr: "Meilleure période de l'année pour visiter Essaouira (par activité)",
      en: "Best Time of Year To Visit Essaouira (By Activity)",
    },
    excerpt: {
      fr: "Cheval, quad, surf, dromadaire : calendrier mois par mois pour choisir la saison idéale selon votre passion.",
      en: "Horse, quad, surf, camel: month-by-month calendar to pick the ideal season for your passion.",
    },
    cover: IMG.bestTime,
    coverAlt: {
      fr: "Essaouira sous la lumière dorée",
      en: "Essaouira in golden light",
    },
    category: { fr: "Conseils", en: "Tips" },
    publishedAt: "2026-03-01",
    readingMinutes: 9,
    author: AUTHOR,
    body: {
      fr: [
        "Essaouira se visite toute l'année — mais chaque activité a sa saison d'or. Ce guide complète nos conseils généraux avec un focus **activités** : cheval, quad, surf et famille.",
        "## Printemps (mars–mai) — la saison reine",
        "Lumière douce, vent modéré. Parfait pour [balade à cheval](/fr/activities/balade-a-cheval-essaouira) et [dromadaire](/fr/activities/balade-dromadaire-essaouira). Réservez les sunsets à l'avance.",
        "## Été (juin–août)",
        "Affluence mais fraîcheur grâce au vent. Quad le matin ; cheval en fin de journée. **Surf Essaouira** et kitesurf à Sidi Kaouki au top.",
        "## Automne (sept–nov)",
        "Notre favori : ciel clair, mer encore chaude, foule raisonnable. Idéal pour combinés aventure + médina.",
        "## Hiver (déc–fév)",
        "Vents plus forts, prix doux, authenticité. Art-thérapie et balades courtes recommandées.",
        "Consultez le [blog](/fr/blog) et nos [tarifs](/fr/prices) pour planifier.",
        "## Questions fréquentes",
      ],
      en: [
        "Essaouira works year-round — but each activity has a golden season. This guide adds an **activities** focus: horse, quad, surf and family.",
        "## Spring (Mar–May) — peak season",
        "Soft light, moderate wind. Perfect for [horse riding](/en/activities/horse-riding-essaouira) and [camel](/en/activities/camel-ride-essaouira). Book sunsets ahead.",
        "## Summer (Jun–Aug)",
        "Crowds but cool thanks to wind. Quad in the morning; horse late day. **Surf Essaouira** and kitesurf at Sidi Kaouki peak.",
        "## Autumn (Sep–Nov)",
        "Our favorite: clear skies, warm sea, reasonable crowds. Ideal for adventure + medina combos.",
        "## Winter (Dec–Feb)",
        "Stronger winds, softer prices, authenticity. Art therapy and shorter rides recommended.",
        "See the [blog](/en/blog) and our [prices](/en/prices) to plan.",
        "## Frequently asked questions",
      ],
    },
    faq: [
      {
        question: {
          fr: "Quand éviter le vent ?",
          en: "When to avoid wind?",
        },
        answer: {
          fr: "Janvier–février peut être très venteux. Les activités restent possibles avec briefing adapté.",
          en: "January–February can be very windy. Activities remain possible with adapted briefings.",
        },
      },
    ],
    seo: {
      description: {
        fr: "Meilleure période pour visiter Essaouira : calendrier cheval, quad, surf par saison. Guide activités 2026.",
        en: "Best time to visit Essaouira: horse, quad, surf calendar by season. 2026 activity guide.",
      },
      keywords: {
        fr: ["meilleure saison essaouira", "quand partir essaouira", "météo essaouira activités"],
        en: ["best time visit essaouira", "essaouira weather activities", "essaouira season guide"],
      },
    },
  },
  {
    slug: {
      fr: "plages-secretes-autour-essaouira",
      en: "hidden-beaches-around-essaouira",
    },
    title: {
      fr: "Les plus belles plages secrètes autour d'Essaouira",
      en: "Top Hidden Beaches Around Essaouira",
    },
    excerpt: {
      fr: "Au-delà de la plage urbaine : Diabat, Sidi Kaouki, Cap Sim — criques sauvages accessibles en cheval, quad ou voiture.",
      en: "Beyond the city beach: Diabat, Sidi Kaouki, Cap Sim — wild coves by horse, quad or car.",
    },
    cover: IMG.beachAdventures,
    coverAlt: {
      fr: "Plage sauvage près d'Essaouira",
      en: "Wild beach near Essaouira",
    },
    category: { fr: "Plage", en: "Beach" },
    publishedAt: "2026-03-10",
    readingMinutes: 8,
    author: AUTHOR,
    body: {
      fr: [
        "La plage devant la médina est belle — mais les vraies émotions sont à quelques minutes. Voici nos plages préférées pour une journée **activités plage Essaouira**.",
        "## Diabat — la star discrète",
        "Village bohème, ruines de palace, plage infinie. Départ de nos [balades à cheval](/fr/activities/balade-a-cheval-essaouira).",
        "## Sidi Kaouki — surf & liberté",
        "20 minutes au sud. Vagues constantes, écoles de **surf Essaouira**, restaurants de poisson. Sunset spectaculaire.",
        "## Cap Sim — sauvage & minéral",
        "Dunes, falaises, grottes. Accessible en [quad](/fr/activities/quad-essaouira) ou 4x4. Peu de monde hors saison.",
        "## La côte nord vers Moulay",
        "Longues plages ventées, parfaites pour une promenade après la médina.",
        "Photos : [galerie](/fr/gallery). Réservation : [activités](/fr/activities).",
        "## Questions fréquentes",
      ],
      en: [
        "The beach in front of the medina is beautiful — but the real emotion is minutes away. Our favorite beaches for **Essaouira beach activities**.",
        "## Diabat — the discreet star",
        "Bohemian village, palace ruins, endless beach. Start of our [horse rides](/en/activities/horse-riding-essaouira).",
        "## Sidi Kaouki — surf & freedom",
        "20 minutes south. Constant waves, **surf Essaouira** schools, fish restaurants. Spectacular sunset.",
        "## Cap Sim — wild & mineral",
        "Dunes, cliffs, caves. Reachable by [quad](/en/activities/quad-essaouira) or 4x4. Few people off-season.",
        "## North coast toward Moulay",
        "Long windy beaches, perfect after the medina.",
        "Photos: [gallery](/en/gallery). Booking: [activities](/en/activities).",
        "## Frequently asked questions",
      ],
    },
    faq: [],
    seo: {
      description: {
        fr: "Plages secrètes autour d'Essaouira : Diabat, Sidi Kaouki, Cap Sim. Guide local et activités côtières.",
        en: "Hidden beaches around Essaouira: Diabat, Sidi Kaouki, Cap Sim. Local guide and coastal activities.",
      },
      keywords: {
        fr: ["plages essaouira", "plage cachée essaouira", "sidi kaouki plage", "diabat plage"],
        en: ["hidden beaches essaouira", "essaouira beaches", "diabat beach", "sidi kaouki beach"],
      },
    },
  },
  {
    slug: {
      fr: "surf-quad-cheval-combo-essaouira",
      en: "surf-quad-horse-riding-combo-essaouira",
    },
    title: {
      fr: "Surf, quad & cheval : le combo parfait à Essaouira",
      en: "Surf, Quad & Horse Riding: The Perfect Essaouira Combo",
    },
    excerpt: {
      fr: "Une journée, trois univers : vagues à Sidi Kaouki, dunes en quad, sunset à cheval sur Diabat — l'itinéraire signature.",
      en: "One day, three worlds: waves at Sidi Kaouki, dunes by quad, sunset on horseback in Diabat — the signature itinerary.",
    },
    cover: IMG.beachAdventures,
    coverAlt: {
      fr: "Surf et aventure à Essaouira",
      en: "Surf and adventure in Essaouira",
    },
    category: { fr: "Combo", en: "Combo" },
    publishedAt: "2026-03-18",
    readingMinutes: 9,
    author: AUTHOR,
    trending: true,
    body: {
      fr: [
        "Pourquoi choisir une seule activité quand Essaouira permet de tout enchaîner ? Voici notre **combo** préféré pour les voyageurs actifs — testé des dizaines de fois avec nos clients.",
        "## Matin : surf ou kitesurf à Sidi Kaouki",
        "Le vent se lève tôt. École locale, location board, session 2h. L'océan Atlantique ici est un terrain de jeu mondial pour le **surf Essaouira**.",
        "## Midi : pause médina & tajine",
        "Retour en ville, déjeuner sur un toit-terrasse. Récupération essentielle avant l'après-midi.",
        "## Après-midi : quad dans les dunes",
        "Notre [excursion quad](/fr/activities/quad-essaouira) : forêt d'arganiers, dunes, pistes avec vue océan. Adrénaline garantie.",
        "## Fin de journée : cheval au sunset",
        "Le moment magique. [Balade à cheval](/fr/activities/balade-a-cheval-essaouira) sur Diabat quand le ciel explose. Rien de plus cinématographique.",
        "Réservez le pack via [booking](/fr/booking) ou WhatsApp depuis notre [contact](/fr/contact).",
        "## Questions fréquentes",
      ],
      en: [
        "Why pick one activity when Essaouira lets you chain them all? Our favorite **combo** for active travelers — tested dozens of times with guests.",
        "## Morning: surf or kitesurf at Sidi Kaouki",
        "Wind picks up early. Local school, board rental, 2h session. Atlantic here is a global playground for **surf Essaouira**.",
        "## Midday: medina break & tajine",
        "Back to town, rooftop lunch. Essential recovery before afternoon.",
        "## Afternoon: quad in the dunes",
        "Our [quad tour](/en/activities/quad-essaouira): argan forest, dunes, ocean-view tracks. Guaranteed adrenaline.",
        "## Evening: horse at sunset",
        "The magic moment. [Horse riding](/en/activities/horse-riding-essaouira) on Diabat when the sky explodes. Nothing more cinematic.",
        "Book via [booking](/en/booking) or WhatsApp from [contact](/en/contact).",
        "## Frequently asked questions",
      ],
    },
    faq: [],
    seo: {
      description: {
        fr: "Combo surf, quad et cheval à Essaouira : itinéraire journée complète. Surf Sidi Kaouki, dunes, sunset Diabat.",
        en: "Surf, quad and horse combo in Essaouira: full-day itinerary. Sidi Kaouki surf, dunes, Diabat sunset.",
      },
      keywords: {
        fr: ["surf essaouira", "quad essaouira", "combo activités essaouira"],
        en: ["surf essaouira", "quad biking essaouira", "essaouira activity combo"],
      },
    },
  },
  {
    slug: {
      fr: "pourquoi-touristes-adorent-diabat-dunes",
      en: "why-tourists-love-diabat-atlantic-dunes",
    },
    title: {
      fr: "Pourquoi les voyageurs adorent Diabat et les dunes atlantiques",
      en: "Why Tourists Love Diabat & The Atlantic Dunes",
    },
    excerpt: {
      fr: "Entre médina et océan, Diabat concentre l'âme d'Essaouira : chevaux, sable doré, ruines et silence.",
      en: "Between medina and ocean, Diabat holds Essaouira's soul: horses, golden sand, ruins and silence.",
    },
    cover: IMG.hiddenGems,
    coverAlt: {
      fr: "Dunes et océan à Diabat",
      en: "Dunes and ocean at Diabat",
    },
    category: { fr: "Diabat", en: "Diabat" },
    publishedAt: "2026-04-02",
    readingMinutes: 8,
    author: AUTHOR,
    body: {
      fr: [
        "Diabat n'apparaît pas sur toutes les cartes postales — et c'est tant mieux. À quelques minutes d'Essaouira, ce village-plage attire ceux qui cherchent l'authenticité sans renoncer au confort.",
        "## Histoire & atmosphère",
        "Ruines du Palais de Bandia, cafés bohèmes, chevaux qui paissent près de l'eau. L'ambiance est celle d'un film des années 70.",
        "## Les dunes atlantiques",
        "Pas le Sahara — des dunes basses, mouvantes, face à l'océan. Parfaites pour [cheval](/fr/activities/balade-a-cheval-essaouira) et [dromadaire](/fr/activities/balade-dromadaire-essaouira).",
        "## Lumière de cinéma",
        "Les photographes internationaux viennent ici pour la même raison que nos clients : la qualité de la lumière au golden hour.",
        "## Comment visiter",
        "À pied depuis Essaouira (30 min), taxi, ou directement via nos activités avec transfert. Voir [galerie](/fr/gallery) et [réserver](/fr/booking).",
        "## Questions fréquentes",
      ],
      en: [
        "Diabat doesn't appear on every postcard — and that's fine. Minutes from Essaouira, this beach village draws those seeking authenticity without sacrificing comfort.",
        "## History & atmosphere",
        "Bandia Palace ruins, bohemian cafés, horses grazing near the water. The mood feels like a 1970s film.",
        "## Atlantic dunes",
        "Not the Sahara — low shifting dunes facing the ocean. Perfect for [horse](/en/activities/horse-riding-essaouira) and [camel](/en/activities/camel-ride-essaouira).",
        "## Cinematic light",
        "International photographers come for the same reason as our guests: golden-hour light quality.",
        "## How to visit",
        "Walk from Essaouira (30 min), taxi, or via our activities with transfer. See [gallery](/en/gallery) and [book](/en/booking).",
        "## Frequently asked questions",
      ],
    },
    faq: [],
    seo: {
      description: {
        fr: "Pourquoi Diabat séduit les touristes : dunes atlantiques, cheval, authenticité. Guide du village près d'Essaouira.",
        en: "Why tourists love Diabat: Atlantic dunes, horse riding, authenticity. Village guide near Essaouira.",
      },
      keywords: {
        fr: ["diabat essaouira", "dunes essaouira", "village diabat", "plage diabat"],
        en: ["diabat essaouira", "atlantic dunes morocco", "diabat beach horse"],
      },
    },
  },
  {
    slug: {
      fr: "guide-complet-balade-cheval-plage-maroc",
      en: "complete-guide-beach-horse-riding-morocco",
    },
    title: {
      fr: "Guide complet de la balade à cheval sur la plage au Maroc",
      en: "Complete Guide To Beach Horse Riding in Morocco",
    },
    excerpt: {
      fr: "Du Rif à l'Atlantique : pourquoi Essaouira est la capitale du beach horse riding — sécurité, éthique, saisons et réservation.",
      en: "From the Rif to the Atlantic: why Essaouira is beach horse riding capital — safety, ethics, seasons and booking.",
    },
    cover: IMG.horseRiding,
    coverAlt: {
      fr: "Galop sur la plage marocaine",
      en: "Gallop on Moroccan beach",
    },
    category: { fr: "Cheval", en: "Horse Riding" },
    publishedAt: "2026-04-15",
    readingMinutes: 11,
    author: AUTHOR,
    body: {
      fr: [
        "Le Maroc offre des paysages à cheval parmi les plus spectaculaires au monde. Mais toutes les plages ne se valent pas — et toutes les écuries non plus. Ce guide complet vous aide à choisir une **balade à cheval sur la plage** responsable et inoubliable.",
        "## Pourquoi l'Atlantique marocain ?",
        "Sable large, marées prévisibles, vent modéré : la côte entre Essaouira et Agadir est idéale. Essaouira reste notre base pour la qualité de vie et la lumière.",
        "## Essaouira vs autres destinations",
        "Marrakech (palmeraie) : oasis, pas océan. Agadir : plus resort. **Essaouira horse riding** combine médina UNESCO, plage sauvage et éthique animale.",
        "## Sécurité & bien-être animal",
        "Choisissez des opérateurs avec casques, briefing, chevaux reposés. Nous limitons le nombre de sorties par jour.",
        "## Formules : 1h, 2h, sunset, trek",
        "Découvrez nos forfaits sur [balade à cheval Essaouira](/fr/activities/balade-a-cheval-essaouira) — dont Shooting & Trek premium.",
        "## Réserver",
        "[Tarifs](/fr/prices), [booking en ligne](/fr/booking), [blog](/fr/blog) pour aller plus loin.",
        "## Questions fréquentes",
      ],
      en: [
        "Morocco offers some of the world's most spectacular riding landscapes. But not all beaches — or stables — are equal. This complete guide helps you choose a responsible, unforgettable **beach horse riding** experience.",
        "## Why the Moroccan Atlantic?",
        "Wide sand, predictable tides, moderate wind: the coast between Essaouira and Agadir is ideal. Essaouira remains our base for quality of life and light.",
        "## Essaouira vs other destinations",
        "Marrakech (palmeraie): oasis, not ocean. Agadir: more resort. **Essaouira horse riding** combines UNESCO medina, wild beach and animal ethics.",
        "## Safety & animal welfare",
        "Choose operators with helmets, briefings, rested horses. We cap daily outings.",
        "## Options: 1h, 2h, sunset, trek",
        "See packages on [horse riding Essaouira](/en/activities/horse-riding-essaouira) — including premium Shooting & Trek.",
        "## Book",
        "[Prices](/en/prices), [online booking](/en/booking), [blog](/en/blog) for more.",
        "## Frequently asked questions",
      ],
    },
    faq: [
      {
        question: {
          fr: "La balade à cheval sur la plage est-elle éthique ?",
          en: "Is beach horse riding ethical?",
        },
        answer: {
          fr: "Avec un opérateur sérieux : oui. Nous respectons repos, hydratation et charge maximale par cheval.",
          en: "With a serious operator: yes. We respect rest, hydration and maximum load per horse.",
        },
      },
    ],
    seo: {
      description: {
        fr: "Guide complet balade à cheval plage Maroc : Essaouira, sécurité, saisons, réservation. Beach horse riding Morocco.",
        en: "Complete guide to beach horse riding in Morocco: Essaouira, safety, seasons, booking.",
      },
      keywords: {
        fr: [
          "balade cheval plage maroc",
          "horse riding morocco beach",
          "équitation plage essaouira",
        ],
        en: [
          "beach horse riding morocco",
          "horse riding morocco",
          "essaouira horseback riding guide",
        ],
      },
    },
  },
];
