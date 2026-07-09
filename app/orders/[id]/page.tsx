import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import OrderDetails from "@/components/orders/OrderDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>

          <OrderDetails id={id} />

        </Container>
      </main>

      <Footer />
    </>
  );
}