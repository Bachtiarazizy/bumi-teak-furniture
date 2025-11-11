"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#faf8f5] to-[#f5f1ea] flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8">
          <div className="relative w-24 h-24 mx-auto">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-4 border-[#d4a574]/20 border-t-[#d4a574]"
            />

            {/* Inner Wood Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  d="M50,10 L50,90 M30,30 Q50,20 70,30 M25,50 Q50,40 75,50 M30,70 Q50,60 70,70"
                  stroke="#d4a574"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-2xl font-serif font-semibold text-[#2c1810] mb-4">
          Loading...
        </motion.h2>

        {/* Animated Dots */}
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-[#d4a574]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
