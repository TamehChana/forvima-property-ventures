import { Star } from "lucide-react";

const items = [
  {
    quote: "Forvima found us a beautiful apartment in two weeks. The whole process was clear and calm — exactly what we needed.",
    name: "Nadine M.",
    role: "Tenant, Douala",
  },
  {
    quote: "As a landlord overseas, I trust them with everything — rent, maintenance, tenants. Reports arrive like clockwork.",
    name: "Eric T.",
    role: "Property Owner",
  },
  {
    quote: "Their investment guidance is honest and grounded. We've added two properties to our portfolio through Forvima.",
    name: "Mrs. Ayuk",
    role: "Investor",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Client voices</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-primary text-balance">
            Trusted by tenants, landlords, and investors.
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
