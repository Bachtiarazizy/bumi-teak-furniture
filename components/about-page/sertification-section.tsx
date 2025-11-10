import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface Certification {
  name: string;
  description: string;
  logo?: string;
}

interface CertificationsSectionProps {
  heading?: string;
  subheading?: string;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ heading = "CERTIFIED EXCELLENCE", subheading = "Our commitment to quality and sustainability is recognized globally" }) => {
  const certifications: Certification[] = [
    {
      name: "FSC Certified",
      description: "Forest Stewardship Council certification ensures our teak comes from responsibly managed forests.",
      logo: "/cert-fsc.png",
    },
    {
      name: "Fair Trade Verified",
      description: "We guarantee fair wages and safe working conditions for all our artisan partners.",
      logo: "/cert-fairtrade.png",
    },
    {
      name: "ISO 9001:2015",
      description: "International quality management standards certification for consistent excellence.",
      logo: "/cert-iso.png",
    },
    {
      name: "SVLK Certified",
      description: "Indonesian Timber Legality Verification System ensures all our wood is legally sourced.",
      logo: "/cert-svlk.png",
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="flex gap-6 p-6 border border-secondary/10 rounded-lg hover:border-secondary/30 transition-colors">
              {/* Icon/Logo */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-secondary/5 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading text-xl text-secondary mb-2">{cert.name}</h3>
                <p className="font-body text-secondary text-sm leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
