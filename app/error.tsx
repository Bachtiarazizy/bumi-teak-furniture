"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#faf8f5] to-[#f5f1ea] flex items-center justify-center px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl">
        {/* Error Icon */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-3xl md:text-4xl font-serif font-bold text-[#2c1810] mb-4">
          Oops! Something Went Wrong
        </motion.h2>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Don&apos;t worry, our team has been notified and we&apos;re working on it.
        </motion.p>

        {/* Error Details (for development) */}
        {process.env.NODE_ENV === "development" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-8 p-4 bg-gray-100 rounded-lg text-left text-sm text-gray-700 max-w-lg mx-auto overflow-auto">
            <p className="font-semibold mb-2">Error Details:</p>
            <p className="text-red-600">{error.message}</p>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={reset} className="px-8 py-3 bg-[#2c1810] text-white rounded-md font-medium hover:bg-[#3d2415] transition-colors">
            Try Again
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/")}
            className="px-8 py-3 border-2 border-[#d4a574] text-[#2c1810] rounded-md font-medium hover:bg-[#d4a574] hover:text-white transition-colors"
          >
            Go to Homepage
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
