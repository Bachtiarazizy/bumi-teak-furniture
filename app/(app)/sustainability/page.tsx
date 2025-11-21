import React from "react";
import Image from "next/image";
import { Trees, Users, Recycle, Heart } from "lucide-react";
import { Metadata } from "next";
import InformationPageHero from "@/components/layout/page-hero-section";

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
      description: "We source our teak from responsibly managed plantations to ensure long-term forest health, biodiversity, and natural regeneration.",
    },
    {
      icon: Users,
      title: "Fair & Ethical Practices",
      description: "We collaborate directly with skilled artisan communities, ensuring fair compensation, safe working environments, and the preservation of traditional woodworking knowledge.",
    },
    {
      icon: Recycle,
      title: "Waste Minimization",
      description: "Offcuts and wood remnants are repurposed into smaller items or reused whenever possible, allowing us to minimize waste across every stage of production.",
    },
    {
      icon: Heart,
      title: "Built to Last",
      description: "Durability is sustainability. By creating furniture that stands the test of time, we reduce unnecessary consumption and environmental impact.",
    },
  ];

  const forestProcess = [
    {
      step: "1",
      title: "Controlled Harvesting",
      description: "Only mature trees are selected to maintain healthy forest cycles and ensure younger trees continue to grow.",
    },
    {
      step: "2",
      title: "Replanting Initiatives",
      description: "New saplings are planted routinely to support forest regeneration and long-term ecological balance.",
    },
    {
      step: "3",
      title: "Community Partnership",
      description: "Local communities are involved in planting, maintaining, and benefiting from sustainably managed forests.",
    },
    {
      step: "4",
      title: "Ongoing Monitoring",
      description: "Regular assessments ensure compliance with responsible forestry standards and forest health.",
    },
  ];

  return (
    <main className="min-h-screen">
      <InformationPageHero
        title="Sustainability"
        description="Honoring nature. Respecting people. Creating responsibly."
        imagePath="/images/hero-image.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sustainability", href: "/sustainability" },
        ]}
      />

      {/* Hero Image Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image src="/images/hero-image.jpg" alt="Sustainable teak forest" fill className="object-cover" />
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-body text-secondary text-lg leading-relaxed">
                At Bumi Teak Furniture, we believe beautiful furniture should never come at the expense of the planet. Our approach blends thoughtful material sourcing, mindful craftsmanship, and a deep respect for nature. Every piece we
                create is guided by our purpose: to bring the warmth of teak into your home while caring for the world it comes from.{" "}
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
                  <h4 className="font-heading text-lg text-secondary mb-3">{commitment.title}</h4>
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
            <h2 className="font-heading text-3xl text-secondary mb-8 text-center">Responsible Forest Management</h2>
            <p className="font-body text-secondary text-sm leading-relaxed text-center mb-12 max-w-2xl mx-auto">Working with certified suppliers ensures that every piece of wood is harvested with care and accountability. </p>

            <div className="space-y-6">
              {forestProcess.map((item, index) => (
                <div key={index} className="flex gap-6 p-6 bg-light rounded-lg">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="font-heading text-white text-xl">{item.step}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-secondary mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-secondary/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      {/* <section className="bg-secondary py-12">
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
      </section> */}

      {/* Certifications */}
      {/* <section className="bg-light py-12">
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
      </section> */}

      {/* Community Impact */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/video-thumbnail.jpg" alt="Local artisan community" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-heading text-3xl text-secondary mb-6">Supporting Local Artisans</h2>
                <p className="font-body text-secondary text-sm leading-relaxed mb-4">Sustainability is not only about forests—it is also about people.</p>
                <p className="font-body text-secondary text-sm leading-relaxed mb-6">
                  We work closely with artisan communities in Central Java, where woodworking is a cultural heritage. Through fair compensation, respectful partnerships, and skill development, we help preserve this heritage while supporting
                  stable livelihoods.{" "}
                </p>
                <p className="font-body text-secondary text-sm leading-relaxed mb-6">Our commitments include:</p>
                <ul className="space-y-3">
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>Fair wages aligned with ethical standards</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>Safe and well-ventilated workshop environments</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>Skill mentorship and training for younger artisans</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>Support for education and well-being within artisan families</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl text-secondary mb-6">Your Choice Makes a Difference</h2>
                <p className="font-body text-secondary text-sm leading-relaxed mb-4">When you choose Bumi Teak Furniture, you’re choosing more than a beautiful piece of furniture.</p>

                <p className="font-body text-secondary text-sm leading-relaxed mb-6">You are supporting:</p>
                <ul className="space-y-3">
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>responsible forestry</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>ethical craftsmanship</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>preservation of traditional arts</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span>sustainable, long-lasting design</span>
                  </li>
                </ul>
                <p className="font-body text-secondary text-sm leading-relaxed mb-6">Together, we can create homes filled with warmth—while caring for the planet that inspires us.</p>
                <div className="flex flex-row gap-4 justify-start">
                  <a href="/shop" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded">
                    Shop Now
                  </a>
                  <a href="/about" className="inline-block border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary/5 transition-colors rounded">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative h-128 rounded-lg overflow-hidden">
                <Image src="/images/video-thumbnail.jpg" alt="Local artisan community" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
