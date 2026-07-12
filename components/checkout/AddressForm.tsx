"use client";

import { useState } from "react";

export default function AddressForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Shipping Address
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            City
          </label>

          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter your city"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            State
          </label>

          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="Enter your state"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            PIN Code
          </label>

          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Enter PIN code"
            className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

      </div>

      <div className="mt-5">
        <label className="mb-2 block font-medium">
          Full Address
        </label>

        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          rows={5}
          placeholder="House No, Street, Area..."
          className="w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-600"
        />
      </div>

    </div>
  );
}