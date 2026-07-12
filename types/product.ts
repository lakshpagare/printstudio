
// export interface Product {
//   id: number;
//   title: string;
//   slug: string;

//   category: string;
//   categorySlug: string;

//   price: number;
//   originalPrice?: number;
//   rating: number;
//   reviews: number;
//  image: string;
//   badge?: string;
//   stock: number;
//   description: string;
//   colors: string[];
//   sizes: string[];
// }

export interface Product {
  id: number;

  title: string;
  slug: string;

  category: string;
  categorySlug: string;

  price: number;
  originalPrice?: number;

  rating: number;
  reviews: number;

  image: string;

  images?: string[];

  badge?: string;

  stock: number;

  description: string;

  featured?: boolean;

  isNew?: boolean;

  colors?: string[];

  sizes?: string[];
}