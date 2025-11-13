import LegalPageHero from "@/components/layout/legal-page-hero-section";
import React from "react";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        {
          text: "By accessing and using the Bumi Teak Furniture website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.",
        },
      ],
    },
    {
      title: "2. Use of Website",
      subsections: [
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old to make purchases on our website. By placing an order, you represent that you are at least 18 years of age.",
        },
        {
          subtitle: "Account Security",
          text: "If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
        },
        {
          subtitle: "Prohibited Uses",
          text: "You may not use our website for any illegal or unauthorized purpose. You agree to comply with all applicable laws and regulations.",
        },
      ],
    },
    {
      title: "3. Products and Pricing",
      subsections: [
        {
          subtitle: "Product Descriptions",
          text: "We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions, colors, or other content are accurate, complete, or error-free. Natural variations in teak wood grain and color are expected and not considered defects.",
        },
        {
          subtitle: "Pricing",
          text: "All prices are listed in USD and are subject to change without notice. We reserve the right to correct pricing errors. If we discover a pricing error after you have placed an order, we will contact you for instructions.",
        },
        {
          subtitle: "Availability",
          text: "All products are subject to availability. We reserve the right to limit quantities or discontinue products at any time.",
        },
      ],
    },
    {
      title: "4. Orders and Payment",
      subsections: [
        {
          subtitle: "Order Acceptance",
          text: "Your receipt of an order confirmation does not signify our acceptance of your order. We reserve the right to accept or decline your order for any reason, including product availability, errors in pricing or product information, or fraud concerns.",
        },
        {
          subtitle: "Payment",
          text: "Payment must be received in full before we process your order. We accept major credit cards, PayPal, and bank transfers. All payments are processed securely.",
        },
        {
          subtitle: "Custom Orders",
          text: "Custom orders require a 50% deposit before production begins. Custom furniture is made to order and cannot be canceled once production has started.",
        },
      ],
    },
    {
      title: "5. Shipping and Delivery",
      content: [
        {
          text: "Shipping times and costs vary based on destination and product availability. Standard production time is 4-8 weeks for most items. Custom pieces may require 8-12 weeks. International shipping times vary by location. We are not responsible for customs delays or fees. Risk of loss passes to you upon delivery to the carrier.",
        },
      ],
    },
    {
      title: "6. Returns and Refunds",
      subsections: [
        {
          subtitle: "Return Policy",
          text: "We accept returns within 30 days of delivery for items in original condition. Custom-made items are non-returnable. Return shipping costs are the responsibility of the customer unless the item is defective or we made an error.",
        },
        {
          subtitle: "Refunds",
          text: "Refunds will be processed within 7-10 business days of receiving the returned item. Original shipping charges are non-refundable.",
        },
        {
          subtitle: "Damaged Items",
          text: "Please inspect your order upon delivery. Report any damage within 48 hours of delivery with photographs for claims processing.",
        },
      ],
    },
    {
      title: "7. Warranty",
      content: [
        {
          text: "We warrant that our furniture will be free from defects in materials and workmanship for a period of five (5) years from the date of purchase. This warranty does not cover normal wear and tear, damage from misuse or neglect, or damage from improper care. Our warranty is limited to repair or replacement of defective items.",
        },
      ],
    },
    {
      title: "8. Intellectual Property",
      content: [
        {
          text: "All content on our website, including text, graphics, logos, images, and software, is the property of Bumi Teak Furniture or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from our content without express written permission.",
        },
      ],
    },
    {
      title: "9. Limitation of Liability",
      content: [
        {
          text: "To the maximum extent permitted by law, Bumi Teak Furniture shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our website or products. Our total liability shall not exceed the amount paid by you for the product in question.",
        },
      ],
    },
    {
      title: "10. Indemnification",
      content: [
        {
          text: "You agree to indemnify and hold harmless Bumi Teak Furniture, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our website or violation of these Terms of Service.",
        },
      ],
    },
    {
      title: "11. Governing Law",
      content: [
        {
          text: "These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Central Java, Indonesia.",
        },
      ],
    },
    {
      title: "12. Changes to Terms",
      content: [
        {
          text: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website after changes constitutes acceptance of the modified terms.",
        },
      ],
    },
    {
      title: "13. Contact Information",
      content: [
        {
          text: "If you have any questions about these Terms of Service, please contact us:",
        },
      ],
      contact: {
        email: "legal@bumiteakfurniture.com",
        phone: "+62 291 123 4567",
        address: "Jl. Furniture Craft No. 123, Jepara, Central Java, Indonesia 59419",
      },
    },
  ];

  return (
    <main className="min-h-screen">
      <LegalPageHero title="Terms of Service" lastUpdated="January 15, 2024" description="Please read these Terms of Service carefully before using our website or purchasing our products." />

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <p className="font-body text-secondary text-sm leading-relaxed mb-4">
                Welcome to Bumi Teak Furniture. These Terms of Service (&quot;Terms&quot;) govern your use of our website and the purchase of our products. By accessing our website or making a purchase, you agree to be bound by these Terms.
              </p>
              <p className="font-body text-secondary text-sm leading-relaxed">Please read these Terms carefully. If you have any questions, please contact us before making a purchase.</p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-heading text-2xl text-secondary mb-4">{section.title}</h3>

                  {section.content &&
                    section.content.map((item, idx) => (
                      <div key={idx} className="mb-4">
                        <p className="font-body text-secondary text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}

                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          <h5 className="font-heading text-lg text-secondary mb-2">{subsection.subtitle}</h5>
                          <p className="font-body text-secondary text-sm leading-relaxed">{subsection.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.contact && (
                    <div className="mt-4 p-6 bg-light rounded-lg">
                      <p className="font-body text-secondary text-sm mb-2">
                        <strong>Email:</strong> {section.contact.email}
                      </p>
                      <p className="font-body text-secondary text-sm mb-2">
                        <strong>Phone:</strong> {section.contact.phone}
                      </p>
                      <p className="font-body text-secondary text-sm">
                        <strong>Address:</strong> {section.contact.address}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Agreement Statement */}
            <div className="mt-12 p-6 bg-secondary/5 rounded-lg border border-secondary/10">
              <p className="font-body text-secondary text-sm leading-relaxed">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Thank you for choosing Bumi Teak Furniture.
              </p>
            </div>

            {/* Footer Links */}
            <div className="mt-12 pt-8 border-t border-secondary/10">
              <p className="font-body text-secondary text-sm mb-4">Related Documents:</p>
              <div className="flex flex-wrap gap-4">
                <a href="/privacy-policy" className="font-body text-sm text-secondary hover:text-secondary/70 underline">
                  Privacy Policy
                </a>
                <a href="/cookie-settings" className="font-body text-sm text-secondary hover:text-secondary/70 underline">
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
