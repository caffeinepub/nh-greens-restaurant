import { Leaf, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
      data-ocid="navbar.section"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo — use button to avoid invalid anchor lint */}
        <button
          type="button"
          className="flex items-center gap-2 group"
          onClick={() => handleNavClick("#home")}
          data-ocid="navbar.link"
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "oklch(var(--brand-green))" }}
          >
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="font-display font-bold text-lg leading-none"
              style={{
                color: scrolled ? "oklch(var(--brand-green))" : "white",
              }}
            >
              NH Greens
            </span>
            <span
              className="text-[10px] uppercase tracking-widest leading-none"
              style={{
                color: scrolled
                  ? "oklch(var(--brand-body))"
                  : "rgba(255,255,255,0.7)",
              }}
            >
              Restaurant
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-brand-green ${
                  scrolled ? "text-brand-body" : "text-white/90"
                }`}
                data-ocid="navbar.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:09413557321"
          className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-transform hover:scale-105"
          style={{ backgroundColor: "oklch(var(--brand-orange))" }}
          data-ocid="navbar.primary_button"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-brand-espresso" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="navbar.toggle"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
            data-ocid="navbar.panel"
          >
            <ul className="flex flex-col py-3 px-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left py-3 px-2 text-base font-medium text-brand-espresso hover:text-brand-green border-b border-border/50 last:border-0 transition-colors"
                    data-ocid="navbar.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="tel:09413557321"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-white font-semibold"
                  style={{ backgroundColor: "oklch(var(--brand-orange))" }}
                  data-ocid="navbar.primary_button"
                >
                  <Phone className="w-4 h-4" />
                  Call Now — 094135 57321
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
