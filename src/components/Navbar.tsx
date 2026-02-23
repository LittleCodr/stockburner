import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
        "fixed inset-x-0 top-0 z-30 border-b border-white/5 backdrop-blur",
        scrolled ? "bg-background-primary/80" : "bg-background-primary/30",
      )}
    >
      <div className="container-wide flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="StockBurner home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-sm font-semibold text-text-secondary transition hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" variant="primary">Login</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="border-t border-white/5 bg-background-secondary/80 px-4 pb-4 pt-2 backdrop-blur">
            {links.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="block w-full rounded-btn px-3 py-3 text-left text-base font-semibold text-white hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <Button className="mt-3 w-full" variant="primary">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
