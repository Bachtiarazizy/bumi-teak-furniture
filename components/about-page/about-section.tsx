import React from "react";
import Image from "next/image";

interface InfoFeature {
  title: string;
  description: string;
}

interface AboutSectionProps {
  story?: string[];
  imagePath?: string;
  features?: InfoFeature[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  story = [
    "Each design is inspired by the world’s most beloved styles, Modern, Classic, French, and Italian and carefully refined to suit the Malaysian lifestyle. We take inspiration from global art and architecture, yet every piece is grounded in the simplicity and soul of nature",
    "Every piece we craft begins with nature’s finest teak wood, known for its strength, durability, and graceful ageing. From there, our artisans shape it with precision and heart, ensuring every curve, joint, and texture reflects the artistry of true craftsmanship. Behind every creation is a story of patience, skill, and respect for the wood’s natural beauty.",
    "At Bumi Teak Furniture, we understand that your home is more than just a place; it’s where moments are shared, families grow, and memories are made. That’s why we take pride in creating furniture that stands the test of time both in quality and emotion.",
    "From custom-made statement pieces to cozy outdoor sets, each creation carries the same promise: to bring natural beauty, comfort, and authenticity into your life. Whether it’s a dining table that brings your family together or a teak bench that transforms your garden, we’re here to make every corner of your home feel complete.",
    "Proudly based in Malaysia 🇲🇾, we deliver across the nation, helping you transform your space with furniture crafted from nature’s heart and perfected by hand.",
    "Bumi Teak Furniture — From Nature’s Heart to Your Home.",
  ],
  imagePath = "/images/transforming-wood.jpg",
}) => {
  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image src={imagePath} alt="Transforming wood into living spaces" fill className="object-cover" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="space-y-4">
              {story.map((paragraph, index) => (
                <p key={index} className="font-body text-secondary text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
