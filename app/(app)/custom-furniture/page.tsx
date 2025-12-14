"use client";

import React, { useState } from "react";
import { Pencil, MessageSquare, Ruler, CheckCircle, Upload, Mail, User, Home, ChevronDown } from "lucide-react";
import InformationPageHero from "@/components/layout/page-hero-section";
import TransformLivingCTA from "@/components/home-page/transform-living-CTA-section";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Share your vision with us. We'll discuss your needs, space requirements, style preferences, and budget to understand exactly what you're looking for.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our designers create detailed sketches and 3D renderings of your custom piece, incorporating your feedback at every stage.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Choose from our premium teak wood options and finishes. We'll guide you through the selection process to match your requirements.",
    icon: CheckCircle,
  },
  {
    number: "04",
    title: "Expert Crafting",
    description: "Our master craftsmen bring your design to life with meticulous attention to detail and superior woodworking techniques.",
    icon: Ruler,
  },
  {
    number: "05",
    title: "Quality Check",
    description: "Every piece undergoes rigorous quality control to ensure it meets our exacting standards before delivery.",
    icon: CheckCircle,
  },
  {
    number: "06",
    title: "Delivery & Installation",
    description: "We carefully deliver and install your custom furniture, ensuring it fits perfectly and exceeds your expectations.",
    icon: Home,
  },
];

const customOptions = [
  {
    title: "Dining Tables",
    description: "Custom-built to fit your dining space and lifestyle.",
    examples: ["Extendable tables", "Live edge designs", "Custom dimensions"],
  },
  {
    title: "Bedroom Sets",
    description: "Furnish your bedroom with pieces made to suit your style and storage needs.",
    examples: ["Bed frames", "Wardrobes", "Nightstands"],
  },
  {
    title: "Living Room",
    description: "Build a living space that feels warm, balanced, and elegant.",
    examples: ["TV units", "Coffee tables", "Sofa frames"],
  },
  {
    title: "Office Furniture",
    description: "Create a workspace that inspires focus and comfort.",
    examples: ["Executive desks", "Bookshelves", "Conference tables"],
  },
  {
    title: "Outdoor Furniture",
    description: "Durable teak pieces designed to withstand the elements.",
    examples: ["Lounge sets", "Dining sets", "Daybeds"],
  },
  {
    title: "Special Projects",
    description: "For unique architectural or functional needs.",
    examples: ["Wall panels", "Room dividers", "Custom storage"],
  },
];

const faqs = [
  {
    question: "How long does the custom furniture process take?",
    answer: "Typically, the entire process from initial consultation to delivery takes 8-12 weeks, depending on the complexity of the design and our current workload. Rush orders may be accommodated for an additional fee.",
  },
  {
    question: "What is the minimum order for custom furniture?",
    answer: "We don't have a strict minimum order, but custom projects generally start at a certain price point to ensure they're economically viable. Contact us to discuss your specific project.",
  },
  {
    question: "Can I see samples before committing?",
    answer: "Yes! We provide wood samples, finish samples, and detailed 3D renderings so you can visualize your piece before we begin crafting.",
  },
  {
    question: "Do you offer delivery and installation?",
    answer: "Yes, we offer professional delivery and installation services throughout Indonesia. International shipping can also be arranged.",
  },
  {
    question: "What if I need changes during the design process?",
    answer: "Minor design adjustments can be made during the design phase. Once production begins, significant changes may incur additional costs and time.",
  },
];

export default function CustomFurniturePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    furnitureType: "",
    dimensions: "",
    budget: "",
    description: "",
    timeline: "",
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours to discuss your custom furniture project.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      furnitureType: "",
      dimensions: "",
      budget: "",
      description: "",
      timeline: "",
    });
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <InformationPageHero
        title="Custom Furniture Design"
        description="Crafted exclusively for you. Unique, personal, and made with heart."
        imagePath="/images/hero-image.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Custom Furniture", href: "/custom-furniture" },
        ]}
      />

      {/* Introduction */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Your Vision, Our Expertise</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Bumi Teak Furniture, we know that some visions are too personal for standard catalog pieces. That’s why we offer a bespoke furniture service where your ideas, needs, and lifestyle are translated into one of a kind teak
              creations.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you’re looking for the perfect size, a fresh design, or a modern reinterpretation of a meaningful piece, our team will work closely with you to bring your vision to life. With a deep understanding of teak wood and
              thoughtful craftsmanship, we create furniture that feels intentional, functional, and beautifully yours.{" "}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every custom piece begins with collaboration. You bring the idea; we bring the expertise in design, material selection, and precise handcrafting. Together, we create furniture that blends practicality, beauty, and soul
              perfectly tailored to your home.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Custom Options Grid */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Can Create for You</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">From single statement pieces to full interior setups, we handle custom projects of all scales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h5 className="text-xl font-bold text-primary mb-3">{option.title}</h5>
                <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                <div className="space-y-2">
                  {option.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Our streamlined process ensures your custom furniture project is smooth from start to finish</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">{step.number}</div>
                    {index < processSteps.length - 1 && <div className="w-0.5 h-10 bg-primary mt-4" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start gap-4">
                      <step.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h5>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="bg-primarypy-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Start Your Custom Project</h2>
              <p className="text-gray-700">Fill out the form below and our design team will contact you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 lg:p-10 space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Furniture Type & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="furnitureType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Furniture Type *
                  </label>
                  <select
                    id="furnitureType"
                    name="furnitureType"
                    value={formData.furnitureType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="dining">Dining Table</option>
                    <option value="bedroom">Bedroom Furniture</option>
                    <option value="living">Living Room</option>
                    <option value="office">Office Furniture</option>
                    <option value="outdoor">Outdoor Furniture</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select id="timeline" name="timeline" value={formData.timeline} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select timeline</option>
                    <option value="flexible">Flexible</option>
                    <option value="2-3months">2-3 Months</option>
                    <option value="1-2months">1-2 Months</option>
                    <option value="urgent">Urgent (Rush Fee)</option>
                  </select>
                </div>
              </div>

              {/* Dimensions & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="dimensions" className="block text-sm font-semibold text-gray-700 mb-2">
                    Approximate Dimensions
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g., 200cm x 100cm x 75cm"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select range</option>
                    <option value="under5">Under 5 Million RM</option>
                    <option value="5-10">5-10 Million IDR</option>
                    <option value="10-20">10-20 Million IDR</option>
                    <option value="20-50">20-50 Million IDR</option>
                    <option value="over50">Over 50 Million IDR</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your vision, style preferences, intended use, and any specific requirements..."
                />
              </div>

              {/* File Upload Note */}
              <div className="bg-primaryborder border-primary rounded-lg p-4 flex items-start gap-3">
                <Upload className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">Have reference images or sketches?</p>
                  <p>After submitting this form, our team will contact you with instructions for sharing design inspirations and reference materials.</p>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary transition-colors shadow-md hover:shadow-lg">
                Submit Request
              </button>

              <p className="text-xs text-gray-500 text-center">By submitting this form, you agree to our terms and privacy policy. We&apos;ll never share your information.</p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Common questions about our custom furniture service</p>
            </div>

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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <TransformLivingCTA
        heading="Ready to Create"
        subheading="Your Dream Space?"
        description="Explore our custom furniture options and start your design journey today."
        primaryButtonText="Browse Products"
        secondaryButtonText="Contact Us"
        imagePath="/images/hero-image.jpg"
        primaryButtonLink="/shop"
        secondaryButtonLink="/contact"
        contentAlignment="center"
      />
    </main>
  );
}
