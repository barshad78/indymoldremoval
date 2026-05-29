import { siteConfig, FAQ } from "@/config";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    description: siteConfig.metaDescription,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.domain,
    image: `${siteConfig.domain}${siteConfig.ogImage}`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    address: siteConfig.address
      ? {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address,
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.stateAbbr,
          postalCode: siteConfig.zip,
          addressCountry: "US",
        }
      : {
          "@type": "PostalAddress",
          addressLocality: siteConfig.city,
          addressRegion: siteConfig.stateAbbr,
          postalCode: siteConfig.zip,
          addressCountry: "US",
        },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.7684",
      longitude: "-86.1581",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mold Removal Services",
      itemListElement: siteConfig.services.map((service, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
          url: `${siteConfig.domain}/services/${service.slug}`,
        },
        position: i + 1,
      })),
    },
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
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
