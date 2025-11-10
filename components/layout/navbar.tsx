"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

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
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Shop", href: "/shop", hasDropdown: true },
    { label: "Collections", href: "/collections", hasDropdown: true },
  ];

  const collections: CollectionItem[] = [
    { name: "Dining", href: "/collections/dining" },
    { name: "Living", href: "/collections/living" },
    { name: "Outdoor", href: "/collections/outdoor" },
    { name: "Custom", href: "/collections/custom" },
    { name: "Accessories", href: "/collections/accessories" },
  ];

  return (
    <nav className="bg-primary text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex item-start">
              <Image src="/logo-white.png" alt="Bumi Teak Nusantara Logo" width={100} height={40} />
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
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      {/* Collections Dropdown */}
                      {item.label === "Collections" && isCollectionsOpen && (
                        <div className="absolute left-0 top-full mt-2 w-48 bg-secondary rounded shadow-lg py-2 z-50">
                          <p className="font-heading text-white px-4 py-2 text-sm">Collections</p>
                          {collections.map((collection) => (
                            <Link key={collection.name} href={collection.href} className="font-body block px-4 py-2 text-sm text-white hover:bg-primary transition-colors">
                              {collection.name}
                            </Link>
                          ))}
                        </div>
                      )}
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
            <Link href="/shop" className="font-body bg-light text-primary px-6 py-2 text-sm hover:bg-white transition-colors">
              Shop
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary absolute top-full left-0 w-full z-50 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
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
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {item.label === "Collections" && isCollectionsOpen && (
                      <div className="pl-4 space-y-2 mt-2">
                        {collections.map((collection) => (
                          <Link key={collection.name} href={collection.href} className="font-body block text-sm text-light py-1">
                            {collection.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="font-body block text-sm text-white py-2">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
              <Link href="/contact" className="font-body border border-white text-white px-6 py-2 text-sm text-center hover:bg-white hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/shop" className="font-body bg-light text-primary px-6 py-2 text-sm text-center hover:bg-white transition-colors">
                Shop
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
