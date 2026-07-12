"use client";

import Link from "next/link";

import { useCartStore } from "@/store/cartStore";
import CouponCode from "./CouponCode";

export default function CartSummary() {
  const { cart } = useCartStore();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal > 999 || subtotal === 0
      ? 0
      : 99;

  const discount = 0;

  const total =
    subtotal + shipping - discount;

  return (
    <div className="sticky top-24 rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      {/* Summary */}

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-slate-600">
            Subtotal
          </span>

          <span className="font-semibold">
            ₹{subtotal}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-600">
            Shipping
          </span>

          <span className="font-semibold">
            {shipping === 0
              ? "Free"
              : `₹${shipping}`}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-600">
            Discount
          </span>

          <span className="font-semibold text-green-600">
            - ₹{discount}
          </span>
        </div>

        <hr />

        <div className="flex items-center justify-between text-xl font-bold">
          <span>Total</span>

          <span>
            ₹{total}
          </span>
        </div>

      </div>

      {/* Coupon */}

      <CouponCode />

      {/* Checkout */}

      <Link
        href="/checkout"
        className="mt-8 block rounded-xl bg-blue-600 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
      >
        Proceed To Checkout
      </Link>

      <Link
        href="/products"
        className="mt-4 block text-center font-medium text-blue-600 hover:underline"
      >
        Continue Shopping
      </Link>

    </div>
  );
}