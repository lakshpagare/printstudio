"use client";

import { useState } from "react";

interface ProductSizesProps {
  sizes?: string[];
}

export default function ProductSizes({
  sizes = [],
}: ProductSizesProps) {
  const [selectedSize, setSelectedSize] = useState(
    sizes[0] || ""
  );

  if (sizes.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold">
        Size
      </h3>

      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setSelectedSize(size)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
              selectedSize === size
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-300 hover:border-blue-600"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}