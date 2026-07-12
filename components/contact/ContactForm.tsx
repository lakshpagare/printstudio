"use client";

import { useState } from "react";
import Container from "@/components/common/Container";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    console.log(form);

    setSuccess("Your message has been sent successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="mx-auto max-w-3xl">

          <div className="mb-12 text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Send Message
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              We'd Love To Hear From You
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Fill out the form below and our team will
              contact you shortly.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl bg-white p-8 shadow-sm"
          >
            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none transition focus:border-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none transition focus:border-blue-600"
              />

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none transition focus:border-blue-600"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="rounded-xl border p-4 outline-none transition focus:border-blue-600"
              />

            </div>

            <textarea
              name="message"
              rows={6}
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border p-4 outline-none transition focus:border-blue-600"
            />

            {success && (
              <div className="rounded-xl bg-green-100 p-4 text-green-700">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
}