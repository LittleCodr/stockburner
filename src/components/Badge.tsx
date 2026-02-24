import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "yellow" | "gray" | "red";
  className?: string;
}

const colors: Record<NonNullable<BadgeProps["color"]>, string> = {
  blue: "bg-primary/10 text-primary border border-primary/20",
  yellow: "bg-accent/10 text-accent border border-accent/20",
  gray: "bg-white/8 text-text-secondary border border-white/10",
  red: "bg-red-500/10 text-red-400 border border-red-500/20",
};

function Badge({ children, color = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
        colors[color],
        className,
      )}
    >
      {/* Pulse dot */}
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-current" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      {children}
    </span>
  );
}

export default Badge;
