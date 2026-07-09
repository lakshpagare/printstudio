import Link from "next/link";
import Container from "@/components/common/Container";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-24 text-white">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Start Your Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Ready To Create Something Unique?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Design personalized T-Shirts, Hoodies, Mugs,
            Caps and many more premium products with
            PrintStudio.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
            >
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/design-studio"
              className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-600"
            >
              Start Designing
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}