import * as React from "react";
import { type VariantProps, cva, cn } from "@/lib";

const variants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium capitalize tabular-nums",
  {
    defaultVariants: { color: "gray", size: "md" },
    variants: {
      color: {
        "amber-subtle": "bg-[#fff4d6] text-[#a35200]",
        amber: "bg-[#ffb224] text-geist-black",
        "blue-subtle": "bg-[#ebf5ff] text-[#0068d6]",
        blue: "bg-[#0072f5] text-geist-white",
        "gray-contrast": "",
        "gray-subtle": "bg-[#666666] text-[#ebebeb]",
        gray: "bg-[#8f8f8f] text-geist-white",
        "pink-subtle": "bg-[#fde7f2] text-[#c01b5d]",
        pink: "bg-[#ea3e83] text-geist-white",
        "purple-subtle": "bg-[#f9f1fe] text-[#793bb0]",
        purple: "bg-[#8e4ec6] text-geist-white",
        "red-subtle": "bg-[#ffebeb] text-[#ca2b30]",
        red: "bg-[#e5484d] text-geist-white",
        trial: "bg-[linear-gradient(135deg,#0070f3,#f81ce5)] text-geist-white",
        turbo: "bg-[linear-gradient(135deg,#d74a41,#407aeb)] text-geist-white",
      },
      size: {
        sm: "h-4 px-1.5 text-xs",
        md: "h-5 px-2 text-xs",
        lg: "h-6 px-2.5 text-sm leading-4",
      },
    },
  }
);

interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof variants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { className, color, size, ...rest } = props;
  return (
    <span
      className={cn(variants({ className, color, size }))}
      ref={ref}
      {...rest}
    />
  );
});
Badge.displayName = "Badge";

export { Badge, type BadgeProps };
