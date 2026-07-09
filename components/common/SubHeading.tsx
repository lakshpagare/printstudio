import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SubHeadingProps {
  children: ReactNode;
  className?: string;
}

export default function SubHeading({
  children,
  className,
}: SubHeadingProps) {
  return (
    <h2
      className={cn(
        "mt-4 text-lg text-slate-600 sm:text-xl",
        className
      )}
    >
      {children}
    </h2>
  );
}