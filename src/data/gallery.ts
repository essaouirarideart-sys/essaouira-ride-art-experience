import { activities } from "./activities";

export interface GalleryItem {
  src: string;
  alt: { fr: string; en: string };
  category: "horse" | "quad" | "camel" | "art" | "essaouira";
}

/**
 * Direct Cloudinary URLs for gallery
 * 
 * TO REPLACE IMAGES:
 * 1. Upload your images to Cloudinary
 * 2. Copy the full Cloudinary URL
 * 3. Paste directly into the image fields below
 * 
 * Example URL format:
 * https://res.cloudinary.com/your-cloud-name/image/upload/q_auto/f_auto/v1234567890/your-image-id.jpg
 */

// Ambient/Essaouira gallery placeholder URLs
const AMBIENT_PLACEHOLDERS = {
  sunset: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117111/5_t6sbn9.png",
  medina: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117111/6_h0xqnq.png",
  dunes: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117111/7_hmejjy.png",
  palms: "https://res.cloudinary.com/drszajirv/image/upload/q_auto/f_auto/v1779117110/2_o85ghn.png",
};

const ambient: GalleryItem[] = [
  {
    src: AMBIENT_PLACEHOLDERS.sunset,
    alt: {
      fr: "Coucher de soleil sur l'océan d'Essaouira",
      en: "Sunset over the Essaouira ocean",
    },
    category: "essaouira",
  },
  {
    src: AMBIENT_PLACEHOLDERS.medina,
    alt: {
      fr: "Ruelles bleues de la médina d'Essaouira",
      en: "Blue alleys of Essaouira's medina",
    },
    category: "essaouira",
  },
  {
    src: AMBIENT_PLACEHOLDERS.dunes,
    alt: { fr: "Dunes dorées atlantiques", en: "Atlantic golden dunes" },
    category: "essaouira",
  },
  {
    src: AMBIENT_PLACEHOLDERS.palms,
    alt: { fr: "Palmiers et coucher de soleil", en: "Palms and sunset" },
    category: "essaouira",
  },
];

function categoryFromIcon(
  icon: "horse" | "quad" | "camel" | "palette"
): GalleryItem["category"] {
  if (icon === "palette") return "art";
  return icon;
}

export const galleryItems: GalleryItem[] = [
  ...activities.flatMap((a) =>
    a.gallery.map((g) => ({
      src: g.src,
      alt: g.alt,
      category: categoryFromIcon(a.icon),
    }))
  ),
  ...ambient,
];

export const galleryCategories: Array<{
  key: GalleryItem["category"] | "all";
  label: { fr: string; en: string };
}> = [
  { key: "all", label: { fr: "Tout", en: "All" } },
  { key: "horse", label: { fr: "Cheval", en: "Horse" } },
  { key: "quad", label: { fr: "Quad", en: "Quad" } },
  { key: "camel", label: { fr: "Dromadaire", en: "Camel" } },
  { key: "art", label: { fr: "Art", en: "Art" } },
  // { key: "essaouira", label: { fr: "Essaouira", en: "Essaouira" } },
];
