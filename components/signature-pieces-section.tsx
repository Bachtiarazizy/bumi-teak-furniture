import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface SignaturePiecesSectionProps {
  label?: string;
  heading?: string;
  description?: string;
  products?: Product[];
}

const SignaturePiecesSection: React.FC<SignaturePiecesSectionProps> = ({
  label = "Curate",
  heading = "BUMI COLLECTION PIECES",
  description = "Teak pieces crafted with soul and care, reflecting nature’s beauty and the warmth of home",
  products = [
    {
      id: "1",
      name: "Sunset dining table",
      category: "Large",
      price: 1850,
      image: "/images/products/product.jpg",
    },
    {
      id: "2",
      name: "Tropical lounge chair",
      category: "Medium",
      price: 1200,
      image: "/images/products/product.jpg",
    },
    {
      id: "3",
      name: "Bali sideboard",
      category: "Wide",
      price: 2300,
      image: "/images/products/product.jpg",
    },
    {
      id: "4",
      name: "Java coffee table",
      category: "Small",
      price: 950,
      image: "/images/products/product.jpg",
    },
    {
      id: "5",
      name: "Bamboo pendant lamp",
      category: "Medium",
      price: 680,
      image: "/images/products/product.jpg",
    },
    {
      id: "6",
      name: "Rattan dining chair",
      category: "Set of 2",
      price: 1400,
      image: "/images/products/product.jpg",
    },
  ],
}) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="font-body text-secondary text-sm mb-3 uppercase tracking-wide">{label}</p>
            <h3 className="font-heading text-4xl md:text-5xl text-secondary mb-3">{heading}</h3>
            <p className="font-body text-secondary text-sm max-w-xl">{description}</p>
          </div>

          <button className="hidden md:block font-body border border-secondary text-secondary px-6 py-2 text-sm hover:bg-secondary hover:text-white transition-colors">View all</button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id} className="group">
              {/* Product Image */}
              <div className="relative h-80 mb-4 overflow-hidden bg-light">
                <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h5 className="font-heading text-lg text-secondary mb-1">{product.name}</h5>
                  <p className="font-body text-secondary text-sm opacity-70">{product.category}</p>
                </div>
                <p className="font-body text-secondary font-semibold">${product.price.toLocaleString()}</p>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full font-body border border-secondary text-secondary py-3 text-sm hover:bg-secondary hover:text-white transition-colors">Add to cart</button>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <button className="font-body border border-secondary text-secondary px-8 py-3 text-sm hover:bg-secondary hover:text-white transition-colors">View all</button>
        </div>
      </div>
    </section>
  );
};

export default SignaturePiecesSection;
