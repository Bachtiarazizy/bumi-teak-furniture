"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  title: string;
  options: FilterOption[];
}

interface ProductFiltersSidebarProps {
  onFilterChange?: (filters: unknown) => void;
}

const ProductFiltersSidebar: React.FC<ProductFiltersSidebarProps> = ({ onFilterChange }) => {
  const [openSections, setOpenSections] = useState<string[]>(["category", "price", "material"]);
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({
    category: [],
    price: [],
    material: [],
    style: [],
  });

  const filterGroups: { [key: string]: FilterGroup } = {
    category: {
      title: "Category",
      options: [
        { id: "dining", label: "Dining", count: 45 },
        { id: "living", label: "Living Room", count: 38 },
        { id: "bedroom", label: "Bedroom", count: 29 },
        { id: "outdoor", label: "Outdoor", count: 52 },
        { id: "office", label: "Office", count: 18 },
        { id: "storage", label: "Storage", count: 24 },
      ],
    },
    price: {
      title: "Price Range",
      options: [
        { id: "under-500", label: "Under $500" },
        { id: "500-1000", label: "$500 - $1,000" },
        { id: "1000-2000", label: "$1,000 - $2,000" },
        { id: "2000-5000", label: "$2,000 - $5,000" },
        { id: "above-5000", label: "Above $5,000" },
      ],
    },
    material: {
      title: "Material",
      options: [
        { id: "teak", label: "Solid Teak", count: 156 },
        { id: "teak-rattan", label: "Teak & Rattan", count: 32 },
        { id: "reclaimed", label: "Reclaimed Teak", count: 28 },
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

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]));
  };

  const handleFilterChange = (group: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const current = prev[group] || [];
      const updated = current.includes(optionId) ? current.filter((id) => id !== optionId) : [...current, optionId];

      const newFilters = { ...prev, [group]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      price: [],
      material: [],
      style: [],
    });
    onFilterChange?.({
      category: [],
      price: [],
      material: [],
      style: [],
    });
  };

  const activeFiltersCount = Object.values(selectedFilters).flat().length;

  return (
    <aside className="bg-white border border-secondary/10 rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-heading text-xl text-secondary">Filters</h3>
        {activeFiltersCount > 0 && (
          <button onClick={clearAllFilters} className="font-body text-sm text-secondary/70 hover:text-secondary transition-colors flex items-center gap-1">
            Clear all
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Groups */}
      <div className="space-y-6">
        {Object.entries(filterGroups).map(([key, group]) => (
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
        ))}
      </div>
    </aside>
  );
};

export default ProductFiltersSidebar;
