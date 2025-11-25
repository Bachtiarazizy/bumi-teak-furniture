"use client";

import React from "react";
import Image from "next/image";
import { Clock, Download, Share2 } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";

interface SanityImage {
  asset: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
}

interface GuideDetailHeroProps {
  title: string;
  category: string;
  readTime: string;
  image?: SanityImage;
  downloadable: boolean;
  pdfUrl?: string;
}

export default function GuideDetailHero({ title, category, readTime, image, downloadable, pdfUrl }: GuideDetailHeroProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const imageUrl = image?.asset ? urlForImage(image.asset).width(1200).height(600).url() : "/images/guides/default.jpg";

  return (
    <section className="relative bg-secondary text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src={imageUrl} alt={image?.alt || title} fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-linear-to-b from-secondary/50 to-secondary" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category Badge */}
          <div className="inline-block mb-6">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-body uppercase tracking-wide">{category}</span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">{title}</h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm font-body text-white/80 mb-8">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
            {downloadable && pdfUrl && (
              <>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Downloadable PDF
                </span>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {downloadable && pdfUrl && (
              <a href={pdfUrl} download className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-3 rounded font-body text-sm hover:bg-white/90 transition-colors">
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            )}
            <button onClick={handleShare} className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3 rounded font-body text-sm hover:bg-white/10 transition-colors">
              <Share2 className="w-4 h-4" />
              Share Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
