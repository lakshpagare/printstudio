import AppButton from "@/components/common/AppButton";

export default function BottomBar() {
  return (
    <div className="mt-6 flex justify-end gap-4">

      <AppButton variant="outline">
        Save Design
      </AppButton>

      <AppButton>
        Add To Cart
      </AppButton>

    </div>
  );
}