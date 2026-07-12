import Link from "next/link";
import Container from "@/components/common/Container";

export default function EmptyCategory() {
  return (
    <section className="py-24">
      <Container>

        <div className="rounded-3xl border bg-white p-12 text-center shadow-sm">

          <h2 className="text-3xl font-bold">
            No Products Found 😔
          </h2>

          <p className="mt-4 text-slate-600">
            There are currently no products available in this category.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Browse All Products
          </Link>

        </div>

      </Container>
    </section>
  );
}