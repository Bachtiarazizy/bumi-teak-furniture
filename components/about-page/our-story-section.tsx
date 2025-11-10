import React from "react";
import Image from "next/image";

interface OurStoryProps {
  label?: string;
  heading?: string;
  story?: string[];
  imagePath?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  label = "Our Story",
  heading = "ROOTED IN TRADITION, CRAFTED FOR TODAY",
  story = [
    "Bumi Teak Furniture began in 2002 with a simple vision: to honor Indonesian woodworking heritage while creating furniture for modern living. What started in a small workshop in Jepara, the heart of Indonesia's furniture industry, has grown into a trusted name for authentic teak craftsmanship.",
    "Our founders, inspired by generations of master craftsmen, saw the need to preserve traditional techniques while adapting to contemporary design sensibilities. Every piece we create is a dialogue between past and present, where time-honored joinery meets clean, minimalist aesthetics.",
    "Today, we work directly with sustainable teak forests and local artisan communities, ensuring that every piece of furniture not only meets the highest quality standards but also supports responsible environmental practices and fair trade.",
  ],
  imagePath = "/our-story.jpg",
}) => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p className="font-body text-secondary text-sm mb-3 uppercase tracking-wide">{label}</p>
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-8 leading-tight">{heading}</h2>
            <div className="space-y-6">
              {story.map((paragraph, index) => (
                <p key={index} className="font-body text-secondary text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image src={imagePath} alt="Our story" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
