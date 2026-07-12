"use client";

import { useState } from "react";

const paymentMethods = [
  {
    id: "cod",
    title: "Cash On Delivery",
    description: "Pay when your order is delivered.",
  },
  {
    id: "upi",
    title: "UPI",
    description: "Pay using Google Pay, PhonePe or Paytm.",
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    description: "Visa, MasterCard, RuPay supported.",
  },
  {
    id: "netbanking",
    title: "Net Banking",
    description: "Pay directly from your bank account.",
  },
];

export default function PaymentMethods() {
  const [selected, setSelected] = useState("cod");

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Payment Method
      </h2>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${
              selected === method.id
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200 hover:border-blue-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="mt-1 h-5 w-5"
            />

            <div>
              <h3 className="font-semibold text-slate-900">
                {method.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {method.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}