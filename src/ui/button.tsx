"use client";

import * as React from "react";
import {
  type ButtonProps as ButtonPrimiviteProps,
  Button as ButtonPrimitive,
} from "react-aria-components";
import { type VariantProps, cva, cn } from "@/lib";
import { Spinner } from "./spinner";

const variants = cva(
  "relative m-0 flex max-w-full cursor-pointer select-none items-center justify-center rounded border px-3 py-0 align-baseline font-medium leading-5 outline-none transition-colors duration-150 ease-in focus:ring-offset-1 disabled:cursor-not-allowed  disabled:border-geist-accents-2 disabled:bg-geist-accents-1 disabled:text-geist-accents-3 data-[focus-visible]:ring-2 data-[focus-visible]:ring-geist-success data-[focus-visible]:border-transparent",
  {
    defaultVariants: { variant: "base", size: "md", color: "primary" },
    variants: {
      color: {
        primary: "data-[pressed]:bg-geist-accents-2",
        secondary: "data-[pressed]:bg-geist-accents-2",
        error: "data-[pressed]:bg-geist-accents-2",
        warning: "data-[pressed]:bg-geist-accents-2",
        alert: "data-[pressed]:bg-geist-accents-2",
        violet: "data-[pressed]:bg-geist-accents-2",
      },
      variant: {
        base: "data-[hovered]:bg-transparent",
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
          "border-geist-foreground bg-geist-foreground text-geist-background data-[hovered]:text-geist-foreground data-[focus-visible]:data-[pressed]:text-geist-foreground",
      },
      {
        variant: "base",
        color: "secondary",
        className:
          "border-geist-accents-2 bg-geist-background text-geist-accents-5 data-[hovered]:border-geist-foreground data-[hovered]:text-geist-foreground data-[focus-visible]:data-[pressed]:text-geist-accents-5",
      },
      {
        variant: "base",
        color: "error",
        className:
          "border-geist-error bg-geist-error text-geist-white data-[hovered]:text-geist-error data-[focus-visible]:data-[pressed]:text-geist-error",
      },
      {
        variant: "base",
        color: "warning",
        className:
          "border-geist-warning bg-geist-warning text-geist-white data-[hovered]:text-geist-warning data-[focus-visible]:data-[pressed]:text-geist-warning",
      },
      {
        variant: "base",
        color: "alert",
        className:
          "border-geist-highlight-pink bg-geist-highlight-pink text-geist-white data-[hovered]:text-geist-highlight-pink data-[focus-visible]:data-[pressed]:text-geist-highlight-pink",
      },
      {
        variant: "base",
        color: "violet",
        className:
          "border-geist-violet bg-geist-violet text-geist-white data-[hovered]:text-geist-violet data-[focus-visible]:data-[pressed]:text-geist-violet",
      },
      {
        variant: "ghost",
        color: "primary",
        className:
          "text-geist-foreground data-[hovered]:bg-geist-accents-4 data-[pressed]:bg-geist-accents-4",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "text-geist-accents-5 data-[hovered]:bg-geist-accents-4 data-[pressed]:bg-geist-accents-4",
      },
      {
        variant: "ghost",
        color: "error",
        className:
          "text-geist-error data-[hovered]:bg-geist-error data-[pressed]:bg-geist-error",
      },
      {
        variant: "ghost",
        color: "warning",
        className:
          "text-geist-warning data-[hovered]:bg-geist-warning data-[pressed]:bg-geist-warning",
      },
      {
        variant: "ghost",
        color: "alert",
        className:
          "text-geist-highlight-pink data-[hovered]:bg-geist-highlight-pink data-[pressed]:bg-geist-highlight-pink",
      },
      {
        variant: "ghost",
        color: "violet",
        className:
          "text-geist-violet data-[hovered]:bg-geist-violet data-[pressed]:bg-geist-violet",
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

interface ButtonProps
  extends ButtonPrimiviteProps,
    VariantProps<typeof variants> {
  children?: React.ReactNode;
  isLoading?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Button = React.forwardRef<
  React.ElementRef<typeof ButtonPrimitive>,
  ButtonProps
>((props, ref) => {
  const {
    children,
    className,
    color,
    isDisabled,
    isLoading,
    prefix,
    shape,
    size,
    suffix,
    variant,
    ...rest
  } = props;

  return (
    <ButtonPrimitive
      className={cn(variants({ className, color, size, variant, shape }))}
      isDisabled={isLoading || isDisabled}
      ref={ref}
      {...rest}
    >
      {(prefix || isLoading) && (
        <span className="mr-2">
          {isLoading ? (
            <Spinner className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
          ) : (
            prefix
          )}
        </span>
      )}
      <span className="inline-block truncate">{children}</span>
      {suffix && <span className="ml-2">{suffix}</span>}
    </ButtonPrimitive>
  );
});
Button.displayName = "Button";

export { Button, type ButtonProps };
