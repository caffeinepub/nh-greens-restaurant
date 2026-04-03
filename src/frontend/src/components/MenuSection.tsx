import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { menuCategories } from "../data/menuData";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const pillsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const currentItems =
    menuCategories.find((c) => c.id === activeCategory)?.items ?? [];

  const updateScrollState = useCallback(() => {
    const el = pillsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = pillsRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollPills = (dir: "left" | "right") => {
    pillsRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const pill = pillsRef.current?.querySelector(
      `[data-cat="${id}"]`,
    ) as HTMLElement;
    pill?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <section
      id="menu"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "white" }}
      data-ocid="menu.section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "oklch(var(--brand-orange))" }}
          >
            What We Serve
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mt-2"
            style={{ color: "oklch(var(--brand-espresso))" }}
          >
            Our Menu
          </h2>
          <p
            className="mt-3 text-base"
            style={{ color: "oklch(var(--brand-body))" }}
          >
            Explore 100+ authentic dishes — all 🟢 pure vegetarian
          </p>
        </div>

        {/* Category pills */}
        <div className="relative mb-8 reveal">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollPills("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-card bg-white border border-border"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollPills("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-card bg-white border border-border"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          <div
            ref={pillsRef}
            className="flex gap-2 overflow-x-auto pb-1 px-1"
            style={{ scrollbarWidth: "none" }}
          >
            {menuCategories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                data-cat={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "text-white shadow-md"
                    : "border hover:border-brand-green"
                }`}
                style={{
                  backgroundColor:
                    activeCategory === cat.id
                      ? "oklch(var(--brand-green))"
                      : "white",
                  borderColor:
                    activeCategory === cat.id
                      ? "transparent"
                      : "oklch(var(--brand-gold))",
                  color:
                    activeCategory === cat.id
                      ? "white"
                      : "oklch(var(--brand-espresso))",
                }}
                data-ocid="menu.tab"
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu items grid */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {currentItems.map((item, idx) => (
            <div
              key={item.name}
              className="flex items-center justify-between px-4 py-3 rounded-xl transition-shadow hover:shadow-card"
              style={{
                backgroundColor:
                  idx % 2 === 0 ? "oklch(var(--brand-cream))" : "white",
                border: "1px solid oklch(var(--brand-gold) / 0.4)",
              }}
              data-ocid={`menu.item.${idx + 1}`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xs flex-shrink-0">🟢</span>
                <span
                  className="text-sm font-medium truncate"
                  style={{ color: "oklch(var(--brand-espresso))" }}
                >
                  {item.name}
                </span>
              </div>
              <span
                className="text-sm font-bold ml-3 flex-shrink-0"
                style={{ color: "oklch(var(--brand-orange))" }}
              >
                {item.price ? `₹${item.price}` : "Ask"}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center text-sm mt-8"
          style={{ color: "oklch(var(--brand-body) / 0.7)" }}
        >
          * Prices may vary. Please ask staff for seasonal specials & current
          prices.
        </p>
      </div>
    </section>
  );
}
