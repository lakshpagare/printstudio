import Container from "@/components/common/Container";
import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-slate-500">
            Thousands of happy customers trust Prinpm ntStudio.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </Container>

    </section>
  );
}