"use client";

import CraftsmanshipSection from "@/components/crafmanship-card-section";
import CraftingStorySection from "@/components/crafting-story-section";
import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import AnimatedSection from "@/components/layout/animated-section";
import IntroAnimation from "@/components/layout/intro-animation";
import QualityVideoSection from "@/components/quality-video-section";
import SignaturePiecesSection from "@/components/signature-pieces-section";
import TransformLivingCTA from "@/components/transform-living-CTA-section";
import { useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [startHeroAnimation, setStartHeroAnimation] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Mulai animasi hero setelah intro selesai dengan sedikit delay
    setTimeout(() => {
      setStartHeroAnimation(true);
    }, 100);
  };

  return (
    <div className="">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Hero Section - Mulai animasi setelah intro */}
      <HeroSection startAnimation={startHeroAnimation} />

      {/* Section lainnya dengan scroll-triggered animation */}
      <AnimatedSection threshold={0.2}>
        <CraftsmanshipSection />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <QualityVideoSection videoThumbnail="/images/video-thumbnail.jpg" videoUrl="https://www.pexels.com/download/video/3773486" />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <SignaturePiecesSection />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <CraftingStorySection imagePath="/images/crafting-story.jpg" />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <TransformLivingCTA imagePath="/images/hero-image.jpg" />
      </AnimatedSection>

      <AnimatedSection threshold={0.2}>
        <FAQSection />
      </AnimatedSection>
    </div>
  );
}
