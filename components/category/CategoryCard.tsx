import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Category } from "@/types/category";

interface Props {
  category: Category;
}

export default function CategoryCard({
  category,
}: Props) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">

        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          // sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Product Count Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur">
          {category.productCount}+ Products
        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
          {category.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-slate-600">
          {category.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="font-semibold text-blue-600">
            Explore Collection
          </span>

          <ArrowRight className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-2" />

        </div>

      </div>
    </Link>
  );
}