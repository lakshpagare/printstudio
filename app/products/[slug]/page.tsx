import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

import { getProductBySlug } from "@/constants/products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetails({
  params,
}: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>

          {/* Product Details */}
          <div className="grid gap-12 lg:grid-cols-2">
            <ProductGallery product={product} />

            <ProductInfo product={product} />
          </div>

          {/* Related Products */}
          <div className="mt-20">
            <RelatedProducts product={product} />
          </div>

        </Container>
      </main>

      <Footer />
    </>
  );
}