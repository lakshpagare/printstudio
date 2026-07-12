import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900">
              Checkout
            </h1>

            <p className="mt-2 text-slate-500">
              Complete your order by providing your shipping and payment details.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            <OrderSummary />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}