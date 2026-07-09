"use client";

import { Search } from "lucide-react";
import { useProductStore } from "@/store/productStore";

export default function ProductSearch() {
  

  const {
    search,
    setSearch,
  } = useProductStore();

  return (
    <div className="relative">

      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full rounded-xl border py-3 pl-10 pr-4 outline-none focus:border-blue-500"
      />

    </div>
  );
}