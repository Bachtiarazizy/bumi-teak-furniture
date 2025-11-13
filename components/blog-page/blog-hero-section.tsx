import Image from "next/image";
import React from "react";

interface BlogHeroProps {
  title?: string;
  description?: string;
  imagePath?: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title = "INSIGHTS & INSPIRATION", description = "Discover stories about craftsmanship, design, and sustainable living", imagePath = "/images/hero-image.jpg" }) => {
  return (
    <section className="relative bg-light py-12 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={imagePath} alt="Elegant teak furniture interior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">{title}</h1>
          <p className="font-body text-white text-base md:text-md leading-relaxed max-w-2xl mx-auto drop-shadow-md">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
