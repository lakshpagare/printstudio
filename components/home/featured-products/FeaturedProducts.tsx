import Container from "@/components/common/Container";
import { products } from "@/constants/products";
import ProductCard from "@/components/product/ProductCard";


export default function FeaturedProducts() {
  return (
    <section className="py-24">

      <Container>

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            Best Selling Products
          </h2>

          <p className="mt-4 text-slate-500">
            Explore our most loved custom products.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 4).map((product) => (
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