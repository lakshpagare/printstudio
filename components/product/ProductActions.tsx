"use client";

import { useState } from "react";

import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

import ProductQuantity from "./ProductQuantity";

import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";


interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const { addToCart } = useCartStore();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlistStore();

  const inWishlist = isInWishlist(product.id);

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const [quantity, setQuantity] = useState(1);

const increaseQuantity = () => {
  setQuantity((prev) => prev + 1);
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity((prev) => prev - 1);
  }
};

  return (
    <>
    <ProductQuantity
  quantity={quantity}
  onIncrease={increaseQuantity}
  onDecrease={decreaseQuantity}
/>
      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <button
         onClick={() =>
  addToCart(product, quantity)
}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          <ShoppingCart className="h-5 w-5" />
          Add To Cart
        </button>

        <Link
          href={`/design-studio?id=${product.id}`}
          className="flex-1 rounded-xl border border-blue-600 px-8 py-4 text-center font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          Customize Design
        </Link>

      </div>

      {/* Wishlist */}
      <button
        onClick={handleWishlist}
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
    </>
  );
}