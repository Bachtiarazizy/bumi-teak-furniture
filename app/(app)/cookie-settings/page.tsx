"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import LegalPageHero from "@/components/layout/legal-page-hero-section";

interface CookieCategory {
  id: string;
  title: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

export default function CookieSettingsPage() {
  const [cookieSettings, setCookieSettings] = useState<CookieCategory[]>([
    {
      id: "necessary",
      title: "Necessary Cookies",
      description: "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot disable these cookies.",
      required: true,
      enabled: true,
    },
    {
      id: "functional",
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
      required: false,
      enabled: true,
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your experience.",
      required: false,
      enabled: true,
    },
    {
      id: "marketing",
      title: "Marketing Cookies",
      description: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.",
      required: false,
      enabled: false,
    },
  ]);

  const [saveMessage, setSaveMessage] = useState("");

  const handleToggle = (id: string) => {
    setCookieSettings((prev) => prev.map((category) => (category.id === id && !category.required ? { ...category, enabled: !category.enabled } : category)));
  };

  const handleSavePreferences = () => {
    // Here you would save preferences to localStorage or cookie
    console.log("Saving cookie preferences:", cookieSettings);
    setSaveMessage("Your cookie preferences have been saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleAcceptAll = () => {
    setCookieSettings((prev) => prev.map((category) => ({ ...category, enabled: true })));
    setSaveMessage("All cookies have been accepted!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleRejectAll = () => {
    setCookieSettings((prev) => prev.map((category) => (category.required ? category : { ...category, enabled: false })));
    setSaveMessage("Optional cookies have been rejected!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <main className="min-h-screen">
      <LegalPageHero title="Cookie Settings" lastUpdated="January 15, 2024" description="Manage your cookie preferences and learn how we use cookies to improve your experience on our website." />

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl text-secondary mb-4">About Cookies</h2>
              <p className="font-body text-secondary text-sm leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
              <p className="font-body text-secondary text-sm leading-relaxed">You can control which cookies you allow below. Note that blocking some types of cookies may impact your experience on our website.</p>
            </div>

            {/* Save Message */}
            {saveMessage && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-8 flex items-center gap-3">
                <Check className="w-5 h-5" />
                <span className="font-body text-sm">{saveMessage}</span>
              </div>
            )}

            {/* Cookie Categories */}
            <div className="space-y-6 mb-12">
              {cookieSettings.map((category) => (
                <div key={category.id} className="border border-secondary/10 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-heading text-xl text-secondary mb-2">
                        {category.title}
                        {category.required && <span className="ml-2 text-xs bg-secondary/10 text-secondary px-2 py-1 rounded font-body">Always Active</span>}
                      </h3>
                      <p className="font-body text-secondary text-sm leading-relaxed">{category.description}</p>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => handleToggle(category.id)}
                      disabled={category.required}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ml-4 flex-shrink-0 ${
                        category.enabled ? "bg-secondary" : "bg-secondary/20"
                      } ${category.required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${category.enabled ? "translate-x-6" : "translate-x-1"}`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button onClick={handleSavePreferences} className="bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors rounded">
                Save Preferences
              </button>
              <button onClick={handleAcceptAll} className="border border-secondary text-secondary px-8 py-3 font-body text-sm hover:bg-secondary/5 transition-colors rounded">
                Accept All
              </button>
              <button onClick={handleRejectAll} className="border border-secondary/30 text-secondary/70 px-8 py-3 font-body text-sm hover:bg-secondary/5 transition-colors rounded">
                Reject Optional
              </button>
            </div>

            {/* Additional Information */}
            <div className="mt-12 pt-8 border-t border-secondary/10">
              <h2 className="font-heading text-2xl text-secondary mb-4">More Information</h2>
              <p className="font-body text-secondary text-sm leading-relaxed mb-4">
                For more details about how we use cookies and other technologies, please read our Privacy Policy. If you have any questions about our cookie usage, please contact us at privacy@bumiteakfurniture.com.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/privacy-policy" className="font-body text-sm text-secondary hover:text-secondary/70 underline">
                  Privacy Policy
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
