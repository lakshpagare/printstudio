"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

import { CartItem as CartProduct } from "@/store/cartStore";
import { useCartStore } from "@/store/cartStore";

interface CartItemProps {
  item: CartProduct;
}

export default function CartItem({
  item,
}: CartItemProps) {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  return (
    <div className="flex flex-col gap-6 rounded-2xl border bg-white p-5 shadow-sm md:flex-row">

      {/* Product Image */}
      <div className="relative h-36 w-full overflow-hidden rounded-xl bg-slate-100 md:h-32 md:w-32">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="128px"
          className="object-contain p-3"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">

        <div>
          <p className="text-sm font-medium text-blue-600">
            {item.category}
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-3 text-lg font-bold text-blue-600">
            ₹{item.price}
          </p>
        </div>

        {/* Quantity */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

          <div className="flex items-center overflow-hidden rounded-xl border">

            <button
              type="button"
              onClick={() => decreaseQuantity(item.id)}
              className="px-4 py-2 text-lg font-bold transition hover:bg-slate-100"
            >
              −
            </button>

            <span className="flex w-12 items-center justify-center border-x font-semibold">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => increaseQuantity(item.id)}
              className="px-4 py-2 text-lg font-bold transition hover:bg-slate-100"
            >
              +
            </button>

          </div>

          {/* Total */}
          <div className="text-right">
            <p className="text-sm text-slate-500">
              Total
            </p>

            <p className="text-xl font-bold">
              ₹{item.price * item.quantity}
            </p>
          </div>

        </div>

      </div>

      {/* Remove */}
      <button
        type="button"
        onClick={() => removeFromCart(item.id)}
        className="self-start rounded-xl p-3 text-red-500 transition hover:bg-red-50"
      >
        <Trash2 className="h-5 w-5" />
      </button>

    </div>
  );
}