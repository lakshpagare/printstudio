import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl font-bold text-blue-600">
        PrintStudio
      </span>
    </Link>
  );
}