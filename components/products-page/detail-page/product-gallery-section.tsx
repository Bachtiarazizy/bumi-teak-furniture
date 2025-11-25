"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface ProductGalleryProps {
  images?: SanityImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // If no images provided, return placeholder
  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square bg-light rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-secondary/40 font-body">No images available</p>
      </div>
    );
  }

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
        <Image src={urlForImage(images[selectedIndex].asset).width(800).height(800).url()} alt={images[selectedIndex].alt || "Product image"} fill className="object-cover" priority />

        {/* Navigation Arrows - only show if multiple images */}
        {images.length > 1 && (
          <>
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
          </>
        )}
      </div>

      {/* Thumbnails - only show if multiple images */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-square bg-light rounded overflow-hidden border-2 transition-colors ${selectedIndex === index ? "border-secondary" : "border-transparent hover:border-secondary/30"}`}
            >
              <Image src={urlForImage(image.asset).width(200).height(200).url()} alt={image.alt || `Product thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
