import React from "react";
import { Heart, Leaf, Users, Award } from "lucide-react";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface OurValuesProps {
  heading?: string;
  subheading?: string;
}

const OurValues: React.FC<OurValuesProps> = ({ heading = "OUR VALUES", subheading = "The principles that guide every piece we create" }) => {
  const values: Value[] = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authentic Craftsmanship",
      description: "We honor traditional woodworking techniques passed down through generations, ensuring each piece carries the soul of Indonesian heritage.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Sourcing",
      description: "Our commitment to the environment means working only with certified sustainable teak forests and supporting reforestation initiatives.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Partnership",
      description: "We collaborate directly with local artisan communities, ensuring fair wages and preserving traditional skills for future generations.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Timeless Quality",
      description: "Every piece is built to last generations, developing character over time rather than deteriorating—furniture that becomes family heirlooms.",
    },
  ];

  return (
    <section className="bg-light/50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-4">{heading}</h2>
          <p className="font-body text-secondary text-base md:text-md">{subheading}</p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-secondary mb-4">{value.icon}</div>
              <h5 className="font-heading text-xl text-secondary mb-3">{value.title}</h5>
              <p className="font-body text-secondary text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
