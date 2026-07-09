import FabricCanvas from "./FabricCanvas";

export default function Canvas() {
  return (
    <div className="flex h-[650px] items-center justify-center rounded-3xl bg-white shadow">
      <FabricCanvas />
    </div>
  );
}