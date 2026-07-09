"use client";

import Link from "next/link";
import { Heart, ShoppingCart, User, LogOut } from "lucide-react";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useAuthStore } from "@/store/authStore";

export default function NavIcons() {
  const { cart } = useCartStore();

  const { wishlist } = useWishlistStore();

  const {
    user,
    isLoggedIn,
    logout,
  } = useAuthStore();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="flex items-center gap-5">

      {/* Wishlist */}
      <Link
        href="/wishlist"
        className="relative transition hover:text-blue-600"
      >
        <Heart className="h-6 w-6" />

        {wishlist.length > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {wishlist.length}
          </span>
        )}
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        className="relative transition hover:text-blue-600"
      >
        <ShoppingCart className="h-6 w-6" />

        {totalItems > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {totalItems}
          </span>
        )}
      </Link>

      {/* Authentication */}
      {isLoggedIn ? (
        <div className="flex items-center gap-3">

          <Link
  href="/profile"
  className="flex items-center gap-2 hover:text-blue-600"
>
  <User className="h-5 w-5" />

  <span className="font-medium">
    {user?.name}
  </span>
</Link>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-lg border px-3 py-2 transition hover:bg-slate-100"
          >
            <LogOut className="h-4 w-4" />

            Logout
          </button>

        </div>
      ) : (
        <Link
          href="/login"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Login
        </Link>
      )}

    </div>
  );
}