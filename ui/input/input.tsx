import React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge as cn } from "tailwind-merge";
import { Error } from "../error";

export interface InputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "color" | "prefix" | "size"
    >,
    Omit<VariantProps<typeof variants>, "type" | "prefix" | "suffix"> {
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const sizeHeight = { sm: "h-8", md: "h-10", lg: "h-12" };

const variants = cva(
  "peer inline-flex w-full min-w-0 appearance-none rounded border outline-none transition-colors duration-150 ease-linear placeholder:opacity-40 disabled:cursor-not-allowed disabled:border-geist-accents-2 disabled:bg-geist-accents-1 disabled:text-geist-accents-5 disabled:placeholder:text-geist-foreground",
  {
    defaultVariants: {
      color: "base",
      size: "md",
      prefix: false,
      suffix: false,
    },
    variants: {
      color: {
        base: "border-geist-accents-2 bg-geist-background text-geist-foreground placeholder:text-geist-foreground focus-visible:border-geist-accents-5",
        error:
          "border-geist-error bg-geist-background text-geist-error placeholder:text-geist-error",
        warning:
          "border-geist-warning bg-geist-background text-geist-warning placeholder:text-geist-warning",
        success:
          "border-geist-success bg-geist-background text-geist-success placeholder:text-geist-success",
      },
      size: { sm: "", md: "", lg: "" },
      type: { select: "", input: "", textarea: "" },
      prefix: { true: "" },
      suffix: { true: "" },
    },
    compoundVariants: [
      // Type based
      { type: ["input", "select"], className: "px-3" },
      { type: "textarea", className: "px-2.5 py-2 disabled:resize-none" },
      // Size
      {
        type: ["input", "select"],
        size: "sm",
        className: `${sizeHeight.sm} text-sm`,
      },
      {
        type: ["input", "select"],
        size: "md",
        className: `${sizeHeight.md} text-sm`,
      },
      {
        type: ["input", "select"],
        size: "lg",
        className: `${sizeHeight.lg} text-base`,
      },
      { type: "textarea", size: "sm", className: "min-h-[100px] text-sm" },
      { type: "textarea", size: "md", className: "min-h-[100px] text-sm" },
      { type: "textarea", size: "lg", className: "min-h-[100px] text-base" },
      // Prefix and Suffix
      { type: "input", prefix: true, className: "rounded-l-none" },
      { type: "input", suffix: true, className: "rounded-r-none" },
      { type: "select", prefix: true, className: "pl-9" },
      { type: "select", suffix: true, className: "pr-9" },
    ],
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, color, error, prefix, size, suffix, ...rest } = props;

  return (
    <>
      <div
        className={cn(
          "flex max-w-full items-center",
          sizeHeight?.[(size as keyof typeof sizeHeight) ?? "md"]
        )}
      >
        <input
          ref={ref}
          className={cn(
            variants({
              type: "input",
              color,
              size,
              prefix: Boolean(prefix),
              suffix: Boolean(suffix),
            })
          )}
          {...rest}
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

      {error ? <Error>{error}</Error> : null}
    </>
  );
});
Input.displayName = "Input";

export { Input, variants as inputVariants };
