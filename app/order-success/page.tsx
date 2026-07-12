import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import SuccessCard from "@/components/order/SuccessCard";

export default function OrderSuccessPage() {
  return (
    <>
      <Navbar />

      <main className="py-16">
        <Container>
          <SuccessCard />
        </Container>
      </main>

      <Footer />
    </>
  );
}