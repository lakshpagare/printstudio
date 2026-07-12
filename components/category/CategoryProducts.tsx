"use client";

import { useMemo, useState } from "react";

import Container from "@/components/common/Container";
import ProductCard from "@/components/product/ProductCard";

import { products } from "@/constants/products";

import EmptyCategory from "./EmptyCategory";
import CategoryToolbar from "./CategoryToolbar";

interface Props {
  slug: string;
}

export default function CategoryProducts({ slug }: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (product) => product.categorySlug === slug
    );

    if (search.trim()) {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    switch (sort) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;

      case "name":
        result = [...result].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      default:
        break;
    }

    return result;
  }, [slug, search, sort]);

  if (filteredProducts.length === 0) {
    return <EmptyCategory />;
  }

  return (
    <section className="py-20">
      <Container>

        <CategoryToolbar
          totalProducts={filteredProducts.length}
          search={search}
          sort={sort}
          onSearchChange={setSearch}
          onSortChange={setSort}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}