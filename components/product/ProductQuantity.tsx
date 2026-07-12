"use client";

interface ProductQuantityProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function ProductQuantity({
  quantity,
  onIncrease,
  onDecrease,
}: ProductQuantityProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold">
        Quantity
      </h3>

      <div className="flex w-fit items-center overflow-hidden rounded-xl border">

        <button
          type="button"
          onClick={onDecrease}
          className="px-5 py-3 text-xl font-bold transition hover:bg-slate-100"
        >
          −
        </button>

        <span className="flex h-12 w-14 items-center justify-center border-x text-lg font-semibold">
          {quantity}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="px-5 py-3 text-xl font-bold transition hover:bg-slate-100"
        >
          +
        </button>

      </div>
    </div>
  );
}