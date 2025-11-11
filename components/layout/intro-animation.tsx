"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Auto complete after animation
    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, 5000); // Total animation duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay: 1.5, // Wait for all elements to exit first
      },
    },
  };

  const exitVariants = {
    exit: (i: number) => ({
      opacity: 0,
      y: -30,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay: i * 0.15,
      },
    }),
  };

  const logoVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: 20,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay: 1.5 + i * 0.15,
      },
    }),
  };

  const lineVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay: 2.5,
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      letterSpacing: "0.5em",
    },
    visible: {
      opacity: 1,
      letterSpacing: "0.3em",
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay: 3,
      },
    },
  };

  const woodGrainVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 0.15,
      transition: {
        pathLength: {
          duration: 2,
          ease: [0.43, 0.13, 0.23, 0.96] as never,
          delay: 0.5,
        },
        opacity: {
          duration: 0.5,
          delay: 0.5,
        },
      },
    },
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-br from-[#2c1810] via-[#3d2415] to-[#1a0f08]">
          {/* Animated Wood Grain SVG Background */}
          <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <motion.path variants={woodGrainVariants} initial="hidden" animate="visible" d="M0,200 Q250,250 500,200 T1000,200" stroke="#d4a574" strokeWidth="2" fill="none" />
            <motion.path variants={woodGrainVariants} initial="hidden" animate="visible" d="M0,400 Q250,450 500,400 T1000,400" stroke="#d4a574" strokeWidth="2" fill="none" />
            <motion.path variants={woodGrainVariants} initial="hidden" animate="visible" d="M0,600 Q250,550 500,600 T1000,600" stroke="#d4a574" strokeWidth="2" fill="none" />
            <motion.path variants={woodGrainVariants} initial="hidden" animate="visible" d="M0,800 Q250,850 500,800 T1000,800" stroke="#d4a574" strokeWidth="2" fill="none" />
          </motion.svg>

          {/* Radial linear Overlay */}
          <div className="absolute inset-0 bg-linear-radial from-transparent via-[#2c1810]/50 to-[#1a0f08]" />

          {/* Main Content */}
          <div className="relative z-10 text-center px-6">
            {/* Logo/Icon */}
            <motion.div variants={logoVariants} initial="hidden" animate="visible" className="mb-8 flex justify-center">
              <div className="relative">
                {/* Animated Circle */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    delay: 0.2,
                  }}
                  className="w-32 h-32 rounded-full border-2 border-[#d4a574]/30 flex items-center justify-center"
                >
                  {/* Inner decorative element */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.43, 0.13, 0.23, 0.96],
                      delay: 0.8,
                    }}
                    className="w-20 h-20"
                  >
                    {/* Tree/Wood Icon */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          duration: 1.5,
                          ease: [0.43, 0.13, 0.23, 0.96],
                          delay: 1,
                        }}
                        d="M50,10 L50,90 M30,30 Q50,20 70,30 M25,50 Q50,40 75,50 M30,70 Q50,60 70,70"
                        stroke="#d4a574"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-t-2 border-[#d4a574]/20"
                />
              </div>
            </motion.div>

            {/* Brand Name */}
            <div className="space-y-2 mb-6">
              <motion.h1 custom={0} variants={textVariants} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-serif font-bold text-[#d4a574] tracking-wider">
                BUMI TEAK
              </motion.h1>
              <motion.h2 custom={1} variants={textVariants} initial="hidden" animate="visible" className="text-3xl md:text-5xl font-serif font-light text-[#c9995c]">
                FURNITURE
              </motion.h2>
            </div>

            {/* Decorative Line */}
            <motion.div variants={lineVariants} initial="hidden" animate="visible" className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-linear-to-r from-transparent to-[#d4a574]" />
              <div className="w-2 h-2 rotate-45 bg-[#d4a574]" />
              <div className="h-px w-20 bg-linear-to-l from-transparent to-[#d4a574]" />
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={subtitleVariants} initial="hidden" animate="visible" className="text-[#d4a574]/80 text-sm md:text-base uppercase tracking-[0.3em] font-light">
              Timeless Craftsmanship
            </motion.p>

            {/* Loading Indicator */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5, duration: 0.5 }} className="mt-12 flex justify-center">
              <div className="flex gap-2">
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
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.2, scale: 1 }} transition={{ duration: 1, delay: 2 }} className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#d4a574]" />
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.2, scale: 1 }} transition={{ duration: 1, delay: 2.1 }} className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#d4a574]" />
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.2, scale: 1 }} transition={{ duration: 1, delay: 2.2 }} className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#d4a574]" />
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.2, scale: 1 }} transition={{ duration: 1, delay: 2.3 }} className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#d4a574]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
