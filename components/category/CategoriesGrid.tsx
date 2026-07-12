"use client";

import { useMemo, useState } from "react";

import Container from "@/components/common/Container";
import CategoryCard from "./CategoryCard";

import { categories } from "@/constants/categories";

export default function CategoriesGrid() {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="py-20">
      <Container>

        <div className="mb-12">

          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border p-4 outline-none transition focus:border-blue-600 md:max-w-md"
          />

        </div>

        {filteredCategories.length === 0 ? (
          <div className="rounded-3xl border bg-white p-12 text-center shadow-sm">

            <h2 className="text-3xl font-bold">
              No Categories Found
            </h2>

            <p className="mt-4 text-slate-600">
              Try searching with another keyword.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))}

          </div>
        )}

      </Container>
    </section>
  );
}