import React from "react";
import Image from "next/image";
import { Leaf, Trees, Users, Award, Recycle, Heart, TrendingUp, Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainable Teak Furniture - Our Environmental Commitment",
  description: "Learn about our sustainable sourcing practices, FSC-certified teak, and environmental responsibility. Eco-friendly furniture that doesn't compromise on quality.",
  keywords: ["sustainable teak", "eco-friendly furniture", "FSC certified teak", "ethical furniture"],
  alternates: {
    canonical: "/sustainability",
  },
  openGraph: {
    title: "Sustainable Teak Furniture | Bumi Teak",
    description: "Our commitment to environmental responsibility and sustainable sourcing.",
    url: "/sustainability",
    images: ["/og-sustainability.jpg"],
  },
};

export default function SustainabilityPage() {
  const commitments = [
    {
      icon: Trees,
      title: "Sustainable Forestry",
      description: "All our teak is sourced from FSC-certified forests where responsible harvesting ensures forest regeneration and biodiversity.",
    },
    {
      icon: Users,
      title: "Fair Trade Practices",
      description: "We work directly with local communities, ensuring fair wages, safe conditions, and preserving traditional woodworking skills.",
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Wood scraps are used for smaller products or donated locally. We minimize waste at every stage of production.",
    },
    {
      icon: Heart,
      title: "Long-Lasting Quality",
      description: "By creating furniture that lasts generations, we reduce consumption and environmental impact over time.",
    },
  ];

  const certifications = [
    {
      name: "FSC Certified",
      description: "Forest Stewardship Council certification ensures responsible forest management",
      icon: Shield,
    },
    {
      name: "Fair Trade Verified",
      description: "Commitment to fair wages and ethical working conditions",
      icon: Award,
    },
    {
      name: "SVLK Certified",
      description: "Indonesian Timber Legality Verification System compliance",
      icon: Leaf,
    },
  ];

  const impacts = [
    {
      number: "10,000+",
      label: "Trees Planted",
      description: "Through our reforestation program since 2020",
    },
    {
      number: "150+",
      label: "Artisan Families",
      description: "Supported through fair trade practices",
    },
    {
      number: "95%",
      label: "Wood Utilization",
      description: "Minimal waste in our production process",
    },
    {
      number: "100%",
      label: "FSC Certified",
      description: "All teak sourced from certified forests",
    },
  ];

  const forestProcess = [
    {
      step: "1",
      title: "Selective Harvesting",
      description: "Only mature trees (60+ years) are harvested. Young trees are left to grow, maintaining forest ecosystem.",
    },
    {
      step: "2",
      title: "Immediate Replanting",
      description: "For every tree harvested, 5-10 saplings are planted, ensuring forest growth exceeds harvesting.",
    },
    {
      step: "3",
      title: "Community Partnership",
      description: "Local communities are involved in planting, maintaining, and benefiting from the forests.",
    },
    {
      step: "4",
      title: "Monitoring & Protection",
      description: "Regular audits ensure compliance with sustainable practices and forest health monitoring.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* <LegalPageHero
        title="Our Commitment to Sustainability"
        description="At Bumi Teak Furniture, sustainability isn't just a buzzword—it's the foundation of everything we do. From responsible sourcing to supporting local communities."
      /> */}

      {/* Hero Image Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image src="/images/hero-image.jpg" alt="Sustainable teak forest" fill className="object-cover" />
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-body text-secondary text-lg leading-relaxed">
                We believe that beautiful furniture shouldn&apos;t come at the cost of our planet. By combining traditional Indonesian craftsmanship with modern sustainable practices, we create pieces that honor both nature and heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-10 text-center">Our Sustainability Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <commitment.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-heading text-lg text-secondary mb-3">{commitment.title}</h3>
                  <p className="font-body text-sm text-secondary/80 leading-relaxed">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forest Management Process */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-8 text-center">Sustainable Forest Management</h2>
            <p className="font-body text-secondary text-sm leading-relaxed text-center mb-12 max-w-2xl mx-auto">
              Our partnership with FSC-certified forests ensures that teak harvesting supports, rather than depletes, Indonesia&apos;s precious forest ecosystems.
            </p>

            <div className="space-y-6">
              {forestProcess.map((item, index) => (
                <div key={index} className="flex gap-6 p-6 bg-light rounded-lg">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="font-heading text-white text-xl">{item.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-secondary/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl text-white mb-12 text-center">Our Environmental Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impacts.map((impact, index) => (
                <div key={index} className="text-center">
                  <TrendingUp className="w-6 h-6 text-light mx-auto mb-4" />
                  <div className="font-heading text-4xl text-white mb-2">{impact.number}</div>
                  <div className="font-heading text-xl text-white mb-2">{impact.label}</div>
                  <p className="font-body text-sm text-white/80">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-8 text-center">Certifications & Standards</h2>
            <p className="font-body text-secondary text-sm leading-relaxed text-center mb-12 max-w-2xl mx-auto">
              Our commitment to sustainability is verified by internationally recognized certifications that ensure transparency and accountability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-green-200 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <cert.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-heading text-xl text-secondary mb-3">{cert.name}</h4>
                  <p className="font-body text-sm text-secondary/80 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/video-thumbnail.jpg" alt="Local artisan community" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-heading text-3xl text-secondary mb-6">Supporting Local Communities</h2>
                <p className="font-body text-secondary text-sm leading-relaxed mb-4">
                  Our sustainability commitment extends beyond environmental practices to the people who make our furniture possible. We work directly with artisan communities in Jepara, Central Java, where furniture-making has been a
                  tradition for centuries.
                </p>
                <p className="font-body text-secondary text-sm leading-relaxed mb-6">
                  By ensuring fair wages, safe working conditions, and investing in skills training, we help preserve traditional woodworking techniques while providing stable livelihoods for artisan families.
                </p>
                <ul className="space-y-3">
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>Fair wages exceeding local standards</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>Safe, well-ventilated workshop facilities</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>Apprenticeship programs for young artisans</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>Health and education benefits for families</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Impact */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg text-center border border-secondary/10">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-secondary mb-3">Your Choice Makes a Difference</h3>
              <p className="font-body text-secondary text-sm mb-6 leading-relaxed max-w-2xl mx-auto">
                When you choose Bumi Teak Furniture, you&apos;re not just buying furniture—you&apos;re supporting sustainable forestry, fair trade practices, and the preservation of traditional Indonesian craftsmanship. Together, we can
                create beautiful homes while protecting our planet for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/shop" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded">
                  Shop Sustainable Furniture
                </a>
                <a href="/about" className="inline-block border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary/5 transition-colors rounded">
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
