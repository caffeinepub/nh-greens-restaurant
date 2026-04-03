import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const photos = [
  {
    src: "/assets/1775218846070501670725982020531-019d534a-3586-7230-b549-d51174fbbaaa.jpg",
    alt: "NH Greens food spread",
  },
  {
    src: "/assets/17752187228766230731086025468196-019d534a-35a7-734e-ad7b-cfadd2618e9e.jpg",
    alt: "Delicious vegetarian dishes",
  },
  {
    src: "/assets/17752187941267540947037176473419-019d534a-3595-75a8-9add-8ded8409b6d2.jpg",
    alt: "Restaurant ambiance",
  },
  {
    src: "/assets/17752187088788724811599210421836-019d534a-34ad-7658-b89f-a9ed1a50fa88.jpg",
    alt: "NH Greens exterior",
  },
  {
    src: "/assets/17752186878257757965095668160412-019d534a-351f-75b8-ac5a-e5278f4251cc.jpg",
    alt: "Garden seating area",
  },
];

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const prev = () =>
    setLightbox((p) =>
      p !== null ? (p - 1 + photos.length) % photos.length : 0,
    );
  const next = () =>
    setLightbox((p) => (p !== null ? (p + 1) % photos.length : 0));

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(var(--brand-cream))" }}
      data-ocid="gallery.section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "oklch(var(--brand-orange))" }}
          >
            Visual Journey
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mt-2"
            style={{ color: "oklch(var(--brand-espresso))" }}
          >
            A Glimpse of NH Greens
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {photos.map((photo, idx) => (
            <button
              type="button"
              key={photo.src}
              className={`reveal reveal-delay-${(idx % 4) * 100} relative group cursor-pointer overflow-hidden rounded-2xl shadow-card text-left w-full ${
                idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
              style={{
                border: "5px solid white",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                padding: 0,
              }}
              onClick={() => openLightbox(idx)}
              data-ocid={`gallery.item.${idx + 1}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 w-8 h-8 transition-opacity duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
            data-ocid="gallery.modal"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-full"
            >
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-gray-100"
                data-ocid="gallery.close_button"
              >
                <X className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white text-lg font-bold"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white text-lg font-bold"
                aria-label="Next"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
