"use client";

import { useOrderStore } from "@/store/orderStore";

interface Props {
  id: string;
}

export default function OrderDetails({
  id,
}: Props) {
  const { orders } = useOrderStore();

  const order = orders.find(
    (item) => item.id === Number(id)
  );

  if (!order) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center">
        <h2 className="text-3xl font-bold">
          Order Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-bold">
        Order Details
      </h1>

      <div className="mt-8 space-y-4">

        <div>
          <span className="font-semibold">
            Order ID :
          </span>{" "}
          {order.orderId}
        </div>

        <div>
          <span className="font-semibold">
            Product :
          </span>{" "}
          {order.productName}
        </div>

        <div>
          <span className="font-semibold">
            Quantity :
          </span>{" "}
          {order.quantity}
        </div>

        <div>
          <span className="font-semibold">
            Total :
          </span>{" "}
          ₹{order.price * order.quantity}
        </div>

        <div>
          <span className="font-semibold">
            Status :
          </span>{" "}
          {order.status}
        </div>

        <div>
          <span className="font-semibold">
            Ordered On :
          </span>{" "}
          {order.date}
        </div>

      </div>
    </div>
  );
}