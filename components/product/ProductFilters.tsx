"use client";

import { useProductStore } from "@/store/productStore";

export default function ProductFilters() {

  const {
    category,
    setCategory,
  } = useProductStore();

  return (

    <select
      value={category}
      onChange={(e) =>
        setCategory(e.target.value)
      }
      className="w-full rounded-xl border p-3 outline-none"
    >

      <option value="All">
        All Categories
      </option>

      <option value="T-Shirts">
        T-Shirts
      </option>

      <option value="Hoodies">
        Hoodies
      </option>

      <option value="Mugs">
        Mugs
      </option>

      <option value="Phone Cases">
        Phone Cases
      </option>

      <option value="Caps">
        Caps
      </option>

      <option value="Posters">
        Posters
      </option>

      <option value="Bottles">
        Bottles
      </option>

      <option value="Notebooks">
        Notebooks
      </option>

      <option value="Mouse Pads">
        Mouse Pads
      </option>

      <option value="Accessories">
        Accessories
      </option>

      <option value="Bags">
        Bags
      </option>

    </select>

  );
}