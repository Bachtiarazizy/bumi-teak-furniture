import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

interface CollectionHeroProps {
  title: string;
  description?: string;
  imagePath?: string;
  breadcrumbs?: { label: string; href: string }[];
}

const CollectionHero: React.FC<CollectionHeroProps> = ({ title, description, imagePath = "/images/hero-image.jpg", breadcrumbs = [] }) => {
  return (
    <section className="relative bg-light py-12 lg:py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src={imagePath} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 justify-center">
            <Link href="/" className="font-body text-sm text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <Link href="/shop" className="font-body text-sm text-white/70 hover:text-white transition-colors">
              Shop
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="w-4 h-4 text-white/50" />
                <Link href={crumb.href} className="font-body text-sm text-white/70 hover:text-white transition-colors line-clamp-1">
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="font-body text-sm text-white">{title}</span>
          </nav>

          {/* Title & Description */}
          <div className="text-center">
            <h1 className="font-heading text-white mb-4 drop-shadow-lg">{title}</h1>
            {description && <p className="font-body text-white/70 text-base md:text-md leading-relaxed max-w-2xl mx-auto drop-shadow-md">{description}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionHero;
