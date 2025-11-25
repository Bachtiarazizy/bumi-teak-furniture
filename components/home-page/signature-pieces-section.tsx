/* eslint-disable @typescript-eslint/no-explicit-any */
// components/home-page/signature-pieces-section.tsx
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { featuredProductsQuery } from "@/lib/sanity/queries";

interface SignaturePiecesSectionProps {
  heading?: string;
  description?: string;
  collectionSlug?: string;
}

export default async function SignaturePiecesSection({
  heading = "BUMI COLLECTION PIECES",
  description = "Teak pieces crafted with soul and care, reflecting nature's beauty and the warmth of home",
  collectionSlug = "shop",
}: SignaturePiecesSectionProps) {
  // Fetch featured products from Sanity
  const products = await client.fetch(featuredProductsQuery);

  // Handle empty state
  if (!products || products.length === 0) {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-4xl text-secondary mb-4">{heading}</h2>
          <p className="text-gray-600">No featured products available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-3">{heading}</h2>
            <p className="font-body text-secondary text-sm max-w-xl">{description}</p>
          </div>
          <Link href={`/${collectionSlug}`} className="hidden md:block">
            <button className="font-body border border-secondary text-secondary px-6 py-2 text-sm hover:bg-secondary hover:text-white transition-colors">View all</button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <div key={product._id} className="group">
              <Link href={`/shop/products/${product.slug.current}`}>
                {/* Product Image */}
                <div className="relative h-80 mb-4 overflow-hidden bg-light">
                  {product.mainImage?.asset ? (
                    <Image
                      src={urlForImage(product.mainImage.asset).width(600).height(800).url()}
                      alt={product.mainImage.alt || product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="font-heading text-lg text-secondary mb-1 ">{product.name}</h5>
                    {product.collection && <p className="font-body text-secondary text-sm opacity-70">{product.collection}</p>}
                  </div>
                  <p className="font-body text-secondary font-semibold">${product.price.toLocaleString()}</p>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <Link href={`/shop/products/${product.slug.current}`}>
                <button className="w-full font-body border border-secondary text-secondary py-3 text-sm hover:bg-secondary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!product.inStock}>
                  {product.inStock ? "Add to cart" : "Out of stock"}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link href={`/${collectionSlug}`}>
            <button className="font-body border border-secondary text-secondary px-8 py-3 text-sm hover:bg-secondary hover:text-white transition-colors">View all</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
