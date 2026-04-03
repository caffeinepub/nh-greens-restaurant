import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { Navbar } from "./components/Navbar";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { useScrollReveal } from "./hooks/useScrollReveal";

// SEO meta
function useMeta() {
  useEffect(() => {
    document.title =
      "National Highway Greens | Authentic North Indian Dhaba — Sri Ganganagar";
    const setMeta = (name: string, content: string, property = false) => {
      let el = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (property) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Veg-only North Indian & Rajasthani dhaba in Sri Ganganagar. 100+ dishes including Dal Makhni, Paneer Tikka, Sangri Special & more. Open till 11:45 PM. Rated 4.2 ★ on Google.",
    );
    setMeta(
      "og:title",
      "National Highway Greens | Authentic North Indian Dhaba",
      true,
    );
    setMeta(
      "og:description",
      "Pure vegetarian North Indian cuisine in Sri Ganganagar, Rajasthan. Garden seating, fireplace, 100+ dishes from ₹15.",
      true,
    );
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta(
      "twitter:title",
      "National Highway Greens — North Indian Dhaba, Sri Ganganagar",
    );
    setMeta(
      "twitter:description",
      "100% vegetarian North Indian & Rajasthani food. Dal Makhni, Paneer Tikka, Sangri Special & more.",
    );
  }, []);
}

export default function App() {
  useMeta();
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
