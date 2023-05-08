import React from "react";
import { twMerge as cn } from "tailwind-merge";
import { VariantProps, cva } from "class-variance-authority";
import { Spinner } from "../spinner";

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "prefix" | "color"
    >,
    VariantProps<typeof variants> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
}

const variants = cva(
  "relative m-0 flex max-w-full cursor-pointer select-none items-center justify-center rounded border px-3 py-0 align-baseline font-medium leading-5 outline-none transition-colors duration-150 ease-in focus:ring-offset-1 focus-visible:ring-2 disabled:cursor-not-allowed  disabled:border-geist-accents-2 disabled:bg-geist-accents-1 disabled:text-geist-accents-3",
  {
    defaultVariants: { variant: "base", size: "md", color: "primary" },
    variants: {
      color: {
        primary:
          "focus-visible:ring-geist-foreground active:bg-geist-accents-2",
        secondary:
          "focus-visible:ring-geist-accents-5 active:bg-geist-accents-2",
        error: "focus-visible:ring-geist-error active:bg-geist-accents-2",
        warning: "focus-visible:ring-geist-warning active:bg-geist-accents-2",
        alert:
          "focus-visible:ring-geist-highlight-pink active:bg-geist-accents-2",
        violet: "focus-visible:ring-geist-violet active:bg-geist-accents-2",
      },
      variant: {
        base: "hover:bg-transparent focus-visible:active:ring-0",
        ghost:
          "border-transparent bg-[linear-gradient(to_right,var(--lighten-color),var(--lighten-color))]",
      },
      size: {
        sm: "h-8 text-sm",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
      shape: {
        circle: "rounded-full",
        square: "",
      },
    },
    compoundVariants: [
      {
        variant: "base",
        color: "primary",
        className:
          "border-geist-foreground bg-geist-foreground text-geist-background hover:text-geist-foreground focus-visible:active:text-geist-foreground",
      },
      {
        variant: "base",
        color: "secondary",
        className:
          "border-geist-accents-2 bg-geist-background text-geist-accents-5 hover:border-geist-foreground hover:text-geist-foreground focus-visible:active:text-geist-accents-5",
      },
      {
        variant: "base",
        color: "error",
        className:
          "border-geist-error bg-geist-error text-geist-background hover:text-geist-error focus-visible:active:text-geist-error",
      },
      {
        variant: "base",
        color: "warning",
        className:
          "border-geist-warning bg-geist-warning text-geist-background hover:text-geist-warning focus-visible:active:text-geist-warning",
      },
      {
        variant: "base",
        color: "alert",
        className:
          "border-geist-highlight-pink bg-geist-highlight-pink text-geist-background hover:text-geist-highlight-pink focus-visible:active:text-geist-highlight-pink",
      },
      {
        variant: "base",
        color: "violet",
        className:
          "border-geist-violet bg-geist-violet text-geist-background hover:text-geist-violet focus-visible:active:text-geist-violet",
      },
      {
        variant: "ghost",
        color: "primary",
        className:
          "text-geist-foreground hover:bg-geist-accents-4 active:bg-geist-accents-4",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "text-geist-accents-5 hover:bg-geist-accents-4 active:bg-geist-accents-4",
      },
      {
        variant: "ghost",
        color: "error",
        className:
          "text-geist-error hover:bg-geist-error active:bg-geist-error",
      },
      {
        variant: "ghost",
        color: "warning",
        className:
          "text-geist-warning hover:bg-geist-warning active:bg-geist-warning",
      },
      {
        variant: "ghost",
        color: "alert",
        className:
          "text-geist-highlight-pink hover:bg-geist-highlight-pink active:bg-geist-highlight-pink",
      },
      {
        variant: "ghost",
        color: "violet",
        className:
          "text-geist-violet hover:bg-geist-violet active:bg-geist-violet",
      },
      {
        size: "sm",
        shape: ["circle", "square"],
        className: "w-8 p-0",
      },
      {
        size: "md",
        shape: ["circle", "square"],
        className: "w-10 p-0",
      },
      {
        size: "lg",
        shape: ["circle", "square"],
        className: "w-12 p-0",
      },
    ],
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      prefix,
      variant,
      suffix,
      color,
      size,
      shape,
      loading,
      ...rest
    } = props;

    return (
      <button
        className={cn(variants({ color, size, variant, shape }), className)}
        ref={ref}
        disabled={loading}
        {...rest}
      >
        {(prefix || loading) && (
          <span className="mr-2">
            {loading ? (
              <Spinner className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
            ) : (
              prefix
            )}
          </span>
        )}
        <span className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          {children}
        </span>
        {suffix && <span className="ml-2">{suffix}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
