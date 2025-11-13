"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Store, Globe, Search } from "lucide-react";
import InformationPageHero from "@/components/layout/page-hero-section";

interface Dealer {
  id: string;
  name: string;
  type: "flagship" | "authorized" | "partner";
  address: string;
  city: string;
  country: string;
  region: string;
  phone: string;
  email: string;
  hours: string;
  website?: string;
}

export default function DealersPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const dealers: Dealer[] = [
    {
      id: "1",
      name: "Bumi Teak Furniture - Flagship Showroom",
      type: "flagship",
      address: "Jl. Furniture Craft No. 123",
      city: "Jepara",
      country: "Indonesia",
      region: "Indonesia",
      phone: "+62 291 123 4567",
      email: "jepara@bumiteakfurniture.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      website: "https://bumiteakfurniture.com",
    },
    {
      id: "2",
      name: "Bumi Teak Jakarta Showroom",
      type: "flagship",
      address: "Jl. Sudirman No. 456",
      city: "Jakarta",
      country: "Indonesia",
      region: "Indonesia",
      phone: "+62 21 987 6543",
      email: "jakarta@bumiteakfurniture.com",
      hours: "Mon-Sat: 10AM-8PM, Sun: 10AM-6PM",
    },
    {
      id: "3",
      name: "Teak & Design Singapore",
      type: "authorized",
      address: "123 Orchard Road",
      city: "Singapore",
      country: "Singapore",
      region: "Southeast Asia",
      phone: "+65 6123 4567",
      email: "info@teakdesign.sg",
      hours: "Daily: 10AM-9PM",
      website: "https://teakdesign.sg",
    },
    {
      id: "4",
      name: "Natural Living Sydney",
      type: "authorized",
      address: "456 George Street",
      city: "Sydney",
      country: "Australia",
      region: "Asia Pacific",
      phone: "+61 2 9876 5432",
      email: "sydney@naturalliving.au",
      hours: "Mon-Sat: 9AM-6PM, Sun: 10AM-5PM",
      website: "https://naturalliving.com.au",
    },
    {
      id: "5",
      name: "Sustainable Home Tokyo",
      type: "partner",
      address: "789 Shibuya District",
      city: "Tokyo",
      country: "Japan",
      region: "Asia Pacific",
      phone: "+81 3 1234 5678",
      email: "tokyo@sustainablehome.jp",
      hours: "Mon-Fri: 11AM-8PM, Weekends: 10AM-7PM",
    },
    {
      id: "6",
      name: "Teak Boutique Los Angeles",
      type: "authorized",
      address: "321 Melrose Avenue",
      city: "Los Angeles",
      country: "USA",
      region: "North America",
      phone: "+1 310 555 1234",
      email: "la@teakboutique.com",
      hours: "Tue-Sat: 10AM-6PM, Sun-Mon: Closed",
      website: "https://teakboutique.com",
    },
    {
      id: "7",
      name: "Artisan Furniture London",
      type: "partner",
      address: "88 King's Road, Chelsea",
      city: "London",
      country: "United Kingdom",
      region: "Europe",
      phone: "+44 20 7123 4567",
      email: "london@artisanfurniture.co.uk",
      hours: "Mon-Sat: 10AM-7PM, Sun: 11AM-5PM",
      website: "https://artisanfurniture.co.uk",
    },
  ];

  const regions = ["all", "Indonesia", "Southeast Asia", "Asia Pacific", "North America", "Europe"];

  const filteredDealers = dealers.filter((dealer) => {
    const matchesRegion = selectedRegion === "all" || dealer.region === selectedRegion;
    const matchesSearch = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) || dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) || dealer.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const getDealerTypeLabel = (type: string) => {
    switch (type) {
      case "flagship":
        return "Flagship Showroom";
      case "authorized":
        return "Authorized Dealer";
      case "partner":
        return "Partner Showroom";
      default:
        return "Dealer";
    }
  };

  const getDealerTypeBadgeColor = (type: string) => {
    switch (type) {
      case "flagship":
        return "bg-secondary text-white";
      case "authorized":
        return "bg-green-100 text-green-800 border border-green-200";
      case "partner":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      default:
        return "bg-light text-secondary";
    }
  };

  return (
    <main className="min-h-screen">
      <InformationPageHero title="Dealers & Showrooms" description="Visit our showrooms and authorized dealers worldwide to experience our teak furniture in person." imagePath="/images/hero-image.jpg" />

      {/* Benefits of Visiting */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-8 text-center">Why Visit a Showroom?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Store,
                  title: "See Our Craftsmanship",
                  description: "Experience the quality and beauty of our teak furniture firsthand",
                },
                {
                  icon: MapPin,
                  title: "Expert Consultation",
                  description: "Get personalized design advice from our knowledgeable team",
                },
                {
                  icon: Clock,
                  title: "Touch & Feel",
                  description: "Feel the texture and see the grain patterns of authentic teak",
                },
                {
                  icon: Globe,
                  title: "Custom Design",
                  description: "Discuss custom furniture projects and see samples",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-light rounded-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-full mb-4">
                    <benefit.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-heading text-lg text-secondary mb-2">{benefit.title}</h4>
                  <p className="font-body text-sm text-secondary/80 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find a Dealer */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-8 text-center">Find a Location Near You</h2>

            {/* Search & Filter */}
            <div className="mb-8 space-y-4">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by city or country..."
                  className="w-full pl-12 pr-4 py-3 border border-secondary/20 rounded-lg focus:outline-none focus:border-secondary transition-colors font-body text-sm"
                />
              </div>

              {/* Region Filter */}
              <div className="mb-12 -mx-6 px-6 lg:mx-0 lg:px-0">
                <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible scrollbar-hide">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-6 py-2.5 font-body text-sm rounded-full transition-colors whitespace-nowrap ${
                        selectedRegion === region ? "bg-secondary text-white" : "bg-white text-secondary hover:bg-secondary/10 border border-secondary/20"
                      }`}
                    >
                      {region === "all" ? "All Regions" : region}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dealers List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDealers.map((dealer) => (
                <div key={dealer.id} className="bg-white p-6 rounded-lg border border-secondary/10 hover:shadow-lg transition-shadow">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-heading text-xl text-secondary pr-4">{dealer.name}</h4>
                      <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap font-body ${getDealerTypeBadgeColor(dealer.type)}`}>{getDealerTypeLabel(dealer.type)}</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-secondary/60 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-sm text-secondary">{dealer.address}</p>
                        <p className="font-body text-sm text-secondary/80">
                          {dealer.city}, {dealer.country}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-secondary/60 shrink-0" />
                      <a href={`tel:${dealer.phone}`} className="font-body text-sm text-secondary hover:text-secondary/70">
                        {dealer.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-secondary/60 shrink-0" />
                      <a href={`mailto:${dealer.email}`} className="font-body text-sm text-secondary hover:text-secondary/70">
                        {dealer.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-secondary/60 shrink-0" />
                      <p className="font-body text-sm text-secondary/80">{dealer.hours}</p>
                    </div>

                    {dealer.website && (
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-secondary/60 shrink-0" />
                        <a href={dealer.website} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-secondary hover:text-secondary/70 underline">
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-6 pt-6 border-t border-secondary/10 flex gap-3">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(dealer.address + ", " + dealer.city + ", " + dealer.country)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center border border-secondary text-secondary px-4 py-2 text-sm font-body hover:bg-secondary/5 transition-colors rounded"
                    >
                      Get Directions
                    </a>
                    <a href={`tel:${dealer.phone}`} className="flex-1 text-center bg-secondary text-white px-4 py-2 text-sm font-body hover:bg-secondary/90 transition-colors rounded">
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredDealers.length === 0 && (
              <div className="text-center py-12">
                <MapPin className="w-16 h-16 text-secondary/20 mx-auto mb-4" />
                <p className="font-body text-secondary/60">No dealers found in this region. Try selecting a different region or contact us directly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Become a Dealer */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/5 p-8 rounded-lg text-center border border-secondary/10">
              <Store className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-secondary mb-3">Interested in Becoming a Dealer?</h3>
              <p className="font-body text-secondary text-sm mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for passionate partners who share our commitment to quality and sustainability. If you&apos;re interested in carrying Bumi Teak Furniture in your showroom, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:partnerships@bumiteakfurniture.com" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded">
                  Partnership Inquiry
                </a>
                <a href="/contact" className="inline-block border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary/5 transition-colors rounded">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
