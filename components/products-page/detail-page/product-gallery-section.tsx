"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

interface ProductGalleryProps {
  images?: ProductImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  images = [
    { id: "1", url: "/images/products/product-1.jpg", alt: "Product view 1" },
    { id: "2", url: "/images/products/product-2.jpg", alt: "Product view 2" },
    { id: "3", url: "/images/products/product-3.jpg", alt: "Product view 3" },
    { id: "4", url: "/images/products/product-4.jpg", alt: "Product view 4" },
    { id: "5", url: "/images/products/product-5.jpg", alt: "Product view 5" },
  ],
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-light rounded-lg overflow-hidden group">
        <Image src={images[selectedIndex].url} alt={images[selectedIndex].alt} fill className="object-cover" priority />

        {/* Navigation Arrows */}
        <button onClick={handlePrevious} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" aria-label="Previous image">
          <ChevronLeft className="w-5 h-5 text-secondary" />
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" aria-label="Next image">
          <ChevronRight className="w-5 h-5 text-secondary" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-body">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-square bg-light rounded overflow-hidden border-2 transition-colors ${selectedIndex === index ? "border-secondary" : "border-transparent hover:border-secondary/30"}`}
          >
            <Image src={image.url} alt={image.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
