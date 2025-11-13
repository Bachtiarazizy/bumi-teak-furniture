import React from "react";

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

interface StatsSectionProps {
  heading?: string;
  stats?: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({
  heading = "TWO DECADES OF EXCELLENCE",
  stats = [
    {
      number: "20",
      suffix: "+",
      label: "Years of Craftsmanship",
    },
    {
      number: "5000",
      suffix: "+",
      label: "Pieces Created",
    },
    {
      number: "45",
      suffix: "+",
      label: "Master Artisans",
    },
    {
      number: "30",
      suffix: "+",
      label: "Countries Served",
    },
  ],
}) => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-16">{heading}</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-3xl md:text-4xl text-white mb-3">
                {stat.number}
                {stat.suffix && <span className="text-light">{stat.suffix}</span>}
              </div>
              <p className="font-body text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
