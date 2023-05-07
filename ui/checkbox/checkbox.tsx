"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { twMerge as cn } from "tailwind-merge";
import { Check } from "../icons";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <label
      className={cn(
        "inline-flex cursor-pointer items-start",
        props.disabled
          ? "cursor-not-allowed text-geist-accents-3"
          : "text-geist-foreground"
      )}
    >
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex h-4 min-h-[1rem] w-4 min-w-[1rem] items-center justify-center rounded-[3px] border border-geist-accents-5 outline-none transition-colors duration-150 ease-in hover:border-geist-foreground focus-visible:ring-2 focus-visible:ring-geist-accents-3 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:border-geist-accents-3 disabled:bg-geist-accents-1 data-[state=checked]:border-geist-foreground data-[state=checked]:bg-geist-foreground data-[state=checked]:text-geist-background disabled:data-[state=checked]:border-geist-accents-3 disabled:data-[state=checked]:bg-geist-accents-3",
          className
        )}
        {...rest}
      >
        <CheckboxPrimitive.Indicator>
          <Check className="h-2.5 w-3 stroke-[4]" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {children && <span className="ml-2 text-sm leading-4">{children}</span>}
    </label>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
