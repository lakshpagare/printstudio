"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  name?: string;
}

export default function PasswordInput({
  label = "Password",
  placeholder = "Enter your password",
  name = "password",
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <div className="flex items-center rounded-xl border px-4 focus-within:border-blue-600">

        <Lock className="h-5 w-5 text-slate-400" />

        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          className="w-full px-3 py-4 outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-slate-500 transition hover:text-blue-600"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>

      </div>
    </div>
  );
}