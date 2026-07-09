"use client";

import { products } from "@/constants/products";
import ProductCard from "./ProductCard";
import { useProductStore } from "@/store/productStore";

export default function ProductGrid() {
  const {
    search,
    category,
    sort,
  } = useProductStore();

  // Filter Products
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sort Products
  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <div className="col-span-full py-20 text-center">
          <h2 className="text-2xl font-semibold">
            No Products Found 😔
          </h2>

          <p className="mt-2 text-slate-500">
            Try changing your search or category.
          </p>
        </div>
      )}
    </div>
  );
}