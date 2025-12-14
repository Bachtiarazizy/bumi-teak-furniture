import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface RelatedPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  category: string;
  mainImage?: SanityImage;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  // Jika tidak ada related posts, tidak tampilkan section ini
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-heading text-3xl md:text-4xl text-secondary">Related Articles</h3>
            <Link href="/blog" className="font-body text-sm text-secondary flex items-center gap-1 hover:gap-2 transition-all">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug.current}`} key={post._id} className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-56 mb-4 overflow-hidden">
                  {post.mainImage ? (
                    <Image src={urlForImage(post.mainImage.asset).width(600).height(800).url()} alt={post.mainImage.alt || post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-light">
                      <p className="text-secondary/40 font-body text-sm">No image</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="font-body text-xs text-secondary/60 uppercase tracking-wide">{post.category}</span>
                  <h5 className="font-heading text-xl text-secondary my-3 group-hover:text-secondary/70 transition-colors line-clamp-2">{post.title}</h5>
                  <p className="font-body text-sm text-secondary/80 mb-4 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
