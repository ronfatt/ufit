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
  return <div className={cn("grid grid-cols-2 gap-2 rounded-full bg-slate-100 p-1", className)}>{children}</div>;
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
        active ? "bg-white text-slate-950 shadow-sm" : "text-slate-500",
      )}
    >
      {children}
    </button>
  );
}
