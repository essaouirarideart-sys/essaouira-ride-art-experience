export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  origin: { fr: string; en: string };
  rating: number;
  quote: { fr: string; en: string };
  activity: { fr: string; en: string };
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Camille & Théo",
    origin: { fr: "Lyon, France", en: "Lyon, France" },
    rating: 5,
    quote: {
      fr: "Une balade à cheval au coucher du soleil absolument inoubliable. Les guides étaient incroyables, les chevaux parfaits. Le moment fort de notre voyage au Maroc.",
      en: "An absolutely unforgettable sunset horse ride. The guides were amazing, the horses perfect. The highlight of our trip to Morocco.",
    },
    activity: { fr: "Balade à cheval", en: "Horse ride" },
    date: "2024-03",
  },
  {
    id: "t2",
    name: "Sarah Mitchell",
    origin: { fr: "Londres, UK", en: "London, UK" },
    rating: 5,
    quote: {
      fr: "Le quad dans les dunes était fantastique, mais ce qui nous a vraiment surpris, c'est l'atelier d'art-thérapie après. On en parle encore deux mois plus tard.",
      en: "The quad ride through the dunes was fantastic, but what really surprised us was the art therapy workshop after. We're still talking about it two months later.",
    },
    activity: { fr: "Quad + Art", en: "Quad + Art" },
    date: "2024-02",
  },
  {
    id: "t3",
    name: "Famille Bensaïd",
    origin: { fr: "Casablanca, Maroc", en: "Casablanca, Morocco" },
    rating: 5,
    quote: {
      fr: "Mes enfants ont adoré les dromadaires. Encadrement professionnel, dromadaires bien soignés, et les photos sont magnifiques. Je recommande à toutes les familles.",
      en: "My kids loved the camels. Professional supervision, well-cared camels, and the photos are stunning. I recommend to all families.",
    },
    activity: { fr: "Dromadaire", en: "Camel" },
    date: "2024-01",
  },
  {
    id: "t4",
    name: "Markus & Lena",
    origin: { fr: "Berlin, Allemagne", en: "Berlin, Germany" },
    rating: 5,
    quote: {
      fr: "Premium, authentique, professionnel. Loin des attrape-touristes. Une équipe locale qui aime vraiment son métier. À refaire.",
      en: "Premium, authentic, professional. Far from tourist traps. A local team that truly loves what they do. Will do again.",
    },
    activity: { fr: "Combo Cheval + Art", en: "Horse + Art combo" },
    date: "2024-04",
  },
  {
    id: "t5",
    name: "Emma & James Wilson",
    origin: { fr: "Sydney, Australie", en: "Sydney, Australia" },
    rating: 5,
    quote: {
      fr: "Nous avons fait le tour du monde et cette balade au coucher du soleil à Essaouira reste dans notre top 3. Magique, tout simplement.",
      en: "We've traveled the world and this sunset ride in Essaouira remains in our top 3. Magical, simply magical.",
    },
    activity: { fr: "Balade à cheval", en: "Horse ride" },
    date: "2024-03",
  },
  {
    id: "t6",
    name: "Pierre Dubois",
    origin: { fr: "Paris, France", en: "Paris, France" },
    rating: 5,
    quote: {
      fr: "J'ai offert l'expérience quad + art à ma femme pour notre anniversaire. Elle n'arrête pas d'en parler. Merci pour ce souvenir inoubliable.",
      en: "I gifted the quad + art experience to my wife for our anniversary. She can't stop talking about it. Thank you for this unforgettable memory.",
    },
    activity: { fr: "Quad + Art", en: "Quad + Art" },
    date: "2024-02",
  },
  {
    id: "t7",
    name: "Sofia Rodriguez",
    origin: { fr: "Madrid, Espagne", en: "Madrid, Spain" },
    rating: 5,
    quote: {
      fr: "Les couleurs du coucher de soleil, le bruit des vagues, le galop sur la plage... C'était comme dans un film. Gracias!",
      en: "The sunset colors, the sound of the waves, galloping on the beach... It was like being in a movie. Gracias!",
    },
    activity: { fr: "Balade à cheval", en: "Horse ride" },
    date: "2024-04",
  },
  {
    id: "t8",
    name: "Hans & Greta Müller",
    origin: { fr: "Zurich, Suisse", en: "Zurich, Switzerland" },
    rating: 5,
    quote: {
      fr: "Organisation parfaite du début à la fin. Le transfert depuis l'hôtel, les équipements, les guides... Tout était impeccable.",
      en: "Perfect organization from start to finish. The hotel transfer, the equipment, the guides... Everything was impeccable.",
    },
    activity: { fr: "Quad", en: "Quad" },
    date: "2024-01",
  },
];

export const happyClientsCount = 2500;
