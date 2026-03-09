import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "sm" | "lg";

const variantClasses: Record<Variant, string> = {
  default:
    "bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] text-white hover:scale-[1.02]",
  outline:
    "border border-white/14 bg-white/6 text-white hover:bg-white/10",
  ghost: "bg-transparent text-white/70 hover:bg-white/8 hover:text-white",
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
