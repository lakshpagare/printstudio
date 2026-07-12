"use client";

import { useCartStore } from "@/store/cartStore";

export default function OrderSummary() {
  const { cart } = useCartStore();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal > 999 || subtotal === 0 ? 0 : 99;

  const discount = 0;

  const tax = Math.round(subtotal * 0.18);

  const total =
    subtotal + shipping + tax - discount;

  return (
    <div className="sticky top-24 rounded-3xl border bg-white p-6 shadow-sm">

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
            {shipping === 0
              ? "Free"
              : `₹${shipping}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹{tax}</span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>

          <span className="text-green-600">
            - ₹{discount}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-4 text-sm text-slate-600">
        🚚 Free shipping on orders above ₹999.
      </div>

    </div>
  );
}