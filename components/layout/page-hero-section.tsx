import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Breadcrumb {
  label: string;
  href: string;
}

interface LegalPageHeroProps {
  title: string;
  description?: string;
  imagePath?: string;
  breadcrumbs?: Breadcrumb[];
  showBreadcrumbs?: boolean;
  contentAlignment?: "center" | "start";
}

const InformationPageHero: React.FC<LegalPageHeroProps> = ({ title, description, imagePath, breadcrumbs = [], showBreadcrumbs = true, contentAlignment = "center" }) => {
  const alignmentClasses = {
    center: "text-center mx-auto",
    start: "text-left",
  };

  const breadcrumbAlignmentClasses = {
    center: "justify-center",
    start: "justify-start",
  };

  return (
    <section className="relative bg-light py-12 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {imagePath && <Image src={imagePath} alt={title} fill className="object-cover" priority />}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          {showBreadcrumbs && breadcrumbs.length > 0 && (
            <nav className={`flex items-center gap-2 mb-6 ${breadcrumbAlignmentClasses[contentAlignment]}`}>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight className="w-4 h-4 text-white/50" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-sm text-white">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Content */}
          <div className={`max-w-4xl ${alignmentClasses[contentAlignment]}`}>
            <h1 className="font-heading text-white mb-4 drop-shadow-lg text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
            {description && <p className={`font-body text-white/90 text-base md:text-md max-w-2xl drop-shadow-md leading-relaxed ${contentAlignment === "center" ? "mx-auto" : ""}`}>{description}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationPageHero;
