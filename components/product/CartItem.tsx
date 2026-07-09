"use client";

import { Trash2, Minus, Plus } from "lucide-react";
import { CartItem as CartItemType, useCartStore } from "@/store/cartStore";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({
  item,
}: CartItemProps) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  return (
    <div className="flex flex-col gap-6 rounded-2xl border bg-white p-6 shadow-sm md:flex-row md:items-center">

      {/* Product Image */}
      <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-slate-100">
        <span className="text-5xl">🛍️</span>
      </div>

      {/* Product Info */}
      <div className="flex-1">

        <h2 className="text-xl font-semibold">
          {item.title}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          {item.description}
        </p>

        <p className="mt-4 text-lg font-bold text-blue-600">
          ₹{item.price}
        </p>

      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => decreaseQuantity(item.id)}
          className="rounded-lg border p-2 transition hover:bg-slate-100"
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="min-w-8 text-center font-semibold">
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="rounded-lg border p-2 transition hover:bg-slate-100"
        >
          <Plus className="h-4 w-4" />
        </button>

      </div>

      {/* Total */}
      <div className="text-right">

        <p className="text-xl font-bold">
          ₹{item.price * item.quantity}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          className="mt-3 flex items-center gap-2 text-red-500 transition hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
          Remove
        </button>

      </div>

    </div>
  );
}