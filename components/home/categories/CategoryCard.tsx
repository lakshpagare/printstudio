import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">

        <Image
          src="/image4.jpg"
          alt={category.title}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="space-y-3 p-6">

        <h3 className="text-2xl font-bold">
          {category.title}
        </h3>

        <p className="text-sm text-slate-500">
          {category.description}
        </p>

        <div className="flex items-center justify-between">

          <span className="font-semibold text-blue-600">
            {category.productCount}+ Designs
          </span>

          <ArrowRight className="transition group-hover:translate-x-2" />

        </div>

      </div>
    </Link>
  );
}
