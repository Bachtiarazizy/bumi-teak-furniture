/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useCallback, useTransition } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import CollectionHero from "@/components/products-page/collections-page/collection-hero";
import ProductFiltersSidebar from "@/components/products-page/product-filter-sidebar";
import ProductGridSection from "@/components/products-page/product-grid-section";
import { collectionProductsQuery } from "@/lib/sanity/queries";
import { client } from "@/lib/sanity/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CollectionPageClientProps {
  collection: {
    _id: string;
    title: string;
    description: string;
    imagePath?: string;
    slug: {
      current: string;
    };
  };
  initialProducts: any[];
}

export default function CollectionPageDetailClient({ collection, initialProducts }: CollectionPageClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [products, setProducts] = useState(initialProducts);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Initialize filters from URL search params
  const getFiltersFromURL = useCallback(() => {
    const collectionsParam = searchParams.get("collections");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const inStockParam = searchParams.get("inStock");
    const materialsParam = searchParams.get("materials");
    const stylesParam = searchParams.get("styles");

    return {
      collections: collectionsParam ? collectionsParam.split(",") : [],
      priceRange: [minPriceParam ? parseInt(minPriceParam) : 0, maxPriceParam ? parseInt(maxPriceParam) : 10000] as [number, number],
      inStockOnly: inStockParam === "true",
      materials: materialsParam ? materialsParam.split(",") : [],
      styles: stylesParam ? stylesParam.split(",") : [],
    };
  }, [searchParams]);

  const [filters, setFilters] = useState(getFiltersFromURL);
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "featured");

  // Update URL with current filters (shallow routing)
  const updateURL = useCallback(
    (newFilters: any, newSort: string) => {
      const params = new URLSearchParams();

      // Add filters to URL
      if (newFilters.collections.length > 0) {
        params.set("collections", newFilters.collections.join(","));
      }
      if (newFilters.priceRange[0] > 0) {
        params.set("minPrice", newFilters.priceRange[0].toString());
      }
      if (newFilters.priceRange[1] < 10000) {
        params.set("maxPrice", newFilters.priceRange[1].toString());
      }
      if (newFilters.inStockOnly) {
        params.set("inStock", "true");
      }
      if (newFilters.materials?.length > 0) {
        params.set("materials", newFilters.materials.join(","));
      }
      if (newFilters.styles?.length > 0) {
        params.set("styles", newFilters.styles.join(","));
      }
      if (newSort !== "featured") {
        params.set("sort", newSort);
      }

      const queryString = params.toString();
      const newURL = queryString ? `${pathname}?${queryString}` : pathname;

      // Use startTransition for non-blocking URL update
      startTransition(() => {
        router.replace(newURL, { scroll: false });
      });
    },
    [pathname, router]
  );

  // Fetch filtered products with debouncing
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Build params object
        const params: Record<string, any> = {
          sortBy,
        };

        if (filters.collections.length > 0) {
          params.collections = filters.collections;
        }
        if (filters.priceRange[0] > 0) {
          params.minPrice = filters.priceRange[0];
        }
        if (filters.priceRange[1] < 10000) {
          params.maxPrice = filters.priceRange[1];
        }
        if (filters.inStockOnly) {
          params.inStockOnly = filters.inStockOnly;
        }
        if (filters.materials?.length > 0) {
          params.materials = filters.materials;
        }
        if (filters.styles?.length > 0) {
          params.styles = filters.styles;
        }

        const filteredProducts = await client.fetch(collectionProductsQuery, params);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Debounce the fetch to avoid too many requests
    const timeoutId = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filters, sortBy]);

  // Update URL when filters or sort change
  useEffect(() => {
    updateURL(filters, sortBy);
  }, [filters, sortBy, updateURL]);

  // Handle filter changes
  const handleFilterChange = useCallback((newFilters: any) => {
    setFilters(newFilters);
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort);
  }, []);

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
            <ProductGridSection products={products} onSortChange={handleSortChange} isLoading={isPending} initialSort={sortBy} />
          </div>
        </div>
      </section>
    </main>
  );
}
