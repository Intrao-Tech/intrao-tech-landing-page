export const SITE_CONFIG = {
  name: "Intrao Tech",
  domain: "https://intrao.tech",
  defaultTitle: "Intrao Tech | Web Development Agency",
  defaultDescription:
    "Intrao Tech is a web development agency helping businesses launch, scale, and succeed faster with custom web development and UI/UX design.",
  twitterHandle: "@IntraoTech",
  ogImage: "/og-image.png",
} as const;

export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.domain}${cleanPath}`;
}

export function generateOgImageUrl(imagePath?: string): string {
  const image = imagePath || SITE_CONFIG.ogImage;
  if (image.startsWith("http")) {
    return image;
  }
  return `${SITE_CONFIG.domain}${image.startsWith("/") ? image : `/${image}`}`;
}

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}
