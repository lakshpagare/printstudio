import { Feature } from "@/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
        <Icon className="text-blue-600" size={28} />
      </div>

      <h3 className="mb-3 text-xl font-bold">
        {feature.title}
      </h3>

      <p className="text-slate-500">
        {feature.description}
      </p>

    </div>
  );
}