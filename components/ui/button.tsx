import * as React from "react";
import { Slot } from "./slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-bg font-semibold hover:brightness-110 shadow-[0_0_0_1px_hsl(var(--accent)/0.4),0_8px_24px_-8px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_0_1px_hsl(var(--accent)/0.6),0_10px_30px_-6px_hsl(var(--accent)/0.6)]",
        outline:
          "border border-border bg-transparent text-text hover:border-accent/50 hover:bg-surface",
        ghost: "bg-transparent text-muted hover:text-text hover:bg-surface",
        subtle: "bg-surface text-text border border-border hover:border-accent2/40",
        link: "text-accent2 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
