import { Order } from "@/types/order";

export const orders: Order[] = [
  {
    id: 1,
    orderId: "ORD1001",
    productName: "Classic T-Shirt",
    price: 499,
    quantity: 2,
    status: "Delivered",
    date: "10 July 2026",
  },
  {
    id: 2,
    orderId: "ORD1002",
    productName: "Premium Hoodie",
    price: 1299,
    quantity: 1,
    status: "Processing",
    date: "12 July 2026",
  },
  {
    id: 3,
    orderId: "ORD1003",
    productName: "Coffee Mug",
    price: 299,
    quantity: 3,
    status: "Pending",
    date: "15 July 2026",
  },
];