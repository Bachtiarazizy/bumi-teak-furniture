import NotFound from "@/app/not-found";
import ProductInfo from "@/components/products-page/detail-page/product-detail-info-section";
import ProductTabs from "@/components/products-page/detail-page/product-detail-tab-section";
import ProductGallery from "@/components/products-page/detail-page/product-gallery-section";
import RelatedProducts from "@/components/products-page/detail-page/related-product-section";
import { client } from "@/lib/sanity/client";
import { productBySlugQuery, relatedProductsQuery } from "@/lib/sanity/queries";
import { generateSanityMetadata } from "@/lib/sanity/seo";
import { Metadata } from "next";
import React from "react";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch(productBySlugQuery, { slug });

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return generateSanityMetadata({
    title: product.name,
    description: product.description,
    path: `/shop/products/${slug}`,
    image: product.images?.[0],
    seo: product.seo,
    type: "website",
    tags: [product.category, product.collection].filter(Boolean),
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;

  console.log("Fetching product with slug:", slug);

  const product = await client.fetch(productBySlugQuery, { slug });

  console.log("Product fetched:", product ? "Found" : "Not found");

  if (!product) {
    return <NotFound />;
  }

  // Only fetch related products if the product has a collection
  const relatedProducts = product.collection?._id
    ? await client.fetch(relatedProductsQuery, {
        slug,
        collectionRef: product.collection._id,
      })
    : [];

  return (
    <main className="min-h-screen">
      {/* Product Detail Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Gallery */}
            <ProductGallery images={product.images} />

            {/* Right: Product Info */}
            <ProductInfo
              name={product.name}
              collection={product.collection?.title}
              collectionSlug={product.collection?.slug?.current}
              price={product.price}
              rating={product.rating}
              reviewCount={product.reviewCount}
              description={product.description}
              sku={product.sku}
              inStock={product.inStock}
            />
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <ProductTabs specifications={product.specifications || {}} reviews={product.reviews || []} description={product.description} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white">
          <RelatedProducts products={relatedProducts} />
        </section>
      )}
    </main>
  );
}
