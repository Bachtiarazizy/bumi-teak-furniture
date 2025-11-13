"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import InformationPageHero from "@/components/layout/page-hero-section";
import TransformLivingCTA from "@/components/transform-living-CTA-section";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
}

// Mock gallery data
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/dining-room.jpg",
    title: "Elegant Dining Set",
    category: "Dining",
    location: "Private Residence, Jakarta",
  },
  {
    id: 2,
    src: "/images/gallery/living-room.jpg",
    title: "Modern Living Space",
    category: "Living Room",
    location: "Villa, Bali",
  },
  {
    id: 3,
    src: "/images/gallery/outdoor-care.jpg",
    title: "Outdoor Lounge Area",
    category: "Outdoor",
    location: "Resort, Lombok",
  },
  {
    id: 4,
    src: "/images/gallery/teak-oil.jpg",
    title: "Serene Bedroom Suite",
    category: "Bedroom",
    location: "Hotel, Yogyakarta",
  },
  {
    id: 5,
    src: "/images/gallery/featured.jpg",
    title: "Executive Office",
    category: "Office",
    location: "Corporate Office, Surabaya",
  },
  {
    id: 6,
    src: "/images/gallery/custom-process.jpg",
    title: "Family Dining Area",
    category: "Dining",
    location: "Private Residence, Bandung",
  },
  {
    id: 7,
    src: "/images/gallery/outdoor-care.jpg",
    title: "Garden Furniture Set",
    category: "Outdoor",
    location: "Villa, Ubud",
  },
  {
    id: 8,
    src: "/images/gallery/living-room.jpg",
    title: "Cozy Living Corner",
    category: "Living Room",
    location: "Apartment, Jakarta",
  },
  {
    id: 9,
    src: "/images/gallery/teak-oil.jpg",
    title: "Master Bedroom",
    category: "Bedroom",
    location: "Private Residence, Bali",
  },
];

const categories = ["All", "Dining", "Living Room", "Bedroom", "Outdoor", "Office"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxImage) return;

    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setLightboxImage(filteredImages[newIndex]);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}

      <InformationPageHero
        title="Our Gallery"
        description="Discover the beauty of our handcrafted teak furniture in real spaces. Each piece tells a story of quality, craftsmanship, and timeless elegance."
        imagePath="/images/hero-image.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />

      {/* Category Filter */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 font-body text-sm rounded-full transition-colors whitespace-nowrap ${selectedCategory === category ? "bg-primary text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
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
            {filteredImages.map((image) => (
              <div key={image.id} onClick={() => openLightbox(image)} className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-80 bg-gray-200">
                  <Image src={image.src} alt={image.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.location}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">{image.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10">
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button onClick={() => navigateLightbox("prev")} className="absolute left-6 text-white hover:text-gray-300 transition-colors z-10">
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next Button */}
          <button onClick={() => navigateLightbox("next")} className="absolute right-6 text-white hover:text-gray-300 transition-colors z-10">
            <ChevronRightIcon className="w-10 h-10" />
          </button>

          {/* Image and Info */}
          <div className="max-w-6xl w-full">
            <div className="relative h-[70vh] bg-gray-900 rounded-lg overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-white text-9xl">📷</div>
            </div>

            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
              <p className="text-white/70">{lightboxImage.location}</p>
              <span className="inline-block mt-2 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">{lightboxImage.category}</span>
            </div>
          </div>
        </div>
      )}

      <TransformLivingCTA
        heading="Ready to Transform"
        subheading="Your Space?"
        description="Let us help you create a beautiful space with our handcrafted teak furniture."
        primaryButtonText="Browse Products"
        secondaryButtonText="Contact Us"
        imagePath="/images/hero-image.jpg"
        primaryButtonLink="/shop"
        secondaryButtonLink="/contact"
        contentAlignment="center"
      />
    </main>
  );
}
