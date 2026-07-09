import Link from "next/link";
import Container from "@/components/common/Container";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About PrintStudio
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Creating Personalized
              <span className="text-blue-600">
                {" "}Printing Experiences
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              PrintStudio helps customers create unique,
              personalized products like T-Shirts, Hoodies,
              Mugs, Caps and more using an easy online
              design experience with premium print quality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/products"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Products
              </Link>

              <Link
                href="/design-studio"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
              >
                Start Designing
              </Link>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center">

            <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl bg-slate-100 shadow-xl">

              <span className="text-8xl">
                🎨
              </span>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}