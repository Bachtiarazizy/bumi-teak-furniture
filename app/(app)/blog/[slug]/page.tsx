import BlogContent from "@/components/blog-page/blog-details/blog-detail-content-section";
import BlogDetailHero from "@/components/blog-page/blog-details/blog-detail-hero-section";
import RelatedPosts from "@/components/blog-page/blog-details/related-blog-section";
import { Metadata } from "next";
import React from "react";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  // const post = await fetchBlogPost(params.slug);

  const post = {
    title: "The Complete Guide to Teak Furniture Care",
    excerpt: "Learn how to maintain and care for your teak furniture to ensure it lasts for generations.",
    image: "/blog/post.jpg",
    publishedAt: "2024-11-01",
    author: "Bumi Teak Team",
  };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: ["teak furniture care", "teak maintenance", "furniture care guide"],
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Bumi Teak Blog`,
      description: post.excerpt,
      url: `/blog/${params.slug}`,
      images: [post.image],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  // In a real application, you would fetch blog data based on params.slug
  const blogData = {
    id: params.slug,
    title: "The Art of Indonesian Teak: A Journey Through Centuries",
    category: "Craftsmanship",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/blog/post.jpg",
    content: "", // Content is rendered in BlogContent component
  };

  const relatedPosts = [
    {
      id: "2",
      title: "Sustainable Living: How Teak Furniture Supports Our Planet",
      category: "Sustainability",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "/blog/post.jpg",
    },
    {
      id: "3",
      title: "5 Design Tips for Mixing Traditional and Modern Furniture",
      category: "Design Tips",
      date: "2024-01-10",
      readTime: "5 min read",
      image: "/blog/post.jpg",
    },
    {
      id: "4",
      title: "Behind the Scenes: Meet Our Master Craftsmen",
      category: "Craftsmanship",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/blog/post.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BlogDetailHero title={blogData.title} category={blogData.category} author={blogData.author} date={blogData.date} readTime={blogData.readTime} image={blogData.image} />

      {/* Article Content */}
      <BlogContent content={blogData.content} />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}

// For static generation (optional)
// export async function generateStaticParams() {
//   // Fetch all blog post slugs from your API/database
//   const posts = await fetchBlogPosts();
//
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
