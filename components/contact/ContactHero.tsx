import Container from "@/components/common/Container";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
            We'd Love To
            <span className="text-blue-600">
              {" "}Hear From You
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Have a question about our products, custom printing,
            or your order? Our team is here to help you.
            Get in touch and we'll respond as soon as possible.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/products"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Products
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100"
            >
              Learn More
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}