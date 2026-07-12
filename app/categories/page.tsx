import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CategoriesHero from "@/components/category/CategoriesHero";
import CategoriesGrid from "@/components/category/CategoriesGrid";

export default function CategoriesPage() {
  return (
    <>
      <Navbar />

      <main>
        <CategoriesHero />
        <CategoriesGrid />
      </main>

      <Footer />
    </>
  );
}