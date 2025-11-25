import BlogPageClient from "@/components/blog-page/blog-page-client";
import { client } from "@/lib/sanity/client";
import { allBlogPostsQuery, blogCategoriesQuery } from "@/lib/sanity/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Teak Furniture Tips & Stories",
  description: "Read our latest articles about teak furniture care, design tips, sustainability, and craftsmanship stories.",
  keywords: ["teak furniture blog", "furniture care tips", "sustainable furniture", "craftsmanship stories", "teak furniture tips"],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Teak Furniture Tips & Stories",
    description: "Read our latest articles about teak furniture care, design tips, sustainability, and craftsmanship stories.",
    url: "/blog",
    images: ["/og-blog.jpg"],
  },
};

export default async function BlogPage() {
  let posts = [];
  let categories = [];

  try {
    const data = await Promise.all([client.fetch(allBlogPostsQuery), client.fetch(blogCategoriesQuery)]);
    posts = data[0] || [];
    categories = data[1] || [];
  } catch (error) {
    console.error("Error fetching blog data:", error);
    // posts and categories will remain empty arrays
  }

  return <BlogPageClient initialPosts={posts} categories={categories} />;
}
