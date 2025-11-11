"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface RelatedProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface RelatedProductsProps {
  products?: RelatedProduct[];
  heading?: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  heading = "You Might Also Like",
  products = [
    {
      id: "1",
      name: "Java Dining Chair",
      category: "Dining",
      price: 480,
      image: "/images/products/product.jpg",
    },
    {
      id: "2",
      name: "Bali Sideboard",
      category: "Storage",
      price: 2300,
      image: "/images/products/product.jpg",
    },
    {
      id: "3",
      name: "Minimalist Buffet",
      category: "Dining",
      price: 1650,
      image: "/images/products/product.jpg",
    },
    {
      id: "4",
      name: "Lombok Bench",
      category: "Seating",
      price: 890,
      image: "/images/products/product.jpg",
    },
  ],
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h3 className="font-heading text-3xl md:text-4xl text-secondary">{heading}</h3>
          <Link href="/shop" className="font-body text-sm text-secondary flex items-center gap-1 hover:gap-2 transition-all">
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link href={`/shop/${product.id}`} key={product.id} className="group">
              {/* Product Image */}
              <div className="relative h-80 mb-4 overflow-hidden bg-light rounded-lg">
                <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Product Info */}
              <div className="mb-3">
                <p className="font-body text-xs text-secondary/60 mb-1">{product.category}</p>
                <h5 className="font-heading text-lg text-secondary mb-2 group-hover:text-secondary/70 transition-colors">{product.name}</h5>
                <p className="font-body text-secondary font-semibold">${product.price.toLocaleString()}</p>
              </div>

              {/* Quick View Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Quick view:", product.id);
                }}
                className="w-full font-body border border-secondary/20 text-secondary py-2 text-sm hover:border-secondary hover:bg-secondary/5 transition-colors rounded opacity-0 group-hover:opacity-100"
              >
                Quick View
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
