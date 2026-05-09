/**
 * Cloudinary Image Helper
 * 
 * This utility provides a centralized way to manage Cloudinary image URLs.
 * To replace images later, simply update the public IDs in the data files.
 * 
 * Usage:
 * - For simple URLs: cloudinaryUrl("folder/image-name")
 * - With transformations: cloudinaryUrl("folder/image-name", { width: 800, quality: 80 })
 */

// Your Cloudinary cloud name - UPDATE THIS with your actual cloud name
export const CLOUDINARY_CLOUD_NAME = "essaouira-ride";

// Base URL for Cloudinary
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  quality?: number | "auto";
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?: "fill" | "fit" | "scale" | "crop" | "thumb";
  gravity?: "auto" | "face" | "center" | "north" | "south" | "east" | "west";
  blur?: number;
  effect?: string;
}

/**
 * Build a Cloudinary URL with optional transformations
 * 
 * @param publicId - The public ID of the image (e.g., "activities/horse-riding-hero")
 * @param options - Optional transformation options
 * @returns Full Cloudinary URL
 * 
 * @example
 * // Simple usage
 * cloudinaryUrl("activities/horse-hero")
 * // => https://res.cloudinary.com/essaouira-ride/image/upload/activities/horse-hero
 * 
 * @example
 * // With transformations
 * cloudinaryUrl("activities/horse-hero", { width: 1200, quality: "auto", format: "auto" })
 * // => https://res.cloudinary.com/essaouira-ride/image/upload/w_1200,q_auto,f_auto/activities/horse-hero
 */
export function cloudinaryUrl(
  publicId: string,
  options?: CloudinaryTransformOptions
): string {
  if (!options || Object.keys(options).length === 0) {
    return `${CLOUDINARY_BASE}/${publicId}`;
  }

  const transforms: string[] = [];

  if (options.width) transforms.push(`w_${options.width}`);
  if (options.height) transforms.push(`h_${options.height}`);
  if (options.quality) transforms.push(`q_${options.quality}`);
  if (options.format) transforms.push(`f_${options.format}`);
  if (options.crop) transforms.push(`c_${options.crop}`);
  if (options.gravity) transforms.push(`g_${options.gravity}`);
  if (options.blur) transforms.push(`e_blur:${options.blur}`);
  if (options.effect) transforms.push(`e_${options.effect}`);

  const transformString = transforms.join(",");
  return `${CLOUDINARY_BASE}/${transformString}/${publicId}`;
}

/**
 * Build optimized Cloudinary URL for hero images (large, high quality)
 */
export function heroImageUrl(publicId: string): string {
  return cloudinaryUrl(publicId, {
    width: 2400,
    quality: "auto",
    format: "auto",
    crop: "fill",
  });
}

/**
 * Build optimized Cloudinary URL for gallery images (medium size)
 */
export function galleryImageUrl(publicId: string): string {
  return cloudinaryUrl(publicId, {
    width: 1200,
    quality: "auto",
    format: "auto",
  });
}

/**
 * Build optimized Cloudinary URL for thumbnails (small, fast loading)
 */
export function thumbnailUrl(publicId: string): string {
  return cloudinaryUrl(publicId, {
    width: 400,
    height: 400,
    quality: "auto",
    format: "auto",
    crop: "fill",
    gravity: "auto",
  });
}

/**
 * Build blur placeholder URL for loading states
 */
export function blurPlaceholderUrl(publicId: string): string {
  return cloudinaryUrl(publicId, {
    width: 20,
    quality: 30,
    format: "auto",
    blur: 1000,
  });
}

/**
 * Placeholder images - use these until real images are uploaded
 * These use Cloudinary's demo account with sample images
 */
export const PLACEHOLDER_IMAGES = {
  // Hero images
  heroSunset: "https://res.cloudinary.com/demo/image/upload/w_2400,q_auto,f_auto/sample",
  heroBeach: "https://res.cloudinary.com/demo/image/upload/w_2400,q_auto,f_auto/samples/landscapes/beach-boat",
  heroNature: "https://res.cloudinary.com/demo/image/upload/w_2400,q_auto,f_auto/samples/landscapes/nature-mountains",
  
  // Activity placeholders
  horse: "https://res.cloudinary.com/demo/image/upload/w_1200,q_auto,f_auto/samples/animals/three-dogs",
  quad: "https://res.cloudinary.com/demo/image/upload/w_1200,q_auto,f_auto/samples/landscapes/landscape-panorama",
  camel: "https://res.cloudinary.com/demo/image/upload/w_1200,q_auto,f_auto/samples/animals/cat",
  art: "https://res.cloudinary.com/demo/image/upload/w_1200,q_auto,f_auto/samples/food/spices",
  
  // Gallery placeholders
  gallery1: "https://res.cloudinary.com/demo/image/upload/w_1200,q_auto,f_auto/samples/landscapes/beach-boat",
  gallery2: "https://res.cloudinary.com/demo/image/upload/w_1200,q_auto,f_auto/samples/landscapes/nature-mountains",
  gallery3: "https://res.cloudinary.com/demo/image/upload/w_1200,q_auto,f_auto/samples/landscapes/landscape-panorama",
};

/**
 * IMAGE REPLACEMENT GUIDE
 * =======================
 * 
 * To replace placeholder images with your real Cloudinary images:
 * 
 * 1. Upload your images to Cloudinary dashboard
 * 2. Note the "public ID" of each uploaded image (e.g., "essaouira/horse-sunset-1")
 * 3. Update the image URLs in the data files:
 *    - src/data/activities.ts
 *    - src/data/gallery.ts
 *    - src/data/blog.ts
 * 
 * Example replacement in activities.ts:
 * 
 * BEFORE (placeholder):
 *   heroImage: "https://res.cloudinary.com/demo/image/upload/sample"
 * 
 * AFTER (your real image):
 *   heroImage: cloudinaryUrl("essaouira/horse-riding-hero", { width: 2400, quality: "auto", format: "auto" })
 * 
 * Or simply use the full URL:
 *   heroImage: "https://res.cloudinary.com/YOUR-CLOUD-NAME/image/upload/w_2400,q_auto,f_auto/essaouira/horse-riding-hero"
 */
