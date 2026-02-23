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
        "glow-hover relative overflow-hidden rounded-card border border-white/5 bg-background-card/80 p-6 shadow-card backdrop-blur",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen" aria-hidden>
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0 bg-glass-sheen" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/60 via-white/30 to-accent/60" />
      </div>
      {icon && <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
      {subtitle && <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>}
      {children}
    </div>
  );
}

export default GlowCard;
