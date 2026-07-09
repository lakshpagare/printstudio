import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="hidden lg:flex items-center rounded-full border bg-white px-4 py-2">
      <Search className="mr-2 h-4 w-4 text-slate-500" />
      <input
        type="text"
        placeholder="Search products..."
        className="w-56 bg-transparent text-sm outline-none"
      />
    </div>
  );
}