import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { cn } from "../utils/cn";

const links = [
  { label: "Home", href: "hero" },
  { label: "Courses", href: "courses" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNav = (href: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection(href), 80);
    } else {
      scrollToSection(href);
    }
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 transition-all duration-500",
        scrolled
          ? "border-b border-white/8 bg-background-primary/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent",
      )}
    >
      {/* Top neon line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container-wide flex items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-3" aria-label="Trade Guru home">
          <Logo />
        </Link>

        {/* Live indicator */}
        <div className="hidden items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary md:flex">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Live Trading
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="group relative text-sm font-semibold text-text-secondary transition-colors duration-200 hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-white transition-colors">
            <TrendingUp size={14} className="text-primary" />
            Markets
          </button>
          <Button size="sm" variant="primary">Get Started</Button>
        </div>

        <button
          className="md:hidden rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-colors hover:border-primary/30 hover:text-primary"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/8 bg-background-primary/95 backdrop-blur-xl">
          <div className="px-5 pb-5 pt-3 space-y-1">
            {links.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/80 hover:bg-primary/8 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button className="mt-4 w-full" variant="primary">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
