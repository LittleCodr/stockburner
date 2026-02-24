import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Instagram, Send, Youtube } from "lucide-react";

const footerLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/trade.guru9?igsh=ajk4dGNtZjFvajVp&utm_source=qr", label: "Instagram" },
  { icon: Send, href: "https://t.me/optionguruji9", label: "Telegram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

function Footer() {
  return (
    <footer className="relative border-t border-white/6 bg-background-secondary/80 backdrop-blur-xl overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      {/* Background orb */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-96 bg-primary/8 blur-3xl" aria-hidden />

      <div className="container-wide relative px-5 py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-text-secondary max-w-xs">
              Disciplined trading education for serious scalpers. Master the markets with Trade Guru.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Legal</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-primary"
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Connect</p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-secondary transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-glow-sm"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="text-sm text-text-secondary">support@tradeguru.com</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/6 pt-6 text-center">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Trade Guru. All rights reserved. Trading involves substantial risk of loss.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
