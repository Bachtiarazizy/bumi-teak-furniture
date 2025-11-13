"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Download, Search, ArrowRight } from "lucide-react";
import InformationPageHero from "@/components/layout/page-hero-section";

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  downloadable: boolean;
}

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const guides: Guide[] = [
    {
      id: "1",
      title: "Complete Teak Furniture Buying Guide",
      description: "Everything you need to know before purchasing teak furniture. Learn about wood grades, construction methods, and how to identify quality craftsmanship.",
      category: "Buying Guides",
      readTime: "12 min read",
      image: "/images/guides/buying-guide.jpg",
      downloadable: true,
    },
    {
      id: "2",
      title: "Indoor Teak Furniture Care & Maintenance",
      description: "A comprehensive guide to keeping your indoor teak furniture looking beautiful for generations. Includes cleaning tips, oil application, and stain removal.",
      category: "Care & Maintenance",
      readTime: "8 min read",
      image: "/images/guides/indoor-care.jpg",
      downloadable: true,
    },
    {
      id: "3",
      title: "Outdoor Teak Furniture Weathering Guide",
      description: "Understand the natural weathering process of outdoor teak. Learn how to maintain golden color or embrace the silver-gray patina.",
      category: "Care & Maintenance",
      readTime: "10 min read",
      image: "/images/guides/outdoor-care.jpg",
      downloadable: true,
    },
    {
      id: "4",
      title: "Mixing Traditional & Modern Furniture Styles",
      description: "Expert design tips for creating harmonious spaces that blend contemporary aesthetics with classic teak pieces. Includes room-by-room examples.",
      category: "Design Tips",
      readTime: "15 min read",
      image: "/images/guides/mixing-styles.jpg",
      downloadable: false,
    },
    {
      id: "5",
      title: "Sustainable Teak: From Forest to Home",
      description: "Learn about sustainable teak sourcing, FSC certification, and how choosing teak furniture supports responsible forestry and local communities.",
      category: "Sustainability",
      readTime: "10 min read",
      image: "/images/guides/sustainability.jpg",
      downloadable: true,
    },
    {
      id: "6",
      title: "Custom Furniture Design Process",
      description: "A step-by-step guide to our custom furniture design process. Learn what to expect, how to communicate your vision, and timeline expectations.",
      category: "Custom Orders",
      readTime: "7 min read",
      image: "/images/guides/custom-process.jpg",
      downloadable: false,
    },
    {
      id: "7",
      title: "Dining Room Furniture Selection Guide",
      description: "How to choose the perfect dining table and chairs for your space. Covers sizing, seating capacity, style matching, and wood finishes.",
      category: "Room Guides",
      readTime: "12 min read",
      image: "/images/guides/dining-room.jpg",
      downloadable: true,
    },
    {
      id: "8",
      title: "Living Room Layout & Furniture Placement",
      description: "Professional tips for arranging teak furniture in your living room. Learn about traffic flow, focal points, and creating conversation areas.",
      category: "Room Guides",
      readTime: "9 min read",
      image: "/images/guides/living-room.jpg",
      downloadable: false,
    },
    {
      id: "9",
      title: "Teak Oil Application: Complete Tutorial",
      description: "Master the art of teak oil application with our detailed tutorial. Includes product recommendations, application techniques, and maintenance schedule.",
      category: "Care & Maintenance",
      readTime: "6 min read",
      image: "/images/guides/teak-oil.jpg",
      downloadable: true,
    },
  ];

  const categories = ["all", "Buying Guides", "Care & Maintenance", "Design Tips", "Sustainability", "Custom Orders", "Room Guides"];

  const filteredGuides = guides.filter((guide) => {
    const matchesCategory = selectedCategory === "all" || guide.category === selectedCategory;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      <InformationPageHero title="Furniture Guides" description="Expert advice on selecting, caring for, and styling your teak furniture. From buying guides to maintenance tips, we've got you covered." imagePath="/images/hero-image.jpg" />

      {/* Featured Guide */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <Link href="/guides/1" className="block group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-light rounded-lg overflow-hidden">
                <div className="relative h-96 lg:h-auto">
                  <Image src="/images/guides/featured.jpg" alt="Featured guide" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-2 text-sm font-body rounded">Featured Guide</div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="font-body text-sm text-secondary/60 mb-3 uppercase tracking-wide">Ultimate Resource</span>
                  <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4 group-hover:text-secondary/70 transition-colors">The Complete Guide to Teak Furniture</h2>
                  <p className="font-body text-secondary text-sm leading-relaxed mb-6">
                    Our most comprehensive guide covering everything from wood selection and construction methods to styling tips and long-term care. Perfect for first-time buyers and seasoned collectors alike.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-body text-secondary/60 mb-6">
                    <span>45 min read</span>
                    <span>•</span>
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Downloadable PDF
                    </span>
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
            <div className="mb-12 -mx-6 px-6 lg:mx-0 lg:px-0">
              <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 font-body text-sm rounded-full transition-colors whitespace-nowrap ${
                      selectedCategory === category ? "bg-secondary text-white" : "bg-white text-secondary hover:bg-secondary/10 border border-secondary/20"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => (
                <Link href={`/guides/${guide.id}`} key={guide.id} className="group">
                  {/* Image */}
                  <div className="relative h-64 mb-4 overflow-hidden bg-light rounded-lg">
                    <Image src={guide.image} alt={guide.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
                    <h4 className="font-heading text-xl text-secondary mb-3 group-hover:text-secondary/70 transition-colors">{guide.title}</h4>
                    <p className="font-body text-secondary text-sm leading-relaxed mb-4">{guide.description}</p>
                    <div className="flex items-center gap-2 font-body text-sm text-secondary group-hover:gap-3 transition-all">
                      Read Guide
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredGuides.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-secondary/20 mx-auto mb-4" />
                <p className="font-body text-secondary/60">No guides found matching your search. Try a different search term or category.</p>
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
    </main>
  );
}
