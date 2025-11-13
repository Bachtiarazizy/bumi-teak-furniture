"use client";

import React, { useState, use } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import CollectionHero from "@/components/products-page/collections-page/collection-hero";
import ProductFiltersSidebar from "@/components/products-page/product-filter-sidebar";
import ProductGridSection from "@/components/products-page/product-grid-section";
import Link from "next/link";

// Mock data untuk collections
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const collectionsData: { [key: string]: any } = {
  dining: {
    title: "Dining Collection",
    description: "Elegant dining furniture crafted from premium teak wood. Perfect for creating memorable dining experiences.",
    imagePath: "/images/collections/dining.jpg",
    products: [
      {
        id: "dining-1",
        name: "Sunset dining table",
        category: "Dining",
        price: 1850,
        image: "/images/products/product.jpg",
        badge: "New",
      },
      {
        id: "dining-2",
        name: "Rattan dining chair",
        category: "Dining",
        price: 1400,
        image: "/images/products/product.jpg",
      },
      // Add more products...
    ],
  },
  "living-room": {
    title: "Living Room Collection",
    description: "Transform your living space with our handcrafted teak furniture pieces.",
    imagePath: "/images/collections/living.jpg",
    products: [
      {
        id: "living-1",
        name: "Tropical lounge chair",
        category: "Living Room",
        price: 1200,
        image: "/images/products/product.jpg",
      },
      {
        id: "living-2",
        name: "Java coffee table",
        category: "Living Room",
        price: 950,
        image: "/images/products/product.jpg",
      },
      // Add more products...
    ],
  },
  outdoor: {
    title: "Outdoor Collection",
    description: "Weather-resistant teak furniture designed for outdoor living.",
    imagePath: "/images/collections/outdoor.jpg",
    products: [
      {
        id: "outdoor-1",
        name: "Outdoor bench",
        category: "Outdoor",
        price: 980,
        image: "/images/products/product.jpg",
      },
      // Add more products...
    ],
  },
};

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [filters, setFilters] = useState<unknown>({});
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get collection data
  const collection = collectionsData[slug];

  // If collection not found, show 404
  if (!collection) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-secondary mb-4">Collection Not Found</h1>
          <p className="font-body text-secondary/70 mb-6">The collection you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/shop" className="font-body bg-secondary text-white px-6 py-3 rounded hover:bg-secondary/90 transition-colors inline-block">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleFilterChange = (newFilters: unknown) => {
    setFilters(newFilters);
    console.log("Filters updated:", newFilters);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    console.log("Sort changed:", sort);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section with Breadcrumb */}
      <CollectionHero title={collection.title} description={collection.description} imagePath={collection.imagePath} breadcrumbs={[{ label: "Collections", href: "/shop/collections" }]} />

      {/* Main Content */}
      <section className="bg-white py-12 flex-1">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-6">
                <ProductFiltersSidebar onFilterChange={handleFilterChange} />
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-40">
              <button onClick={() => setIsMobileFiltersOpen(true)} className="bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary/90 transition-colors flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="font-body text-sm">Filters</span>
              </button>
            </div>

            {/* Mobile Filters Overlay */}
            {isMobileFiltersOpen && (
              <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileFiltersOpen(false)}>
                <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-white overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-heading text-xl text-secondary">Filters</h3>
                      <button onClick={() => setIsMobileFiltersOpen(false)} className="text-secondary hover:text-secondary/70">
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    <ProductFiltersSidebar onFilterChange={handleFilterChange} />
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <ProductGridSection products={collection.products} onSortChange={handleSortChange} />
          </div>
        </div>
      </section>
    </main>
  );
}
