import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CategoryHero from "@/components/category/CategoryHero";
import CategoryProducts from "@/components/category/CategoryProducts";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <>
      <Navbar />

      <main>

        <CategoryHero slug={slug} />

        <CategoryProducts slug={slug} />

      </main>

      <Footer />
    </>
  );
}
