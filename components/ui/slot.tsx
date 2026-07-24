import * as React from "react";

// Minimal Slot implementation (subset of @radix-ui/react-slot behavior)
export const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        ...props,
        ...(children as React.ReactElement).props,
        ref,
      });
    }
    return null;
  }
);
Slot.displayName = "Slot";
