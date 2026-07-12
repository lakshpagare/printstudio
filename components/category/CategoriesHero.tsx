import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function CategoriesHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
      <Container>

        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Categories",
            },
          ]}
        />

        <div className="mx-auto mt-10 max-w-4xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Explore Collections
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900 lg:text-6xl">
            Shop By <span className="text-blue-600">Category</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Browse our wide range of customizable products.
            Choose a category and start creating something unique with PrintStudio.
          </p>

        </div>

      </Container>
    </section>
  );
}