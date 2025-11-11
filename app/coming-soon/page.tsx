"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Countdown timer (example: 30 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#2c1810] via-[#3d2415] to-[#1a0f08] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.2 }}
              d={`M0,${200 + i * 150} Q250,${250 + i * 150} 500,${200 + i * 150} T1000,${200 + i * 150}`}
              stroke="#d4a574"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl relative z-10">
        {/* Logo */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a574] mb-2">BUMI TEAK FURNITURE</h2>
        </motion.div>

        {/* Coming Soon Title */}
        <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Coming Soon
        </motion.h3>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="text-[#d4a574]/80 text-lg mb-12 max-w-2xl mx-auto">
          We&apos;re crafting something special. Get notified when we launch and receive exclusive early access offers.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="grid grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={unit} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#d4a574]/20">
              <motion.div key={value} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-2">
                {value.toString().padStart(2, "0")}
              </motion.div>
              <div className="text-[#d4a574]/60 text-sm uppercase tracking-wide">{unit}</div>
            </div>
          ))}
        </motion.div>

        {/* Email Subscription */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white/10 border border-[#d4a574]/30 rounded-md text-white placeholder-[#d4a574]/50 focus:outline-none focus:ring-2 focus:ring-[#d4a574] backdrop-blur-sm"
              />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="px-8 py-4 bg-[#d4a574] text-[#2c1810] rounded-md font-semibold hover:bg-[#c9995c] transition-colors">
                Notify Me
              </motion.button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-400">
              ✓ Thank you! We&apos;ll notify you when we launch.
            </motion.div>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-12">
          <p className="text-[#d4a574]/60 text-sm mb-4">Follow us for updates</p>
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center border border-[#d4a574]/20 transition-colors"
              >
                <social.Icon className="w-6 h-6 text-[#d4a574]" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
