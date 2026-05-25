import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Our weekend stay was spotless and easy to check into. Exactly what we expect from a great Airbnb — calm, clean, and well managed.",
    name: "Nadine M.",
    role: "Guest, Fort Worth, TX",
  },
  {
    quote:
      "Forvima handles turnovers and guest messages so we don't have to. Our hosted rental runs smoothly even when we're out of town.",
    name: "Eric T.",
    role: "Hosting Partner",
  },
  {
    quote:
      "We booked a last-minute work trip and everything was ready on arrival. Professional hosting from start to finish.",
    name: "James R.",
    role: "Business Traveler",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Guest voices</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-primary text-balance">
            Loved by guests and trusted by hosting partners.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-secondary/50 border border-border p-8 flex flex-col">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-foreground leading-relaxed italic">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-medium text-primary">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
