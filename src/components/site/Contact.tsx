import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { CONTACT_OFFICE, CONTACT_PHONE, CONTACT_PHONE_TEL, CONTACT_WHATSAPP_URL } from "@/lib/contact";

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — we'll be in touch within 24 hours.");
    }, 800);
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-[oklch(0.97_0.014_55)]">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Contact</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-primary text-balance">
            Let's handle your next property move together.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us a little about what you're looking for. We respond within 24 hours.
          </p>

          <div className="mt-10 space-y-5">
            <Info
              icon={<Phone className="h-4 w-4" />}
              label="Phone & WhatsApp"
              value={CONTACT_PHONE}
              href={CONTACT_PHONE_TEL}
            />
            <Info icon={<Mail className="h-4 w-4" />} label="Email" value="hello@forvimaproperty.com" />
            <Info icon={<MapPin className="h-4 w-4" />} label="Office" value={CONTACT_OFFICE} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.7_0.18_150)] text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition shadow-soft"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <div className="flex items-center gap-2">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-primary hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-7 md:p-9 shadow-elegant">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone number" name="phone" />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground/80">Service needed</label>
              <select
                name="service"
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
              >
                <option>Property Sales</option>
                <option>Property Rentals</option>
                <option>Property Management</option>
                <option>Land Consultation</option>
                <option>Investment Support</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground/80">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
              placeholder="Tell us a little about what you need…"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-soft disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Info({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        {href ? (
          <a href={href} className="text-foreground hover:text-primary transition">
            {value}
          </a>
        ) : (
          <div className="text-foreground">{value}</div>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-foreground/80">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
