import { SITE_CONFIG, generateCanonicalUrl } from "./seo";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/logo.svg`,
    sameAs: ["https://twitter.com/IntraoTech"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_CONFIG.domain}/contacts`,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    description: SITE_CONFIG.defaultDescription,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: generateCanonicalUrl(item.url),
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: generateCanonicalUrl(service.url),
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
  };
}
