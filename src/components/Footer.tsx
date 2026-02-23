import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
];

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background-secondary/60">
      <div className="container-wide flex flex-col items-center gap-4 px-4 py-10 text-center">
        <Logo />
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="transition hover:text-white"
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-text-secondary">Contact: support@stockburner.com</p>
        <p className="text-xs text-text-secondary">© {new Date().getFullYear()} StockBurner. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
