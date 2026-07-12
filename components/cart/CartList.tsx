"use client";

import { useCartStore } from "@/store/cartStore";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

export default function CartList() {
  const { cart } = useCartStore();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="space-y-6">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}