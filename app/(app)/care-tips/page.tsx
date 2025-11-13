"use client";

import React, { useState } from "react";
import { Droplets, Sun, Wind, Thermometer, Sparkles, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function CareTipsPage() {
  const [selectedType, setSelectedType] = useState<"indoor" | "outdoor">("indoor");

  const quickTips = [
    {
      icon: Sparkles,
      title: "Regular Cleaning",
      tip: "Dust weekly with a soft, dry cloth. For deeper cleaning, use mild soap and water.",
    },
    {
      icon: Droplets,
      title: "Oil Application",
      tip: "Apply teak oil 1-2 times per year for indoor furniture to maintain golden color.",
    },
    {
      icon: Sun,
      title: "Sun Protection",
      tip: "Avoid direct sunlight for indoor pieces to prevent uneven fading.",
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      tip: "Maintain consistent temperature and humidity to prevent wood movement.",
    },
  ];

  const dosList = [
    "Dust regularly with a soft, dry cloth",
    "Clean spills immediately with a damp cloth",
    "Use coasters and placemats to protect surfaces",
    "Apply teak oil annually to maintain color",
    "Allow wood to breathe - avoid airtight covers",
    "Clean with mild soap and water when needed",
    "Rotate cushions regularly for even wear",
    "Store outdoor furniture in covered area during winter",
  ];

  const dontsList = [
    "Never use harsh chemicals or abrasive cleaners",
    "Avoid pressure washers on teak furniture",
    "Don't use polyurethane or varnish on teak",
    "Don't place hot items directly on surface",
    "Avoid dragging furniture across floors",
    "Don't use silicone-based products",
    "Never sand against the grain",
    "Don't store in damp, unventilated spaces",
  ];

  const seasonalCare = [
    {
      season: "Spring",
      icon: "",
      tasks: ["Deep clean after winter", "Inspect for any damage or loose joints", "Apply fresh coat of teak oil if desired", "Check hardware and tighten if needed"],
    },
    {
      season: "Summer",
      icon: "",
      tasks: ["Hose down outdoor furniture monthly", "Protect from intense direct sunlight", "Monitor for excessive drying or cracking", "Keep cushions dry and store when not in use"],
    },
    {
      season: "Fall",
      icon: "",
      tasks: ["Clean thoroughly before storage", "Apply teak sealer if furniture stays outside", "Remove leaves and debris promptly", "Prepare covers for winter protection"],
    },
    {
      season: "Winter",
      icon: "",
      tasks: ["Store in covered, ventilated area if possible", "Use breathable furniture covers", "Remove snow and ice promptly", "Check monthly for moisture issues"],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* <LegalPageHero title="Teak Furniture Care Tips" description="Learn how to care for your teak furniture to ensure it remains beautiful for generations. Expert tips for both indoor and outdoor pieces." /> */}

      {/* Quick Tips */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-8 text-center">Essential Care Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickTips.map((tip, index) => (
                <div key={index} className="bg-light p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4">
                    <tip.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg text-secondary mb-2">{tip.title}</h3>
                  <p className="font-body text-sm text-secondary/80 leading-relaxed">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Indoor vs Outdoor Toggle */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4 mb-10">
              <button
                onClick={() => setSelectedType("indoor")}
                className={`px-8 py-3 rounded-lg font-body text-sm transition-all ${selectedType === "indoor" ? "bg-secondary text-white shadow-lg" : "bg-white text-secondary hover:bg-secondary/10"}`}
              >
                Indoor Furniture Care
              </button>
              <button
                onClick={() => setSelectedType("outdoor")}
                className={`px-8 py-3 rounded-lg font-body text-sm transition-all ${selectedType === "outdoor" ? "bg-secondary text-white shadow-lg" : "bg-white text-secondary hover:bg-secondary/10"}`}
              >
                Outdoor Furniture Care
              </button>
            </div>

            {/* Indoor Care */}
            {selectedType === "indoor" && (
              <div className="bg-white p-8 rounded-lg space-y-8">
                <div>
                  <h3 className="font-heading text-2xl text-secondary mb-4">Indoor Teak Furniture Care</h3>
                  <p className="font-body text-secondary text-sm leading-relaxed mb-6">Indoor teak furniture requires minimal maintenance but benefits from regular care to maintain its beautiful golden-brown color and smooth finish.</p>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-secondary mb-4">Daily & Weekly Care</h4>
                  <ul className="space-y-2">
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Dust with a soft, lint-free cloth or microfiber duster</span>
                    </li>
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Wipe up spills immediately with a slightly damp cloth</span>
                    </li>
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Use coasters, placemats, and trivets to protect surfaces</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-secondary mb-4">Monthly Deep Cleaning</h4>
                  <p className="font-body text-secondary text-sm leading-relaxed mb-3">
                    Mix a few drops of mild dish soap in warm water. Dampen a soft cloth (not soaking wet) and wipe down the furniture following the grain. Dry immediately with a clean cloth.
                  </p>
                  <p className="font-body text-secondary text-sm leading-relaxed">Never let water sit on teak surfaces as it can cause water marks.</p>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-secondary mb-4">Annual Oil Treatment</h4>
                  <p className="font-body text-secondary text-sm leading-relaxed mb-3">Apply teak oil once or twice a year to maintain the golden color:</p>
                  <ol className="space-y-2 ml-4">
                    <li className="font-body text-sm text-secondary">1. Clean the furniture thoroughly and let it dry completely</li>
                    <li className="font-body text-sm text-secondary">2. Apply teak oil with a clean cloth in the direction of the grain</li>
                    <li className="font-body text-sm text-secondary">3. Let it penetrate for 15-20 minutes</li>
                    <li className="font-body text-sm text-secondary">4. Wipe off excess oil with a clean cloth</li>
                    <li className="font-body text-sm text-secondary">5. Allow 24 hours to dry before use</li>
                  </ol>
                </div>
              </div>
            )}

            {/* Outdoor Care */}
            {selectedType === "outdoor" && (
              <div className="bg-white p-8 rounded-lg space-y-8">
                <div>
                  <h3 className="font-heading text-2xl text-secondary mb-4">Outdoor Teak Furniture Care</h3>
                  <p className="font-body text-secondary text-sm leading-relaxed mb-6">
                    Outdoor teak furniture is incredibly durable and naturally weather-resistant. It requires minimal maintenance and will develop a beautiful silver-gray patina over time.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <div className="flex gap-4">
                    <Wind className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-heading text-lg text-secondary mb-2">Natural Weathering Process</h4>
                      <p className="font-body text-sm text-secondary leading-relaxed">
                        Outdoor teak will naturally weather to a silver-gray color within 6-12 months. This is normal and desirable! The patina doesn&apos;t affect durability—it&apos;s purely aesthetic.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-secondary mb-4">Regular Maintenance</h4>
                  <ul className="space-y-2">
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Hose down monthly to remove dirt and debris</span>
                    </li>
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Use a soft brush for stubborn dirt</span>
                    </li>
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Remove leaves and debris promptly to prevent staining</span>
                    </li>
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Clean bird droppings immediately to prevent etching</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-secondary mb-4">Maintaining Golden Color (Optional)</h4>
                  <p className="font-body text-secondary text-sm leading-relaxed mb-3">If you prefer to maintain the golden honey color:</p>
                  <ul className="space-y-2">
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Apply teak sealer every 2-3 months</span>
                    </li>
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Use products specifically designed for outdoor teak</span>
                    </li>
                    <li className="font-body text-sm text-secondary flex items-start">
                      <span className="text-secondary mr-3 mt-1">•</span>
                      <span>Reapply after heavy rain or cleaning</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-secondary mb-4">Winter Storage</h4>
                  <p className="font-body text-secondary text-sm leading-relaxed">
                    While teak can withstand winter weather, storing furniture in a covered, ventilated area extends its life. If leaving outside, use breathable furniture covers and remove snow promptly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-10 text-center">Do&apos;s and Don&apos;ts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Do's */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3 className="font-heading text-2xl text-secondary">Do&apos;s</h3>
                </div>
                <ul className="space-y-3">
                  {dosList.map((item, index) => (
                    <li key={index} className="font-body text-sm text-secondary flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-8 h-8 text-red-600" />
                  <h3 className="font-heading text-2xl text-secondary">Don&apos;ts</h3>
                </div>
                <ul className="space-y-3">
                  {dontsList.map((item, index) => (
                    <li key={index} className="font-body text-sm text-secondary flex items-start">
                      <XCircle className="w-5 h-5 text-red-600 shrink-0 mr-3 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Care */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl text-secondary mb-10 text-center">Seasonal Care Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalCare.map((season, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-secondary/10">
                  <div className="text-4xl mb-4 text-center">{season.icon}</div>
                  <h3 className="font-heading text-xl text-secondary mb-4 text-center">{season.season}</h3>
                  <ul className="space-y-2">
                    {season.tasks.map((task, idx) => (
                      <li key={idx} className="font-body text-sm text-secondary flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/5 p-8 rounded-lg text-center border border-secondary/10">
              <AlertTriangle className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-secondary mb-3">Need Care Advice?</h3>
              <p className="font-body text-secondary text-sm mb-6 max-w-2xl mx-auto">Have a specific care question or issue? Our team is here to help with personalized advice for your teak furniture.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-block bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded">
                  Contact Support
                </a>
                <a href="/guides" className="inline-block border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary/5 transition-colors rounded">
                  View All Guides
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
