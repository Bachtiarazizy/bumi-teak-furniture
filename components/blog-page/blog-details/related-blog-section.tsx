import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface RelatedPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

interface RelatedPostsProps {
  posts?: RelatedPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({
  posts = [
    {
      id: "2",
      title: "Sustainable Living: How Teak Furniture Supports Our Planet",
      category: "Sustainability",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "/blog/related-1.jpg",
    },
    {
      id: "3",
      title: "5 Design Tips for Mixing Traditional and Modern Furniture",
      category: "Design Tips",
      date: "2024-01-10",
      readTime: "5 min read",
      image: "/blog/related-2.jpg",
    },
    {
      id: "4",
      title: "Behind the Scenes: Meet Our Master Craftsmen",
      category: "Craftsmanship",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/blog/related-3.jpg",
    },
  ],
}) => {
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
              <Link href={`/blog/${post.id}`} key={post.id} className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="font-body text-xs text-secondary/60 uppercase tracking-wide">{post.category}</span>
                  <h5 className="font-heading text-xl text-secondary my-3 group-hover:text-secondary/70 transition-colors line-clamp-2">{post.title}</h5>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs font-body text-secondary/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
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
