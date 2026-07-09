import Link from "next/link";
import Container from "@/components/common/Container";
import AppButton from "@/components/common/AppButton";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-20 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to Create Your Custom Product?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Design premium T-Shirts, Mugs, Hoodies, Posters,
            Phone Cases and much more using our powerful
            Canva-style Design Studio.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link href="/design-studio">
              <AppButton
                className="bg-white text-blue-600 hover:bg-slate-100"
              >
                Start Designing
              </AppButton>
            </Link>

            <Link href="/products">
              <AppButton variant="outline">
                Explore Products
              </AppButton>
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}