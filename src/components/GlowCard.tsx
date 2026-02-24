import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "../utils/cn";

interface GlowCardProps extends PropsWithChildren {
  title?: string;
  icon?: ReactNode;
  className?: string;
  subtitle?: string;
  neon?: boolean;
}

function GlowCard({ title, subtitle, icon, className, children, neon = false }: GlowCardProps) {
  return (
    <div
      className={cn(
        "glow-hover glass-surface group relative overflow-hidden rounded-card border border-white/8 bg-background-card/80 p-6 shadow-card backdrop-blur transition-all duration-300",
        neon ? "hover:border-primary/40 hover:shadow-neon" : "hover:border-white/15",
        className,
      )}
    >
      {/* Holographic background shimmer */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 holographic" aria-hidden />

      {/* Top edge gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />

      {/* Corner accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/8 via-transparent to-transparent rounded-bl-full" aria-hidden />

      {/* Bottom glow accent on hover */}
      <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

      <div className="relative z-10">
        {icon && (
          <div className="mb-4 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary border border-primary/20 ring-1 ring-primary/10">
            {icon}
          </div>
        )}
        {title && <h3 className="text-xl font-bold text-white">{title}</h3>}
        {subtitle && <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}

export default GlowCard;
