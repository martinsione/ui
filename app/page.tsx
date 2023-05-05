import { VariantProps } from "class-variance-authority";
import { Button, ButtonProps } from "@/ui";

const Variants = {
  color: ["primary", "secondary", "error", "warning", "alert", "violet"],
  shape: ["square", "circle"],
  size: ["small", "medium", "large"],
  variant: ["ghost", "solid"],
} as const;

const Arrow = () => {
  return (
    <svg
      fill="none"
      height="20"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </svg>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-20">
      <div className="flex items-center gap-8">
        {Variants.size.map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <Button size={size}>Upload</Button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-8">
        {Variants.color.map((color) => (
          <div key={color} className="flex flex-col items-center gap-2">
            <Button color={color}>Upload</Button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-8">
        {Variants.color.map((color) => (
          <div key={color} className="flex flex-col items-center gap-2">
            <Button color={color} variant="ghost">
              Upload
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-8">
        {Variants.shape.map((shape) => (
          <div key={shape} className="flex flex-col items-center gap-2">
            <Button shape={shape}>
              <Arrow />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Button prefix={<Arrow />}>Upload</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button suffix={<Arrow />}>Upload</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button prefix={<Arrow />} suffix={<Arrow />}>
            Upload
          </Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button disabled>Upload</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button loading>Upload</Button>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Button disabled>Upload</Button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button loading>Upload</Button>
        </div>
      </div>
    </main>
  );
}
