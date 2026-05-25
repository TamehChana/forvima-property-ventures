import { Sparkles, UserCheck, Star, SprayCan, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Unique & Personalized Experience",
    desc: "Forvima properties offer distinctive designs, local charm, and amenities tailored to the area and guest needs.",
  },
  {
    icon: UserCheck,
    title: "Quality Tenant Placement",
    desc: "Our screening process helps place reliable tenants who respect your property and pay on time.",
  },
  {
    icon: Star,
    title: "Enhanced Guest Experience",
    desc: "Easy self-check-in, digital communication, local recommendations, and responsive support create a seamless stay.",
  },
  {
    icon: SprayCan,
    title: "Professional Cleaning & Maintenance",
    desc: "Our properties are regularly cleaned and inspected between stays to maintain high standards and guest satisfaction.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Management",
    desc: "We treat every property as if it were our own — with professionalism, care, and attention to detail. From rent collection and lease management to maintenance coordination and tenant support, we handle day-to-day operations so you don't have to.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[oklch(0.82_0.07_25/0.18)] blur-3xl" />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.22em] text-accent">Why choose us</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Professional hosting and property care you can trust.
          </h2>
          <p className="mt-5 text-primary-foreground/75 text-lg leading-relaxed">
            Whether you own a single rental home or a growing portfolio, our goal is simple: protect your
            investment, maximize your returns, and make property ownership easier.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-primary p-8">
              <Icon className="h-7 w-7 text-accent" />
              <h3 className="mt-5 text-xl text-primary-foreground">{title}</h3>
              <p className="mt-2 text-primary-foreground/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
