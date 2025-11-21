"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Instagram } from "lucide-react";
import InformationPageHero from "@/components/layout/page-hero-section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    setSubmitMessage("Thank you for contacting us! We will get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+62 291 123 4567", "+62 812 3456 7890"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@bumiteakfurniture.com", "support@bumiteakfurniture.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday - Sunday: Closed"],
    },
    {
      icon: Instagram,
      title: "Social Media",
      details: ["Instagram: @bumiteakfurniture", "facebook: @bumiteakfurniture"],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}

      <InformationPageHero
        title="Get In Touch"
        description="We'd love to hear from you. Whether you have questions about our products, need design advice, or want to discuss a custom project, our team is here to help."
        imagePath="/images/hero-image.jpg"
      />

      {/* Contact Info Cards */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-light p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-full mb-4">
                  <info.icon className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-heading text-lg text-secondary mb-3">{info.title}</h4>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-body text-sm text-secondary/80 ">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="font-heading text-3xl text-secondary mb-6">Send Us a Message</h3>

              {submitMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded mb-6">
                  <p className="font-body text-sm">{submitMessage}</p>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="font-body text-sm text-secondary mb-2 block">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body text-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-secondary mb-2 block">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body text-sm"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-secondary mb-2 block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body text-sm"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-secondary mb-2 block">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body text-sm"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="custom-order">Custom Order</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm text-secondary mb-2 block">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary/20 rounded focus:outline-none focus:border-secondary transition-colors font-body text-sm resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>

                <button onClick={handleSubmit} className="w-full bg-secondary text-white px-8 py-4 font-body text-sm hover:bg-secondary/90 transition-colors rounded flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map & Info */}
            <div>
              <h3 className="font-heading text-3xl text-secondary mb-6">Visit Our Workshop</h3>

              {/* Map Placeholder */}
              <div className="relative h-80 bg-secondary/10 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-secondary/40 mx-auto mb-2" />
                    <p className="font-body text-sm text-secondary/60">Map will be integrated here</p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-6 rounded-lg">
                <h3 className="font-heading text-xl text-secondary mb-4">Why Visit Us?</h3>
                <ul className="space-y-3">
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>See our craftsmen at work</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Touch and feel the quality of our teak</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Discuss custom designs in person</span>
                  </li>
                  <li className="font-body text-sm text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    <span>Explore our full collection</span>
                  </li>
                </ul>
                <p className="font-body text-sm text-secondary/80 mt-4 pt-4 border-t border-secondary/10">Please schedule an appointment for personalized attention and to ensure our design consultants are available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
