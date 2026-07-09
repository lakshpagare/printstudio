import Container from "@/components/common/Container";
import { features } from "@/constants/features";
import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            Why Choose PrintStudio
          </h2>

          <p className="mt-4 text-slate-500">
            Everything you need to create amazing custom products.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}