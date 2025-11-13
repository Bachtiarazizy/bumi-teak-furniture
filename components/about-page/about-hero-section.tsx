"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AboutHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imagePath?: string;
  startAnimation?: boolean;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title = "CRAFTING LEGACY",
  subtitle = "ONE PIECE AT A TIME",
  description = "For over two decades, we've been transforming Indonesian teak into timeless furniture that bridges heritage and contemporary living.",
  imagePath = "/about-hero.jpg",
  startAnimation = false,
}) => {
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

  return (
    <motion.section initial="hidden" animate="visible" variants={containerVariants} className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}

      <motion.div variants={imageVariants} className="absolute inset-0">
        <Image src={imagePath} alt="About Bumi Teak Furniture" fill className="object-cover" priority />
        <motion.div variants={overlayVariants} className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={titleVariants} className="max-w-3xl">
            <h3 className="font-heading text-white mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 0, y: 0 } : { opacity: 1, y: 20 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.3,
                }}
                className="text-4xl md:text-5xl lg:text-6xl tracking-wide mb-2"
              >
                {title}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 0, y: 0 } : { opacity: 1, y: 20 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.45,
                }}
                className="text-4xl md:text-5xl lg:text-6xl tracking-wide"
              >
                {subtitle}
              </motion.div>
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={startAnimation ? { opacity: 0, y: 0 } : { opacity: 1, y: 20 }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.6,
              }}
              className="font-body text-white text-md md:text-lg leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutHero;
