"use client";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartSummary() {
  const { cart } = useCartStore();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 999 ? 0 : 99;

  const tax = subtotal * 0.18;

  const total = subtotal + shipping + tax;

  return (
    <div className="rounded-2xl border p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(0)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? "Free" : `₹${shipping}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹{tax.toFixed(0)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total.toFixed(0)}</span>
        </div>

      </div>

      <Link
  href="/checkout"
  className="mt-8 block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
>
  Proceed to Checkout
</Link>

    </div>
  );
}