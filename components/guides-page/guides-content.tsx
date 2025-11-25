"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Download, Search, ArrowRight } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";

interface SanityImage {
  asset: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
}

interface Guide {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  category: string;
  readTime: string;
  image: SanityImage;
  downloadable: boolean;
  featured?: boolean;
}

interface GuidesContentProps {
  guides: Guide[];
  featuredGuide?: Guide;
}

// Display categories (what user sees) - must match exactly with Sanity schema values
const displayCategories = ["all", "Buying Guides", "Care & Maintenance", "Design Tips", "Sustainability", "Custom Orders", "Room Guides"];

export default function GuidesContent({ guides, featuredGuide }: GuidesContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter guides based on search and category
  const filteredGuides = useMemo(() => {
    let filtered = guides.filter((guide) => {
      // Exclude featured guide from regular list
      if (featuredGuide && guide._id === featuredGuide._id) {
        return false;
      }
      return true;
    });

    // Filter by category - direct comparison, no mapping needed
    if (selectedCategory !== "all") {
      filtered = filtered.filter((guide) => guide.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((guide) => {
        const searchLower = searchQuery.toLowerCase();
        return guide.title.toLowerCase().includes(searchLower) || guide.description.toLowerCase().includes(searchLower);
      });
    }

    return filtered;
  }, [guides, selectedCategory, searchQuery, featuredGuide]);

  return (
    <>
      {/* Featured Guide */}
      {featuredGuide && (
        <section className="bg-white py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <Link href={`/guides/${featuredGuide.slug.current}`} className="block group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-light rounded-lg overflow-hidden">
                  <div className="relative h-96 lg:h-auto">
                    <Image
                      src={featuredGuide.image?.asset ? urlForImage(featuredGuide.image.asset).width(800).height(600).url() : "/images/guides/featured.jpg"}
                      alt={featuredGuide.image?.alt || featuredGuide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-2 text-sm font-body rounded">Featured Guide</div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="font-body text-sm text-secondary/60 mb-3 uppercase tracking-wide">{featuredGuide.category}</span>
                    <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4 group-hover:text-secondary/70 transition-colors">{featuredGuide.title}</h2>
                    <p className="font-body text-secondary text-sm leading-relaxed mb-6">{featuredGuide.description}</p>
                    <div className="flex items-center gap-4 text-sm font-body text-secondary/60 mb-6">
                      <span>{featuredGuide.readTime}</span>
                      {featuredGuide.downloadable && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Downloadable PDF
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 font-body text-secondary group-hover:gap-3 transition-all">
                      Read Full Guide
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Search & Filter */}
      <section className="bg-light py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides..."
                className="w-full pl-12 pr-4 py-3 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary transition-colors font-body text-sm bg-white"
              />
            </div>

            {/* Category Filters */}
            <div className="-mx-6 px-6 lg:mx-0 lg:px-0">
              <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible scrollbar-hide">
                {displayCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 font-body text-sm rounded-full transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category ? "bg-secondary text-white scale-105 shadow-md" : "bg-white text-secondary hover:bg-secondary/10 hover:scale-105 border border-secondary/20"
                    }`}
                  >
                    {category === "all" ? "All Guides" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {filteredGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGuides.map((guide, index) => {
                  const imageUrl = guide.image?.asset ? urlForImage(guide.image.asset).width(600).height(400).url() : "/images/guides/placeholder.jpg";

                  return (
                    <Link href={`/guides/${guide.slug.current}`} key={guide._id} className="group opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}>
                      {/* Image */}
                      <div className="relative h-64 mb-4 overflow-hidden bg-light rounded-lg">
                        <Image src={imageUrl} alt={guide.image?.alt || guide.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        {guide.downloadable && (
                          <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                            <Download className="w-4 h-4 text-secondary" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-body text-xs text-secondary/60 uppercase tracking-wide">{guide.category}</span>
                          <span className="text-secondary/40">•</span>
                          <span className="font-body text-xs text-secondary/60">{guide.readTime}</span>
                        </div>
                        <h5 className="font-heading text-lg text-secondary mb-3 group-hover:text-secondary/70 transition-colors line-clamp-2">{guide.title}</h5>
                        <p className="font-body text-secondary text-sm leading-relaxed mb-4 line-clamp-3">{guide.description}</p>
                        <div className="flex items-center gap-2 font-body text-sm text-secondary group-hover:gap-3 transition-all">
                          Read Guide
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 animate-fadeIn">
                <BookOpen className="w-16 h-16 text-secondary/20 mx-auto mb-4" />
                <p className="font-body text-secondary/60 mb-4">No guides found matching your search. Try a different search term or category.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="text-secondary underline hover:text-secondary/70 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg text-center border border-secondary/10">
              <BookOpen className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-secondary mb-3">Get New Guides in Your Inbox</h3>
              <p className="font-body text-secondary text-sm mb-6 max-w-2xl mx-auto">Subscribe to our newsletter and receive new guides, care tips, and exclusive furniture insights delivered monthly.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body text-sm" />
                <button className="bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
