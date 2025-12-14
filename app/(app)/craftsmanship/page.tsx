import React from "react";
import { CheckCircle, Trees } from "lucide-react";
import InformationPageHero from "@/components/layout/page-hero-section";
import TransformLivingCTA from "@/components/home-page/transform-living-CTA-section";

const processSteps = [
  {
    number: "01",
    title: "Material Selection",
    description: "We source premium grade teak wood from sustainable plantations, choosing each log for its grain pattern, color consistency, and natural strength.",
  },
  {
    number: "02",
    title: "Drying & Seasoning",
    description: "The wood is dried and seasoned to achieve optimal moisture levels, ensuring stability and resistance to warping over time.",
  },
  {
    number: "03",
    title: "Expert Crafting",
    description: "Each piece is shaped by artisans using traditional techniques enhanced by modern tools, allowing for both accuracy and a handcrafted touch.",
  },
  {
    number: "04",
    title: "Finishing & Quality Control",
    description: "Multiple layers of finishing bring out the wood’s natural beauty. Every product undergoes a thorough quality inspection before it leaves our hands.",
  },
];

const qualities = [
  {
    title: "Sustainable Sourcing",
    description: "We use certified teak from responsibly managed plantations.",
  },
  {
    title: "Traditional Techniques",
    description: "We honor time-tested woodworking methods that highlight the beauty of natural materials.",
  },
  {
    title: "Modern Precision",
    description: "Advanced tools enhance accuracy, consistency, and durability.",
  },
  {
    title: "Attention to Detail",
    description: "Every joint, curve, and texture is crafted with meticulous care.",
  },
  {
    title: "Built for Longevity",
    description: "Our furniture is designed to withstand daily use and last for generations.",
  },
  {
    title: "Custom Solutions",
    description: "We offer tailor-made pieces that fit your vision, space, and lifestyle.",
  },
];

export default function CraftsmanshipPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}

      <InformationPageHero
        title="Our Craftsmanship"
        description="Where nature’s beauty meets human artistry."
        imagePath="/images/hero-image.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Craftsmanship", href: "/craftsmanship" },
        ]}
      />

      {/* Introduction */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Masterfully Crafted, Built to Last</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At Bumi Teak Furniture, every piece begins with a simple belief: furniture should be created with intention, respect, and heart. Every curve, joint, and texture reflects our commitment to quality, authenticity, and the
              timeless craft of woodworking. Though we are a new brand, our standards are anything but new. We combine a deep appreciation for teak wood, thoughtful design, and skilled hands to create furniture that feels warm, soulful, and
              enduring.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              For us, craftsmanship is more than a technique it is a dialogue between nature and the artisan. We collaborate with skilled craftsmen who understand the character of teak wood and shape it with precision and care. Their
              expertise blends traditional woodworking methods with modern accuracy, resulting in pieces that are both beautifully refined and built for long-term durability. From the initial selection of timber to the final finish, each
              piece is made to be lived with, loved, and passed down.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Crafting Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From raw timber to finished masterpiece, every step is carefully executed to ensure the highest quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mt-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">{step.number}</div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualities Grid */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Sets Us Apart</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Our commitment to excellence is reflected in every aspect of our work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualities.map((quality, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg bg-primary border border-amber-100 transition-colors duration-300">
                <div className="shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{quality.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{quality.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teak Wood Info */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Teak Wood?</h2>
              <p className="text-gray-700 text-lg">The gold standard of furniture making.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">Natural Durability</h4>
                  <p className="text-gray-600 leading-relaxed">Teak contains natural oils that protect it from rot, decay, and insects making it ideal for long-term use. </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">Weather Resistance</h4>
                  <p className="text-gray-600 leading-relaxed">Its tight grain and natural resilience make it suitable for both indoor and outdoor environments. </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">Timeless Beauty</h4>
                  <p className="text-gray-600 leading-relaxed">Teak’s golden brown hues and elegant grain patterns complement any style and develop a beautiful patina over time. </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">Low Maintenance</h4>
                  <p className="text-gray-600 leading-relaxed">Teak requires minimal upkeep, making it a smart, lasting investment. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Trees className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Commitment to Sustainability</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We believe that beautiful furniture begins with respect for nature, for materials, and for future generations. Our teak wood comes from certified sustainable plantations where replanting and responsible management are core
              principles.{" "}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">By choosing Bumi Teak Furniture, you support sustainable forestry and help preserve one of nature’s most valuable resources. </p>
          </div>
        </div>
      </section>

      <TransformLivingCTA
        heading="Experience the heart"
        subheading="of our craftsmanship."
        description="Explore our collections and discover how natural beauty, thoughtful design, and artisanal skill come together in every piece we create."
        primaryButtonText="Browse Collections"
        secondaryButtonText="View Gallery"
        imagePath="/images/hero-image.jpg"
        primaryButtonLink="/shop/collections"
        secondaryButtonLink="/gallery"
        contentAlignment="center"
      />
    </main>
  );
}
