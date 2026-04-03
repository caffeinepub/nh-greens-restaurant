import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const HERO_IMG =
  "/assets/17752187088788724811599210421836-019d534a-34ad-7658-b89f-a9ed1a50fa88.jpg";

const stats = [
  { label: "Rating", value: "4.2★" },
  { label: "Reviews", value: "2,100+" },
  { label: "Per Person", value: "₹200–400" },
  { label: "Open Till", value: "11:45 PM" },
];

export function HeroSection() {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      data-ocid="hero.section"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />
      {/* Gradient overlay - heavy left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,8,5,0.88) 0%, rgba(10,8,5,0.72) 45%, rgba(10,8,5,0.3) 80%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 pt-36">
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20"
              style={{
                backgroundColor: "rgba(47, 91, 58, 0.85)",
                color: "white",
              }}
            >
              <span>🌿</span>
              <span>100% Pure Vegetarian</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
              Authentic Flavours
              <br />
              <span style={{ color: "oklch(var(--brand-gold))" }}>
                of North India
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              Experience the warmth of a traditional dhaba at National Highway
              Greens — where every meal tells a story of Rajasthani heritage.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={scrollToMenu}
                className="px-7 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: "oklch(var(--brand-orange))" }}
                data-ocid="hero.primary_button"
              >
                Explore Our Menu
              </button>
              <a
                href="tel:09413557321"
                className="px-7 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105 border-2 border-white/50 hover:border-white backdrop-blur-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                data-ocid="hero.secondary_button"
              >
                📞 Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10"
        style={{
          backgroundColor: "rgba(10,8,5,0.75)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-bold font-display"
                style={{ color: "oklch(var(--brand-gold))" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>
    </section>
  );
}
