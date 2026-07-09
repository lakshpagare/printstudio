import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

interface WishlistStore {
  wishlist: Product[];

  addToWishlist: (product: Product) => void;

  removeFromWishlist: (id: number) => void;

  isInWishlist: (id: number) => boolean;

  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({

  wishlist: [],

  addToWishlist: (product) => {

    const exists = get().wishlist.find(
      (item) => item.id === product.id
    );

    if (exists) return;

    set((state) => ({
      wishlist: [...state.wishlist, product],
    }));
  },

  removeFromWishlist: (id) =>

    set((state) => ({
      wishlist: state.wishlist.filter(
        (item) => item.id !== id
      ),
    })),

  isInWishlist: (id) =>

    get().wishlist.some(
      (item) => item.id === id
    ),

  clearWishlist: () =>
    set({
      wishlist: [],
    }),

    }),
    {
      name: "printstudio-wishlist",
    }
  )
);