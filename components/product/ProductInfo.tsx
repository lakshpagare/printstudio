"use client";

import Link from "next/link";
import {
  Heart,
  ShoppingCart,
} from "lucide-react";

import { Product } from "@/types/product";

import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductStock from "./ProductStock";
import ProductActions from "./ProductActions";
import ProductColors from "./ProductColors";
import ProductSizes from "./ProductSizes";
import ProductBreadcrumb from "./ProductBreadcrumb";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

interface Props {
  product: Product;
}

export default function ProductInfo({
  product,
}: Props) {
  const { addToCart } = useCartStore();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlistStore();

  const inWishlist = isInWishlist(product.id);

  return (
    <div>

<ProductBreadcrumb
  category={product.category}
  categorySlug={product.categorySlug}
  title={product.title}
/>

      {/* Category */}
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        {product.category}
      </p>

      {/* Title */}
      <h1 className="mt-2 text-4xl font-bold text-slate-900">
        {product.title}
      </h1>

      {/* Rating */}
      <ProductRating
        rating={product.rating}
        reviews={product.reviews}
      />

      {/* Price */}
      <ProductPrice
        price={product.price}
        originalPrice={product.originalPrice}
      />

      {/* Stock */}
     <ProductStock stock={product.stock} />

     <ProductColors
  colors={product.colors}
/>

<ProductSizes
  sizes={product.sizes}
/>

      {/* Description */}
      <p className="mt-8 leading-8 text-slate-600">
        {product.description}
      </p>

      {/* Buttons */}
      <ProductActions product={product} />

      {/* Wishlist */}
      <button
        onClick={() => {
          if (inWishlist) {
            removeFromWishlist(product.id);
          } else {
            addToWishlist(product);
          }
        }}
        className="mt-6 flex items-center gap-2 font-medium text-slate-700 transition hover:text-red-500"
      >
        <Heart
          className={`h-5 w-5 ${
            inWishlist
              ? "fill-red-500 text-red-500"
              : ""
          }`}
        />

        {inWishlist
          ? "Remove from Wishlist"
          : "Add to Wishlist"}
      </button>
    </div>
  );
}