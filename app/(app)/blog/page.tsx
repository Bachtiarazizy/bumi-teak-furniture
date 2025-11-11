"use client";

import BlogCategories from "@/components/blog-page/blog-categories-section";
import BlogGrid from "@/components/blog-page/blog-grid-section";
import BlogHero from "@/components/blog-page/blog-hero-section";
import React, { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log("Category changed:", category);
    // Here you would typically fetch filtered posts from API
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BlogHero />

      {/* Categories Filter */}
      <BlogCategories onCategoryChange={handleCategoryChange} />

      {/* Blog Grid */}
      <BlogGrid />
    </main>
  );
}
