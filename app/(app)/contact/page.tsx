"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks/useInView";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: formRef, isInView: formInView } = useInView({ threshold: 0.1 });
  const { ref: infoRef, isInView: infoInView } = useInView({ threshold: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message setelah 5 detik
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#faf8f5] to-white">
      {/* Hero Header */}
      <motion.section ref={headerRef as never} initial="hidden" animate={headerInView ? "visible" : "hidden"} variants={fadeInUp} className="relative py-20 md:py-32 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-6">
            <motion.div initial={{ scaleX: 0 }} animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-20 h-1 bg-[#d4a574] mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#2c1810] mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have questions about our teak furniture? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div ref={formRef as never} initial="hidden" animate={formInView ? "visible" : "hidden"} variants={staggerContainer} className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
              <motion.h3 variants={fadeInUp} className="font-serif text-2xl md:text-3xl font-bold text-[#2c1810] mb-6">
                Send us a Message
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={fadeInUp}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all outline-none"
                    placeholder="+62 812 3456 7890"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="custom">Custom Order</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="support">Customer Support</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-md font-medium text-white transition-all ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#2c1810] hover:bg-[#3d2415]"}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </motion.div>

                {submitStatus === "success" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm">
                    ✓ Thank you for your message! We&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div ref={infoRef as never} initial="hidden" animate={infoInView ? "visible" : "hidden"} variants={staggerContainer} className="space-y-8">
              {/* Contact Info Cards */}
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a574]/10 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#2c1810] mb-2">Visit Our Showroom</h4>
                    <p className="text-gray-600">
                      Jl. Furniture Indah No. 123
                      <br />
                      Jepara, Central Java 59419
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a574]/10 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg text-[#2c1810] mb-2">Call Us</h5>
                    <p className="text-gray-600">
                      Phone: +62 291 123 4567
                      <br />
                      Mobile: +62 812 3456 7890
                      <br />
                      Mon-Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a574]/10 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg text-[#2c1810] mb-2">Email Us</h5>
                    <p className="text-gray-600">
                      General: info@bumiteak.com
                      <br />
                      Sales: sales@bumiteak.com
                      <br />
                      Support: support@bumiteak.com
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={fadeInUp} className="bg-linear-to-br from-[#2c1810] to-[#3d2415] p-6 rounded-lg shadow-lg text-white">
                <h5 className="font-semibold text-lg mb-4">Follow Us</h5>
                <div className="flex gap-4">
                  <motion.a href="#" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </motion.a>
                  <motion.a href="#" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.a>
                  <motion.a href="#" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.a>
                  <motion.a href="#" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg">
                <h5 className="font-semibold text-lg text-[#2c1810] mb-4">Business Hours</h5>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1810] mb-4">Find Us Here</h3>
            <p className="text-gray-600">Visit our showroom to experience the quality of our teak furniture firsthand</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl h-96 bg-gray-200">
            {/* Placeholder untuk Google Maps */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-sm">Google Maps Integration</p>
                <p className="text-xs mt-1">Replace with actual map embed</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
