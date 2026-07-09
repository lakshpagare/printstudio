import Link from "next/link";
import { Order } from "@/types/order";

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({
  order,
}: OrderCardProps) {
  const statusColor = {
    Pending: "bg-yellow-100 text-yellow-700",
    Processing: "bg-blue-100 text-blue-700",
    Shipped: "bg-purple-100 text-purple-700",
    Delivered: "bg-green-100 text-green-700",
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Left */}
        <div>

          <p className="text-sm text-slate-500">
            Order ID
          </p>

          <h2 className="text-xl font-bold">
            {order.orderId}
          </h2>

          <p className="mt-4 text-lg font-semibold">
            {order.productName}
          </p>

          <p className="mt-2 text-slate-500">
            Ordered on {order.date}
          </p>

        </div>

        {/* Center */}
        <div className="text-left md:text-center">

          <p className="text-sm text-slate-500">
            Quantity
          </p>

          <p className="mt-2 text-xl font-bold">
            {order.quantity}
          </p>

        </div>

        {/* Price */}
        <div className="text-left md:text-center">

          <p className="text-sm text-slate-500">
            Total
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            ₹{order.price * order.quantity}
          </p>

        </div>

        {/* Status */}
        <div>
            <Link
  href={`/orders/${order.id}`}
  className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
>
  View Details
</Link>

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              statusColor[order.status]
            }`}
          >
            {order.status}
          </span>

        </div>

      </div>

    </div>
  );
}