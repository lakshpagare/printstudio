import { create } from "zustand";

interface ProductStore {
  search: string;
  category: string;
  sort: string;

  setSearch: (value: string) => void;
  setCategory: (value: string) => void;
  setSort: (value: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  search: "",
  category: "All",
  sort: "latest",

  setSearch: (value) =>
    set({
      search: value,
    }),

  setCategory: (value) =>
    set({
      category: value,
    }),

  setSort: (value) =>
    set({
      sort: value,
    }),
}));