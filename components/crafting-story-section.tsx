import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CraftingStorySectionProps {
  label?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  imagePath?: string;
  storyButtonText?: string;
  videoButtonText?: string;
}

const CraftingStorySection: React.FC<CraftingStorySectionProps> = ({
  label = "Story",
  heading = "CRAFTING FURNITURE",
  subheading = "THAT BREATHES LIFE",
  description = "We blend Scandinavian simplicity with tropical Indonesian woodworking traditions. Our furniture tells a story of craftsmanship, sustainability, and timeless design.",
  imagePath = "/crafting-story.jpg",
  storyButtonText = "Our story",
  videoButtonText = "Watch video",
}) => {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p className="font-body text-secondary text-sm mb-3 uppercase tracking-wide">{label}</p>
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-6 leading-tight">
              {heading}
              <br />
              {subheading}
            </h2>
            <p className="font-body text-secondary text-sm leading-relaxed mb-8 max-w-lg">{description}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="font-body border border-secondary text-secondary px-6 py-3 text-sm hover:bg-secondary hover:text-white transition-colors">{storyButtonText}</button>
              <button className="font-body flex items-center gap-2 text-secondary text-sm hover:gap-3 transition-all">
                {videoButtonText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image src={imagePath} alt="Crafting furniture story" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingStorySection;
