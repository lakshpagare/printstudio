"use client";

import { useProductStore } from "@/store/productStore";

export default function ProductSort() {
  const {
    sort,
    setSort,
  } = useProductStore();

  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
    >
      <option value="latest">Latest</option>

      <option value="low-high">
        Price: Low to High
      </option>

      <option value="high-low">
        Price: High to Low
      </option>

      <option value="rating">
        Highest Rated
      </option>
    </select>
  );
}