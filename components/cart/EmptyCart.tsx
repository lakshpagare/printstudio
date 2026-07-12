import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-20 text-center">

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
        <ShoppingBag className="h-12 w-12 text-blue-600" />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-slate-900">
        Your Cart is Empty
      </h2>

      <p className="mt-4 max-w-md text-slate-500">
        Looks like you haven't added any products yet.
        Explore our collection and create your own custom products.
      </p>

      <Link
        href="/products"
        className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}