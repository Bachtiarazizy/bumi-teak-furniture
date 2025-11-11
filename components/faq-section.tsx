"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading?: string;
  description?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  faqs?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  heading = "FAQS",
  description = "Discover answers to common questions about our teak furniture craftsmanship",
  ctaHeading = "NEED MORE INFORMATION?",
  ctaDescription = "Our team is ready to help you find the perfect piece",
  ctaButtonText = "Contact",
  faqs = [
    {
      question: "How long do teak pieces last?",
      answer: "Teak furniture can last generations when properly maintained. Our pieces are built to withstand time, developing a rich patina that tells a story of endurance and beauty.",
    },
    {
      question: "Where is the wood sourced?",
      answer: "We source our teak from sustainable forests in Indonesia, working directly with local communities to ensure responsible harvesting and environmental protection.",
    },
    {
      question: "Do you offer custom designs?",
      answer: "Yes, we collaborate with clients to create unique pieces that reflect individual style while maintaining our commitment to traditional craftsmanship.",
    },
    {
      question: "How do I care for teak?",
      answer: "Regular cleaning with mild soap and occasional teak oil will preserve the wood's natural beauty. Avoid harsh chemicals and direct sunlight exposure.",
    },
    {
      question: "What is your warranty?",
      answer: "Each piece comes with a five-year warranty against manufacturing defects, reflecting our confidence in the quality of our handcrafted furniture.",
    },
  ],
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-4">{heading}</h2>
          <p className="font-body text-secondary text-sm">{description}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-secondary/20">
              <button onClick={() => toggleFAQ(index)} className="w-full py-6 flex justify-between items-center text-left hover:opacity-70 transition-opacity">
                <span className="font-body text-secondary font-medium pr-8">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-secondary shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 pb-6" : "max-h-0"}`}>
                <p className="font-body text-secondary text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-8">
          <h3 className="font-heading text-2xl md:text-3xl text-secondary mb-3">{ctaHeading}</h3>
          <p className="font-body text-secondary text-sm mb-6">{ctaDescription}</p>
          <Link href="/contact">
            <button className="font-body border border-secondary text-secondary px-8 py-3 text-sm hover:bg-secondary hover:text-white transition-colors">{ctaButtonText}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
