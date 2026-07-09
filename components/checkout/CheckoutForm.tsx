"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCartStore } from "@/store/cartStore";
import { useOrderStore } from "@/store/orderStore";
import { Order } from "@/types/order";

export default function CheckoutForm() {
  const router = useRouter();

  const { cart, clearCart } = useCartStore();

  const { addOrder } = useOrderStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "COD",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    cart.forEach((item) => {
      const order: Order = {
        id: Date.now() + item.id,

        orderId:
          "ORD-" +
          Math.floor(100000 + Math.random() * 900000),

        productName: item.title,

        quantity: item.quantity,

        price: item.price,

        status: "Pending",

        date: new Date().toLocaleDateString(),
      };

      addOrder(order);
    });

    clearCart();

    router.push("/order-success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border bg-white p-8 shadow-sm"
    >
      <h2 className="text-2xl font-bold">
        Shipping Information
      </h2>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        required
      />

      <input
        name="phone"
        placeholder="Mobile Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        required
      />

      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        rows={4}
        className="w-full rounded-xl border p-3"
        required
      />

      <div className="grid gap-4 md:grid-cols-3">
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="rounded-xl border p-3"
          required
        />

        <input
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          className="rounded-xl border p-3"
          required
        />

        <input
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          className="rounded-xl border p-3"
          required
        />
      </div>

      <select
        name="payment"
        value={form.payment}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      >
        <option value="COD">
          Cash On Delivery
        </option>

        <option value="Online">
          Online Payment
        </option>
      </select>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Place Order
      </button>
    </form>
  );
}