/**
 * Cloudinary URL helpers for Essaouira Ride & Art.
 * Live cloud: drszajirv. Transformations are inserted once and never
 * double-applied. Non-Cloudinary and signed/private URLs are left unchanged.
 */

export const CLOUDINARY_CLOUD_NAME = "drszajirv";

const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;
const UPLOAD_MARKER = "/image/upload/";

export const IMAGE_WIDTH = {
  hero: 1600,
  pageHero: 1200,
  card: 800,
  thumb: 400,
  gallery: 800,
  lightbox: 1400,
  featured: 1000,
} as const;

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  quality?: number | "auto";
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?: "limit" | "fill" | "fit" | "scale" | "crop" | "thumb";
  gravity?: "auto" | "face" | "center" | "north" | "south" | "east" | "west";
  blur?: number;
  effect?: string;
}

function isTransformSegment(segment: string): boolean {
  return (
    segment.includes(",") ||
    /^(w_|h_|c_|q_|f_|g_|e_|dpr_|fl_|ar_|bo_|r_|b_|o_|a_|u_|t_|x_|y_)/.test(
      segment
    )
  );
}

function hasWidthTransform(transforms: string[]): boolean {
  return transforms.some((segment) => /(^|,)w_\d+/.test(segment));
}

/**
 * Insert `w_{width},c_limit,q_auto,f_auto` into an unsigned Cloudinary
 * delivery URL. Leaves the public ID, version, and non-Cloudinary URLs intact.
 */
export function optimizeCloudinaryUrl(src: string, width: number): string {
  if (!src.includes("res.cloudinary.com/") || !src.includes(UPLOAD_MARKER)) {
    return src;
  }
  if (
    src.includes("/image/authenticated/") ||
    src.includes("/image/private/") ||
    src.includes("/s--")
  ) {
    return src;
  }

  const markerIndex = src.indexOf(UPLOAD_MARKER);
  const after = src.slice(markerIndex + UPLOAD_MARKER.length);
  const segments = after.split("/");

  const transformSegments: string[] = [];
  let restStart = 0;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (/^v\d+$/.test(segment)) {
      restStart = i;
      break;
    }
    if (isTransformSegment(segment)) {
      transformSegments.push(segment);
      restStart = i + 1;
      continue;
    }
    restStart = i;
    break;
  }

  if (hasWidthTransform(transformSegments)) {
    return src;
  }

  const rest = segments.slice(restStart).join("/");
  const joined = transformSegments.join(",");
  const prefix: string[] = [`w_${Math.round(width)}`];
  if (!/(^|,)c_/.test(joined)) prefix.push("c_limit");
  if (!/(^|,)q_/.test(joined)) prefix.push("q_auto");
  if (!/(^|,)f_/.test(joined)) prefix.push("f_auto");

  const merged = [...prefix, ...transformSegments].join(",");
  return `${src.slice(0, markerIndex + UPLOAD_MARKER.length)}${merged}/${rest}`;
}

/**
 * Build a Cloudinary URL from a public ID with optional transformations.
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
  if (options.crop) transforms.push(`c_${options.crop}`);
  if (options.gravity) transforms.push(`g_${options.gravity}`);
  if (options.quality) transforms.push(`q_${options.quality}`);
  if (options.format) transforms.push(`f_${options.format}`);
  if (options.blur) transforms.push(`e_blur:${options.blur}`);
  if (options.effect) transforms.push(`e_${options.effect}`);

  return `${CLOUDINARY_BASE}/${transforms.join(",")}/${publicId}`;
}

export function heroImageUrl(publicId: string): string {
  return cloudinaryUrl(publicId, {
    width: IMAGE_WIDTH.hero,
    crop: "limit",
    quality: "auto",
    format: "auto",
  });
}

export function galleryImageUrl(publicId: string): string {
  return cloudinaryUrl(publicId, {
    width: IMAGE_WIDTH.gallery,
    crop: "limit",
    quality: "auto",
    format: "auto",
  });
}

export function thumbnailUrl(publicId: string): string {
  return cloudinaryUrl(publicId, {
    width: IMAGE_WIDTH.thumb,
    crop: "limit",
    quality: "auto",
    format: "auto",
  });
}

export function blurPlaceholderUrl(publicId: string): string {
  return cloudinaryUrl(publicId, {
    width: 20,
    quality: 30,
    format: "auto",
    blur: 1000,
  });
}
