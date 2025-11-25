/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import BlogHero from "./blog-hero-section";
import BlogCategories from "./blog-categories-section";
import BlogGrid from "./blog-grid-section";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface Category {
  id: string;
  label: string;
  count: number;
}

interface BlogPageClientProps {
  initialPosts: any[];
  categories: any[];
}

export default function BlogPageClient({ initialPosts, categories }: BlogPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Transform Sanity data to BlogPost format
  const transformedPosts: BlogPost[] = useMemo(() => {
    return initialPosts.map((post) => ({
      id: post._id,
      slug: post.slug?.current || post._id,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category?.name || "Uncategorized",
      author: post.author?.name || "Anonymous",
      date: post.publishedAt,
      readTime: post.readTime || "5 min read",
      image: post.mainImage?.asset?.url || "/blog/post.jpg",
      featured: post.featured || false,
    }));
  }, [initialPosts]);

  // Transform categories with post counts
  const transformedCategories: Category[] = useMemo(() => {
    const cats: Category[] = [{ id: "all", label: "All Posts", count: transformedPosts.length }];

    categories.forEach((cat) => {
      cats.push({
        id: cat.slug?.current || cat.slug || cat.name.toLowerCase().replace(/\s+/g, "-"),
        label: cat.name,
        count: cat.postCount || 0,
      });
    });

    return cats;
  }, [categories, transformedPosts]);

  // Filter posts by selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return transformedPosts;
    }
    return transformedPosts.filter((post) => {
      const categorySlug = post.category.toLowerCase().replace(/\s+/g, "-");
      return categorySlug === selectedCategory;
    });
  }, [selectedCategory, transformedPosts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BlogHero />

      {/* Categories Filter */}
      <BlogCategories categories={transformedCategories} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />

      {/* Blog Grid */}
      <BlogGrid posts={filteredPosts} />
    </main>
  );
}
