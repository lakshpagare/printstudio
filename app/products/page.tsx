import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductSearch from "@/components/product/ProductSearch";
import ProductFilters from "@/components/product/ProductFilters";
import ProductSort from "@/components/product/ProductSort";
import ProductGrid from "@/components/product/ProductGrid";
import Container from "@/components/common/Container";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>
          <h1 className="mb-8 text-4xl font-bold">
            All Products
          </h1>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <ProductSearch />
            <ProductFilters />
            <ProductSort />
          </div>

          <ProductGrid />
        </Container>
      </main>

      <Footer />
    </>
  );
}