/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";

interface BlogContentProps {
  content: any; // Portable Text from Sanity
}

// Custom components for Portable Text
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative h-96 rounded-lg overflow-hidden my-8">
          <Image src={urlForImage(value).url()} alt={value.alt || "Blog image"} fill className="object-cover" />
          {value.caption && <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm font-body p-4">{value.caption}</p>}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="font-heading text-3xl text-secondary mt-12 mb-6">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-heading text-3xl text-secondary mt-12 mb-6">{children}</h3>,
    h4: ({ children }: any) => <h4 className="font-heading text-2xl text-secondary mt-10 mb-4">{children}</h4>,
    normal: ({ children }: any) => <p className="font-body text-secondary text-sm leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-secondary pl-6 my-8 italic text-secondary/80">
        <p className="font-body text-lg leading-relaxed mb-2">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="space-y-3 mb-8">{children}</ul>,
    number: ({ children }: any) => <ol className="space-y-3 mb-8 list-decimal list-inside">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="font-body text-secondary text-sm leading-relaxed flex items-start">
        <span className="text-secondary mr-3 mt-1">•</span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: any) => <li className="font-body text-secondary text-sm leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-secondary/70 transition-colors">
        {children}
      </a>
    ),
  },
};

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  if (!content) {
    return (
      <section className="bg-white pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto">
            <p className="text-center text-secondary/60 py-12">No content available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-11">
              <article className="prose prose-lg max-w-none">
                <PortableText value={content} components={portableTextComponents} />
              </article>

              {/* Mobile Share Buttons */}
              <div className="lg:hidden mt-12 pt-8 border-t border-secondary/10">
                <p className="font-body text-sm text-secondary mb-4">Share this article:</p>
                <div className="flex gap-3">
                  <button className="p-3 border border-secondary/20 rounded hover:bg-secondary/10 transition-colors">
                    <Facebook className="w-5 h-5 text-secondary" />
                  </button>
                  <button className="p-3 border border-secondary/20 rounded hover:bg-secondary/10 transition-colors">
                    <Twitter className="w-5 h-5 text-secondary" />
                  </button>
                  <button className="p-3 border border-secondary/20 rounded hover:bg-secondary/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
