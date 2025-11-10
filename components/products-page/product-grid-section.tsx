"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid3x3, LayoutGrid, SlidersHorizontal } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
}

interface ProductGridSectionProps {
  products?: Product[];
  onSortChange?: (sort: string) => void;
}

const ProductGridSection: React.FC<ProductGridSectionProps> = ({ products = [], onSortChange }) => {
  const [viewMode, setViewMode] = useState<"3" | "4">("3");
  const [sortBy, setSortBy] = useState("featured");

  const defaultProducts: Product[] = [
    {
      id: "1",
      name: "Sunset dining table",
      category: "Dining",
      price: 1850,
      image: "/images/products/product.jpg",
      badge: "New",
    },
    {
      id: "2",
      name: "Tropical lounge chair",
      category: "Living Room",
      price: 1200,
      image: "/images/products/product.jpg",
    },
    {
      id: "3",
      name: "Bali sideboard",
      category: "Storage",
      price: 2300,
      image: "/images/products/product.jpg",
      badge: "Bestseller",
    },
    {
      id: "4",
      name: "Java coffee table",
      category: "Living Room",
      price: 950,
      image: "/images/products/product.jpg",
    },
    {
      id: "5",
      name: "Bamboo pendant lamp",
      category: "Lighting",
      price: 680,
      image: "/images/products/product.jpg",
    },
    {
      id: "6",
      name: "Rattan dining chair",
      category: "Dining",
      price: 1400,
      image: "/images/products/product.jpg",
    },
    {
      id: "7",
      name: "Outdoor bench",
      category: "Outdoor",
      price: 980,
      image: "/images/products/product.jpg",
    },
    {
      id: "8",
      name: "Minimalist desk",
      category: "Office",
      price: 1650,
      image: "/images/products/product.jpg",
    },
    {
      id: "9",
      name: "Bookshelf cabinet",
      category: "Storage",
      price: 2100,
      image: "/images/products/product.jpg",
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const handleSortChange = (value: string) => {
    setSortBy(value);
    onSortChange?.(value);
  };

  return (
    <div className="flex-1">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        {/* Results Count */}
        <p className="font-body text-sm text-secondary">
          Showing <span className="font-semibold">{displayProducts.length}</span> products
        </p>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-secondary" />
            <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)} className="font-body text-sm text-secondary border border-secondary/20 rounded px-3 py-2 focus:outline-none focus:border-secondary/40">
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2 border border-secondary/20 rounded p-1">
            <button onClick={() => setViewMode("3")} className={`p-2 rounded transition-colors ${viewMode === "3" ? "bg-secondary text-white" : "text-secondary/50 hover:text-secondary"}`} aria-label="3 columns view">
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button onClick={() => setViewMode("4")} className={`p-2 rounded transition-colors ${viewMode === "4" ? "bg-secondary text-white" : "text-secondary/50 hover:text-secondary"}`} aria-label="4 columns view">
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${viewMode === "3" ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-6`}>
        {displayProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="group">
            {/* Product Image */}
            <div className="relative h-80 mb-4 overflow-hidden bg-light rounded-lg">
              <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              {product.badge && <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-xs font-body rounded">{product.badge}</div>}
            </div>

            {/* Product Info */}
            <div className="mb-3">
              <p className="font-body text-xs text-secondary/60 mb-1">{product.category}</p>
              <h5 className="font-heading text-lg text-secondary mb-2 group-hover:text-secondary/70 transition-colors">{product.name}</h5>
              <p className="font-body text-secondary font-semibold">${product.price.toLocaleString()}</p>
            </div>

            {/* Quick Add Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("Add to cart:", product.id);
              }}
              className="w-full font-body border border-secondary text-secondary py-3 text-sm hover:bg-secondary hover:text-white transition-colors rounded"
            >
              Add to cart
            </button>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button className="font-body px-4 py-2 border border-secondary/20 text-secondary text-sm hover:bg-secondary/5 transition-colors rounded">Previous</button>
        <button className="font-body px-4 py-2 bg-secondary text-white text-sm rounded">1</button>
        <button className="font-body px-4 py-2 border border-secondary/20 text-secondary text-sm hover:bg-secondary/5 transition-colors rounded">2</button>
        <button className="font-body px-4 py-2 border border-secondary/20 text-secondary text-sm hover:bg-secondary/5 transition-colors rounded">3</button>
        <button className="font-body px-4 py-2 border border-secondary/20 text-secondary text-sm hover:bg-secondary/5 transition-colors rounded">Next</button>
      </div>
    </div>
  );
};

export default ProductGridSection;
