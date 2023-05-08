import React from "react";
import { type VariantProps } from "class-variance-authority";
import { twMerge as cn } from "tailwind-merge";
import { inputVariants } from "../input";
import { Error } from "../error";
import { ChevronDown } from "../icons";

export interface SelectProps
  extends Omit<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      "color" | "prefix" | "size"
    >,
    Omit<VariantProps<typeof inputVariants>, "prefix" | "suffix"> {
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      children,
      className,
      color,
      error,
      prefix,
      size,
      suffix = <ChevronDown className="w-[18px]" />,
      ...rest
    } = props;

    return (
      <>
        <div className="relative flex max-w-full items-center">
          <select
            ref={ref}
            className={cn(
              inputVariants({
                type: "select",
                size,
                color,
                prefix: Boolean(prefix),
                suffix: Boolean(suffix),
              })
            )}
            {...rest}
          >
            {props.placeholder && (
              <option
                label={props?.placeholder}
                value={props?.placeholder}
                disabled
                selected
              >
                {props.placeholder}
              </option>
            )}
            {children}
          </select>
          {prefix && (
            <span className="pointer-events-none absolute left-3 inline-flex text-geist-accents-5 transition-colors duration-150 ease-in peer-disabled:text-geist-accents-3">
              {prefix}
            </span>
          )}
          {suffix && (
            <span className="pointer-events-none absolute right-3 inline-flex text-geist-accents-5 transition-colors duration-150 ease-in peer-disabled:text-geist-accents-3">
              {suffix}
            </span>
          )}
        </div>
        {error ? <Error>{error}</Error> : null}
      </>
    );
  }
);
Select.displayName = "Select";

export { Select };
