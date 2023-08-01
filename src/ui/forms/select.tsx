"use client";

import * as React from "react";
import {
  Button as ButtonPrimitive,
  Item as ItemPrimitive,
  ListBox as ListBoxPrimitive,
  Popover as PopoverPrimitive,
  Select as SelectPrimitive,
  SelectValue as SelectValuePrimitive,
  //
  ComboBox as ComboBoxPrimitive,
  Input as InputPrimitive,
} from "react-aria-components";
import { type VariantProps, cn } from "@/lib";
import { ChevronDown } from "@/ui/icons";
import { Error, Label, variants, variantsHeight } from "./helpers";

interface SelectProps
  extends React.ComponentProps<typeof SelectPrimitive>,
    Omit<VariantProps<typeof variants>, "type" | "prefix" | "suffix"> {
  isSearchable?: string;
  error?: string;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive>,
  SelectProps
>((props, ref) => {
  const {
    color,
    className,
    error,
    label,
    prefix,
    size,
    suffix = <ChevronDown className="w-[18px]" />,
    children,
    isSearchable,
    ...rest //
  } = props;

  const SelectComp = isSearchable ? ComboBoxPrimitive : SelectPrimitive;

  return (
    <SelectComp ref={ref} {...rest} className={cn("relative", className)}>
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
        {isSearchable ? (
          <InputPrimitive
            className={variants({
              className:
                "[&>input]:data-[focus-visible]:ring-2 [&>input]:data-[focus-visible]:ring-geist-success",
              color,
              element: "select",
              size,
              prefix: Boolean(prefix),
              suffix: Boolean(suffix),
            })}
          />
        ) : (
          <ButtonPrimitive
            className={variants({
              className:
                "[&>input]:data-[focus-visible]:ring-2 [&>input]:data-[focus-visible]:ring-geist-success",
              color,
              element: "select",
              size,
              prefix: Boolean(prefix),
              suffix: Boolean(suffix),
            })}
          >
            <SelectValuePrimitive />
          </ButtonPrimitive>
        )}

        {prefix && (
          <span className="pointer-events-none absolute left-3 z-[2] inline-flex text-geist-accents-5 transition-colors duration-150 ease-in peer-disabled:text-geist-accents-3">
            {prefix}
          </span>
        )}

        {suffix && isSearchable ? (
          <ButtonPrimitive className="absolute right-3 z-[2] inline-flex text-geist-accents-5 transition-colors duration-150 ease-in peer-disabled:text-geist-accents-3">
            {suffix}
          </ButtonPrimitive>
        ) : (
          <span className="pointer-events-none absolute right-3 z-[2] inline-flex text-geist-accents-5 transition-colors duration-150 ease-in peer-disabled:text-geist-accents-3">
            {suffix}
          </span>
        )}
      </div>
      {error ? <Error>{error}</Error> : null}
      <PopoverPrimitive className="w-[var(--trigger-width)] rounded border border-geist-accents-2 bg-geist-background p-1 shadow-md">
        <ListBoxPrimitive className="rounded data-[focused]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-geist-success">
          {children}
        </ListBoxPrimitive>
      </PopoverPrimitive>
    </SelectComp>
  );
});
Select.displayName = "Select";

interface SelectItemProps extends React.ComponentProps<typeof ItemPrimitive> {}
const SelectItem = React.forwardRef<
  React.ElementRef<typeof ItemPrimitive>,
  SelectItemProps
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <ItemPrimitive
      ref={ref}
      className={cn(
        "rounded px-3 py-2 text-sm text-geist-accents-5 data-[hovered]:bg-geist-accents-2 data-[hovered]:text-geist-foreground data-[focused]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-geist-success",
        className
      )}
      {...rest}
    />
  );
});
SelectItem.displayName = "SelectItem";

export { Select, SelectItem, type SelectProps, type SelectItemProps };
