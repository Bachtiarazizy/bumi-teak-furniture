import ProductInfo from "@/components/products-page/detail-page/product-detail-info-section";
import ProductTabs from "@/components/products-page/detail-page/product-detail-tab-section";
import ProductGallery from "@/components/products-page/detail-page/product-gallery-section";
import RelatedProducts from "@/components/products-page/detail-page/related-product-section";
import { Metadata } from "next";
import React from "react";

// This would typically come from an API or database
interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  // Fetch product data
  // const product = await fetchProduct(params.slug);

  // Example dengan dummy data
  const product = {
    name: "Classic Teak Dining Table",
    description: "Handcrafted premium teak dining table featuring traditional Indonesian joinery. Seats 6-8 people comfortably.",
    price: 2499,
    image: "/products/dining-table.jpg",
  };

  return {
    title: `${product.name} - Premium Indonesian Teak Furniture`,
    description: product.description,
    keywords: ["teak dining table", product.name, "buy teak furniture", "handcrafted dining table"],
    alternates: {
      canonical: `/shop/products/${params.slug}`,
    },
    openGraph: {
      title: `${product.name} | Bumi Teak Furniture`,
      description: product.description,
      url: `/shop/products/${params.slug}`,
      images: [product.image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Bumi Teak Furniture`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // In a real application, you would fetch product data based on params.slug
  const productData = {
    id: params.slug,
    name: "Sunset Dining Table",
    category: "Dining",
    price: 1850,
    rating: 4.8,
    reviewCount: 127,
    description:
      "Handcrafted from premium Indonesian teak, the Sunset Dining Table brings warmth and elegance to your dining space. Each piece features unique grain patterns that tell the story of its journey from sustainable forests to your home.",
    sku: "BTF-DT-001",
    inStock: true,
    images: [
      { id: "1", url: "/images/products/product.jpg", alt: "Product view 1" },
      { id: "2", url: "/images/products/product-2.jpg", alt: "Product view 2" },
      { id: "3", url: "/images/products/product-3.jpg", alt: "Product view 3" },
      { id: "4", url: "/images/products/product-4.jpg", alt: "Product view 4" },
      { id: "5", url: "/images/products/product-5.jpg", alt: "Product view 5" },
    ],
    specifications: {
      Material: "Solid Indonesian Teak",
      Dimensions: '78"L x 39"W x 30"H',
      Weight: "165 lbs",
      Finish: "Natural oil finish",
      "Seating Capacity": "6-8 people",
      Assembly: "Minimal assembly required",
      Care: "Clean with mild soap and water, apply teak oil annually",
      Origin: "Handcrafted in Jepara, Indonesia",
    },
    reviews: [
      {
        id: "1",
        author: "Sarah Johnson",
        rating: 5,
        date: "2024-01-15",
        comment: "Absolutely stunning table! The craftsmanship is impeccable and the wood grain is gorgeous. Worth every penny.",
        verified: true,
      },
      {
        id: "2",
        author: "Michael Chen",
        rating: 5,
        date: "2024-01-10",
        comment: "Best furniture investment we've made. The quality is outstanding and it arrived perfectly packaged.",
        verified: true,
      },
      {
        id: "3",
        author: "Emma Wilson",
        rating: 4,
        date: "2024-01-05",
        comment: "Beautiful table, very solid construction. Only minor issue was delivery took a bit longer than expected.",
        verified: true,
      },
    ],
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Java Dining Chair",
      category: "Dining",
      price: 480,
      image: "/images/products/product.jpg",
    },
    {
      id: "3",
      name: "Bali Sideboard",
      category: "Storage",
      price: 2300,
      image: "/images/products/product.jpg",
    },
    {
      id: "4",
      name: "Minimalist Buffet",
      category: "Dining",
      price: 1650,
      image: "/images/products/product.jpg",
    },
    {
      id: "5",
      name: "Lombok Bench",
      category: "Seating",
      price: 890,
      image: "/images/products/product.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Product Detail Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Gallery */}
            <ProductGallery images={productData.images} />

            {/* Right: Product Info */}
            <ProductInfo
              name={productData.name}
              category={productData.category}
              price={productData.price}
              rating={productData.rating}
              reviewCount={productData.reviewCount}
              description={productData.description}
              sku={productData.sku}
              inStock={productData.inStock}
            />
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="bg-light py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <ProductTabs specifications={productData.specifications} reviews={productData.reviews} />
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-white">
        <RelatedProducts products={relatedProducts} />
      </section>
    </main>
  );
}

// For static generation (optional)
// export async function generateStaticParams() {
//   // Fetch all product slugs from your API/database
//   const products = await fetchProducts();
//
//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }
