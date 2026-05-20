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
    <section id="services" className="py-24 md:py-32 bg-[oklch(0.97_0.014_55)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">What we do</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-primary text-balance">
            Six services. One stress-free experience.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Whether you're buying, renting, managing or investing — every service is delivered with
            the same calm professionalism.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-3xl bg-card border border-border p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl text-primary">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
