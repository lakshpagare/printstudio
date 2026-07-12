import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  reviews: number;
}

export default function ProductRating({
  rating,
  reviews,
}: ProductRatingProps) {
  return (
    <div className="mt-4 flex items-center gap-3">
      <div className="flex items-center gap-1">
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

        <span className="font-semibold">
          {rating}
        </span>
      </div>

      <span className="text-slate-500">
        ({reviews} Reviews)
      </span>
    </div>
  );
}