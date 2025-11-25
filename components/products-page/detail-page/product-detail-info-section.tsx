"use client";

import React, { useState } from "react";
import { Star, Heart, Share2, Truck, Shield, Award } from "lucide-react";
import Link from "next/link";

interface ProductInfoProps {
  name?: string;
  collection?: string;
  collectionSlug?: string;
  price?: number;
  rating?: number;
  reviewCount?: number;
  description?: string;
  sku?: string;
  inStock?: boolean;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name = "Product Name", collection = "Collection", collectionSlug, price = 0, rating = 0, reviewCount = 0, description = "Product description", sku = "N/A", inStock = true }) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm font-body text-secondary/60">
        <Link href="/shop" className="hover:text-secondary cursor-pointer">
          Shop
        </Link>
        <span>/</span>
        {collectionSlug ? (
          <Link href={`/shop/collections/${collectionSlug}`} className="hover:text-secondary cursor-pointer">
            {collection}
          </Link>
        ) : (
          <span className="hover:text-secondary cursor-pointer">{collection}</span>
        )}
        <span>/</span>
        <span className="text-secondary truncate">{name}</span>
      </div>

      {/* collection & SKU */}
      <div className="flex items-center justify-between">
        <span className="font-body text-sm text-secondary/60 uppercase tracking-wide">{collection}</span>
        <span className="font-body text-xs text-secondary/50">SKU: {sku}</span>
      </div>

      {/* Product Name */}
      <h1 className="font-heading text-4xl md:text-5xl text-secondary">{name}</h1>

      {/* Rating */}
      {rating > 0 && (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-secondary text-secondary" : "text-secondary/20"}`} />
            ))}
          </div>
          <span className="font-body text-sm text-secondary">
            {rating.toFixed(1)} ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
          </span>
        </div>
      )}

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="font-heading text-3xl text-secondary">${price.toLocaleString()}</span>
        <span className={`font-body text-sm ${inStock ? "text-green-600" : "text-red-600"}`}>{inStock ? "In Stock" : "Out of Stock"}</span>
      </div>

      {/* Description */}
      {description && <p className="font-body text-secondary text-sm leading-relaxed">{description}</p>}

      {/* Divider */}
      <div className="border-t border-secondary/10 pt-6">
        {/* Quantity & Actions */}
        <div className="flex flex-wrap gap-4 mb-6">
          {/* Quantity */}
          <div className="flex items-center border border-secondary/20 rounded">
            <button onClick={() => handleQuantityChange(quantity - 1)} className="px-4 py-3 font-body text-secondary hover:bg-secondary/5 transition-colors" aria-label="Decrease quantity">
              -
            </button>
            <input type="number" value={quantity} onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)} className="w-16 text-center font-body text-secondary focus:outline-none" min="1" />
            <button onClick={() => handleQuantityChange(quantity + 1)} className="px-4 py-3 font-body text-secondary hover:bg-secondary/5 transition-colors" aria-label="Increase quantity">
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button disabled={!inStock} className="flex-1 min-w-[200px] bg-secondary text-white px-8 py-3 font-body text-sm hover:bg-secondary/90 transition-colors disabled:bg-secondary/30 disabled:cursor-not-allowed rounded">
            {inStock ? "Add to Cart" : "Out of Stock"}
          </button>

          {/* Wishlist */}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-3 border rounded transition-colors ${isWishlisted ? "border-secondary bg-secondary text-white" : "border-secondary/20 text-secondary hover:border-secondary"}`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? "fill-white" : ""}`} />
          </button>

          {/* Share */}
          <button
            className="p-3 border border-secondary/20 text-secondary hover:border-secondary rounded transition-colors"
            aria-label="Share product"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: name,
                  text: description,
                  url: window.location.href,
                });
              }
            }}
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Truck className="w-5 h-5 text-secondary/60" />
            <span className="font-body text-secondary">Free shipping on orders over $500</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Shield className="w-5 h-5 text-secondary/60" />
            <span className="font-body text-secondary">5-year warranty included</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Award className="w-5 h-5 text-secondary/60" />
            <span className="font-body text-secondary">Handcrafted by master artisans</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
