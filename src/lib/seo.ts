export const SITE_CONFIG = {
  name: "Intrao Tech",
  domain: "https://intrao.tech",
  defaultTitle: "Intrao Tech | Founder-Led Dev & Design Studio for Startups",
  defaultDescription:
    "Your dev team, without the payroll. Founder-led studio building MVPs, apps, and websites for high-velocity startups. One partner, no handoffs.",
  twitterHandle: "@Intrao_Tech",
  ogImage: "/logo-full.jpg",
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
