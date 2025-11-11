import React from "react";
import Image from "next/image";

interface TransformLivingCTAProps {
  heading?: string;
  subheading?: string;
  description?: string;
  imagePath?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const TransformLivingCTA: React.FC<TransformLivingCTAProps> = ({
  heading = "TRANSFORM YOUR LIVING",
  subheading = "SPACE",
  description = "Experience the raw beauty of Indonesian craftsmanship through our carefully curated teak furniture collection.",
  imagePath = "/images/hero-image.jpg",
  primaryButtonText = "Inquire",
  secondaryButtonText = "Connect",
}) => {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={imagePath} alt="Transform your living space" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h3 className="font-heading text-5xl md:text-6xl text-white mb-6 leading-tight">
              {heading} {subheading}
            </h3>
            <p className="font-body text-white text-sm mb-8 leading-relaxed max-w-lg">{description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="font-body bg-white text-secondary px-8 py-3 text-sm hover:bg-light transition-colors">{primaryButtonText}</button>
              <button className="font-body border border-white text-white px-8 py-3 text-sm hover:bg-white hover:text-secondary transition-colors">{secondaryButtonText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformLivingCTA;
