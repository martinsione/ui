import React from "react";
import { type VariantProps } from "class-variance-authority";
import { twMerge as cn } from "tailwind-merge";
import { inputVariants } from "../input";
import { Error } from "../error";

export interface TextareaProps
  extends Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      "color" | "size"
    >,
    Omit<VariantProps<typeof inputVariants>, "type" | "prefix" | "suffix"> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className, color, error, size, ...rest } = props;

    return (
      <>
        <div>
          <textarea
            ref={ref}
            className={cn(inputVariants({ type: "textarea", color, size }))}
            {...rest}
          />
        </div>
        {error ? <Error>{error}</Error> : null}
      </>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
