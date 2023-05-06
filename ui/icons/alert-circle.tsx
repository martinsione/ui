import type { SVGProps } from "react";

export const AlertCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="24"
    width="24"
    fill="none"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);
