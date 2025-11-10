import React from "react";
import Image from "next/image";

interface InfoFeature {
  title: string;
  description: string;
}

interface TransformingWoodSectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
  imagePath?: string;
  features?: InfoFeature[];
}

const TransformingWoodSection: React.FC<TransformingWoodSectionProps> = ({
  heading = "TRANSFORMING WOOD",
  subheading = "INTO LIVING SPACES",
  description = "Our furniture bridges the gap between functional design and natural beauty. We create pieces that breathe with the spirit of Indonesian craftsmanship.",
  imagePath = "/images/transforming-wood.jpg",
  features = [
    {
      title: "PRECISION ENGINEERING",
      description: "Carefully measured joints and smooth lines ensure each piece stands strong and elegant.",
    },
    {
      title: "EMOTIONAL CONNECTION",
      description: "Every furniture piece carries the warmth of human touch and generations of woodworking wisdom.",
    },
  ],
}) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image src={imagePath} alt="Transforming wood into living spaces" fill className="object-cover" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-6 leading-tight">
              {heading} {subheading}
            </h2>
            <p className="font-body text-secondary text-sm leading-relaxed mb-10">{description}</p>

            {/* Features */}
            <div className="flex space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h5 className="font-heading text-lg text-secondary mb-3 uppercase tracking-wide">{feature.title}</h5>
                  <p className="font-body text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformingWoodSection;
