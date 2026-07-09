"use client";

import { useOrderStore } from "@/store/orderStore";
import OrderCard from "./OrderCard";

export default function OrdersList() {
  const { orders } = useOrderStore();

  if (orders.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-12 text-center">
        <h2 className="text-2xl font-semibold">
          No Orders Yet 📦
        </h2>

        <p className="mt-3 text-slate-500">
          Start shopping to see your orders.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}