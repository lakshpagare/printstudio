import Container from "@/components/common/Container";
import {
  Users,
  ShoppingBag,
  Star,
  Palette,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Customers",
  },
  {
    icon: ShoppingBag,
    value: "25K+",
    label: "Orders Delivered",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
  },
  {
    icon: Palette,
    value: "500+",
    label: "Custom Designs",
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-24 text-white">
      <Container>

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Trusted By Thousands
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            We are proud to serve customers across India
            with premium personalized products and
            outstanding customer service.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-4xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-3 text-blue-100">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}