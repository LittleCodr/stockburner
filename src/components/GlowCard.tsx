import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "../utils/cn";

interface GlowCardProps extends PropsWithChildren {
  title?: string;
  icon?: ReactNode;
  className?: string;
  subtitle?: string;
}

function GlowCard({ title, subtitle, icon, className, children }: GlowCardProps) {
  return (
    <div
      className={cn(
        "glow-hover relative overflow-hidden rounded-card border border-white/5 bg-background-card/70 p-6 shadow-card backdrop-blur",
        className,
      )}
    >
      {icon && <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      {subtitle && <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>}
      {children}
    </div>
  );
}

export default GlowCard;
