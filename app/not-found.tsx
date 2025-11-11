"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#faf8f5] to-[#f5f1ea] flex items-center justify-center px-6 py-20">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center max-w-2xl">
        {/* Animated 404 */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="text-[150px] md:text-[200px] font-bold text-[#d4a574] leading-none"
          >
            404
          </motion.h1>
        </motion.div>

        {/* Decorative Wood Grain SVG */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-[#d4a574]/30">
            <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} d="M10,20 Q40,10 70,20 T130,20" stroke="currentColor" strokeWidth="2" fill="none" />
            <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.7 }} d="M10,40 Q40,50 70,40 T130,40" stroke="currentColor" strokeWidth="2" fill="none" />
            <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.9 }} d="M10,60 Q40,55 70,60 T130,60" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold text-[#2c1810] mb-4">
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for has been moved, deleted, or doesn&apos;t exist. Let&apos;s get you back on track.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-[#2c1810] text-white rounded-md font-medium hover:bg-[#3d2415] transition-colors">
              Back to Home
            </motion.button>
          </Link>
          <Link href="/shop">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 border-2 border-[#d4a574] text-[#2c1810] rounded-md font-medium hover:bg-[#d4a574] hover:text-white transition-colors">
              Browse Products
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/about" className="text-[#d4a574] hover:text-[#c9995c] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-[#d4a574] hover:text-[#c9995c] transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-[#d4a574] hover:text-[#c9995c] transition-colors">
              FAQ
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
