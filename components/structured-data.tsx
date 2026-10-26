import { SITE, SITE_URL } from "@/lib/site";

/**
 * Site-level JSON-LD. The FAQPage block lives in `faq-section.tsx` alongside
 * the questions it describes, so the two cannot drift apart.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${SITE_URL}/#app`,
        name: SITE.name,
        url: SITE_URL,
        description: SITE.description,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@id": `${SITE.origin}/#org` },
        featureList: [
          "Live stock prices across thousands of tickers",
          "Top gainers and losers",
          "Stock screener",
          "Indices and sector performance",
          "Price history charts",
          "Watchlist and portfolio tracking",
          "Earnings and dividend calendars",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.origin}/#org` },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${SITE.origin}/#org`,
        name: "APILayer",
        url: "https://apilayer.com/",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
