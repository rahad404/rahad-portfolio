import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors font-mono tracking-tight",
  {
    variants: {
      variant: {
        default: "border-accent/30 bg-accent/10 text-accent",
        mono: "border-border bg-surface2 text-muted",
        teal: "border-accent2/30 bg-accent2/10 text-accent2",
        outline: "border-border text-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
