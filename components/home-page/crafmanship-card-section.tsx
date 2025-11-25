import React from "react";
import { Cuboid } from "lucide-react";
import Link from "next/link";

interface CraftsmanshipCard {
  icon?: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl?: string;
}

interface CraftsmanshipSectionProps {
  heading?: string;
  subheading?: string;
}

const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({ heading = "ESSENCE OF INDONESIAN", subheading = "Experience the heart of natural craftsmanship" }) => {
  const cards: CraftsmanshipCard[] = [
    {
      title: "PREMIUM TEAK WOOD SELECTION",
      description: "Every piece begins with the finest teak responsibly sourced from Indonesian forests. Strong, golden, and full of natural character, our wood is chosen to create furniture that lasts for generations",
      linkText: "Explore",
      linkUrl: "/blog/our-promise-to-nature",
    },
    {
      title: "SUSTAINABLE BY NATURE",
      description: "At Bumi Teak Furniture, we craft with respect for the earth. Our materials come from sustainable sources, ensuring that every design honours nature while enriching your home",
      linkText: "Learn",
      linkUrl: "/blog/the-beauty-of-premium-teak-wood",
    },
    {
      title: "MALAYSIA'S TRUSTED ONLINE FURNITURE STORE",
      description: "We bring premium teak furniture closer to you — beautifully handcrafted, customizable, and delivered across Malaysia. Experience quality, comfort, and convenience from the warmth of your home.",
      linkText: "Shop Online",
      linkUrl: "/blog/crafted-for-your-convenience",
    },
    {
      title: "WHERE HERITAGE MEETS DESIGN",
      description: "Inspired by Indonesian craftsmanship and global elegance — Modern, Classic, French, and Italian — every design carries the soul of tradition, shaped for today's modern living",
      linkText: "Journey",
      linkUrl: "/blog/where-heritage-meets-design",
    },
  ];

  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white font-heading mb-4">
            <div className="text-3xl md:text-4xl tracking-wide">{heading}</div>
            <div className="text-3xl md:text-4xl tracking-wide">CRAFTMANSHIP</div>
          </h2>
          <p className="text-gray-300 text-lg font-body">{subheading}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-secondary p-8 rounded-sm hover:bg-secondary/50 transition-all duration-300 group overflow-hidden">
              {/* Icon */}
              <div className="mb-6">
                <Cuboid className="w-10 h-10 text-gray-400 group-hover:text-white transition-colors" />
              </div>

              {/* Title */}
              <h5 className="text-white text-md font-heading mb-4 leading-tight">{card.title}</h5>

              {/* Description */}
              <p className="text-gray-400 hidden md:flex text-sm mb-6 leading-relaxed font-body">{card.description}</p>

              {/* Link - Conditional Rendering */}
              {card.linkUrl ? (
                <Link href={card.linkUrl}>
                  <button className="text-white text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-body">
                    {card.linkText}
                    <span className="text-lg">→</span>
                  </button>
                </Link>
              ) : (
                <button className="text-white text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-body" disabled>
                  {card.linkText}
                  <span className="text-lg">→</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
