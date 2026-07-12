import { Product } from "@/types/product";

import { getRelatedProducts } from "@/constants/products";

import ProductCard from "./ProductCard";

interface Props {
  product: Product;
}

export default function RelatedProducts({
  product,
}: Props) {
  const relatedProducts = getRelatedProducts(
    product.categorySlug,
    product.id,
    4
  );

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="mb-10">
        <h2 className="text-3xl font-bold">
          You May Also Like
        </h2>

        <p className="mt-2 text-slate-500">
          Similar products you may be interested in.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}