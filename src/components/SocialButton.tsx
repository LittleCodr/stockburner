import type { LucideIcon } from "lucide-react";
import { cn } from "../utils/cn";

interface SocialButtonProps {
  label: string;
  icon: LucideIcon;
  href: string;
}

function SocialButton({ label, icon: IconComponent, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "glow-hover inline-flex items-center gap-2 rounded-btn bg-primary/10 px-4 py-2 text-sm font-semibold text-white",
        "hover:bg-primary/20",
      )}
      aria-label={label}
    >
      <IconComponent size={18} />
      {label}
    </a>
  );
}

export default SocialButton;
