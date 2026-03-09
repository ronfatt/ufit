import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "sm" | "lg";

const variantClasses: Record<Variant, string> = {
  default: "bg-slate-950 text-white hover:bg-slate-800",
  outline:
    "border border-slate-300 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700",
  ghost: "bg-transparent text-slate-600 hover:bg-sky-50 hover:text-sky-700",
};

const sizeClasses: Record<Size, string> = {
  default: "px-5 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-sm",
};

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
