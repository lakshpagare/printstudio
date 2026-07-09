import * as React from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppButtonProps
  extends React.ComponentProps<typeof Button> {
  loading?: boolean;
}

export default function AppButton({
  children,
  loading,
  className,
  disabled,
  ...props
}: AppButtonProps) {
  return (
    <Button
      className={cn(className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}

      {children}
    </Button>
  );
}