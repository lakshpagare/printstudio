"use client";
import Link from "next/link";

import { useCartStore } from "@/store/cartStore";

export default function CartSummary() {
  const { cart, clearCart } = useCartStore();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0;

  const tax = Math.round(subtotal * 0.18);

  const total = subtotal + shipping + tax;

  return (
    <div className="sticky top-24 rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{shipping}</span>
        </div>

        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹{tax}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

      <Link
  href="/checkout"
  className="mt-8 block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
>
  Proceed to Checkout
</Link>

      <button
        onClick={clearCart}
        className="mt-4 w-full rounded-xl border py-4 font-semibold transition hover:bg-slate-100"
      >
        Clear Cart
      </button>

    </div>
  );
}