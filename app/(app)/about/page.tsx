import AboutHero from "@/components/about-page/about-hero-section";
import AboutSection from "@/components/about-page/about-section";
import OurProcess from "@/components/about-page/our-process-section";
import OurStory from "@/components/about-page/our-story-section";
import OurValues from "@/components/about-page/our-value-section";
import StatsSection from "@/components/about-page/statistic-section";
import AnimatedSection from "@/components/layout/animated-section";
import TransformLivingCTA from "@/components/transform-living-CTA-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us - Crafting Excellence Since [Year]",
  description: "Discover the story behind Bumi Teak Furniture. Learn about our commitment to sustainable Indonesian teak, traditional craftsmanship, and timeless furniture design.",
  keywords: ["about bumi teak", "Indonesian furniture maker", "sustainable teak", "furniture craftsmanship"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Bumi Teak Furniture",
    description: "Discover the story behind Bumi Teak Furniture and our commitment to excellence.",
    url: "/about",
    images: ["/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <AboutHero
        title="CRAFTING LEGACY"
        subtitle="ONE PIECE AT A TIME"
        description="For over two decades, we've been transforming Indonesian teak into timeless furniture that bridges heritage and contemporary living."
        imagePath="/images/hero-image.jpg"
      />

      {/* Our Story */}
      <AnimatedSection threshold={0.2}>
        <OurStory imagePath="/images/hero-image.jpg" />
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection threshold={0.2}>
        <AboutSection imagePath="/images/hero-image.jpg" />
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection threshold={0.2}>
        <OurValues />
      </AnimatedSection>

      {/* Statistics */}
      <AnimatedSection threshold={0.2}>
        <StatsSection />
      </AnimatedSection>

      {/* Our Process */}
      <AnimatedSection threshold={0.2}>
        <OurProcess />
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection threshold={0.2}>
        <TransformLivingCTA
          heading="START YOUR JOURNEY"
          subheading="WITH BUMI TEAK"
          description="Discover how our handcrafted teak furniture can transform your living space. Connect with our team to explore custom possibilities."
          primaryButtonText="Get Started"
          secondaryButtonText="View Collection"
          imagePath="/images/hero-image.jpg"
          primaryButtonLink="/shop/collections"
          secondaryButtonLink="/shop"
          contentAlignment="center"
        />
      </AnimatedSection>
    </main>
  );
}
