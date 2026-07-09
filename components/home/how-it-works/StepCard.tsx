import { Step } from "@/types/step";

interface StepCardProps {
  step: Step;
}

export default function StepCard({
  step,
}: StepCardProps) {
  const Icon = step.icon;

  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="absolute right-6 top-6 text-5xl font-bold text-slate-100">
        {step.id}
      </div>

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
        <Icon
          className="text-blue-600"
          size={28}
        />
      </div>

      <h3 className="mb-3 text-xl font-bold">
        {step.title}
      </h3>

      <p className="text-slate-500">
        {step.description}
      </p>

    </div>
  );
}