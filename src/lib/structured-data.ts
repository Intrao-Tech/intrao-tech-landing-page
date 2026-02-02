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
    slogan: "Your dev team, without the payroll",
    foundingDate: "2023",
    founders: [
      {
        "@type": "Person",
        name: "Anton Muliavchyk",
        jobTitle: "Co-Founder & CEO",
      },
      {
        "@type": "Person",
        name: "Ihor Muliar",
        jobTitle: "Co-Founder & CPO",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "European Union" },
      { "@type": "Country", name: "United States" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/intrao-tech",
      "https://x.com/Intrao_Tech",
      "https://www.instagram.com/intrao.tech/",
      "https://www.threads.com/@intrao.tech",
      "https://www.behance.net/intraotech",
      "https://dribbble.com/intrao-tech",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: `${SITE_CONFIG.domain}/contacts`,
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@intrao.tech",
      },
    ],
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
