import React from "react";
import Image from "next/image";

interface AboutHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imagePath?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title = "CRAFTING LEGACY",
  subtitle = "ONE PIECE AT A TIME",
  description = "For over two decades, we've been transforming Indonesian teak into timeless furniture that bridges heritage and contemporary living.",
  imagePath = "/about-hero.jpg",
}) => {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={imagePath} alt="About Bumi Teak Furniture" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h3 className="font-heading text-white mb-6">
              <div className="text-4xl md:text-5xl lg:text-6xl tracking-wide mb-2">{title}</div>
              <div className="text-4xl md:text-5xl lg:text-6xl tracking-wide">{subtitle}</div>
            </h3>
            <p className="font-body text-white text-lg md:text-xl leading-relaxed max-w-2xl">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
