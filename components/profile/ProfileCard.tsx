"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  ShoppingBag,
  Heart,
  ShoppingCart,
  LogOut,
} from "lucide-react";

import { useAuthStore } from "@/store/authStore";

export default function ProfileCard() {
  const router = useRouter();

  const {
    user,
    logout,
  } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">

      {/* User Info */}
      <div className="flex items-center gap-4 border-b pb-6">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <User className="h-10 w-10 text-blue-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            {user?.name}
          </h2>

          <p className="mt-2 flex items-center gap-2 text-slate-500">
            <Mail className="h-4 w-4" />
            {user?.email}
          </p>
        </div>

      </div>

      {/* Menu */}
      <div className="mt-8 space-y-4">

        <Link
          href="/orders"
          className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-slate-50"
        >
          <ShoppingBag className="h-5 w-5" />
          My Orders
        </Link>

        <Link
          href="/wishlist"
          className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-slate-50"
        >
          <Heart className="h-5 w-5" />
          Wishlist
        </Link>

        <Link
          href="/cart"
          className="flex items-center gap-3 rounded-xl border p-4 transition hover:bg-slate-50"
        >
          <ShoppingCart className="h-5 w-5" />
          Cart
        </Link>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl border border-red-200 p-4 text-red-600 transition hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>

      </div>

    </div>
  );
}