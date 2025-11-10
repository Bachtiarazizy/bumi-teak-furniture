import React from "react";

interface ProductsHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const ProductsHero: React.FC<ProductsHeroProps> = ({
  title = "OUR COLLECTION",
  subtitle = "Handcrafted Indonesian Teak Furniture",
  description = "Discover timeless pieces that blend traditional craftsmanship with contemporary design. Each item is carefully crafted to bring natural elegance to your space.",
}) => {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-5xl md:text-6xl text-secondary mb-4">{title}</h2>
          <p className="font-heading text-2xl md:text-3xl text-secondary/70 mb-6">{subtitle}</p>
          <p className="font-body text-secondary text-sm leading-relaxed max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
