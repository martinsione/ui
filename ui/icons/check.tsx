import type { SVGProps } from "react";

export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="24"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
