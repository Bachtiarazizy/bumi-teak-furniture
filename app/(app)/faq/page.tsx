import React from "react";
import InformationPageHero from "@/components/layout/page-hero-section";
import FAQContent from "@/components/faq-page/faq-content";
import { client } from "@/lib/sanity/client";
import { allFaqsQuery } from "@/lib/sanity/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Teak Furniture",
  description: "Find answers to common questions about our teak furniture, ordering process, shipping, and care instructions.",
};

export default async function FAQPage() {
  // Fetch all FAQs
  const allFaqs = await client.fetch(allFaqsQuery);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <InformationPageHero title="Frequently Asked Questions" description="Find answers to common questions about our teak furniture, ordering process, shipping, and care instructions." imagePath="/images/hero-image.jpg" />

      {/* FAQ Content */}
      <FAQContent faqs={allFaqs || []} />
    </main>
  );
}
