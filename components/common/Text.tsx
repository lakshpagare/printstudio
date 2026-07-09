import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        "leading-7 text-slate-600",
        className
      )}
    >
      {children}
    </p>
  );
}