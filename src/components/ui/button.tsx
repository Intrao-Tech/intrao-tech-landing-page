import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl text-base font-semibold uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        primary: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        "outline-dark": "border border-dark-muted text-dark-foreground hover:text-dark",
        "outline-light": "border border-border text-foreground hover:text-background",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        tab: "bg-transparent text-muted-foreground hover:text-foreground data-[active=true]:bg-dark data-[active=true]:text-dark-foreground",
        "icon-circle": "rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary",
      },
      size: {
        default: "h-[70px] px-10 py-5",
        sm: "h-[60px] px-8 py-4",
        lg: "h-20 px-12 py-6",
        xl: "h-[90px] px-14 py-8",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Map variants to circle hover classes
const circleHoverClasses: Record<string, string> = {
  default: "btn-circle-hover btn-circle-primary",
  primary: "btn-circle-hover btn-circle-primary",
  "outline-dark": "btn-circle-hover btn-circle-outline-dark",
  "outline-light": "btn-circle-hover btn-circle-outline-light",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const circleClass = variant ? circleHoverClasses[variant] : circleHoverClasses.default;
    return <Comp className={cn(buttonVariants({ variant, size }), circleClass, className)} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
