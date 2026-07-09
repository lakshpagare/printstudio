import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";



export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>

          <h1 className="mb-10 text-4xl font-bold">
            Checkout
          </h1>

          <div className="grid gap-10 lg:grid-cols-3">

            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            <CheckoutSummary />

          </div>

        </Container>
      </main>

      <Footer />
    </>
  );
}