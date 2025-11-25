"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface CollectionItem {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Collections", href: "/collections", hasDropdown: true },
  ];

  const collections: CollectionItem[] = [
    { name: "All Collections", href: "/shop/collections" },
    { name: "Dining", href: "/shop/collections/dining" },
    { name: "Living", href: "/shop/collections/living" },
    { name: "Outdoor", href: "/shop/collections/outdoor" },
    { name: "Custom", href: "/custom-furniture" },
    { name: "Office", href: "/shop/collections/office" },
    { name: "Accessories", href: "/shop/collections/accessories" },
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as never,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 1, 1] as never,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as never,
      },
    },
    visible: {
      opacity: 1,
      height: "auto" as const,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as never,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as never,
      },
    }),
  };

  const collectionItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1] as never,
      },
    }),
  };

  return (
    <nav className="bg-primary text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex item-start">
              <Image src="/logo-btf-white.png" alt="Bumi Teak Nusantara Logo" width={80} height={40} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (item.label === "Shop") {
                            setIsShopOpen(!isShopOpen);
                            setIsCollectionsOpen(false);
                          } else if (item.label === "Collections") {
                            setIsCollectionsOpen(!isCollectionsOpen);
                            setIsShopOpen(false);
                          }
                        }}
                        className="font-body text-sm flex items-center gap-1 hover:text-light transition-colors"
                      >
                        {item.label}
                        <motion.div animate={{ rotate: isCollectionsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      {/* Collections Dropdown with Animation */}
                      <AnimatePresence>
                        {item.label === "Collections" && isCollectionsOpen && (
                          <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute left-0 top-full mt-2 w-48 bg-secondary rounded shadow-lg py-2 z-50 overflow-hidden">
                            {collections.map((collection, i) => (
                              <motion.div key={collection.name} custom={i} variants={collectionItemVariants} initial="hidden" animate="visible">
                                <Link href={collection.href} className="font-body block px-4 py-2 text-sm text-white hover:bg-primary transition-colors" onClick={() => setIsCollectionsOpen(false)}>
                                  {collection.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href} className="font-body text-sm hover:text-light transition-colors">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="font-body border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/shop" className="font-body bg-white text-primary px-6 py-2 text-sm hover:bg-light transition-colors">
              Shop
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white" whileTap={{ scale: 0.9 }}>
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div variants={mobileMenuVariants} initial="hidden" animate="visible" exit="hidden" className="md:hidden bg-secondary absolute top-full left-0 w-full z-50 shadow-lg overflow-hidden">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div key={item.label} custom={index} variants={mobileItemVariants} initial="hidden" animate="visible">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          if (item.label === "Collections") {
                            setIsCollectionsOpen(!isCollectionsOpen);
                          }
                        }}
                        className="font-body text-sm text-white flex items-center justify-between w-full py-2"
                      >
                        {item.label}
                        <motion.div animate={{ rotate: isCollectionsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {item.label === "Collections" && isCollectionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="pl-4 space-y-2 mt-2 overflow-hidden"
                          >
                            {collections.map((collection, i) => (
                              <motion.div key={collection.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.2 }}>
                                <Link href={collection.href} className="font-body block text-sm text-light py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                  {collection.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href} className="font-body block text-sm text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div className="flex flex-col gap-3 pt-4 border-t border-white/20" custom={navItems.length} variants={mobileItemVariants} initial="hidden" animate="visible">
                <Link href="/contact" className="font-body border border-white text-white px-6 py-2 text-sm text-center hover:bg-white hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/shop" className="font-body bg-light text-primary px-6 py-2 text-sm text-center hover:bg-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Shop
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
