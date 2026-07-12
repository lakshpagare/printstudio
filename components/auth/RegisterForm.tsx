"use client";

import Link from "next/link";
import { Mail, User } from "lucide-react";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

export default function RegisterForm() {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <h1 className="text-3xl font-bold text-slate-900">
        Create Account 🚀
      </h1>

      <p className="mt-2 text-slate-500">
        Join PrintStudio and start designing amazing products.
      </p>

      <form className="mt-8 space-y-5">

        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <div className="flex items-center rounded-xl border px-4">

            <User className="h-5 w-5 text-slate-400" />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-4 outline-none"
            />

          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <div className="flex items-center rounded-xl border px-4">

            <Mail className="h-5 w-5 text-slate-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-4 outline-none"
            />

          </div>
        </div>

        {/* Password */}
        <PasswordInput
          label="Password"
          placeholder="Create password"
        />

        {/* Confirm Password */}
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm password"
          name="confirmPassword"
        />

        {/* Terms */}
        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            className="mt-1"
          />

          <span>
            I agree to the{" "}
            <Link
              href="/terms"
              className="font-medium text-blue-600 hover:underline"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Create Account
        </button>

      </form>

      <SocialLogin />

      <p className="mt-8 text-center text-slate-600">
        Already have an account?{" "}

        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>

      </p>

    </div>
  );
}