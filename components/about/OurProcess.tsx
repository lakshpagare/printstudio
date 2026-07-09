import Container from "@/components/common/Container";
import {
  ShoppingBag,
  Palette,
  CreditCard,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "Choose Product",
    description:
      "Select your favorite product from our premium collection.",
  },
  {
    icon: Palette,
    title: "Customize Design",
    description:
      "Add your own text, photos, logos and create a unique design.",
  },
  {
    icon: CreditCard,
    title: "Place Order",
    description:
      "Complete your order securely using multiple payment options.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "We print, pack and deliver your customized product to your doorstep.",
  },
];

export default function OurProcess() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Simple Steps To Your Perfect Product
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We make product customization easy and hassle-free.
            From selecting your product to doorstep delivery,
            everything is just a few clicks away.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <div className="mt-6 text-sm font-bold text-blue-600">
                  STEP {index + 1}
                </div>

                <h3 className="mt-3 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}