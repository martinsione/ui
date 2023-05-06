"use client";
import React from "react";
import { twMerge as cn } from "tailwind-merge";

export interface AvatarProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
  size?: number;
  fallback?: string;
}

const Avatar = (props: AvatarProps) => {
  const {
    className,
    fallback,
    size = 60,
    src: originalSrc,
    style,
    ...rest
  } = props;
  const [src, setSrc] = React.useState(originalSrc);
  const ref = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (ref && ref.current) {
      ref.current.onerror = () => {
        setSrc(fallback);
      };
      ref.current.src = props?.src as string;
    }
  }, []);

  return (
    <img
      {...rest}
      src={src}
      ref={ref}
      className={cn(
        "inline-block aspect-square shrink-0 overflow-hidden rounded-full border border-geist-accents-2 align-top leading-[0]",
        className
      )}
      style={{ ...style, width: size, height: size }}
      height={size}
      width={size}
    />
  );
};

export { Avatar };
