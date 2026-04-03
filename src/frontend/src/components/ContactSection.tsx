import { Clock, Loader2, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!actor) {
      toast.error("Service not available. Please try again.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitForm(form.name, form.email, form.message);
      toast.success("Message sent! We will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error(
        "Failed to send message. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(var(--brand-cream))" }}
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "oklch(var(--brand-orange))" }}
          >
            Get In Touch
          </span>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mt-2"
            style={{ color: "oklch(var(--brand-espresso))" }}
          >
            Find Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Map */}
          <div
            className="reveal rounded-2xl overflow-hidden shadow-card"
            style={{ border: "4px solid white" }}
          >
            <iframe
              title="NH Greens Location"
              src="https://maps.google.com/maps?q=National+Highway+Greens+Restaurant+Sri+Ganganagar&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-ocid="contact.map_marker"
            />
          </div>

          {/* Details + Form */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="reveal space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(var(--brand-green) / 0.1)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--brand-green))" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "oklch(var(--brand-espresso))" }}
                  >
                    Address
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(var(--brand-body))" }}
                  >
                    Hanuman Ji Ki Murthi Road, opp. Jassa Singh Road,
                    <br />
                    Hardeep Colony, Sri Ganganagar, Rajasthan 335001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(var(--brand-green) / 0.1)" }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--brand-green))" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "oklch(var(--brand-espresso))" }}
                  >
                    Phone
                  </div>
                  <a
                    href="tel:09413557321"
                    className="text-sm font-medium hover:underline"
                    style={{ color: "oklch(var(--brand-orange))" }}
                    data-ocid="contact.link"
                  >
                    094135 57321
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(var(--brand-green) / 0.1)" }}
                >
                  <Clock
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--brand-green))" }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "oklch(var(--brand-espresso))" }}
                  >
                    Hours
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(var(--brand-body))" }}
                  >
                    Open daily · Closes 11:45 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="reveal reveal-delay-100 rounded-2xl p-6 space-y-4"
              style={{
                backgroundColor: "white",
                border: "1px solid oklch(var(--brand-gold) / 0.5)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
              data-ocid="contact.panel"
            >
              <h3
                className="font-display font-semibold text-lg"
                style={{ color: "oklch(var(--brand-espresso))" }}
              >
                Send a Message
              </h3>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "oklch(var(--brand-espresso))" }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-shadow"
                  style={{
                    borderColor: "oklch(var(--brand-gold) / 0.5)",
                    backgroundColor: "oklch(var(--brand-cream))",
                  }}
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "oklch(var(--brand-espresso))" }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-shadow"
                  style={{
                    borderColor: "oklch(var(--brand-gold) / 0.5)",
                    backgroundColor: "oklch(var(--brand-cream))",
                  }}
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-1"
                  style={{ color: "oklch(var(--brand-espresso))" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-shadow resize-none"
                  style={{
                    borderColor: "oklch(var(--brand-gold) / 0.5)",
                    backgroundColor: "oklch(var(--brand-cream))",
                  }}
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "oklch(var(--brand-green))" }}
                data-ocid="contact.submit_button"
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
