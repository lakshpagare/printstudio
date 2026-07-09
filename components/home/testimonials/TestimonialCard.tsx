import { Star, User } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
          <User className="text-blue-600" />
        </div>

        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          <p className="text-sm text-slate-500">
            {testimonial.role}
          </p>
        </div>

      </div>

      <div className="mb-4 flex">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="leading-7 text-slate-600">
        "{testimonial.review}"
      </p>

    </div>
  );
}