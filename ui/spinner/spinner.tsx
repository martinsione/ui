import { twMerge as cn } from "tailwind-merge";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Spinner = ({ className, ...rest }: SpinnerProps) => {
  const LENGTH = 12;
  return (
    <div
      className={cn("relative h-5 w-5 text-geist-accents-5", className)}
      {...rest}
    >
      {Array.from({ length: LENGTH }).map((_, i) => (
        <div
          key={i}
          className="absolute left-[38%] top-[46%] h-[8%] w-[24%] animate-loading-spinner rounded bg-geist-accents-5"
          style={{
            transform:
              i === 0
                ? `rotate(0.0001deg) translate(146%)`
                : `rotate(${i * 30}deg) translate(146%)`,
            animationDelay: `-${(LENGTH - i) / 10}s`,
          }}
        />
      ))}
    </div>
  );
};
