const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    initials: "RK",
    rating: 5,
    quote:
      "Hands down the best dhaba experience on the highway. The Dal Makhni and Garlic Naan are absolutely divine. Every bite felt like home-cooked perfection. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    location: "Jaipur",
    initials: "PS",
    rating: 5,
    quote:
      "Visited during our road trip and were blown away. The garden seating under the open sky, the fireplace in winter — truly magical atmosphere paired with delicious food.",
  },
  {
    name: "Vikram Singh",
    location: "Chandigarh",
    initials: "VS",
    rating: 5,
    quote:
      "Pure vegetarian with such an incredible variety is rare to find. The Sangri Special and Sev Bhaji are authentic Rajasthani flavors you simply won't find anywhere else.",
  },
  {
    name: "Anita Gupta",
    location: "Bikaner",
    initials: "AG",
    rating: 5,
    quote:
      "Affordable prices, generous portions, and the staff is very welcoming. The Paneer Tikka is outstanding. Our family's go-to stop on every trip to Sri Ganganagar!",
  },
];

const STAR_POSITIONS = [0, 1, 2, 3, 4];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_POSITIONS.map((i) => (
        <span
          key={i}
          className="text-base"
          style={{
            color:
              i < count ? "oklch(var(--brand-orange))" : "oklch(var(--border))",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "white" }}
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "oklch(var(--brand-orange))" }}
          >
            Happy Guests
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mt-2"
            style={{ color: "oklch(var(--brand-espresso))" }}
          >
            What Our Guests Say
          </h2>
          <p
            className="mt-3 text-base"
            style={{ color: "oklch(var(--brand-body))" }}
          >
            Rated 4.2 ★ by 2,100+ guests on Google
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(idx % 4) * 100} flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-card-hover`}
              style={{
                backgroundColor: "oklch(var(--brand-cream))",
                border: "1px solid oklch(var(--brand-gold) / 0.5)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
              }}
              data-ocid={`testimonials.item.${idx + 1}`}
            >
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "oklch(var(--brand-green))" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "oklch(var(--brand-espresso))" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(var(--brand-body))" }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>

              <StarRating count={t.rating} />

              <p
                className="text-sm leading-relaxed mt-3 flex-1"
                style={{ color: "oklch(var(--brand-body))" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Google badge */}
        <div className="flex justify-center mt-10 reveal">
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full shadow-card"
            style={{
              backgroundColor: "oklch(var(--brand-cream))",
              border: "1px solid oklch(var(--brand-gold) / 0.5)",
            }}
          >
            <span className="text-xl">⭐</span>
            <span
              className="font-semibold"
              style={{ color: "oklch(var(--brand-espresso))" }}
            >
              4.2 on Google
            </span>
            <span style={{ color: "oklch(var(--brand-body))" }}>·</span>
            <span
              className="text-sm"
              style={{ color: "oklch(var(--brand-body))" }}
            >
              2,100+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
