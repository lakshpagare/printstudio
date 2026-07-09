import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

export default function OrderSuccessPage() {
  return (
    <>
      <Navbar />

      <main className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border bg-white p-12 text-center shadow-sm">

            <div className="mb-6 text-7xl">
              ✅
            </div>

            <h1 className="text-4xl font-bold">
              Order Placed Successfully!
            </h1>

            <p className="mt-4 text-slate-500">
              Thank you for shopping with PrintStudio.
              Your order has been placed successfully.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

              <Link
                href="/orders"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View Orders
              </Link>

              <Link
                href="/products"
                className="rounded-xl border px-6 py-3 font-semibold transition hover:bg-slate-100"
              >
                Continue Shopping
              </Link>

            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}