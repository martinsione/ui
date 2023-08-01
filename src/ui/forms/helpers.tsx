"use client";

import * as React from "react";
import {
  Label as LabelPrimitive,
  LabelProps as LabelPrimitiveProps,
} from "react-aria-components";
import { cn, cva } from "@/lib";
import { AlertCircle } from "@/ui/icons";

const variantsHeight = { sm: "h-8", md: "h-10", lg: "h-12" };
const variants = cva(
  "relative peer inline-flex w-full min-w-0 appearance-none rounded border outline-none transition-colors duration-150 ease-linear placeholder:opacity-40 disabled:cursor-not-allowed disabled:border-geist-accents-2 disabled:bg-geist-accents-1 disabled:text-geist-accents-5 disabled:placeholder:text-geist-foreground data-[focus-visible]:ring-2 data-[focus-visible]:ring-geist-success data-[focus-visible]:border-transparent z-[1] items-center",
  {
    defaultVariants: {
      color: "base",
      size: "md",
      prefix: false,
      suffix: false,
    },
    variants: {
      color: {
        base: "border-geist-accents-2 bg-geist-background text-geist-foreground placeholder:text-geist-foreground focus:border-geist-accents-5",
        error:
          "border-geist-error bg-geist-background text-geist-error placeholder:text-geist-error",
        warning:
          "border-geist-warning bg-geist-background text-geist-warning placeholder:text-geist-warning",
        success:
          "border-geist-success bg-geist-background text-geist-success placeholder:text-geist-success",
      },
      size: { sm: "", md: "", lg: "" },
      element: { select: "", input: "", textarea: "" },
      prefix: { true: "" },
      suffix: { true: "" },
    },
    compoundVariants: [
      // Type based
      { element: ["input", "select"], className: "px-3" },
      { element: "textarea", className: "px-2.5 py-2 disabled:resize-none" },
      // Size
      {
        element: ["input", "select"],
        size: "sm",
        className: `${variantsHeight.sm} text-sm`,
      },
      {
        element: ["input", "select"],
        size: "md",
        className: `${variantsHeight.md} text-sm`,
      },
      {
        element: ["input", "select"],
        size: "lg",
        className: `${variantsHeight.lg} text-base`,
      },
      { element: "textarea", size: "sm", className: "min-h-[100px] text-sm" },
      { element: "textarea", size: "md", className: "min-h-[100px] text-sm" },
      { element: "textarea", size: "lg", className: "min-h-[100px] text-base" },
      // Prefix and Suffix
      { element: "input", prefix: true, className: "rounded-l-none" },
      { element: "input", suffix: true, className: "rounded-r-none" },
      { element: "select", prefix: true, className: "pl-9" },
      { element: "select", suffix: true, className: "pr-9" },
    ],
  }
);

interface LabelProps extends LabelPrimitiveProps {}
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive>,
  LabelProps
>((props, ref) => {
  const { className } = props;
  return (
    <LabelPrimitive
      className={cn(
        "text-accents-4 mb-1.5 block max-w-full cursor-text select-none text-xs font-medium capitalize data-[required]:after:ml-0.5 data-[required]:after:text-geist-error data-[required]:after:content-['*']",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Label.displayName = "Label";

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string | boolean;
  size?: "sm" | "md" | "lg";
}
const Error = React.forwardRef<HTMLDivElement, ErrorProps>((props, ref) => {
  const { children, label = "Error", size = "md", className, ...rest } = props;
  return (
    <div
      className={cn(
        "mt-2 flex text-geist-error",
        size === "sm" && "text-sm leading-4",
        size === "md" && "text-sm",
        size === "lg" && "text-base",
        className
      )}
      ref={ref}
      {...rest}
    >
      <div aria-hidden={true}>
        <AlertCircle
          className={cn(
            "align-bottom",
            size === "sm" && "h-4 w-4",
            size === "md" && "h-5 w-5",
            size === "lg" && "h-6 w-6"
          )}
          strokeWidth={2}
        />
      </div>
      <div className="ml-2">
        {label && <b className="mr-1">{label}: </b>}
        <span
          aria-hidden={true}
          className="inline-block h-[1px] min-h-[1px] w-[1px] min-w-[1px] select-none"
        />
        {children}
      </div>
    </div>
  );
});
Error.displayName = "Error";

export { Error, Label, variants, variantsHeight };
