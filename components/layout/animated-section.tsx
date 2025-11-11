"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks/useInView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", delay = 0, threshold = 0.1 }) => {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as never,
        delay,
      },
    },
  };

  return (
    <motion.section ref={ref as never} variants={variants} initial="hidden" animate={isInView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
