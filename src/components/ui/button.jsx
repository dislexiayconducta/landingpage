import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-2xl font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        primary:
          "bg-neutral-b800 text-background-secondary-foreground after:absolute rounded-[2px] text-xl hover:text-neutral-b800 hover:bg-transparent hover:border-neutral-b800 hover:border-[1px] hover:border-solid box-border border-[1px] border-transparent",
        secondary:
          "text-background-secondary-foreground font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
        ternary:
          "bg-neutral-b0 text-neutral-b800 relative after:absolute rounded-[2px] text-xl hover:text-neutral-b0 hover:bg-transparent hover:border-neutral-b0 hover:border-[1px] hover:border-solid box-border border-[1px] border-transparent",
        ghost:
          "hover:text-background-secondary-foreground text-background-secondary-foreground/80",
        link: "text-foreground font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
        optionHeader: "text-background-secondary-foreground font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
        optionFooter: "text-background-secondary-foreground font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-xl",
      },
      size: {
        default: "h-9 px-0 py-2 has-[>svg]:px-0",
        sm: "h-7 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        option: "h-9 px-0 py-2 has-[>svg]:px-0",
        optionSm: "h-8 px-0 py-2 has-[>svg]:px-0",
        icon: "size-9 [&_svg:not([class*='size-'])]:size-7",
        cta: "h-9 px-2.5 py-6 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
