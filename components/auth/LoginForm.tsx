"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <h1 className="text-3xl font-bold text-slate-900">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-slate-500">
        Login to your PrintStudio account
      </p>

      <form className="mt-8 space-y-5">

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

        <PasswordInput />

        <div className="flex justify-end">

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </button>

      </form>

      <SocialLogin />

      <p className="mt-8 text-center text-slate-600">

        Don't have an account?{" "}

        <Link
          href="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Create Account
        </Link>

      </p>

    </div>
  );
}