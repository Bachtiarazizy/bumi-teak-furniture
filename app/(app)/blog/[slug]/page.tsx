import BlogContent from "@/components/blog-page/blog-details/blog-detail-content-section";
import BlogDetailHero from "@/components/blog-page/blog-details/blog-detail-hero-section";
import RelatedPosts from "@/components/blog-page/blog-details/related-blog-section";
import React from "react";

interface BlogDetailPageProps {
  params: {
    slug: string;
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
