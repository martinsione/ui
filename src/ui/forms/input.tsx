"use client";

import * as React from "react";
import {
  type TextFieldProps as TextFieldPrimitiveProps,
  type InputProps as InputPrimitiveProps,
  Input as InputPrimitive,
  TextField as TextFieldPrimitive,
} from "react-aria-components";
import { type VariantProps, cn } from "@/lib";
import { Label, Error, variants, variantsHeight } from "./helpers";

interface InputProps
  extends TextFieldPrimitiveProps,
    Omit<VariantProps<typeof variants>, "type" | "prefix" | "suffix"> {
  error?: string;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<
  React.ElementRef<typeof TextFieldPrimitive>,
  InputProps
>((props, ref) => {
  const {
    className,
    color,
    error,
    label,
    prefix,
    size,
    suffix,
    ...rest //
  } = props;

  return (
    <TextFieldPrimitive className={cn("", className)} ref={ref} {...rest}>
      {label ? (
        <Label
          data-disabled={props.isDisabled}
          data-required={props.isRequired}
        >
          {label}
        </Label>
      ) : null}
      <div
        className={cn(
          "flex max-w-full items-center",
          variantsHeight[size ?? "md"]
        )}
      >
        <InputPrimitive
          className={cn(
            variants({
              color,
              element: "input",
              size,
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
      {error ? <Error>{error}</Error> : null}
    </TextFieldPrimitive>
  );
});

Input.displayName = "Input";

export { Input, type InputProps };
