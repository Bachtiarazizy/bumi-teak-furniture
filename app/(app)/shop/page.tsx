import React from "react";
import { client } from "@/lib/sanity/client";
import { allProductsQuery, allCollectionsQuery } from "@/lib/sanity/queries";
import { Metadata } from "next";
import ProductsPageClient from "@/components/shop/shop-page";

export const metadata: Metadata = {
  title: "Shop Premium Teak Furniture - Handcrafted Excellence",
  description: "Browse our collection of handcrafted Indonesian teak furniture. Premium dining tables, chairs, outdoor furniture, and custom pieces.",
  keywords: ["buy teak furniture", "teak furniture online", "premium teak", "Indonesian furniture shop"],
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Shop Premium Teak Furniture | Bumi Teak",
    description: "Browse our collection of handcrafted Indonesian teak furniture.",
    url: "/shop",
    images: ["/og-shop.jpg"],
  },
};

export default async function ProductsPage() {
  const [products, collections] = await Promise.all([client.fetch(allProductsQuery), client.fetch(allCollectionsQuery)]);

  return <ProductsPageClient initialProducts={products} collections={collections} />;
}
