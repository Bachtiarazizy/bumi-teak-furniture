import React from "react";
import { Shield, CheckCircle, XCircle, FileText, Mail, AlertCircle } from "lucide-react";
import LegalPageHero from "@/components/layout/legal-page-hero-section";

export default function WarrantyPage() {
  const covered = [
    "Defects in materials (wood quality, joints, hardware)",
    "Manufacturing defects in workmanship",
    "Structural failures under normal use",
    "Finish defects (peeling, bubbling, discoloration)",
    "Joint separation or loosening",
    "Hardware malfunction (hinges, drawer slides)",
  ];

  const notCovered = [
    "Normal wear and tear from regular use",
    "Damage from misuse, abuse, or accidents",
    "Improper assembly or installation",
    "Damage from improper cleaning or maintenance",
    "Natural wood characteristics (grain, color variation)",
    "Outdoor weathering and patina development",
    "Damage from extreme conditions (fire, flood)",
    "Modifications or repairs by unauthorized parties",
    "Commercial or institutional use",
    "Damage during customer transportation",
  ];

  const claimProcess = [
    {
      step: "1",
      title: "Contact Us",
      description: "Email warranty@bumiteakfurniture.com with your order number, photos of the issue, and a description of the problem.",
    },
    {
      step: "2",
      title: "Review & Assessment",
      description: "Our team will review your claim within 2-3 business days and may request additional information or photos.",
    },
    {
      step: "3",
      title: "Resolution",
      description: "If approved, we'll arrange for repair, replacement parts, or full replacement depending on the issue severity.",
    },
    {
      step: "4",
      title: "Service Completion",
      description: "We'll coordinate shipping or service and ensure your satisfaction with the resolution.",
    },
  ];

  return (
    <main className="min-h-screen">
      <LegalPageHero title="5-Year Warranty" description="We stand behind the quality of our craftsmanship. Every piece comes with our comprehensive 5-year warranty against defects." />

      {/* Warranty Overview */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/5 border-l-4 border-secondary p-8 rounded-r-lg mb-12">
              <div className="flex gap-4">
                <Shield className="w-12 h-12 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="font-heading text-2xl text-secondary mb-3">Our Warranty Commitment</h2>
                  <p className="font-body text-secondary text-sm leading-relaxed mb-3">
                    Bumi Teak Furniture warrants that all furniture will be free from defects in materials and workmanship for a period of five (5) years from the original date of purchase. This warranty reflects our confidence in the
                    quality of our Indonesian teak and traditional craftsmanship methods.
                  </p>
                  <p className="font-body text-secondary text-sm leading-relaxed">
                    We use time-honored joinery techniques, premium-grade teak, and careful quality control to ensure every piece meets our exacting standards. If a defect occurs during the warranty period, we will repair or replace the
                    affected item at no cost to you.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Covered */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl text-secondary mb-8">What&apos;s Covered</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                <div className="flex items-start gap-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">5-Year Coverage Includes:</h3>
                    <p className="font-body text-sm text-secondary/80 mb-4">Our warranty covers any defects that occur under normal residential use and proper care:</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {covered.map((item, index) => (
                    <li key={index} className="font-body text-sm text-secondary flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What's Not Covered */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl text-secondary mb-8">What&apos;s Not Covered</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                <div className="flex items-start gap-3 mb-6">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">Warranty Exclusions:</h3>
                    <p className="font-body text-sm text-secondary/80 mb-4">The following conditions are not covered by our warranty:</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {notCovered.map((item, index) => (
                    <li key={index} className="font-body text-sm text-secondary flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mb-12">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-lg text-secondary mb-2">Natural Wood Characteristics</h3>
                    <p className="font-body text-sm text-secondary leading-relaxed mb-3">
                      Teak is a natural material, and variations in grain pattern, color, and texture are expected and valued characteristics that make each piece unique. These variations are not considered defects.
                    </p>
                    <p className="font-body text-sm text-secondary leading-relaxed">
                      Outdoor teak furniture will naturally weather to a silver-gray patina over time. This is a normal and desirable characteristic that does not affect the structural integrity of the wood and is not covered by warranty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim Process */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl text-secondary mb-8">How to File a Warranty Claim</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {claimProcess.map((item, index) => (
                  <div key={index} className="bg-light p-6 rounded-lg">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-white text-lg">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-secondary mb-2">{item.title}</h3>
                        <p className="font-body text-sm text-secondary/80 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Information */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl text-secondary mb-6">What You&apos;ll Need</h2>
              <div className="bg-light p-8 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg text-secondary mb-3">Please Prepare the Following:</h3>
                    <ul className="space-y-2">
                      <li className="font-body text-sm text-secondary flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span>Original order number or proof of purchase</span>
                      </li>
                      <li className="font-body text-sm text-secondary flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span>Clear photographs of the defect or issue</span>
                      </li>
                      <li className="font-body text-sm text-secondary flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span>Detailed description of the problem</span>
                      </li>
                      <li className="font-body text-sm text-secondary flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span>Photos showing the overall condition of the furniture</span>
                      </li>
                      <li className="font-body text-sm text-secondary flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span>Date when the issue was first noticed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Warranty Terms */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl text-secondary mb-6">Additional Terms</h2>
              <div className="space-y-4 font-body text-sm text-secondary leading-relaxed">
                <p>
                  <strong>Warranty Transfer:</strong> This warranty is non-transferable and applies only to the original purchaser. Proof of purchase is required for warranty service.
                </p>
                <p>
                  <strong>Repair or Replacement:</strong> Bumi Teak Furniture reserves the right to repair or replace defective items at our discretion. If the original product is discontinued, we may substitute with a comparable item of
                  equal or greater value.
                </p>
                <p>
                  <strong>Shipping Costs:</strong> For warranty repairs or replacements, we will cover return shipping costs within Indonesia. For international warranty claims, shipping costs may be shared or negotiated based on the
                  specific situation.
                </p>
                <p>
                  <strong>Commercial Use:</strong> This warranty applies only to residential use. Furniture used in commercial settings (restaurants, hotels, offices) has a limited 1-year warranty.
                </p>
                <p>
                  <strong>Limitation of Liability:</strong> Our liability under this warranty is limited to repair or replacement of defective products. We are not liable for incidental or consequential damages.
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="p-8 bg-secondary/5 rounded-lg text-center border border-secondary/10">
              <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-secondary mb-3">Need Warranty Support?</h3>
              <p className="font-body text-secondary text-sm mb-6 max-w-2xl mx-auto">Our warranty team is here to help. Contact us with any questions about your warranty coverage or to initiate a claim.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:warranty@bumiteakfurniture.com" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded">
                  Email Warranty Team
                </a>
                <a href="/contact" className="inline-block border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary/5 transition-colors rounded">
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
