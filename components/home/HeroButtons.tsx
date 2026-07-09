import AppButton from "@/components/common/AppButton";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <AppButton>
        Start Designing
      </AppButton>

      <AppButton
        variant="outline"
      >
        Explore Products
      </AppButton>
    </div>
  );
}