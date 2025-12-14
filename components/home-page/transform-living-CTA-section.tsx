import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TransformLivingCTAProps {
  heading?: string;
  subheading?: string;
  description?: string;
  imagePath?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  contentAlignment?: "center" | "start";
}

const TransformLivingCTA: React.FC<TransformLivingCTAProps> = ({
  heading = "TRANSFORM YOUR LIVING",
  subheading = "SPACE",
  description = "Experience the raw beauty of Indonesian craftsmanship through our carefully curated teak furniture collection.",
  imagePath = "/images/hero-image.jpg",
  primaryButtonText = "Inquire",
  secondaryButtonText = "Learn More",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/about",
  contentAlignment = "start",
}) => {
  const containerAlignmentClasses = {
    center: "items-center",
    start: "items-start",
  };

  const contentAlignmentClasses = {
    center: "text-center mx-auto",
    start: "text-left",
  };

  const buttonAlignmentClasses = {
    center: "justify-center",
    start: "justify-start",
  };

  return (
    <section className="relative py-16 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt="Transform your living space"
          fill
          className="object-cover"
          style={{ objectPosition: "center 75%" }} // 80% dari atas (menampilkan bagian bawah lebih banyak)
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className={`container mx-auto px-6 lg:px-12 flex ${containerAlignmentClasses[contentAlignment]}`}>
          <div className={`max-w-3xl ${contentAlignmentClasses[contentAlignment]}`}>
            <h3 className="font-heading text-5xl md:text-6xl text-white mb-6 leading-tight">
              {heading} {subheading}
            </h3>
            <p className={`font-body text-white text-sm mb-8 leading-relaxed max-w-lg ${contentAlignment === "center" ? "mx-auto" : ""}`}>{description}</p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 ${buttonAlignmentClasses[contentAlignment]}`}>
              <Link href={primaryButtonLink}>
                <button className="font-body bg-white text-secondary px-8 py-3 text-sm hover:bg-light transition-colors">{primaryButtonText}</button>
              </Link>
              <Link href={secondaryButtonLink}>
                <button className="font-body border border-white text-white px-8 py-3 text-sm hover:bg-white hover:text-secondary transition-colors">{secondaryButtonText}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformLivingCTA;
