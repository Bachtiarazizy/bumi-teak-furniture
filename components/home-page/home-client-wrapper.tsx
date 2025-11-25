// components/home-page/home-client-wrapper.tsx
"use client";

import { useState } from "react";
import IntroAnimation from "@/components/layout/intro-animation";
import HeroSection from "@/components/home-page/hero-section";

interface HomeClientWrapperProps {
  children: React.ReactNode;
}

export default function HomeClientWrapper({ children }: HomeClientWrapperProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [startHeroAnimation, setStartHeroAnimation] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setStartHeroAnimation(true);
    }, 100);
  };

  return (
    <div className="">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      <HeroSection startAnimation={startHeroAnimation} />

      {/* Server components dari parent */}
      {children}
    </div>
  );
}
