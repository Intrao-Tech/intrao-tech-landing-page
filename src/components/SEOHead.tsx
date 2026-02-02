import { Helmet } from "react-helmet-async";
import {
  SITE_CONFIG,
  generateCanonicalUrl,
  generateOgImageUrl,
} from "@/lib/seo";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  structuredData?: object | object[];
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title || SITE_CONFIG.defaultTitle;
  const fullDescription = description || SITE_CONFIG.defaultDescription;
  const canonicalUrl = generateCanonicalUrl(canonical || "/");
  const ogImageUrl = generateOgImageUrl(ogImage);

  const structuredDataArray = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured Data */}
      {structuredDataArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEOHead;
