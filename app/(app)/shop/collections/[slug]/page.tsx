import React from "react";
import { client } from "@/lib/sanity/client";
import { collectionBySlugQuery, collectionProductsInitialQuery } from "@/lib/sanity/queries";
import { generateSanityMetadata } from "@/lib/sanity/seo";
import { Metadata } from "next";
import CollectionPageDetailClient from "@/components/products-page/collections-page/collection-page-detail-client";
import NotFound from "@/app/not-found";

interface CollectionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = await client.fetch(collectionBySlugQuery, { slug });

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return generateSanityMetadata({
    title: collection.title,
    description: collection.description,
    path: `/shop/collections/${slug}`,
    image: collection.image,
    seo: collection.seo,
  });
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = await client.fetch(collectionBySlugQuery, { slug });

  if (!collection) {
    return <NotFound />;
  }

  const initialProducts = await client.fetch(collectionProductsInitialQuery, {
    collectionId: collection._id,
    sortBy: "featured",
  });

  return <CollectionPageDetailClient collection={collection} initialProducts={initialProducts} />;
}
