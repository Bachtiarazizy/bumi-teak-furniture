import React from "react";

import { RotateCcw, PackageX, CheckCircle, XCircle, AlertTriangle, MessageCircle } from "lucide-react";
import LegalPageHero from "@/components/layout/legal-page-hero-section";

export default function ReturnsPage() {
  const returnProcess = [
    {
      icon: MessageCircle,
      title: "Contact Us",
      description: "Email returns@bumiteakfurniture.com within 30 days of delivery with your order number and reason for return.",
    },
    {
      icon: CheckCircle,
      title: "Get Authorization",
      description: "Receive a Return Authorization (RA) number and detailed return instructions from our support team.",
    },
    {
      icon: PackageX,
      title: "Pack & Ship",
      description: "Carefully package the item in original packaging and ship to our facility using the provided instructions.",
    },
    {
      icon: RotateCcw,
      title: "Receive Refund",
      description: "Once we receive and inspect the item, your refund will be processed within 7-10 business days.",
    },
  ];

  const eligibleReturns = [
    "Item received is defective or damaged",
    "Wrong item was shipped",
    "Item significantly differs from description",
    "Standard (non-custom) items in original condition",
    "Item returned within 30 days of delivery",
    "Original packaging and all components included",
  ];

  const nonEligibleReturns = [
    "Custom-made or personalized furniture",
    "Items used or assembled",
    "Returned after 30-day window",
    "Items without Return Authorization number",
    "Damage caused by improper use or care",
    "Natural wood variations (grain, color)",
  ];

  return (
    <main className="min-h-screen">
      <LegalPageHero title="Returns & Refunds" description="Our commitment to quality extends to your complete satisfaction. Learn about our return policy and process." />

      {/* Return Process */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-10 text-center">How to Return an Item</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {returnProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="mb-3">
                    <span className="inline-block w-8 h-8 rounded-full bg-secondary text-white font-heading text-sm flex items-center justify-center mb-2">{index + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg text-secondary mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-secondary/80 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligible vs Non-Eligible */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-10 text-center">Return Eligibility</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Eligible */}
              <div className="bg-white p-8 rounded-lg border border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl text-secondary">Eligible for Return</h3>
                </div>
                <ul className="space-y-3">
                  {eligibleReturns.map((item, index) => (
                    <li key={index} className="font-body text-sm text-secondary flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Non-Eligible */}
              <div className="bg-white p-8 rounded-lg border border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-heading text-2xl text-secondary">Not Eligible for Return</h3>
                </div>
                <ul className="space-y-3">
                  {nonEligibleReturns.map((item, index) => (
                    <li key={index} className="font-body text-sm text-secondary flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-8">Return Policy Details</h2>

            <div className="space-y-8">
              {/* 30-Day Policy */}
              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">30-Day Return Window</h3>
                <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                  We offer a 30-day return window from the date of delivery for eligible items. To be eligible for a return, your item must be unused, in the same condition as received, and in the original packaging.
                </p>
                <p className="font-body text-sm text-secondary leading-relaxed">Returns initiated after 30 days will not be accepted unless the item is defective or we made an error.</p>
              </div>

              {/* Refund Process */}
              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">Refund Processing</h3>
                <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                  Once we receive your return and inspect it, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed within 7-10 business days.
                </p>
                <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                  Refunds will be issued to the original payment method. Please note that it may take additional time for your bank or credit card company to process the refund.
                </p>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  Original shipping charges are non-refundable. Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective item.
                </p>
              </div>

              {/* Damaged or Defective */}
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg text-secondary mb-2">Damaged or Defective Items</h3>
                    <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                      If you receive a damaged or defective item, please contact us immediately within 48 hours of delivery. We will arrange for a replacement or full refund, including return shipping costs.
                    </p>
                    <p className="font-body text-sm text-secondary leading-relaxed">Please provide photographs of the damage or defect to expedite the process. Do not discard packaging until inspection is complete.</p>
                  </div>
                </div>
              </div>

              {/* Exchange Policy */}
              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">Exchanges</h3>
                <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                  We do not offer direct exchanges. If you wish to exchange an item, please return it following our return process and place a new order for the desired item.
                </p>
                <p className="font-body text-sm text-secondary leading-relaxed">This ensures you receive your new item as quickly as possible without waiting for the return to be processed.</p>
              </div>

              {/* Custom Orders */}
              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">Custom Order Cancellations</h3>
                <p className="font-body text-sm text-secondary leading-relaxed mb-3">Custom-made furniture cannot be returned. However, you may cancel a custom order before production begins for a full refund minus a 10% restocking fee.</p>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  Once production has started (after you approve the design), custom orders cannot be canceled or returned. We will provide progress updates throughout the production process.
                </p>
              </div>

              {/* Return Shipping */}
              <div>
                <h3 className="font-heading text-xl text-secondary mb-4">Return Shipping Guidelines</h3>
                <ul className="space-y-2">
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Use original packaging when possible to prevent damage during return shipping</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Insure high-value items for the full purchase price</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Include Return Authorization (RA) number on the outside of the package</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Keep tracking information until refund is processed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-secondary/5 rounded-lg border border-secondary/10">
              <h3 className="font-heading text-2xl text-secondary mb-3 text-center">Questions About Returns?</h3>
              <p className="font-body text-secondary text-sm mb-6 text-center max-w-2xl mx-auto">Our customer service team is here to help. Contact us before initiating a return to ensure a smooth process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:returns@bumiteakfurniture.com" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded text-center">
                  Email Returns Team
                </a>
                <a href="/contact" className="inline-block border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary/5 transition-colors rounded text-center">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
