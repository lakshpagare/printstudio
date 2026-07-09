"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Order } from "@/types/order";

interface OrderStore {
  orders: Order[];

  addOrder: (order: Order) => void;
  setOrders: (orders: Order[]) => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
  orders: [],

  addOrder: (order) =>
    set((state) => ({
      orders: [order, ...state.orders],
    })),

  setOrders: (orders) =>
    set({
      orders,
    }),
    }),
    {
      name: "printstudio-orders",
    }
  )
);