import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "Classic T-Shirt",
    slug: "classic-tshirt",
    category: "T-Shirts",
    price: 499,
    originalPrice: 699,
    rating: 4.8,
    reviews: 124,
    image: "",
    badge: "Best Seller",
    stock: 20,
    description: "Premium cotton round neck t-shirt."
  },
  {
    id: 2,
    title: "Premium Hoodie",
    slug: "premium-hoodie",
    category: "Hoodies",
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 95,
    image: "",
    badge: "New",
    stock: 15,
    description: "Warm fleece hoodie for winter."
  },
  {
    id: 3,
    title: "Coffee Mug",
    slug: "coffee-mug",
    category: "Mugs",
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviews: 180,
    image: "",
    stock: 50,
    description: "Ceramic custom printed mug."
  },
  {
    id: 4,
    title: "Phone Case",
    slug: "phone-case",
    category: "Phone Cases",
    price: 599,
    rating: 4.6,
    reviews: 74,
    image: "",
    stock: 30,
    description: "Hard protective customized phone case."
  },
  {
    id: 5,
    title: "Poster",
    slug: "poster",
    category: "Posters",
    price: 399,
    rating: 4.5,
    reviews: 60,
    image: "",
    stock: 40,
    description: "High quality matte poster."
  },
  {
    id: 6,
    title: "Cap",
    slug: "cap",
    category: "Caps",
    price: 499,
    rating: 4.4,
    reviews: 41,
    image: "",
    stock: 25,
    description: "Custom embroidered cap."
  },
  {
    id: 7,
    title: "Bottle",
    slug: "bottle",
    category: "Bottles",
    price: 699,
    rating: 4.8,
    reviews: 89,
    image: "",
    stock: 35,
    description: "Stainless steel water bottle."
  },
  {
    id: 8,
    title: "Notebook",
    slug: "notebook",
    category: "Notebooks",
    price: 249,
    rating: 4.6,
    reviews: 52,
    image: "",
    stock: 100,
    description: "Personalized notebook."
  },
  {
    id: 9,
    title: "Mouse Pad",
    slug: "mouse-pad",
    category: "Mouse Pads",
    price: 349,
    rating: 4.5,
    reviews: 38,
    image: "",
    stock: 70,
    description: "Smooth gaming mouse pad."
  },
  {
    id: 10,
    title: "Sticker Pack",
    slug: "sticker-pack",
    category: "Stickers",
    price: 199,
    rating: 4.7,
    reviews: 110,
    image: "",
    stock: 200,
    description: "Premium waterproof stickers."
  },
  {
    id: 11,
    title: "Keychain",
    slug: "keychain",
    category: "Accessories",
    price: 149,
    rating: 4.5,
    reviews: 48,
    image: "",
    stock: 120,
    description: "Acrylic personalized keychain."
  },
  {
    id: 12,
    title: "Tote Bag",
    slug: "tote-bag",
    category: "Bags",
    price: 549,
    rating: 4.8,
    reviews: 67,
    image: "",
    badge: "Trending",
    stock: 22,
    description: "Eco-friendly cotton tote bag."
  }
];

export const featuredProducts = products.slice(0, 8);