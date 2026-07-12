"use client";

import { FcGoogle } from "react-icons/fc";
import { Smartphone } from "lucide-react";

export default function SocialLogin() {
  return (
    <>
      <div className="my-8 flex items-center">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="mx-4 text-sm text-slate-500">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-4">

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 py-3 font-medium transition hover:bg-slate-50"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 py-3 font-medium transition hover:bg-slate-50"
        >
          <Smartphone className="h-5 w-5" />
          Continue with Mobile Number
        </button>

      </div>
    </>
  );
}