import { Product } from "@/types/product";

import { tshirts } from "./tshirts";
import { hoodies } from "./hoodies";
import { mugs } from "./mugs";
import { phoneCases } from "./phoneCases";
import { posters } from "./posters";
import { caps } from "./caps";
import { bags } from "./bags";
import { accessories } from "./accessories";

/* ==========================================
   ALL PRODUCTS
========================================== */

export const products: Product[] = [
  ...tshirts,
  ...hoodies,
  ...mugs,
  ...phoneCases,
  ...posters,
  ...caps,
  ...bags,
  ...accessories,
];

/* ==========================================
   FEATURED PRODUCTS
========================================== */

export const featuredProducts = products.filter(
  (product) => product.featured
);

/* ==========================================
   NEW PRODUCTS
========================================== */

export const newProducts = products.filter(
  (product) => product.isNew
);

/* ==========================================
   TRENDING PRODUCTS
========================================== */

export const trendingProducts = products.filter(
  (product) => product.badge === "Trending"
);

/* ==========================================
   BEST SELLER PRODUCTS
========================================== */

export const bestSellerProducts = products.filter(
  (product) => product.badge === "Best Seller"
);

/* ==========================================
   HOT PRODUCTS
========================================== */

export const hotProducts = products.filter(
  (product) => product.badge === "Hot"
);

/* ==========================================
   PREMIUM PRODUCTS
========================================== */

export const premiumProducts = products.filter(
  (product) => product.badge === "Premium"
);

/* ==========================================
   CUSTOMIZABLE PRODUCTS
========================================== */

export const customizableProducts = products.filter(
  (product) => product.badge === "Customize"
);

/* ==========================================
   IN STOCK PRODUCTS
========================================== */

export const inStockProducts = products.filter(
  (product) => product.stock > 0
);

/* ==========================================
   OUT OF STOCK PRODUCTS
========================================== */

export const outOfStockProducts = products.filter(
  (product) => product.stock <= 0
);

/* ==========================================
   GET PRODUCT BY ID
========================================== */

export function getProductById(id: number) {
  return products.find(
    (product) => product.id === id
  );
}

/* ==========================================
   GET PRODUCT BY SLUG
========================================== */

export function getProductBySlug(slug: string) {
  return products.find(
    (product) => product.slug === slug
  );
}

/* ==========================================
   GET PRODUCTS BY CATEGORY
========================================== */

export function getProductsByCategory(
  categorySlug: string
) {
  return products.filter(
    (product) =>
      product.categorySlug === categorySlug
  );
}

/* ==========================================
   RELATED PRODUCTS
========================================== */

export function getRelatedProducts(
  categorySlug: string,
  currentProductId: number,
  limit = 4
) {
  return products
    .filter(
      (product) =>
        product.categorySlug === categorySlug &&
        product.id !== currentProductId
    )
    .slice(0, limit);
}

/* ==========================================
   SORT HELPERS
========================================== */

export const latestProducts = [...products].sort(
  (a, b) => b.id - a.id
);

export const highestRatedProducts = [
  ...products,
].sort(
  (a, b) => b.rating - a.rating
);

export const priceLowToHigh = [
  ...products,
].sort(
  (a, b) => a.price - b.price
);

export const priceHighToLow = [
  ...products,
].sort(
  (a, b) => b.price - a.price
);