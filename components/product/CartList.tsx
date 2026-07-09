"use client";

import { useCartStore } from "@/store/cartStore";
import CartItem from "./CartItem";

export default function CartList() {
  const { cart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-12 text-center">
        <h2 className="text-2xl font-semibold">
          Your cart is empty 🛒
        </h2>

        <p className="mt-2 text-slate-500">
          Add products to continue shopping.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}