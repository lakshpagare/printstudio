"use client";

import { useState } from "react";

interface ProductColorsProps {
  colors?: string[];
}

export default function ProductColors({
  colors = [],
}: ProductColorsProps) {
  const [selectedColor, setSelectedColor] = useState(
    colors[0] || ""
  );

  if (colors.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold">
        Color
      </h3>

      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => setSelectedColor(color)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
              selectedColor === color
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-300 hover:border-blue-600"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}