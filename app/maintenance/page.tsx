"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#2c1810] via-[#3d2415] to-[#1a0f08] flex items-center justify-center px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-2xl">
        {/* Maintenance Icon */}
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-[#d4a574]/10 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-[#d4a574]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl md:text-5xl font-serif font-bold text-[#d4a574] mb-4">
          Under Maintenance
        </motion.h1>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-[#d4a574]/80 text-lg mb-8 max-w-md mx-auto">
          We&apos;re currently performing scheduled maintenance to improve your experience. We&apos;ll be back shortly!
        </motion.p>

        {/* Animated Progress Bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-8">
          <div className="w-full max-w-xs mx-auto h-2 bg-[#d4a574]/20 rounded-full overflow-hidden">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/3 bg-[#d4a574] rounded-full"
            />
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-[#d4a574]/60 text-sm">
          <p>For urgent inquiries, please contact:</p>
          <p className="mt-2">
            <a href="mailto:support@bumiteak.com" className="text-[#d4a574] hover:text-[#c9995c] transition-colors">
              support@bumiteakfurniture.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
