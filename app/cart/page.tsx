import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import CartList from "@/components/product/CartList";
import CartSummary from "@/components/product/CartSummary";

export default function CartPage() {
  return (
    <>
      <Navbar />

      <main className="py-12">

        <Container>

          <h1 className="mb-10 text-4xl font-bold">
            Shopping Cart
          </h1>

          <div className="grid gap-10 lg:grid-cols-3">

            <div className="lg:col-span-2">
              <CartList />
            </div>

            <CartSummary />

          </div>

        </Container>

      </main>

      <Footer />
    </>
  );
}