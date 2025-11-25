/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";

interface GuideContentProps {
  content: any; // Portable Text from Sanity
}

// Custom components for Portable Text
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative h-96 rounded-lg overflow-hidden my-8">
          <Image src={urlForImage(value).url()} alt={value.alt || "Guide image"} fill className="object-cover" />
          {value.caption && <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm font-body p-4">{value.caption}</p>}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="font-heading text-3xl text-secondary mt-12 mb-6">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-heading text-2xl text-secondary mt-10 mb-4">{children}</h3>,
    h4: ({ children }: any) => <h4 className="font-heading text-xl text-secondary mt-8 mb-3">{children}</h4>,
    normal: ({ children }: any) => <p className="font-body text-secondary text-base leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-secondary pl-6 my-8 italic text-secondary/80">
        <p className="font-body text-lg leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="space-y-3 mb-8 ml-6">{children}</ul>,
    number: ({ children }: any) => <ol className="space-y-3 mb-8 ml-6 list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="font-body text-secondary text-base leading-relaxed flex items-start">
        <span className="text-secondary mr-3 mt-1">•</span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: any) => <li className="font-body text-secondary text-base leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-secondary/70 transition-colors">
        {children}
      </a>
    ),
  },
};

export default function GuideContent({ content }: GuideContentProps) {
  if (!content) {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-secondary/60 py-12">No content available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <PortableText value={content} components={portableTextComponents} />
          </article>

          {/* Helpful Section */}
          <div className="mt-16 pt-8 border-t border-secondary/10">
            <div className="text-center">
              <h4 className="font-heading text-xl text-secondary mb-3">Was this guide helpful?</h4>
              <p className="font-body text-secondary/60 text-sm mb-6">Let us know if you have any questions or need additional information.</p>
              <div className="flex justify-center gap-4">
                <a href="/contact" className="inline-block bg-secondary text-white px-8 py-3 rounded font-body text-sm hover:bg-secondary/90 transition-colors">
                  Contact Us
                </a>

                <a href="/guides" className="inline-block border border-secondary text-secondary px-8 py-3 rounded font-body text-sm hover:bg-secondary hover:text-white transition-colors">
                  More Guides
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
