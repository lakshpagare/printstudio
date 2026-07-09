import {
  Truck,
  Palette,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

import { Feature } from "@/types/feature";

export const features: Feature[] = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Get your custom products delivered quickly.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Easy Customization",
    description: "Design products with our Canva-style editor.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Premium Quality",
    description: "High-quality printing and durable materials.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Secure Payments",
    description: "100% safe and secure online checkout.",
    icon: CreditCard,
  },
];