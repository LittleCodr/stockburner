import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const baseStyles =
  "button-cta inline-flex items-center justify-center font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary";

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-2 text-sm rounded-btn",
  md: "px-4 py-2.5 text-sm rounded-btn",
  lg: "px-5 py-3 text-base rounded-btn",
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-white hover:brightness-110 shadow-glow",
  secondary: "bg-background-card text-white hover:shadow-glow border border-white/10",
  ghost: "bg-transparent text-white border border-white/20 hover:border-primary hover:text-primary",
};

function Button({ children, variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
