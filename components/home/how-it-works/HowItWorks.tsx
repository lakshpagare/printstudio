import Container from "@/components/common/Container";
import { steps } from "@/constants/steps";
import StepCard from "./StepCard";

export default function HowItWorks() {
  return (
    <section className="py-24">

      <Container>

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="mt-4 text-slate-500">
            Create your custom product in just four easy steps.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <StepCard
              key={step.id}
              step={step}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}