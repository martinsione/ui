import type { SVGProps } from "react";
export const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 9l6 6 6-6" />
  </svg>
);
