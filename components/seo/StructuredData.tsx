// components/StructuredData.tsx
import Script from "next/script";

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "Bumi Teak Furniture",
    description: "Premium handcrafted Indonesian teak furniture",
    url: "https://bumiteakfurniture.com",
    logo: "https://bumiteakfurniture.com/logo.png",
    image: "https://bumiteakfurniture.com/og-image.jpg",
    telephone: "+62-xxx-xxxx-xxxx",
    email: "info@bumiteakfurniture.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      addressRegion: "Your Region",
      postalCode: "Your Postal Code",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "your-latitude",
      longitude: "your-longitude",
    },
    openingHours: "Mo-Sa 09:00-18:00",
    sameAs: ["https://www.facebook.com/bumiteakfurniture", "https://www.instagram.com/bumiteakfurniture", "https://www.pinterest.com/bumiteakfurniture"],
    priceRange: "$$$$",
  };

  return <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Product Schema
interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  sku?: string;
  brand?: string;
  availability?: string;
  rating?: {
    value: number;
    count: number;
  };
}

export function ProductSchema({ name, description, image, price, currency = "USD", sku, brand = "Bumi Teak Furniture", availability = "https://schema.org/InStock", rating }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    sku: sku,
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: currency,
      availability: availability,
      url: typeof window !== "undefined" ? window.location.href : "",
      seller: {
        "@type": "Organization",
        name: "Bumi Teak Furniture",
      },
    },
    ...(rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.value,
        reviewCount: rating.count,
      },
    }),
  };

  return <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Article Schema (untuk blog)
interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}

export function ArticleSchema({ title, description, image, datePublished, dateModified, authorName }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Bumi Teak Furniture",
      logo: {
        "@type": "ImageObject",
        url: "https://bumiteakfurniture.com/logo.png",
      },
    },
  };

  return <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bumiteakfurniture.com",
    name: "Bumi Teak Furniture",
    description: "Premium handcrafted Indonesian teak furniture store",
    url: "https://bumiteakfurniture.com",
    telephone: "+62-xxx-xxxx-xxxx",
    email: "info@bumiteakfurniture.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      addressRegion: "Your Region",
      postalCode: "Your Postal Code",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "your-latitude",
      longitude: "your-longitude",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$$$",
    image: "https://bumiteakfurniture.com/og-image.jpg",
  };

  return <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
