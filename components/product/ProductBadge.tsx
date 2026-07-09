interface Props {
  badge?: string;
}

export default function ProductBadge({
  badge,
}: Props) {

  if (!badge) return null;

  return (
    <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
      {badge}
    </span>
  );
}