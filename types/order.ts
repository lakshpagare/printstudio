export interface Order {
  id: number;
  orderId: string;
  productName: string;
  price: number;
  quantity: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  date: string;
}
