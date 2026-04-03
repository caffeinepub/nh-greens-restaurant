import { Leaf } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "oklch(var(--brand-green))" }}
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-xl">NH Greens</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">
                  Restaurant
                </div>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-xs">
              Authentic North Indian & Rajasthani cuisine, lovingly prepared
              with 100% vegetarian ingredients.
            </p>
            <div
              className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              🌿 100% Pure Vegetarian
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-base mb-5 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-base mb-5 text-white/90">
              Visit Us
            </h4>
            <address className="not-italic space-y-3 text-sm text-white/75">
              <p>
                📍 Hanuman Ji Ki Murthi Road,
                <br />
                Hardeep Colony, Sri Ganganagar,
                <br />
                Rajasthan 335001
              </p>
              <p>
                📞{" "}
                <a
                  href="tel:09413557321"
                  className="hover:text-white transition-colors"
                  data-ocid="footer.link"
                >
                  094135 57321
                </a>
              </p>
              <p>🕐 Open daily · Closes 11:45 PM</p>
              <p>⭐ 4.2 Rating · 2,100+ Reviews</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          <p>© {currentYear} National Highway Greens. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
