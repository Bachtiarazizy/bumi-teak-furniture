"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  companyName?: string;
  copyrightYear?: number;
}

const Footer: React.FC<FooterProps> = ({ companyName = "Bumi Teak Furniture", copyrightYear = 2024 }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      console.log("Subscribe email:", email);
      setEmail("");
    }
  };

  const footerLinks = {
    company: [
      { label: "About", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Collections", href: "/shop/collections" },
      { label: "Gallery", href: "/gallery" },
      { label: "Craftsmanship", href: "/craftsmanship" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Care tips", href: "/care-tips" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Contact", href: "/contact" },
    ],
    support: [
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
      { label: "Warranty", href: "/warranty" },
      { label: "Dealers", href: "/dealers" },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 mb-12">
          {/* Logo, Description & Newsletter */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Link href="/" className="flex items-start mb-6">
                <Image src="/logo-white.png" alt="Bumi Teak Furniture Logo" width={120} height={48} />
              </Link>
              <p className="font-body text-sm text-white/80 leading-relaxed max-w-xs mb-6">Bumi Teak Furniture blends Scandinavian simplicity with Indonesian craftsmanship to create timeless teak furniture that connects you with nature.</p>
            </div>

            <div>
              {/* Social Icons */}
              <div className="flex items-center gap-6 mb-6">
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link key={label} href={href} aria-label={label} className="text-white/80 hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-heading text-white text-lg mb-4">Company</h5>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h5 className="font-heading text-white text-lg mb-4">Resources</h5>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="font-heading text-white text-lg mb-4">Support</h5>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body text-sm text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h5 className="font-heading text-white text-lg mb-4">Subscribe</h5>
            <p className="font-body text-sm text-white/80 mb-4 leading-relaxed">Stay connected with our latest teak furniture designs and craftsmanship insights.</p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm font-body focus:outline-none focus:border-white/40 transition-colors"
              />
              <button onClick={handleSubmit} className="w-full bg-light text-secondary px-6 py-2 text-sm font-body hover:bg-white transition-colors">
                Submit
              </button>
            </div>
            <p className="font-body text-xs text-white/60 mt-3 leading-relaxed">By subscribing, you agree to our privacy policy and email communications.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm font-body text-white/80">
              <span>
                © {copyrightYear} {companyName}. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-sm font-body text-white/80">
              <span>•</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Policy
              </Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Service
              </Link>
              <span>•</span>
              <Link href="/cookie-settings" className="hover:text-white transition-colors">
                Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
