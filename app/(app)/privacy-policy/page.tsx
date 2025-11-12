import LegalPageHero from "@/components/layout/legal-page-hero-section";
import React from "react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you visit our website, make a purchase, or contact us, we may collect personal information including your name, email address, phone number, shipping address, billing address, and payment information.",
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect certain information about your device and how you interact with our website. This includes your IP address, browser type, pages visited, time spent on pages, and referring website addresses.",
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can control cookie preferences through your browser settings or our Cookie Settings page.",
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "",
          text: "We use the information we collect for various purposes, including:",
        },
      ],
      list: [
        "Processing and fulfilling your orders",
        "Communicating with you about your orders, inquiries, or customer service requests",
        "Sending you marketing communications (with your consent)",
        "Improving our website, products, and services",
        "Detecting and preventing fraud or security breaches",
        "Complying with legal obligations",
      ],
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, order fulfillment, shipping, marketing, and website analytics.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law or in response to valid legal requests, such as subpoenas or court orders.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
        },
      ],
    },
    {
      title: "4. Data Security",
      content: [
        {
          subtitle: "",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      title: "5. Your Rights and Choices",
      content: [
        {
          subtitle: "",
          text: "Depending on your location, you may have certain rights regarding your personal information:",
        },
      ],
      list: [
        "Access: Request a copy of the personal information we hold about you",
        "Correction: Request correction of inaccurate or incomplete information",
        "Deletion: Request deletion of your personal information",
        "Objection: Object to the processing of your personal information",
        "Data Portability: Request transfer of your data to another service",
        "Withdraw Consent: Withdraw consent for marketing communications at any time",
      ],
    },
    {
      title: "6. Children's Privacy",
      content: [
        {
          subtitle: "",
          text: "Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
        },
      ],
    },
    {
      title: "7. International Data Transfers",
      content: [
        {
          subtitle: "",
          text: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from your country. We ensure appropriate safeguards are in place to protect your information.",
        },
      ],
    },
    {
      title: "8. Changes to This Privacy Policy",
      content: [
        {
          subtitle: "",
          text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.',
        },
      ],
    },
    {
      title: "9. Contact Us",
      content: [
        {
          subtitle: "",
          text: "If you have any questions about this Privacy Policy or our privacy practices, please contact us:",
        },
      ],
      contact: {
        email: "privacy@bumiteakfurniture.com",
        phone: "+62 291 123 4567",
        address: "Jl. Furniture Craft No. 123, Jepara, Central Java, Indonesia 59419",
      },
    },
  ];

  return (
    <main className="min-h-screen">
      <LegalPageHero title="Privacy Policy" lastUpdated="January 15, 2024" description="Your privacy is important to us. This Privacy Policy explains how Bumi Teak Furniture collects, uses, and protects your personal information." />

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <p className="font-body text-secondary text-sm leading-relaxed mb-4">
                At Bumi Teak Furniture (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect,
                use, disclose, and safeguard your information when you visit our website or make a purchase from us.
              </p>
              <p className="font-body text-secondary text-sm leading-relaxed">
                By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our website.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="font-heading text-2xl text-secondary mb-4">{section.title}</h2>

                  {section.content.map((item, idx) => (
                    <div key={idx} className="mb-4">
                      {item.subtitle && <h3 className="font-heading text-lg text-secondary mb-2">{item.subtitle}</h3>}
                      <p className="font-body text-secondary text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}

                  {section.list && (
                    <ul className="space-y-2 mt-4">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="font-body text-secondary text-sm leading-relaxed flex items-start">
                          <span className="text-secondary mr-3 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

            {/* Footer Links */}
            <div className="mt-12 pt-8 border-t border-secondary/10">
              <p className="font-body text-secondary text-sm mb-4">Related Documents:</p>
              <div className="flex flex-wrap gap-4">
                <a href="/cookie-settings" className="font-body text-sm text-secondary hover:text-secondary/70 underline">
                  Cookie Settings
                </a>
                <a href="/terms-of-service" className="font-body text-sm text-secondary hover:text-secondary/70 underline">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
