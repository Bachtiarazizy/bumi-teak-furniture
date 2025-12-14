import NotFound from "@/app/not-found";
import BlogContent from "@/components/blog-page/blog-details/blog-detail-content-section";
import BlogDetailHero from "@/components/blog-page/blog-details/blog-detail-hero-section";
import RelatedPosts from "@/components/blog-page/blog-details/related-blog-section";
import { client } from "@/lib/sanity/client";
import { blogPostBySlugQuery, relatedBlogPostsQuery } from "@/lib/sanity/queries";
import { generateSanityMetadata } from "@/lib/sanity/seo";
import { Metadata } from "next";
import React from "react";

interface BlogPostDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(blogPostBySlugQuery, { slug });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return generateSanityMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.mainImage,
    seo: post.seo,
    type: "article",
    publishedTime: post.publishedAt,
    authors: [post.author?.name],
    tags: post.tags,
  });
}

export default async function BlogDetailPage({ params }: BlogPostDetailPageProps) {
  const { slug } = await params;

  const post = await client.fetch(blogPostBySlugQuery, { slug });

  if (!post) {
    return <NotFound />;
  }

  // Ambil category reference dengan benar
  const categoryRef = post.category?._id || post.category?._ref;

  // Fetch related posts hanya jika ada categoryRef
  let relatedPosts = [];

  if (categoryRef) {
    relatedPosts = await client.fetch(relatedBlogPostsQuery, {
      slug,
      categoryRef,
    });
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BlogDetailHero title={post.title} category={post.category?.name} image={post.mainImage?.asset?.url || "/blog/post.jpg"} />

      {/* Article Content */}
      <BlogContent content={post.body} />

      {/* Related Posts - akan otomatis hide jika posts kosong */}
      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}
