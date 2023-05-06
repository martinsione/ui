import { VariantProps } from "class-variance-authority";
import { Badge, Button, ButtonProps } from "@/ui";

const Variants = {
  color: ["primary", "secondary", "error", "warning", "alert", "violet"],
  shape: ["square", "circle"],
  size: ["sm", "md", "lg"],
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
      <div className="flex max-w-xl flex-wrap gap-x-8 gap-y-4">
        {(
          [
            "amber-subtle",
            "amber",
            "blue-subtle",
            "blue",
            "gray-contrast",
            "gray-subtle",
            "gray",
            "pink-subtle",
            "pink",
            "purple-subtle",
            "purple",
            "red-subtle",
            "red",
            "trial",
            "turbo",
          ] as const
        ).map((color) => (
          <Badge key={color} variant={color}>
            Badge
          </Badge>
        ))}
      </div>

      <div className="flex max-w-xl flex-wrap gap-x-8 gap-y-4 text-sm leading-4">
        {(["sm", "md", "lg"] as const).map((size) => (
          <Badge key={size} size={size}>
            Badge
          </Badge>
        ))}
      </div>
    </main>
  );
}
