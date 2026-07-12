import Link from "next/link";

interface ProductBreadcrumbProps {
  category: string;
  categorySlug: string;
  title: string;
}

export default function ProductBreadcrumb({
  category,
  categorySlug,
  title,
}: ProductBreadcrumbProps) {
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
      <Link
        href="/"
        className="transition hover:text-blue-600"
      >
        Home
      </Link>

      <span>/</span>

      <Link
        href="/products"
        className="transition hover:text-blue-600"
      >
        Products
      </Link>

      <span>/</span>

      <Link
        href={`/categories/${categorySlug}`}
        className="transition hover:text-blue-600"
      >
        {category}
      </Link>

      <span>/</span>

      <span className="font-medium text-slate-900">
        {title}
      </span>
    </nav>
  );
}