import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Download } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";

interface SanityImage {
  asset: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
}

interface RelatedGuide {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  category: string;
  readTime: string;
  image: SanityImage;
  downloadable: boolean;
}

interface RelatedGuidesProps {
  guides: RelatedGuide[];
}

export default function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (!guides || guides.length === 0) {
    return null;
  }

  return (
    <section className="bg-light py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-heading text-3xl md:text-4xl text-secondary">Related Guides</h3>
            <Link href="/guides" className="font-body text-sm text-secondary flex items-center gap-1 hover:gap-2 transition-all">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide) => {
              const imageUrl = guide.image?.asset ? urlForImage(guide.image.asset).width(600).height(400).url() : "/images/guides/placeholder.jpg";

              return (
                <Link href={`/guides/${guide.slug.current}`} key={guide._id} className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image src={imageUrl} alt={guide.image?.alt || guide.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    {guide.downloadable && (
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                        <Download className="w-4 h-4 text-secondary" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="font-body text-xs text-secondary/60 uppercase tracking-wide">{guide.category}</span>
                    <h5 className="font-heading text-xl text-secondary my-3 group-hover:text-secondary/70 transition-colors line-clamp-2">{guide.title}</h5>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs font-body text-secondary/60">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
