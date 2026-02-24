import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const baseStyles =
  "button-cta relative inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary select-none";

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs rounded-btn tracking-wide",
  md: "px-5 py-2.5 text-sm rounded-btn tracking-wide",
  lg: "px-7 py-3.5 text-base rounded-btn tracking-wide",
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_100%] animate-shimmer text-black shadow-glow hover:shadow-glow-lg hover:scale-105 active:scale-95",
  secondary:
    "bg-background-card/60 text-white border border-white/10 hover:border-primary/50 hover:bg-primary/5 hover:shadow-glow-sm backdrop-blur active:scale-95",
  ghost: "bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-primary/5 hover:shadow-glow-sm active:scale-95",
};

function Button({ children, variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {/* Inner shine layer for primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      )}
      <span className="relative">{children}</span>
    </button>
  );
}

export default Button;
