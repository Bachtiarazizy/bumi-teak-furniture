import AboutHero from "@/components/about-page/about-hero-section";
import OurProcess from "@/components/about-page/our-process-section";
import OurStory from "@/components/about-page/our-story-section";
import OurValues from "@/components/about-page/our-value-section";
import CertificationsSection from "@/components/about-page/sertification-section";
import StatsSection from "@/components/about-page/statistic-section";
import TeamSection from "@/components/about-page/team-section";
import TransformLivingCTA from "@/components/transform-living-CTA-section";
import React from "react";

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
      <OurStory imagePath="/images/hero-image.jpg" />

      {/* Our Values */}
      <OurValues />

      {/* Statistics */}
      <StatsSection />

      {/* Our Process */}
      <OurProcess />

      {/* Team */}
      <TeamSection />

      {/* Certifications */}
      <CertificationsSection />

      {/* CTA */}
      <TransformLivingCTA
        heading="START YOUR JOURNEY"
        subheading="WITH BUMI TEAK"
        description="Discover how our handcrafted teak furniture can transform your living space. Connect with our team to explore custom possibilities."
        primaryButtonText="Get Started"
        secondaryButtonText="View Collection"
        imagePath="/images/hero-image.jpg"
      />
    </main>
  );
}
