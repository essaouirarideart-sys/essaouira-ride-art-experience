export const site = {
  name: "Essaouira Ride & Art Experience",
  shortName: "Essaouira Ride & Art",
  url: "https://essaouira-ride-art.com",
  defaultOgImage: "/og/default.jpg",
  contact: {
    phone: "+212624852856",
    phoneDisplay: "+212 624 852 856",
    whatsapp: "212624852856",
    email: "essaouira.ride.art@proton.me",
    address: {
      street: "Diabat",
      city: "Essaouira",
      country: { fr: "Maroc", en: "Morocco" },
      lat: 31.4745,
      lng: -9.7596,
    },
  },
  social: {
    instagram: {
      handle: "essaouira.ride.art",
      url: "https://instagram.com/essaouira.ride.art",
    },
    facebook: {
      handle: "Essaouira Ride & Art Experience",
      url: "https://facebook.com/essaouirarideart",
    },
  },
  hours: { fr: "7j/7 · 8h - 20h", en: "7 days/week · 8am - 8pm" },
} as const;

export type SiteConfig = typeof site;
