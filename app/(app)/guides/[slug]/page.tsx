import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity/client";
import { guideBySlugQuery } from "@/lib/sanity/queries";
import { generateSanityMetadata } from "@/lib/sanity/seo";
import { Metadata } from "next";
import GuideDetailHero from "@/components/guides-page/guide-detail-hero";
import GuideContent from "@/components/guides-page/guide-detail-content";
import RelatedGuides from "@/components/guides-page/related-guides";

interface GuideDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: GuideDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await client.fetch(guideBySlugQuery, { slug });

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return generateSanityMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${slug}`,
    image: guide.image,
    seo: guide.seo,
    type: "article",
  });
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  const { slug } = await params;
  const guide = await client.fetch(guideBySlugQuery, { slug });

  if (!guide) {
    notFound();
  }

  // Fetch related guides (same category, exclude current)
  const relatedGuidesQuery = `
    *[_type == "guide" 
      && category == $category 
      && slug.current != $slug
    ][0...3] | order(featured desc, order asc) {
      _id,
      title,
      slug,
      description,
      category,
      readTime,
      image {
        asset,
        alt
      },
      downloadable
    }
  `;

  const relatedGuides = await client.fetch(relatedGuidesQuery, {
    category: guide.category,
    slug,
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GuideDetailHero title={guide.title} category={guide.category} readTime={guide.readTime} image={guide.image} downloadable={guide.downloadable} pdfUrl={guide.pdfUrl} />

      {/* Guide Content */}
      <GuideContent content={guide.content} />

      {/* Related Guides */}
      <RelatedGuides guides={relatedGuides} />
    </main>
  );
}
