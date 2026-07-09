import {
  ShoppingBag,
  Palette,
  Eye,
  Truck,
} from "lucide-react";

import { Step } from "@/types/step";

export const steps: Step[] = [
  {
    id: 1,
    title: "Choose Product",
    description: "Select your favorite product.",
    icon: ShoppingBag,
  },
  {
    id: 2,
    title: "Customize Design",
    description: "Add text, images and colors.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Preview",
    description: "See your design before ordering.",
    icon: Eye,
  },
  {
    id: 4,
    title: "Place Order",
    description: "Checkout and get fast delivery.",
    icon: Truck,
  },
];