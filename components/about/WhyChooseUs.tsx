import Container from "@/components/common/Container";
import {
  Palette,
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Easy Customization",
    description:
      "Design your own T-Shirts, Hoodies, Mugs and more using our simple design studio.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "We use high-quality materials and advanced printing technology for every order.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick processing and reliable shipping across India with real-time updates.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Your payments are protected with trusted and secure payment gateways.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always ready to help you with your orders.",
  },
  {
    icon: Sparkles,
    title: "Creative Designs",
    description:
      "Choose from thousands of ready-made templates or create your own masterpiece.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything You Need For Personalized Printing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We combine creativity, technology and premium
            quality to provide a smooth customization
            experience for every customer.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}