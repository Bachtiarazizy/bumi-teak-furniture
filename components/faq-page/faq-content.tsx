"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown, Search, HelpCircle, Package, CreditCard, Truck, Settings } from "lucide-react";

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  category: string;
  order?: number;
}

interface FAQContentProps {
  faqs: FAQItem[];
}

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: FAQCategory[] = [
  {
    id: "products",
    title: "Products & Materials",
    icon: Package,
  },
  {
    id: "ordering",
    title: "Ordering & Payment",
    icon: CreditCard,
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: Truck,
  },
  {
    id: "care",
    title: "Care & Maintenance",
    icon: Settings,
  },
];

export default function FAQContent({ faqs }: FAQContentProps) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleFAQ = (faqId: string) => {
    setOpenIndex(openIndex === faqId ? null : faqId);
  };

  // Group FAQs by category and filter based on search and selected category
  const filteredCategories = useMemo(() => {
    // Filter FAQs by search query
    const searchFiltered = searchQuery ? faqs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase())) : faqs;

    // Filter by selected category
    const categoryFiltered = selectedCategory ? searchFiltered.filter((faq) => faq.category === selectedCategory) : searchFiltered;

    // Group by category
    const grouped = categories
      .map((category) => ({
        ...category,
        faqs: categoryFiltered.filter((faq) => faq.category === category.id),
      }))
      .filter((category) => category.faqs.length > 0);

    return grouped;
  }, [faqs, searchQuery, selectedCategory]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body text-sm"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-12 -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2.5 font-body text-sm rounded-full transition-all duration-300 whitespace-nowrap ${
                  !selectedCategory ? "bg-secondary text-white scale-105 shadow-md" : "bg-light text-secondary hover:bg-secondary/10 hover:scale-105"
                }`}
              >
                All Topics
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 font-body text-sm rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    selectedCategory === category.id ? "bg-secondary text-white scale-105 shadow-md" : "bg-light text-secondary hover:bg-secondary/10 hover:scale-105"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Categories */}
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {filteredCategories.map((category) => (
                <div key={category.id} className="animate-fadeIn">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="font-heading text-secondary">{category.title}</h4>
                  </div>

                  {/* FAQ List */}
                  <div className="space-y-0">
                    {category.faqs.map((faq) => {
                      const isOpen = openIndex === faq._id;

                      return (
                        <div key={faq._id} className="border-b border-secondary/20">
                          <button onClick={() => toggleFAQ(faq._id)} className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity">
                            <span className="font-body text-secondary font-medium pr-8">{faq.question}</span>
                            <ChevronDown className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
                            <p className="font-body text-secondary text-sm leading-relaxed whitespace-pre-line">{faq.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fadeIn">
              <Search className="w-16 h-16 text-secondary/20 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No FAQs found matching your search</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="mt-4 text-secondary underline hover:text-secondary/70 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Still Have Questions CTA */}
          <div className="mt-16 pt-12 border-t border-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-secondary shrink-0 mb-1" />
              <h4 className="font-heading text-secondary leading-none">NEED MORE INFORMATION?</h4>
            </div>
            <p className="font-body text-secondary text-sm mb-6 max-w-2xl">
              Can&apos;t find the answer you&apos;re looking for? Our customer service team is ready to help with any questions about our products, ordering process, or anything else.
            </p>
            <div className="flex gap-4">
              <a href="/contact" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors">
                Contact Support
              </a>

              <a href="mailto:info@bumiteakfurniture.com" className="inline-block border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary hover:text-white transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
