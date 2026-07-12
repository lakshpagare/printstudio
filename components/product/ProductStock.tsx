interface ProductStockProps {
  stock: number;
}

export default function ProductStock({
  stock,
}: ProductStockProps) {
  if (stock <= 0) {
    return (
      <div className="mt-6">
        <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
          ❌ Out of Stock
        </span>
      </div>
    );
  }

  if (stock <= 10) {
    return (
      <div className="mt-6">
        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          🔥 Only {stock} Left
        </span>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
        ✅ In Stock ({stock} Available)
      </span>
    </div>
  );
}