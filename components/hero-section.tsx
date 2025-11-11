"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imagePath?: string;
  startAnimation?: boolean; // Prop baru untuk mengontrol animasi
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "TIMELESS",
  subtitle = "ELEGANCE IN",
  description = "Every piece we craft tells a story where heritage and modern living unite, and the soul of nature becomes part of your home.",
  imagePath = "/images/hero-image.jpg",
  startAnimation = false,
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay: 0.8 + i * 0.1,
      },
    }),
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate={startAnimation ? "visible" : "hidden"} // Kontrol animasi berdasarkan prop
      className="relative h-[70vh] min-h-[580px] w-full overflow-hidden"
    >
      {/* Background Image */}
      <motion.div variants={imageVariants} className="absolute inset-0">
        <Image src={imagePath} alt="Elegant teak furniture interior" fill className="object-cover" priority />
        <motion.div variants={overlayVariants} className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-start pt-12 md:pt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={titleVariants} className="max-w-2xl">
            <h1 className="mb-2 font-heading text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.3,
                }}
                className="text-4xl md:text-6xl lg:text-7xl tracking-wide"
              >
                {title}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.45,
                }}
                className="text-4xl md:text-6xl lg:text-7xl tracking-wide"
              >
                {subtitle}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.6,
                }}
                className="text-4xl md:text-6xl lg:text-7xl tracking-wide"
              >
                EVERY GRAIN
              </motion.div>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div variants={ctaVariants} className="absolute bottom-0 right-0 z-20 bg-black/60 backdrop-blur-sm p-8 max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.8,
          }}
          className="text-white text-sm mb-6 leading-relaxed font-body"
        >
          {description}
        </motion.p>
        <div className="flex gap-4">
          <motion.div custom={0} variants={buttonVariants} initial="hidden" animate={startAnimation ? "visible" : "hidden"}>
            <Link href="/shop">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-gray-100 transition-colors font-body">
                Shop now
              </motion.button>
            </Link>
          </motion.div>
          <motion.div custom={1} variants={buttonVariants} initial="hidden" animate={startAnimation ? "visible" : "hidden"}>
            <Link href="/about">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors font-body">
                Discover more
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
