import React from "react";

interface LegalPageHeroProps {
  title: string;
  lastUpdated?: string;
  description?: string;
}

const LegalPageHero: React.FC<LegalPageHeroProps> = ({ title, lastUpdated, description }) => {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-4">{title}</h1>
          {lastUpdated && <p className="font-body text-sm text-secondary/60 mb-4">Last Updated: {lastUpdated}</p>}
          {description && <p className="font-body text-secondary text-base md:text-md leading-relaxed">{description}</p>}
        </div>
      </div>
    </section>
  );
};

export default LegalPageHero;
