import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imagePath?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "TIMELESS",
  subtitle = "ELEGANCE IN",
  description = "Handcrafted teak furniture that tells a story. Each piece carries the warmth of Indonesian woodworking traditions.",
  imagePath = "/images/hero-image.jpg",
}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={imagePath} alt="Elegant teak furniture interior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full mt-24 items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h1 className="mb-2 font-heading text-white">
              <div className="text-5xl md:text-6xl lg:text-7xl tracking-wide">{title}</div>
              <div className="text-5xl md:text-6xl lg:text-7xl tracking-wide">{subtitle}</div>
              <div className="text-5xl md:text-6xl lg:text-7xl tracking-wide">EVERY GRAIN</div>
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="absolute bottom-0  right-0 z-20 bg-black/60 backdrop-blur-sm p-8 max-w-md">
        <p className="text-white text-sm mb-6 leading-relaxed font-body">{description}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors font-body">Shop now</button>
          <button className="border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors font-body">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
