import Container from "@/components/common/Container";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "Software Engineer",
    review:
      "The print quality exceeded my expectations. The customization process was simple and the delivery was quick.",
  },
  {
    name: "Priya Sharma",
    role: "Graphic Designer",
    review:
      "I designed a personalized hoodie and it turned out amazing. Highly recommended for custom printing.",
  },
  {
    name: "Amit Joshi",
    role: "Business Owner",
    review:
      "Excellent customer service and premium quality products. I'll definitely order again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Thousands of customers trust PrintStudio for
            premium personalized printing.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                  👤
                </div>

                <div>
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}