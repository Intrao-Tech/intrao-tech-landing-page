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
    logo: `${SITE_CONFIG.domain}/logo-short.jpg`,
    slogan: "Your dev team, without the payroll",
    foundingDate: "2023",
    founders: [
      {
        "@type": "Person",
        name: "Anton Muliavchyk",
        jobTitle: "Co-Founder & CEO",
        sameAs: "https://www.linkedin.com/in/muliavchyk/",
      },
      {
        "@type": "Person",
        name: "Ihor Muliar",
        jobTitle: "Co-Founder & CPO",
        sameAs: "https://www.linkedin.com/in/ihor-muliar/",
      },
      {
        "@type": "Person",
        name: "Artem But",
        jobTitle: "Co-Founder & CTO",
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
        telephone: "+44-7862-010693",
        url: `${SITE_CONFIG.domain}/contacts`,
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+44-7862-010693",
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

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    image: `${SITE_CONFIG.domain}/logo-full.jpg`,
    logo: `${SITE_CONFIG.domain}/logo-short.jpg`,
    description: SITE_CONFIG.defaultDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "124 City Road",
      addressLocality: "London",
      postalCode: "EC1V 2NX",
      addressCountry: "GB",
    },
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    telephone: "+44-7862-010693",
    email: "info@intrao.tech",
    sameAs: [
      "https://www.linkedin.com/company/intrao-tech",
      "https://x.com/Intrao_Tech",
      "https://www.instagram.com/intrao.tech/",
      "https://www.threads.com/@intrao.tech",
      "https://www.behance.net/intraotech",
      "https://dribbble.com/intrao-tech",
    ],
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebPageSchema(options: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.name,
    description: options.description,
    url: generateCanonicalUrl(options.url),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable='summary']", "[data-speakable='faq']"],
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
  };
}

export interface HowToStep {
  name: string;
  text: string;
}

export function generateHowToSchema(options: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: options.name,
    description: options.description,
    step: options.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generatePersonSchema(options: {
  name: string;
  jobTitle: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: options.name,
    jobTitle: options.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    ...(options.sameAs && { sameAs: options.sameAs }),
  };
}

export function generateArticleSchema(options: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: { name: string; jobTitle: string; sameAs?: string[] };
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    url: generateCanonicalUrl(options.url),
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": generateCanonicalUrl(options.url),
    },
    author: {
      "@type": "Person",
      name: options.author.name,
      jobTitle: options.author.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.domain,
      },
      ...(options.author.sameAs && { sameAs: options.author.sameAs }),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.domain}/logo-short.jpg`,
      },
    },
    ...(options.image && {
      image: {
        "@type": "ImageObject",
        url: options.image.startsWith("http")
          ? options.image
          : `${SITE_CONFIG.domain}${options.image}`,
      },
    }),
  };
}
