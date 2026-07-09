import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import WishlistGrid from "@/components/product/WishlistGrid";

export default function WishlistPage() {
  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>

          <h1 className="mb-8 text-4xl font-bold">
            My Wishlist
          </h1>

          <WishlistGrid />

        </Container>
      </main>

      <Footer />
    </>
  );
}