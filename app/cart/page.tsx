import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>
          {/* Page Title */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900">
              Shopping Cart
            </h1>

            <p className="mt-2 text-slate-500">
              Review your selected products before proceeding to checkout.
            </p>
          </div>

          {/* Cart Layout */}
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <CartList />
            </div>

            {/* Order Summary */}
            <div>
              <CartSummary />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}