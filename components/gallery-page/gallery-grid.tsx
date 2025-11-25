"use client";

import React, { useState, useCallback, useEffect, useMemo } from "react";
import { X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { urlForImage } from "@/lib/sanity/image";

interface SanityImage {
  asset: {
    _ref?: string;
    _type?: string;
  };
}

interface GalleryImage {
  _id: string;
  title: string;
  image: SanityImage;
  category: string;
  location: string;
}

interface GalleryGridProps {
  allImages: GalleryImage[];
  categories: string[];
  initialCategory: string;
}

export default function GalleryGrid({ allImages, categories, initialCategory }: GalleryGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  // Get selected category from URL, use initialCategory as fallback
  const selectedCategory = searchParams.get("category") || initialCategory;

  // Filter images client-side using useMemo for performance
  const filteredImages = useMemo(() => {
    return selectedCategory === "All" ? allImages : allImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory, allImages]);

  const handleCategoryChange = (category: string) => {
    // Update URL without scrolling
    if (category === "All") {
      router.push("/gallery", { scroll: false });
    } else {
      router.push(`/gallery?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
  };

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (!lightboxImage) return;

      const currentIndex = filteredImages.findIndex((img) => img._id === lightboxImage._id);
      let newIndex;

      if (direction === "prev") {
        newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      } else {
        newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      }

      setLightboxImage(filteredImages[newIndex]);
    },
    [lightboxImage, filteredImages]
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, closeLightbox, navigateLightbox]);

  return (
    <>
      {/* Category Filter */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 font-body text-sm rounded-full transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category ? "bg-primary text-white shadow-md scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => {
              const imageUrl = image.image?.asset ? urlForImage(image.image.asset).width(800).height(600).url() : "/images/gallery/placeholder.jpg";

              return (
                <div
                  key={image._id}
                  onClick={() => openLightbox(image)}
                  className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                >
                  {/* Image */}
                  <div className="relative h-80 bg-gray-200">
                    <Image src={imageUrl} alt={image.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.location}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">{image.category}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16 animate-fadeIn">
              <p className="text-gray-500 text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={closeLightbox}>
          {/* Close Button */}
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10" aria-label="Close lightbox">
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-10 h-10" />
          </button>

          {/* Image and Info */}
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] bg-gray-900 rounded-lg overflow-hidden mb-4">
              <Image src={urlForImage(lightboxImage.image.asset).width(1200).height(900).url()} alt={lightboxImage.title} fill className="object-contain" priority />
            </div>

            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
              <p className="text-white/70">{lightboxImage.location}</p>
              <span className="inline-block mt-2 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">{lightboxImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
