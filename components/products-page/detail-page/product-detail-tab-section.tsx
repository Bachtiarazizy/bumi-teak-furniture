"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

interface ProductTabsProps {
  specifications?: { [key: string]: string };
  reviews?: Review[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  specifications = {
    Material: "Solid Indonesian Teak",
    Dimensions: '78"L x 39"W x 30"H',
    Weight: "165 lbs",
    Finish: "Natural oil finish",
    "Seating Capacity": "6-8 people",
    Assembly: "Minimal assembly required",
    Care: "Clean with mild soap and water, apply teak oil annually",
    Origin: "Handcrafted in Jepara, Indonesia",
  },
  reviews = [
    {
      id: "1",
      author: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      comment: "Absolutely stunning table! The craftsmanship is impeccable and the wood grain is gorgeous. Worth every penny.",
      verified: true,
    },
    {
      id: "2",
      author: "Michael Chen",
      rating: 5,
      date: "2024-01-10",
      comment: "Best furniture investment we've made. The quality is outstanding and it arrived perfectly packaged.",
      verified: true,
    },
    {
      id: "3",
      author: "Emma Wilson",
      rating: 4,
      date: "2024-01-05",
      comment: "Beautiful table, very solid construction. Only minor issue was delivery took a bit longer than expected.",
      verified: true,
    },
  ],
}) => {
  const [activeTab, setActiveTab] = useState<"description" | "specifications" | "reviews">("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: `Reviews (${reviews.length})` },
  ];

  return (
    <div className="bg-white border border-secondary/10 rounded-lg">
      {/* Tabs Header */}
      <div className="flex border-b border-secondary/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as never)}
            className={`flex-1 px-6 py-4 font-body text-sm transition-colors ${activeTab === tab.id ? "text-secondary border-b-2 border-secondary bg-secondary/5" : "text-secondary/60 hover:text-secondary hover:bg-secondary/5"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-8">
        {/* Description Tab */}
        {activeTab === "description" && (
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-secondary mb-4">Product Description</h3>
            <p className="font-body text-secondary text-sm leading-relaxed">
              The Sunset Dining Table is a masterpiece of Indonesian craftsmanship, meticulously handcrafted from premium teak wood sourced from sustainable forests. Each table is unique, showcasing the natural beauty and character of the
              wood through its distinctive grain patterns and warm honey tones.
            </p>
            <p className="font-body text-secondary text-sm leading-relaxed">
              Our master artisans in Jepara, Indonesia&apos;s historic furniture-making center, employ traditional joinery techniques passed down through generations. The table features mortise and tenon joints for exceptional structural
              integrity, ensuring it will serve your family for decades to come.
            </p>
            <p className="font-body text-secondary text-sm leading-relaxed">
              The natural oil finish enhances the wood&apos;s inherent beauty while providing protection. Over time, your table will develop a rich patina that adds character and depth, making it truly one-of-a-kind.
            </p>

            <h4 className="font-heading text-lg text-secondary mt-6 mb-3">Key Features:</h4>
            <ul className="list-disc list-inside space-y-2 font-body text-secondary text-sm">
              <li>100% solid Indonesian teak, no veneers or particle board</li>
              <li>Traditional mortise and tenon joinery for superior strength</li>
              <li>Natural oil finish highlights the wood&apos;s beauty</li>
              <li>Seats 6-8 people comfortably</li>
              <li>Suitable for both indoor and covered outdoor use</li>
              <li>Eco-friendly: sourced from FSC-certified sustainable forests</li>
            </ul>
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specifications" && (
          <div>
            <h3 className="font-heading text-2xl text-secondary mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="flex border-b border-secondary/10 pb-3">
                  <span className="font-body text-sm text-secondary/60 w-1/2">{key}:</span>
                  <span className="font-body text-sm text-secondary w-1/2">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-heading text-2xl text-secondary mb-2">Customer Reviews</h3>
                <p className="font-body text-sm text-secondary/60">Based on {reviews.length} reviews</p>
              </div>
              <button className="font-body text-sm text-white bg-secondary px-6 py-2 rounded hover:bg-secondary/90 transition-colors">Write a Review</button>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-secondary/10 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-body text-secondary font-medium">{review.author}</span>
                        {review.verified && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-body">Verified Purchase</span>}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-secondary text-secondary" : "text-secondary/20"}`} />
                          ))}
                        </div>
                        <span className="font-body text-xs text-secondary/60">
                          {new Date(review.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-sm text-secondary leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
