import React from "react";
import InformationPageHero from "@/components/layout/page-hero-section";
import GuidesContent from "@/components/guides-page/guides-content";
import { client } from "@/lib/sanity/client";
import { allGuidesQuery, featuredGuideQuery } from "@/lib/sanity/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture Guides | Expert Advice & Tips",
  description: "Expert advice on selecting, caring for, and styling your teak furniture. From buying guides to maintenance tips, we've got you covered.",
};

export default async function GuidesPage() {
  // Fetch all guides and featured guide
  const [allGuides, featuredGuide] = await Promise.all([client.fetch(allGuidesQuery), client.fetch(featuredGuideQuery)]);

  return (
    <main className="min-h-screen">
      <InformationPageHero title="Furniture Guides" description="Expert advice on selecting, caring for, and styling your teak furniture. From buying guides to maintenance tips, we've got you covered." imagePath="/images/hero-image.jpg" />

      <GuidesContent guides={allGuides || []} featuredGuide={featuredGuide} />
    </main>
  );
}
