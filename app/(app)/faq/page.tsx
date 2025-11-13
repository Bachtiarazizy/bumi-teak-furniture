"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Package, CreditCard, Truck, Settings } from "lucide-react";
import InformationPageHero from "@/components/layout/page-hero-section";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  faqs: FAQItem[];
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: FAQCategory[] = [
    {
      id: "products",
      title: "Products & Materials",
      icon: Package,
      faqs: [
        {
          question: "What type of teak wood do you use?",
          answer:
            "We use premium-grade Indonesian teak (Tectona grandis) sourced exclusively from FSC-certified sustainable forests in Java. Our teak is known for its high natural oil content, beautiful golden-brown color, and exceptional durability. Each piece is carefully selected for optimal grain patterns and structural integrity.",
        },
        {
          question: "How long does teak furniture last?",
          answer:
            "When properly maintained, teak furniture can last for generations—often 50-100 years or more. The high natural oil content makes teak incredibly resistant to moisture, insects, and decay. Many antique teak pieces from centuries ago are still in excellent condition today.",
        },
        {
          question: "Can teak furniture be used outdoors?",
          answer:
            "Yes! Teak is one of the best woods for outdoor furniture due to its natural weather resistance. Our teak furniture can withstand rain, sun, and humidity without rotting or warping. Over time, outdoor teak will develop a beautiful silver-gray patina, which can be maintained or restored to its original color with teak oil.",
        },
        {
          question: "What is the difference between Grade A and Grade B teak?",
          answer:
            "Grade A teak comes from the heartwood (center of the tree) and contains the highest concentration of natural oils, making it the most durable and weather-resistant. Grade B comes from areas closer to the sapwood and has slightly lower oil content. We use only Grade A teak for all our furniture.",
        },
        {
          question: "Do you offer custom furniture designs?",
          answer:
            "Yes, we specialize in custom furniture! Our design team can work with you to create pieces tailored to your specific dimensions, style preferences, and functional needs. Custom orders typically require 8-12 weeks for production. Contact us to discuss your project.",
        },
      ],
    },
    {
      id: "ordering",
      title: "Ordering & Payment",
      icon: CreditCard,
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For custom orders over $5,000, we also offer payment plans with a 50% deposit and the balance due before shipping.",
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely. We use industry-standard SSL encryption for all transactions. We never store your complete credit card information on our servers. All payments are processed through secure, PCI-compliant payment gateways.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "Standard orders can be modified or canceled within 24 hours of placement. Custom orders can be canceled before production begins (after design approval) with a 10% restocking fee. Once production has started, custom orders cannot be canceled.",
        },
        {
          question: "Do you offer price matching?",
          answer:
            "Due to our handcrafted nature and use of premium materials, we don't offer price matching. However, we guarantee the quality of our craftsmanship and stand behind every piece with a 5-year warranty. Our prices reflect the true value of authentic, sustainable Indonesian teak furniture.",
        },
      ],
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      icon: Truck,
      faqs: [
        {
          question: "How long does shipping take?",
          answer:
            "Production time is 2-4 weeks for standard items and 6-8 weeks for custom pieces. Shipping time varies by destination: Indonesia (2-4 weeks), Southeast Asia (4-6 weeks), Asia Pacific (6-8 weeks), North America & Europe (8-10 weeks). We provide tracking information once your order ships.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship worldwide! We have experience shipping to over 30 countries across Asia, North America, Europe, Australia, and beyond. International shipping costs vary by destination and are calculated at checkout based on weight and dimensions.",
        },
        {
          question: "What if my furniture arrives damaged?",
          answer:
            "We take great care in packaging, but if damage occurs during shipping, please contact us within 48 hours with photographs. We'll work with the carrier to file a claim and arrange for repair or replacement at no cost to you. Do not discard packaging until inspection is complete.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes! Once your order ships, you'll receive a tracking number via email. You can monitor your shipment's progress online and will receive notifications at key milestones. For production updates on custom pieces, you can contact us anytime.",
        },
        {
          question: "Do you offer white glove delivery?",
          answer:
            "White glove delivery (inside delivery, unpacking, and assembly) is available in select locations for an additional fee. This service includes bringing the furniture to your desired room and removing all packaging. Contact us for availability in your area.",
        },
      ],
    },
    {
      id: "care",
      title: "Care & Maintenance",
      icon: Settings,
      faqs: [
        {
          question: "How do I care for my teak furniture?",
          answer:
            "For indoor furniture: dust regularly with a soft cloth and clean with mild soap and water as needed. For outdoor furniture: hose down occasionally to remove dirt. Apply teak oil 1-2 times per year if you want to maintain the golden color, or let it naturally weather to a silver-gray patina.",
        },
        {
          question: "Will my teak furniture change color over time?",
          answer:
            "Yes, this is natural! Outdoor teak will gradually develop a beautiful silver-gray patina due to UV exposure. This doesn't affect durability. You can maintain the original golden color with regular teak oil applications, or embrace the weathered look—both are equally beautiful and protect the wood.",
        },
        {
          question: "What products should I use to clean teak?",
          answer:
            "Use mild soap (dish soap works well) and water with a soft brush or cloth. Avoid harsh chemicals, bleach, or pressure washers as these can damage the wood. For stubborn stains, a specialized teak cleaner can be used. Always rinse thoroughly and allow to dry completely.",
        },
        {
          question: "Do I need to seal or finish my teak furniture?",
          answer:
            "No sealing is necessary! Teak's natural oils provide built-in protection. If you prefer to maintain the golden color for indoor pieces or outdoor furniture, apply teak oil annually. Never use polyurethane or varnish on teak as it prevents the wood from breathing and can cause problems.",
        },
        {
          question: "How do I remove water stains or rings?",
          answer:
            "Light water marks often fade on their own as the wood dries. For persistent marks, lightly sand with fine-grit sandpaper (220-grit) in the direction of the grain, then apply teak oil. For deep stains, contact us for professional restoration advice.",
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter((faq) => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase())),
    }))
    .filter((category) => (selectedCategory ? category.id === selectedCategory : category.faqs.length > 0));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <InformationPageHero title="Frequently Asked Questions" description="Find answers to common questions about our teak furniture, ordering process, shipping, and care instructions." imagePath="/images/hero-image.jpg" />

      {/* FAQ Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full pl-12 pr-4 py-4 border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body text-sm"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-12 -mx-6 px-6 lg:mx-0 lg:px-0">
              <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center lg:overflow-visible scrollbar-hide">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-6 py-2.5 font-body text-sm rounded-full transition-colors whitespace-nowrap ${!selectedCategory ? "bg-secondary text-white" : "bg-light text-secondary hover:bg-secondary/10"}`}
                >
                  All Topics
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2.5 font-body text-sm rounded-full transition-colors flex items-center gap-2 whitespace-nowrap ${
                      selectedCategory === category.id ? "bg-secondary text-white" : "bg-light text-secondary hover:bg-secondary/10"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <div key={category.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="font-heading text-secondary">{category.title}</h4>
                  </div>

                  {/* Clean FAQ List */}
                  <div className="space-y-0">
                    {category.faqs.map((faq, faqIndex) => {
                      const key = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openIndex === key;

                      return (
                        <div key={faqIndex} className="border-b border-secondary/20">
                          <button onClick={() => toggleFAQ(categoryIndex, faqIndex)} className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity">
                            <span className="font-body text-secondary font-medium pr-8">{faq.question}</span>
                            <ChevronDown className={`w-5 h-5 text-secondary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
                            <p className="font-body text-secondary text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-16 pt-12 border-t border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-secondary shrink-0 mb-1" />
                <h4 className="font-heading text-secondary leading-none">NEED MORE INFORMATION?</h4>
              </div>
              <p className="font-body text-secondary text-sm mb-6 max-w-2xl">
                Can&apos;t find the answer you&apos;re looking for? Our customer service team is ready to help with any questions about our products, ordering process, or anything else.
              </p>
              <div className="flex gap-4">
                <a href="/contact" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors">
                  Contact Support
                </a>
                <a href="mailto:support@bumiteakfurniture.com" className="inline-block border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary hover:text-white transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
