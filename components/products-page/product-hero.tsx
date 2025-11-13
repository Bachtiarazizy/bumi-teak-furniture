import Image from "next/image";
import React from "react";

interface ProductsHeroProps {
  title?: string;
  description?: string;
  imagePath?: string;
}

const ProductsHero: React.FC<ProductsHeroProps> = ({
  title = "Our Collection",
  description = "Discover timeless pieces that blend traditional craftsmanship with contemporary design. Each item is carefully crafted to bring natural elegance to your space.",
  imagePath = "/images/hero-image.jpg",
}) => {
  return (
    <section className="relative bg-light py-12 lg:py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src={imagePath} alt="Elegant teak furniture interior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-white mb-4 drop-shadow-lg">{title}</h1>
          <p className="font-body text-white/70 text-base md:text-md leading-relaxed max-w-2xl mx-auto drop-shadow-md">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
