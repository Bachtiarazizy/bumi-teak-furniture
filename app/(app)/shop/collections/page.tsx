import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TransformLivingCTA from "@/components/home-page/transform-living-CTA-section";
import { allCollectionsQuery } from "@/lib/sanity/queries";
import { client } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { Metadata } from "next";

// Define the Collection type
interface Collection {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image: {
    asset: unknown;
    alt?: string;
  };
  productCount: number;
}

export const metadata: Metadata = {
  title: "Explore Handcrafted Teak Furniture Collections",
  description: "Discover our curated collections of premium Indonesian teak furniture, designed to elevate your living spaces with natural elegance.",
  keywords: ["buy teak furniture", "teak furniture online", "premium teak", "Indonesian furniture shop"],
  alternates: {
    canonical: "/shop/collections",
  },
  openGraph: {
    title: "Explore Handcrafted Teak Furniture Collections",
    description: "Discover our curated collections of premium Indonesian teak furniture.",
    url: "/shop/collections",
    images: ["/og-collections.jpg"],
  },
};

export default async function CollectionsPage() {
  const collections: Collection[] = await client.fetch(allCollectionsQuery);

  if (!collections || collections.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-secondary mb-4">No Collections Found</h1>
          <p className="font-body text-secondary/70">Check back soon for our curated furniture collections.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-light py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-image.jpg" alt="Collections" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-6 justify-center">
              <Link href="/" className="font-body text-sm text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <Link href="/shop" className="font-body text-sm text-white/70 hover:text-white transition-colors">
                Shop
              </Link>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <span className="font-body text-sm text-white">Collections</span>
            </nav>

            {/* Title */}
            <div className="text-center">
              <h1 className="font-heading text-white mb-4 drop-shadow-lg">Our Collections</h1>
              <p className="font-body text-white/70 text-base md:text-md leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                Explore our curated collections of handcrafted teak furniture. Each collection is thoughtfully designed to bring natural elegance to your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item) => (
              <Link href={`/shop/collections/${item.slug.current}`} key={item._id} className="group">
                {/* Collection Image */}
                <div className="relative h-80 mb-4 overflow-hidden bg-light rounded-lg">
                  {item.image && <Image src={urlForImage(item.image).width(800).height(800).url()} alt={item.image.alt || item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-body text-xs text-secondary font-semibold">
                      {item.productCount} {item.productCount === 1 ? "Product" : "Products"}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl text-white mb-2">{item.title}</h3>
                  </div>
                </div>

                {/* Collection Description */}
                <p className="font-body text-sm text-secondary/70 group-hover:text-secondary transition-colors line-clamp-2">{item.description}</p>

                {/* View Collection Link */}
                <div className="mt-3 flex items-center gap-2 text-secondary font-body text-sm font-semibold group-hover:gap-3 transition-all">
                  View Collection
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <TransformLivingCTA
        heading="Can't Find What"
        subheading="You're Looking For?"
        description="Browse all our products or contact us for custom furniture solutions."
        primaryButtonText="View All Products"
        secondaryButtonText="Contact Us"
        imagePath="/images/hero-image.jpg"
        primaryButtonLink="/shop"
        secondaryButtonLink="/contact"
        contentAlignment="center"
      />
    </main>
  );
}
