import Container from "@/components/common/Container";
import { categories } from "@/constants/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="py-24">

      <Container>

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            Explore Categories
          </h2>

          <p className="mt-4 text-slate-500">
            Choose your favorite product and start designing in minutes.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}