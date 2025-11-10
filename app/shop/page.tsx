"use client";

import React, { useState } from "react";

import { SlidersHorizontal, X } from "lucide-react";
import ProductsHero from "@/components/products-page/product-hero";
import ProductFiltersSidebar from "@/components/products-page/product-filter-sidebar";
import ProductGridSection from "@/components/products-page/product-grid-section";

export default function ProductsPage() {
  const [filters, setFilters] = useState<unknown>({});
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFilterChange = (newFilters: unknown) => {
    setFilters(newFilters);
    console.log("Filters updated:", newFilters);
    // Here you would typically fetch filtered products from API
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    console.log("Sort changed:", sort);
    // Here you would typically re-fetch/re-sort products
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <ProductsHero />

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
            <ProductGridSection onSortChange={handleSortChange} />
          </div>
        </div>
      </section>
    </main>
  );
}
