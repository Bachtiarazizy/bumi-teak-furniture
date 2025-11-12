import React from "react";
import { Package, Truck, Clock, MapPin, Shield, AlertCircle } from "lucide-react";
import LegalPageHero from "@/components/layout/legal-page-hero-section";

export default function ShippingPage() {
  const shippingZones = [
    {
      zone: "Indonesia",
      time: "2-4 weeks",
      cost: "Free shipping on orders over $500",
      details: "Standard delivery to major cities. Remote areas may require additional time.",
    },
    {
      zone: "Southeast Asia",
      time: "4-6 weeks",
      cost: "Starting from $150",
      details: "Singapore, Malaysia, Thailand, Philippines, Vietnam",
    },
    {
      zone: "Asia Pacific",
      time: "6-8 weeks",
      cost: "Starting from $300",
      details: "Australia, New Zealand, Japan, South Korea, Hong Kong",
    },
    {
      zone: "North America",
      time: "8-10 weeks",
      cost: "Starting from $500",
      details: "USA, Canada, Mexico",
    },
    {
      zone: "Europe",
      time: "8-10 weeks",
      cost: "Starting from $600",
      details: "UK, Germany, France, Netherlands, and other EU countries",
    },
    {
      zone: "Rest of World",
      time: "10-12 weeks",
      cost: "Contact for quote",
      details: "Middle East, Africa, South America - custom shipping available",
    },
  ];

  const shippingProcess = [
    {
      icon: Package,
      title: "Order Confirmation",
      description: "Once your order is placed, we confirm availability and begin production for custom pieces or prepare stock items for shipment.",
    },
    {
      icon: Clock,
      title: "Production Time",
      description: "Standard items: 2-4 weeks. Custom furniture: 6-8 weeks. We keep you updated throughout the process.",
    },
    {
      icon: Shield,
      title: "Quality Check & Packaging",
      description: "Each piece undergoes rigorous inspection and is carefully packaged with protective materials for safe transit.",
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      description: "We partner with trusted carriers to ensure timely delivery. You will receive tracking information once your order ships.",
    },
  ];

  return (
    <main className="min-h-screen">
      <LegalPageHero title="Shipping Information" description="Learn about our shipping process, delivery times, and costs for domestic and international orders." />

      {/* Shipping Process */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-10 text-center">How Shipping Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {shippingProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg text-secondary mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-secondary/80 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Zones */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-10 text-center">Shipping Destinations & Rates</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shippingZones.map((zone, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-secondary/10 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl text-secondary mb-1">{zone.zone}</h3>
                      <p className="font-body text-sm text-secondary/60">{zone.details}</p>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-secondary/10">
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-secondary/80">Delivery Time:</span>
                      <span className="font-body text-sm text-secondary font-semibold">{zone.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-secondary/80">Shipping Cost:</span>
                      <span className="font-body text-sm text-secondary font-semibold">{zone.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-8">Important Shipping Information</h2>

            <div className="space-y-6">
              <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg text-secondary mb-2">Production & Lead Times</h3>
                    <p className="font-body text-sm text-secondary leading-relaxed">
                      All furniture is handcrafted to order. Standard pieces require 2-4 weeks production time, while custom designs need 6-8 weeks. Shipping time is additional to production time.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">Customs & Import Duties</h3>
                <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                  International shipments may be subject to customs duties, taxes, and fees imposed by your country. These charges are the responsibility of the recipient and are not included in our shipping costs.
                </p>
                <p className="font-body text-sm text-secondary leading-relaxed">We declare all items at their full value for customs purposes. Please check with your local customs office for specific regulations and potential costs.</p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">Tracking & Updates</h3>
                <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                  Once your order ships, you&apos;ll receive a tracking number via email. You can track your shipment&apos;s progress online and will receive notifications at key delivery milestones.
                </p>
                <p className="font-body text-sm text-secondary leading-relaxed">For questions about your shipment, contact us at shipping@bumiteakfurniture.com with your order number.</p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">Delivery & Inspection</h3>
                <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                  Please inspect your delivery upon arrival. Report any damage within 48 hours with photographs for claims processing. Sign for delivery only after inspecting the package.
                </p>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  We use professional freight carriers experienced in handling furniture. White glove delivery service (inside delivery and setup) is available for an additional fee in select locations.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">Large Items & Curbside Delivery</h3>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  Most shipments are delivered curbside. The driver will help unload but may not bring items inside your home. Please arrange assistance for moving large furniture pieces. Inside delivery can be arranged for an additional
                  fee.
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-light rounded-lg text-center">
              <h3 className="font-heading text-2xl text-secondary mb-3">Need a Custom Shipping Quote?</h3>
              <p className="font-body text-secondary text-sm mb-6 max-w-2xl mx-auto">For bulk orders, oversized items, or specific delivery requirements, contact our shipping team for a personalized quote.</p>
              <a href="/contact" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded">
                Contact Shipping Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
