// lib/sanity/seo.ts - SEO Helper Functions
import { Metadata } from "next";
import { urlForImage } from "./image";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "sanity.imageAsset";
  };
  alt?: string;
}

interface SEOFields {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SanityImage;
  twitterCard?: "summary" | "summary_large_image";
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: SanityImage | string;
  seo?: SEOFields;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

const siteConfig = {
  name: "Bumi Teak Furniture",
  description: "Premium Indonesian Teak Furniture - Handcrafted Excellence",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bumiteakfurniture.com",
  ogImage: "/images/og-default.jpg",
  twitterHandle: "@bumiteak",
};

export function generateSanityMetadata({ title, description, path, image, seo, type = "website", publishedTime, modifiedTime, authors, tags }: GenerateMetadataParams): Metadata {
  // Use SEO fields if available, otherwise fallback to defaults
  const metaTitle = seo?.metaTitle || `${title} | ${siteConfig.name}`;
  const metaDescription = seo?.metaDescription || description;
  const ogTitle = seo?.ogTitle || metaTitle;
  const ogDescription = seo?.ogDescription || metaDescription;
  const canonicalUrl = seo?.canonicalUrl || `${siteConfig.url}${path}`;

  // Handle images
  let imageUrl = siteConfig.ogImage;
  if (seo?.ogImage) {
    imageUrl = urlForImage(seo.ogImage).width(1200).height(630).url();
  } else if (image && typeof image === "object") {
    imageUrl = urlForImage(image).width(1200).height(630).url();
  } else if (typeof image === "string") {
    imageUrl = image;
  }

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
      locale: "en_US",
      type: type,
    },
    twitter: {
      card: seo?.twitterCard || "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [imageUrl],
      creator: siteConfig.twitterHandle,
    },
  };

  // Add keywords if available
  if (seo?.metaKeywords && seo.metaKeywords.length > 0) {
    metadata.keywords = seo.metaKeywords.join(", ");
  } else if (tags && tags.length > 0) {
    metadata.keywords = tags.join(", ");
  }

  // Add robots meta
  if (seo?.noIndex || seo?.noFollow) {
    metadata.robots = {
      index: !seo.noIndex,
      follow: !seo.noFollow,
    };
  }

  // Add article-specific metadata
  if (type === "article") {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors,
      tags,
    };
  }

  return metadata;
}
