import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import OrdersList from "@/components/orders/OrdersList";

export default function OrdersPage() {
  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>

          <h1 className="mb-10 text-4xl font-bold">
            My Orders
          </h1>

          <OrdersList />

        </Container>
      </main>

      <Footer />
    </>
  );
}