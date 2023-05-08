import { twMerge as cn } from "tailwind-merge";
import { AlertCircle } from "../icons";

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string | boolean;
  size?: "sm" | "md" | "lg";
}

const Error = (props: ErrorProps) => {
  const { children, label = "Error", size = "md", className, ...rest } = props;
  return (
    <div
      className={cn(
        "mt-2 flex text-geist-error",
        size === "sm" && "text-sm leading-4",
        size === "md" && "text-sm",
        size === "lg" && "text-base",
        className
      )}
      {...rest}
    >
      <div aria-hidden={true}>
        <AlertCircle
          className={cn(
            "align-bottom",
            size === "sm" && "h-4 w-4",
            size === "md" && "h-5 w-5",
            size === "lg" && "h-6 w-6"
          )}
          strokeWidth={2}
        />
      </div>
      <div className="ml-2">
        {label && <b className="mr-1">{label}: </b>}
        <span
          aria-hidden={true}
          className="inline-block h-[1px] min-h-[1px] w-[1px] min-w-[1px] select-none"
        />
        {children}
      </div>
    </div>
  );
};

export { Error };
