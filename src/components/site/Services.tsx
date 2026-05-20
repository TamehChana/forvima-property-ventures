import { Home, KeyRound, Building2, Map, TrendingUp, Users } from "lucide-react";

const services = [
  { icon: Home, title: "Property Sales", desc: "Buy with confidence. We source, verify, and negotiate the right home or asset for you." },
  { icon: KeyRound, title: "Property Rentals", desc: "Curated rentals for tenants and reliable placements for landlords — fully vetted." },
  { icon: Building2, title: "Property Management", desc: "Hands-off management: rent collection, maintenance, tenant care, and reporting." },
  { icon: Map, title: "Land & Housing Consultation", desc: "Clear advice on land acquisition, documentation, and building decisions." },
  { icon: TrendingUp, title: "Real Estate Investment", desc: "Strategies and opportunities matched to your goals, risk profile, and timeline." },
  { icon: Users, title: "Tenant & Landlord Help", desc: "Mediation, paperwork, and ongoing support so every relationship runs smoothly." },
];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-[oklch(0.965_0.014_55)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.24em] text-accent-foreground/60">What we do</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-primary text-balance leading-[1.05]">
            Six services.
            <br />
            <span className="italic text-accent-foreground/80">One stress-free experience.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[28px] overflow-hidden border border-border">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group bg-card p-9 hover:bg-secondary/40 transition-colors duration-500"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-7 font-display text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
