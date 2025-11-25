import React from "react";
import InformationPageHero from "@/components/layout/page-hero-section";
import TransformLivingCTA from "@/components/home-page/transform-living-CTA-section";
import GalleryGrid from "@/components/gallery-page/gallery-grid";
import { client } from "@/lib/sanity/client";
import { galleryImagesQuery, galleryCategoriesQuery } from "@/lib/sanity/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Teak Furniture Showcase",
  description: "Discover the beauty of our handcrafted teak furniture in real spaces. Each piece tells a story of quality, craftsmanship, and timeless elegance.",
};

interface GalleryPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const params = await searchParams;
  const selectedCategory = params.category || "All";

  // Fetch ALL images regardless of category
  const [allImages, categoriesData] = await Promise.all([client.fetch(galleryImagesQuery, { category: "All" }), client.fetch(galleryCategoriesQuery)]);

  // Add "All" to categories
  const categories = ["All", ...(categoriesData || [])];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <InformationPageHero
        title="Our Gallery"
        description="Discover the beauty of our handcrafted teak furniture in real spaces. Each piece tells a story of quality, craftsmanship, and timeless elegance."
        imagePath="/images/hero-image.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      {/* Gallery Content - Pass all images, filtering will be done client-side */}
      <GalleryGrid allImages={allImages || []} categories={categories} initialCategory={selectedCategory} />

      <TransformLivingCTA
        heading="Ready to Transform"
        subheading="Your Space?"
        description="Let us help you create a beautiful space with our handcrafted teak furniture."
        primaryButtonText="Browse Products"
        secondaryButtonText="Contact Us"
        imagePath="/images/hero-image.jpg"
        primaryButtonLink="/shop"
        secondaryButtonLink="/contact"
        contentAlignment="center"
      />
    </main>
  );
}
