interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

export default function ProductPrice({
  price,
  originalPrice,
}: ProductPriceProps) {
  const discount =
    originalPrice
      ? Math.round(
          ((originalPrice - price) / originalPrice) * 100
        )
      : 0;

  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <span className="text-4xl font-bold text-blue-600">
        ₹{price}
      </span>

      {originalPrice && (
        <>
          <span className="text-xl text-slate-400 line-through">
            ₹{originalPrice}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            {discount}% OFF
          </span>
        </>
      )}
    </div>
  );
}