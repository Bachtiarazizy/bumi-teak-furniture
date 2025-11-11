import React from "react";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";

interface BlogDetailHeroProps {
  title?: string;
  category?: string;
  author?: string;
  date?: string;
  readTime?: string;
  image?: string;
}

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({
  title = "The Art of Indonesian Teak: A Journey Through Centuries",
  category = "Craftsmanship",
  author = "Sarah Chen",
  date = "2024-01-15",
  readTime = "8 min read",
  image = "/blog/post.jpg",
}) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-body text-secondary/60 mb-8">
          <span className="hover:text-secondary cursor-pointer">Blog</span>
          <span>/</span>
          <span className="hover:text-secondary cursor-pointer">{category}</span>
          <span>/</span>
          <span className="text-secondary">Article</span>
        </div>

        {/* Content */}
        <div className="container mx-auto">
          {/* Category */}
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-body mb-6">{category}</span>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary mb-6 leading-tight">{title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-body text-secondary/60 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
            <Image src={image} alt={title} fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHero;
