"use client";

import Link from "next/link";
import {
  Heart,
  Eye,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
  const { addToCart } = useCartStore();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlistStore();

 const inWishlist = mounted && isInWishlist(product.id);

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative">

        <Link href={`/products/${product.slug}`}>
          <div className="flex h-64 cursor-pointer items-center justify-center bg-slate-100">

            <div className="flex h-full w-full items-center justify-center transition duration-300 group-hover:scale-105">
              <span className="text-6xl">🛍️</span>
            </div>

          </div>
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={handleWishlist}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:bg-slate-100"
        >
          <Heart
            className={`h-5 w-5 transition ${
              inWishlist
                ? "fill-red-500 text-red-500"
                : "text-slate-700"
            }`}
          />
        </button>

        {/* Quick View */}
        <button
          type="button"
          className="absolute right-4 top-16 rounded-full bg-white p-2 shadow transition hover:bg-slate-100"
        >
          <Eye className="h-5 w-5" />
        </button>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* Title */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="cursor-pointer text-lg font-semibold transition hover:text-blue-600">
            {product.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-slate-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

          <span className="font-medium">
            {product.rating}
          </span>

          <span className="text-sm text-slate-500">
            ({product.reviews} Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-bold">
            ₹{product.price}
          </span>

          {product.originalPrice && (
            <span className="text-slate-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}

        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          <Link
            href={`/design-studio?id=${product.id}`}
            className="flex-1 rounded-xl border border-blue-600 py-3 text-center font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Customize
          </Link>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>

        </div>

      </div>

    </div>
  );
}