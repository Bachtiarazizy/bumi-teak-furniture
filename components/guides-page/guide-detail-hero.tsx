"use client";

import React from "react";
import Image from "next/image";
import { Download, Share2 } from "lucide-react";
import Link from "next/link";
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
  image?: SanityImage;
  downloadable: boolean;
  pdfUrl?: string;
  slug?: string; // slug untuk breadcrumb
}

export default function GuideDetailHero({ title, category, image, downloadable, pdfUrl, slug }: GuideDetailHeroProps) {
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
    <section className="bg-white">
      <div className="container max-w-5xl mx-auto px-6 lg:px-12 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-body text-secondary/60 mb-8">
          <Link href="/">
            <span className="hover:text-secondary cursor-pointer">Home</span>
          </Link>
          <span>/</span>
          <Link href="/guides">
            <span className="hover:text-secondary cursor-pointer">Guides</span>
          </Link>
          <span>/</span>
          <Link href={`/guides/${slug}`}>
            <span className="hover:text-secondary cursor-pointer">{title}</span>
          </Link>
        </div>

        {/* Content */}
        <div className="container mx-auto">
          {/* Category Badge */}
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-body mb-6">{category}</span>

          {/* Title */}
          <h1 className="font-heading text-secondary mb-6 leading-tight">
            <div className="text-2xl md:text-3xl lg:text-4xl">{title}</div>
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-body text-secondary/60 mb-8">
            <div className="flex items-center gap-2"></div>
            {downloadable && pdfUrl && (
              <>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Downloadable PDF</span>
                </div>
              </>
            )}
          </div>

          {/* Featured Image */}
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image src={imageUrl} alt={image?.alt || title} fill className="object-cover" priority />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {downloadable && pdfUrl && (
              <a href={pdfUrl} download className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded font-body text-sm hover:bg-secondary/90 transition-colors">
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            )}
            <button onClick={handleShare} className="inline-flex items-center gap-2 border border-secondary/30 text-secondary px-8 py-3 rounded font-body text-sm hover:bg-secondary/10 transition-colors">
              <Share2 className="w-4 h-4" />
              Share Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
