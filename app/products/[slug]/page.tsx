import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetails({
  params,
}: Props) {

  const { slug } = await params;

  return (
    <>
      <Navbar />

      <main className="py-12">

        <Container>

          <div className="grid gap-12 lg:grid-cols-2">

            <ProductGallery slug={slug} />

            <ProductInfo slug={slug} />

          </div>

        </Container>

      </main>

      <Footer />
    </>
  );
}