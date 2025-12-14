"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface Collection {
  _id: string;
  title: string;
  slug: { current: string };
  productCount: number;
}

interface Filters {
  collections: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  materials?: string[];
  styles?: string[];
}

type FilterGroup = "category" | "collection" | "price" | "material" | "style";

interface SelectedFilters {
  category: string[];
  collection: string[];
  price: string[];
  material: string[];
  style: string[];
}

interface ProductFiltersSidebarProps {
  onFilterChange?: (filters: Filters) => void;
  collections?: Collection[];
  initialFilters?: Filters;
}

const ProductFiltersSidebar: React.FC<ProductFiltersSidebarProps> = ({ onFilterChange, collections = [], initialFilters }) => {
  const [openSections, setOpenSections] = useState<string[]>(["category", "collection", "price", "material", "style"]);

  // Convert initialFilters to selectedFilters format
  const getInitialSelectedFilters = (): SelectedFilters => {
    if (!initialFilters) {
      return {
        category: [],
        collection: [],
        price: [],
        material: [],
        style: [],
      };
    }

    // Convert price range to price filter IDs
    const priceIds: string[] = [];
    const [min, max] = initialFilters.priceRange;

    if (min === 0 && max === 500) priceIds.push("under-500");
    if (min <= 500 && max >= 1000) priceIds.push("500-1000");
    if (min <= 1000 && max >= 2000) priceIds.push("1000-2000");
    if (min <= 2000 && max >= 5000) priceIds.push("2000-5000");
    if (max === 10000 && min >= 5000) priceIds.push("above-5000");

    return {
      category: [],
      collection: initialFilters.collections || [],
      price: priceIds,
      material: initialFilters.materials || [],
      style: initialFilters.styles || [],
    };
  };

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(getInitialSelectedFilters);
  const [inStockOnly, setInStockOnly] = useState(initialFilters?.inStockOnly || false);

  // Static filter groups
  const staticFilterGroups: Record<FilterGroup, { title: string; options: FilterOption[] }> = {
    category: {
      title: "Category",
      options: [],
    },
    collection: {
      title: "Collection",
      options: [],
    },
    price: {
      title: "Price",
      options: [],
    },
    material: {
      title: "Material",
      options: [
        { id: "teak", label: "Solid Teak" },
        { id: "teak-rattan", label: "Teak & Rattan" },
        { id: "reclaimed", label: "Reclaimed Teak" },
      ],
    },
    style: {
      title: "Style",
      options: [
        { id: "modern", label: "Modern" },
        { id: "traditional", label: "Traditional" },
        { id: "scandinavian", label: "Scandinavian" },
        { id: "minimalist", label: "Minimalist" },
      ],
    },
  };

  const priceOptions: FilterOption[] = [
    { id: "under-500", label: "Under RM 500" },
    { id: "500-1000", label: "RM 500 - RM 1,000" },
    { id: "1000-2000", label: "RM 1,000 - RM 2,000" },
    { id: "2000-5000", label: "RM 2,000 - RM 5,000" },
    { id: "above-5000", label: "Above RM 5,000" },
  ];

  // Update parent component when filters change
  useEffect(() => {
    // Convert price filter selections to range
    let minPrice = 0;
    let maxPrice = 10000;

    if (selectedFilters.price.length > 0) {
      const ranges = selectedFilters.price.map((id: string) => {
        switch (id) {
          case "under-500":
            return [0, 500];
          case "500-1000":
            return [500, 1000];
          case "1000-2000":
            return [1000, 2000];
          case "2000-5000":
            return [2000, 5000];
          case "above-5000":
            return [5000, 10000];
          default:
            return [0, 10000];
        }
      });
      minPrice = Math.min(...ranges.map((r) => r[0]));
      maxPrice = Math.max(...ranges.map((r) => r[1]));
    }

    onFilterChange?.({
      collections: selectedFilters.collection,
      priceRange: [minPrice, maxPrice],
      inStockOnly,
      materials: selectedFilters.material,
      styles: selectedFilters.style,
    });
  }, [selectedFilters, inStockOnly, onFilterChange]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]));
  };

  const handleFilterChange = (group: FilterGroup, optionId: string) => {
    setSelectedFilters((prev) => {
      const current = prev[group] || [];
      const updated = current.includes(optionId) ? current.filter((id: string) => id !== optionId) : [...current, optionId];

      return { ...prev, [group]: updated };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      collection: [],
      price: [],
      material: [],
      style: [],
    });
    setInStockOnly(false);
  };

  const activeFiltersCount = Object.values(selectedFilters).flat().length + (inStockOnly ? 1 : 0);

  return (
    <aside className="bg-white border border-secondary/10 rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h5 className="font-heading text-xl text-secondary">Filters</h5>
        {activeFiltersCount > 0 && (
          <button onClick={clearAllFilters} className="font-body text-sm text-secondary/70 hover:text-secondary transition-colors flex items-center gap-1">
            Clear all
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Groups */}
      <div className="space-y-6">
        {/* Collections from Sanity */}
        {collections.length > 0 && (
          <div className="border-b border-secondary/10 pb-4">
            <button onClick={() => toggleSection("collection")} className="w-full flex justify-between items-center mb-3">
              <span className="font-heading text-secondary text-sm">Collection</span>
              <ChevronDown className={`w-4 h-4 text-secondary transition-transform ${openSections.includes("collection") ? "rotate-180" : ""}`} />
            </button>

            {openSections.includes("collection") && (
              <div className="space-y-2">
                {collections.map((collection) => (
                  <label key={collection._id} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedFilters.collection?.includes(collection.slug.current)}
                      onChange={() => handleFilterChange("collection", collection.slug.current)}
                      className="w-4 h-4 border-2 border-secondary/30 rounded text-secondary focus:ring-secondary"
                    />
                    <span className="font-body text-sm text-secondary/80 group-hover:text-secondary transition-colors flex-1">{collection.title}</span>
                    <span className="font-body text-xs text-secondary/50">({collection.productCount})</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Price Range */}
        <div className="border-b border-secondary/10 pb-4">
          <button onClick={() => toggleSection("price")} className="w-full flex justify-between items-center mb-3">
            <span className="font-heading text-secondary text-sm">Price Range</span>
            <ChevronDown className={`w-4 h-4 text-secondary transition-transform ${openSections.includes("price") ? "rotate-180" : ""}`} />
          </button>

          {openSections.includes("price") && (
            <div className="space-y-2">
              {priceOptions.map((option) => (
                <label key={option.id} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFilters.price?.includes(option.id)}
                    onChange={() => handleFilterChange("price", option.id)}
                    className="w-4 h-4 border-2 border-secondary/30 rounded text-secondary focus:ring-secondary"
                  />
                  <span className="font-body text-sm text-secondary/80 group-hover:text-secondary transition-colors flex-1">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Material & Style (Static) */}
        {(["material", "style"] as FilterGroup[]).map((key) => {
          const group = staticFilterGroups[key];
          return (
            <div key={key} className="border-b border-secondary/10 pb-4 last:border-b-0">
              <button onClick={() => toggleSection(key)} className="w-full flex justify-between items-center mb-3">
                <span className="font-heading text-secondary text-sm">{group.title}</span>
                <ChevronDown className={`w-4 h-4 text-secondary transition-transform ${openSections.includes(key) ? "rotate-180" : ""}`} />
              </button>

              {openSections.includes(key) && (
                <div className="space-y-2">
                  {group.options.map((option) => (
                    <label key={option.id} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedFilters[key]?.includes(option.id)}
                        onChange={() => handleFilterChange(key, option.id)}
                        className="w-4 h-4 border-2 border-secondary/30 rounded text-secondary focus:ring-secondary"
                      />
                      <span className="font-body text-sm text-secondary/80 group-hover:text-secondary transition-colors flex-1">{option.label}</span>
                      {option.count !== undefined && <span className="font-body text-xs text-secondary/50">({option.count})</span>}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Availability */}
        <div>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="w-4 h-4 border-2 border-secondary/30 rounded text-secondary focus:ring-secondary" />
            <span className="font-body text-sm text-secondary/80 group-hover:text-secondary transition-colors">In Stock Only</span>
          </label>
        </div>
      </div>
    </aside>
  );
};

export default ProductFiltersSidebar;
