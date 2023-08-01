import { twMerge } from "tailwind-merge";
export { cva, type VariantProps } from "class-variance-authority";

export function cn(...classes: unknown[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}
