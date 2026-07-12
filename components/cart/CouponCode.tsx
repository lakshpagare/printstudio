"use client";

import { useState } from "react";

export default function CouponCode() {
  const [coupon, setCoupon] = useState("");

  const handleApplyCoupon = () => {
    if (!coupon.trim()) {
      alert("Please enter a coupon code.");
      return;
    }

    // पुढे API किंवा coupon validation logic इथे येईल
    alert(`Coupon "${coupon}" applied!`);
  };

  return (
    <div className="mt-8">
      <label className="mb-2 block font-medium">
        Coupon Code
      </label>

      <div className="flex gap-2">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon"
          className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
        />

        <button
          type="button"
          onClick={handleApplyCoupon}
          className="rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-black"
        >
          Apply
        </button>
      </div>
    </div>
  );
}