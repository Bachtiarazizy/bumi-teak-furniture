import React from "react";
import { CheckCircle, Trees, Hammer, Shield, Award } from "lucide-react";
import InformationPageHero from "@/components/layout/page-hero-section";
import TransformLivingCTA from "@/components/transform-living-CTA-section";

const processSteps = [
  {
    number: "01",
    title: "Material Selection",
    description: "We carefully select premium grade teak wood from sustainable sources, ensuring each piece meets our strict quality standards for grain pattern, color, and durability.",
    icon: Trees,
  },
  {
    number: "02",
    title: "Drying & Seasoning",
    description: "Our teak wood undergoes a meticulous drying process to achieve optimal moisture content, preventing warping and ensuring long-lasting stability.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Expert Crafting",
    description: "Master craftsmen with decades of experience hand-craft each piece using traditional techniques combined with modern precision tools.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Finishing & Quality Control",
    description: "Multiple layers of protective finish are applied and each piece undergoes rigorous quality inspection before leaving our workshop.",
    icon: Award,
  },
];

const qualities = [
  {
    title: "Sustainable Sourcing",
    description: "All our teak wood is sourced from certified sustainable plantations, ensuring environmental responsibility.",
  },
  {
    title: "Traditional Techniques",
    description: "We preserve time-honored woodworking methods passed down through generations of skilled artisans.",
  },
  {
    title: "Modern Precision",
    description: "State-of-the-art equipment ensures accuracy and consistency while maintaining the handcrafted touch.",
  },
  {
    title: "Attention to Detail",
    description: "Every joint, curve, and finish is meticulously crafted to meet our exacting standards of excellence.",
  },
  {
    title: "Durability First",
    description: "Built to last generations, our furniture is designed to withstand daily use and the test of time.",
  },
  {
    title: "Custom Solutions",
    description: "We offer bespoke services to create unique pieces that perfectly match your vision and space.",
  },
];

export default function CraftsmanshipPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}

      <InformationPageHero
        title="Our Craftsmanship"
        description="Where tradition meets excellence. Every piece of furniture is a testament to our commitment to quality, sustainability, and the timeless art of woodworking."
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
              At Bumi Teak Furniture, craftsmanship is not just a process—it&apos;s our passion. For over two decades, we have been creating exceptional teak furniture that combines traditional Indonesian woodworking heritage with
              contemporary design sensibilities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each piece that leaves our workshop represents countless hours of skilled labor, careful attention to detail, and an unwavering commitment to excellence. Our master craftsmen bring years of experience and a deep respect for
              the natural beauty of teak wood to every project.
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
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">{step.number}</div>

                {/* Icon */}
                <div className="flex items-start gap-4 mt-4">
                  <div className="shrink-0">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualities Grid */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Sets Us Apart</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our commitment to excellence is reflected in every aspect of our work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualities.map((quality, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{quality.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{quality.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teak Wood Info */}
      <section className="bg-primarypy-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Teak Wood?</h2>
              <p className="text-gray-700 text-lg">The gold standard in furniture making</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Natural Durability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Teak contains natural oils that make it incredibly resistant to rot, decay, and insect damage. This inherent durability means our furniture can withstand outdoor conditions and heavy use for decades.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Weather Resistance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The high natural oil content and tight grain of teak wood make it exceptionally water-resistant and weather-proof, perfect for both indoor and outdoor furniture that maintains its beauty through all seasons.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Timeless Beauty</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Teak&apos;s rich golden-brown color and distinctive grain patterns create an elegant aesthetic that complements any style. As it ages, it develops a beautiful silver-gray patina that many find even more attractive.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Low Maintenance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unlike other woods, teak requires minimal maintenance. Its natural properties mean you don&apos;t need to apply protective coatings regularly, making it an excellent long-term investment.
                  </p>
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
              We believe in responsible forestry and sustainable practices. All our teak wood comes from certified plantations where trees are replanted to ensure future generations can enjoy this magnificent resource.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By choosing Bumi Teak Furniture, you&apos;re not just investing in quality furniture—you&apos;re supporting sustainable forestry practices and helping preserve our planet&apos;s natural resources.
            </p>
          </div>
        </div>
      </section>

      <TransformLivingCTA
        heading="Experience Our"
        subheading="Craftsmanship"
        description="Visit our showroom or browse our collections to see the quality and care that goes into every piece"
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
