"use client";

import { useWishlistStore } from "@/store/wishlistStore";
import ProductCard from "./ProductCard";

export default function WishlistGrid() {
  const { wishlist } = useWishlistStore();

  if (wishlist.length === 0) {
    return (
      <div className="py-20 text-center">

        <h2 className="text-3xl font-bold">
          ❤️ Your Wishlist is Empty
        </h2>

        <p className="mt-3 text-slate-500">
          Add your favourite products.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {wishlist.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}