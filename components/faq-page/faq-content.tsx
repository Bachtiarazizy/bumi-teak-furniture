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
    <section className="bg-white py-8 md:py-16">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 pb-6 md:pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-4 md:pt-6">
          {/* Search Bar - Responsive */}
          <div className="mb-4 md:mb-8">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-secondary/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3.5 text-sm md:text-base border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body"
              />
            </div>
          </div>

          {/* Category Filters - Responsive */}
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
            <div
              className="flex gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-0 lg:flex-wrap lg:justify-center lg:overflow-visible 
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 md:px-6 py-2 md:py-2.5 font-body text-xs md:text-sm rounded-full transition-all duration-300 whitespace-nowrap ${
                  !selectedCategory ? "bg-secondary text-white scale-105 shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                All Topics
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 md:px-6 py-2 md:py-2.5 font-body text-xs md:text-sm rounded-full transition-all duration-300 flex items-center gap-1.5 md:gap-2 whitespace-nowrap ${
                    selectedCategory === category.id ? "bg-secondary text-white scale-105 shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  <category.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split("&")[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* FAQ Categories */}
          {filteredCategories.length > 0 ? (
            <div className="space-y-8 md:space-y-12">
              {filteredCategories.map((category) => (
                <div key={category.id} className="animate-fadeIn">
                  <div className="flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <category.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                    </div>
                    <h4 className="font-heading text-secondary text-base md:text-lg">{category.title}</h4>
                  </div>

                  {/* FAQ List */}
                  <div className="space-y-0">
                    {category.faqs.map((faq) => {
                      const isOpen = openIndex === faq._id;

                      return (
                        <div key={faq._id} className="border-b border-secondary/20">
                          <button onClick={() => toggleFAQ(faq._id)} className="w-full py-4 md:py-6 flex justify-between items-start text-left hover:opacity-70 transition-opacity gap-4">
                            <span className="font-body text-secondary font-medium text-sm md:text-base">{faq.question}</span>
                            <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 text-secondary shrink-0 mt-0.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4 md:pb-6" : "max-h-0"}`}>
                            <p className="font-body text-secondary text-xs md:text-sm leading-relaxed whitespace-pre-line">{faq.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-16 animate-fadeIn">
              <Search className="w-12 h-12 md:w-16 md:h-16 text-secondary/20 mx-auto mb-4" />
              <p className="text-gray-500 text-base md:text-lg">No FAQs found matching your search</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="mt-4 text-sm md:text-base text-secondary underline hover:text-secondary/70 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Still Have Questions CTA */}
          <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-secondary/20">
            <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
              <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-secondary shrink-0 mb-1" />
              <h4 className="font-heading text-secondary leading-none text-sm md:text-base">NEED MORE INFORMATION?</h4>
            </div>
            <p className="font-body text-secondary text-xs md:text-sm mb-4 md:mb-6 max-w-2xl">
              Can&apos;t find the answer you&apos;re looking for? Our customer service team is ready to help with any questions about our products, ordering process, or anything else.
            </p>
            <div className="flex flex-row gap-3 md:gap-4">
              <a href="/contact" className="inline-block text-center bg-secondary text-white px-6 md:px-8 py-2.5 md:py-3 font-body text-xs md:text-sm hover:bg-secondary/90 transition-colors">
                Contact Support
              </a>

              <a
                href="mailto:info@bumiteakfurniture.com"
                className="inline-block text-center border border-secondary text-secondary px-6 md:px-8 py-2.5 md:py-3 font-body text-xs md:text-sm hover:bg-secondary hover:text-white transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
