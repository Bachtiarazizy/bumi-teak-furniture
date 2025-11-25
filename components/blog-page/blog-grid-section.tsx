import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface BlogGridProps {
  posts?: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts = [] }) => {
  // Jika tidak ada posts, tampilkan pesan kosong
  if (posts.length === 0) {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center py-20">
            <h3 className="font-heading text-2xl text-secondary mb-4">No posts found</h3>
            <p className="font-body text-secondary/60">Please check back later for new content.</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Featured Post */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="block mb-12 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-light rounded-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-72 lg:h-auto">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-2 text-sm font-body rounded">Featured</div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <span className="font-body text-sm text-secondary/60 mb-3">{featuredPost.category}</span>
                <h3 className="font-heading text-3xl md:text-4xl text-secondary mb-4 group-hover:text-secondary/70 transition-colors">{featuredPost.title}</h3>
                <p className="font-body text-secondary text-sm leading-relaxed mb-6">{featuredPost.excerpt}</p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm font-body text-secondary/60 mb-6">
                  <span>{featuredPost.author}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-body text-secondary group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                {/* Image */}
                <div className="relative h-64 mb-4 overflow-hidden bg-light rounded-lg">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div>
                  <span className="font-body text-xs text-secondary/60 uppercase tracking-wide">{post.category}</span>
                  <h5 className="font-heading text-xl text-secondary my-3 group-hover:text-secondary/70 transition-colors">{post.title}</h5>
                  <p className="font-body text-secondary text-sm leading-relaxed mb-4">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-body text-secondary/60 mb-4">
                    <span>{post.author}</span>
                    <span>•</span>
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

                  <div className="flex items-center gap-2 font-body text-sm text-secondary group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination - Only show if there are posts */}
        {posts.length > 6 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="font-body px-4 py-2 border border-secondary/20 text-secondary text-sm hover:bg-secondary/5 transition-colors rounded disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
            <button className="font-body px-4 py-2 bg-secondary text-white text-sm rounded">1</button>
            <button className="font-body px-4 py-2 border border-secondary/20 text-secondary text-sm hover:bg-secondary/5 transition-colors rounded">2</button>
            <button className="font-body px-4 py-2 border border-secondary/20 text-secondary text-sm hover:bg-secondary/5 transition-colors rounded">3</button>
            <button className="font-body px-4 py-2 border border-secondary/20 text-secondary text-sm hover:bg-secondary/5 transition-colors rounded">Next</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
