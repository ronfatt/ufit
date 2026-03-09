"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TabsList({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-2 rounded-full border border-white/10 bg-white/6 p-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-3 text-center text-sm font-semibold transition",
        active
          ? "bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] text-white shadow-[0_0_24px_rgba(124,58,237,0.24)]"
          : "text-white/55",
      )}
    >
      {children}
    </button>
  );
}
