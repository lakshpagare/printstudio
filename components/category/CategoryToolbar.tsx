"use client";

interface CategoryToolbarProps {
  totalProducts: number;
  search: string;
  sort: string;
  onSearchChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export default function CategoryToolbar({
  totalProducts,
  search,
  sort,
  onSearchChange,
  onSortChange,
}: CategoryToolbarProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

      {/* Search */}
      <div className="w-full md:max-w-sm">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-600"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">

        <p className="font-medium text-slate-600">
          {totalProducts} Products
        </p>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-xl border p-3 outline-none transition focus:border-blue-600"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Highest Rating</option>
          <option value="name">Name A → Z</option>
        </select>

      </div>

    </div>
  );
}