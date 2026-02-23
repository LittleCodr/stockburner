import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "yellow" | "gray";
  className?: string;
}

const colors: Record<NonNullable<BadgeProps["color"]>, string> = {
  blue: "bg-primary/10 text-primary",
  yellow: "bg-accent/10 text-accent",
  gray: "bg-white/10 text-text-secondary",
};

function Badge({ children, color = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        colors[color],
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
