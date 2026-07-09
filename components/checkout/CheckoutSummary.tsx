"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutSummary() {
  const { cart } = useCartStore();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 999 ? 0 : 99;

  const discount = subtotal > 2000 ? 200 : 0;

  const total = subtotal + shipping - discount;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? "Free" : `₹${shipping}`}
          </span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>- ₹{discount}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

      {cart.length === 0 && (
        <div className="mt-6 text-center">

          <p className="mb-4 text-slate-500">
            Your cart is empty.
          </p>

          <Link
            href="/products"
            className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            Continue Shopping
          </Link>

        </div>
      )}

    </div>
  );
}