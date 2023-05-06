import type { SVGProps } from "react";

export const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="24"
    shape-rendering="geometricPrecision"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
  </svg>
);
