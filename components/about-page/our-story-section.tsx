import React from "react";
import Image from "next/image";

interface OurStoryProps {
  label?: string;
  heading?: string;
  story?: string[];
  imagePath?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  label = "About Us",
  heading = "ROOTED IN TRADITION, CRAFTED FOR TODAY",
  story = [
    "Every home has a story, and at Bumi Teak Furniture, we believe your furniture should tell it beautifully. Each space deserves pieces that reflect who you are, what you love, and how you live.",
    "Our journey began with a simple idea: to bring the timeless beauty of teak wood into modern Malaysian homes. What started as a passion for quality craftsmanship soon became a purpose to create furniture that bridges the warmth of nature with the elegance of design.",
    "We wanted to create furniture that feels personal, pieces that don’t just fill a space, but add soul, warmth, and character to it. Furniture that invites you to sit longer, laugh louder, and live better.",
    "As an online furniture brand, we make premium teak furniture accessible to everyone, from bustling city apartments to serene countryside homes. With just a few clicks, Malaysians can now explore and own high-quality, handcrafted pieces without stepping into a showroom.",
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
            <h3 className="font-heading text-4xl md:text-5xl text-secondary mb-8 leading-tight">{heading}</h3>
            <div className="space-y-6">
              {story.map((paragraph, index) => (
                <p key={index} className="font-body text-secondary text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative hidden md:block h-[500px] rounded-lg overflow-hidden">
            <Image src={imagePath} alt="Our story" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
