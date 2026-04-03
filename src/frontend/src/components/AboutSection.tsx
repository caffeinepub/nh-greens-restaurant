const ABOUT_IMG =
  "/assets/17752186878257757965095668160412-019d534a-351f-75b8-ac5a-e5278f4251cc.jpg";

const highlights = [
  {
    icon: "🌿",
    title: "Pure Veg",
    desc: "100% vegetarian menu, lovingly prepared",
  },
  {
    icon: "🔥",
    title: "Fireplace Seating",
    desc: "Cozy warmth on cool winter evenings",
  },
  {
    icon: "🌳",
    title: "Garden Dining",
    desc: "Open-air garden seating under the stars",
  },
  {
    icon: "⭐",
    title: "4.2 Google Rating",
    desc: "Loved by 2,100+ happy guests",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(var(--brand-cream))" }}
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section label */}
        <div className="text-center mb-14 reveal">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "oklch(var(--brand-orange))" }}
          >
            Our Heritage
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mt-2"
            style={{ color: "oklch(var(--brand-espresso))" }}
          >
            Our Story
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo card */}
          <div className="reveal relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-card"
              style={{
                border: "4px solid oklch(var(--brand-gold))",
                boxShadow:
                  "0 12px 48px rgba(0,0,0,0.15), inset 0 0 0 6px rgba(255,255,255,0.5)",
              }}
            >
              <img
                src={ABOUT_IMG}
                alt="National Highway Greens Restaurant"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              {/* Decorative border overlay */}
              <div
                className="absolute inset-2 rounded-xl pointer-events-none"
                style={{ border: "1px solid oklch(var(--brand-gold) / 0.4)" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-3 sm:right-6 rounded-2xl px-5 py-3 shadow-card text-white"
              style={{ backgroundColor: "oklch(var(--brand-green))" }}
            >
              <div className="text-sm font-semibold">Sri Ganganagar</div>
              <div className="text-xs text-white/70">Rajasthan, India</div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <div className="reveal reveal-delay-100">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "oklch(var(--brand-body))" }}
              >
                Nestled on the National Highway in Sri Ganganagar,{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "oklch(var(--brand-espresso))" }}
                >
                  National Highway Greens
                </strong>{" "}
                has been a beloved landmark for travellers and locals alike. Our
                kitchen is rooted in the rich culinary traditions of Rajasthan,
                bringing you time-honoured recipes passed down through
                generations.
              </p>
            </div>
            <div className="reveal reveal-delay-200">
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(var(--brand-body))" }}
              >
                We take pride in our{" "}
                <strong style={{ color: "oklch(var(--brand-espresso))" }}>
                  100% vegetarian
                </strong>{" "}
                commitment — every dish on our menu is crafted with fresh,
                locally sourced ingredients. From the hearty <em>Dal Makhni</em>{" "}
                simmered overnight to the delicate <em>Sangri Special</em> that
                captures the soul of the desert, our food tells the story of
                Rajasthan on every plate.
              </p>
            </div>
            <div className="reveal reveal-delay-300">
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(var(--brand-body))" }}
              >
                Dine under the open sky in our{" "}
                <strong style={{ color: "oklch(var(--brand-espresso))" }}>
                  lush garden
                </strong>
                , gather around our warm
                <strong style={{ color: "oklch(var(--brand-espresso))" }}>
                  {" "}
                  fireplace
                </strong>{" "}
                in winter, or settle into our comfortable indoor dining hall.
                Whether you're stopping on a road trip or making a special
                visit, we promise an experience that nourishes both body and
                spirit — at prices that feel like home.
              </p>
            </div>

            {/* Highlights row */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className={`flex items-start gap-3 p-4 rounded-xl reveal reveal-delay-${(i + 1) * 100}`}
                  style={{
                    backgroundColor: "oklch(var(--brand-cream))",
                    border: "1px solid oklch(var(--brand-gold) / 0.5)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <span className="text-2xl">{h.icon}</span>
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "oklch(var(--brand-espresso))" }}
                    >
                      {h.title}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(var(--brand-body))" }}
                    >
                      {h.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
