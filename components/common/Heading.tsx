import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}