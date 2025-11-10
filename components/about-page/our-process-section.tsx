import React from "react";
import Image from "next/image";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  imagePath: string;
}

interface OurProcessProps {
  heading?: string;
  subheading?: string;
}

const OurProcess: React.FC<OurProcessProps> = ({ heading = "FROM FOREST TO HOME", subheading = "Our meticulous journey of crafting excellence" }) => {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Sustainable Selection",
      description: "We carefully source teak from certified sustainable forests in Indonesia, ensuring each tree is harvested responsibly with proper permits and reforestation commitments.",
      imagePath: "/images/crafting-story.jpg",
    },
    {
      number: "02",
      title: "Natural Seasoning",
      description: "The wood undergoes traditional air-drying for 12-18 months, allowing natural moisture to escape gradually. This patience ensures stability and prevents cracking in finished pieces.",
      imagePath: "/images/crafting-story.jpg",
    },
    {
      number: "03",
      title: "Master Craftsmanship",
      description: "Our skilled artisans, many with decades of experience, handcraft each piece using traditional joinery techniques combined with modern precision tools.",
      imagePath: "/images/crafting-story.jpg",
    },
    {
      number: "04",
      title: "Finishing Touch",
      description: "Each piece receives multiple rounds of hand-sanding and natural finishing treatments, bringing out the wood's inherent beauty while protecting it for generations.",
      imagePath: "/images/crafting-story.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-4">{heading}</h2>
          <p className="font-body text-secondary text-sm">{subheading}</p>
        </div>

        {/* Process Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-heading text-5xl text-secondary/20">{step.number}</span>
                  <h3 className="font-heading text-2xl md:text-3xl text-secondary">{step.title}</h3>
                </div>
                <p className="font-body text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Image */}
              <div className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={step.imagePath} alt={step.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
