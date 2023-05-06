import React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge as cn } from "tailwind-merge";
import { AlertCircle } from "../icons";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "size">,
    Omit<VariantProps<typeof variants>, "prefix" | "suffix"> {
  error?: string;
  prefix?: React.ReactNode;
  prefixStyling?: boolean;
  suffix?: React.ReactNode;
  suffixStyling?: boolean;
}

const inputSize = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-3 text-base",
} as const;

const variants = cva(
  "peer inline-flex w-full min-w-0 appearance-none rounded border outline-none  transition-colors duration-150 ease-linear placeholder:opacity-40",
  {
    defaultVariants: {
      size: "md",
      variant: "base",
      prefix: false,
      suffix: false,
    },
    variants: {
      size: inputSize,
      variant: {
        base: "border-geist-accents-2 bg-geist-background text-geist-foreground placeholder:text-geist-foreground focus-visible:border-geist-accents-5 disabled:cursor-not-allowed disabled:border-geist-accents-2 disabled:bg-geist-accents-1 disabled:text-geist-accents-5",
        error:
          "border-geist-error text-geist-error placeholder:text-geist-error",
        warning:
          "border-geist-warning text-geist-warning placeholder:text-geist-warning",
        success:
          "border-geist-success text-geist-success placeholder:text-geist-success",
      },
      prefix: { true: "rounded-l-none" },
      suffix: { true: "rounded-r-none" },
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    error,
    prefix,
    prefixStyling = true,
    size,
    suffix,
    suffixStyling = true,
    variant,
    ...rest
  } = props;
  return (
    <>
      <div
        className={cn(
          inputSize?.[(size as keyof typeof size) ?? "md"],
          "flex max-w-full items-center"
        )}
      >
        <input
          {...rest}
          className={cn(
            variants({
              size,
              variant,
              prefix: Boolean(prefix),
              suffix: Boolean(suffix),
            })
          )}
        />
        {prefix && (
          <span className="relative order-first flex h-[inherit] shrink-0 items-center rounded-l border border-r-0 border-geist-accents-2 bg-geist-accents-1 px-3 text-geist-accents-4 transition-colors duration-150 ease-in">
            {prefix}
          </span>
        )}
        {suffix && (
          <span className="relative order-last flex h-[inherit] shrink-0 items-center rounded-r border border-l-0 border-geist-accents-2 bg-geist-accents-1 px-3 text-geist-accents-4 transition-colors duration-150 ease-in">
            {suffix}
          </span>
        )}
      </div>

      {error ? (
        <div
          className={cn(
            "mt-2 flex text-geist-error",
            size === "lg" ? "text-base" : "text-sm"
          )}
        >
          <div aria-hidden={true}>
            <AlertCircle className="h-5 w-5 align-bottom" strokeWidth={2} />
          </div>
          <div className="ml-2">
            <b>Error: </b>
            <span
              aria-hidden={true}
              className="ml-[4px] inline-block h-[1px] min-h-[1px] w-[1px] min-w-[1px] select-none"
            />
            {error}
          </div>
        </div>
      ) : null}
    </>
  );
});
Input.displayName = "Input";

export { Input };
