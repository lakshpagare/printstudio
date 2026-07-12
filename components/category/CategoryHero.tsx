import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";

import { categories } from "@/constants/categories";
import { products } from "@/constants/products";

interface Props {
  slug: string;
}

export default function CategoryHero({
  slug,
}: Props) {
  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    return (
      <section className="py-24 text-center">
        <h1 className="text-4xl font-bold">
          Category Not Found
        </h1>
      </section>
    );
  }

  const totalProducts = products.filter(
    (product) => product.categorySlug === slug
  ).length;

  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Categories",
              href: "/categories",
            },
            {
              label: category.title,
            },
          ]}
        />

        <div className="mt-10 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Category
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            {category.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {category.description}
          </p>

          <p className="mt-6 text-lg font-semibold text-blue-600">
            {totalProducts} Products Available
          </p>

        </div>

      </Container>
    </section>
  );
}