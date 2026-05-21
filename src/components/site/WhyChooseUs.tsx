import { Sparkles, ShieldCheck, BadgeCheck, MessagesSquare, Clock, Home } from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Airbnb-ready homes",
    desc: "Every rental is cleaned, stocked, and prepared for a smooth check-in.",
  },
  {
    icon: Sparkles,
    title: "Hotel-level comfort",
    desc: "Thoughtful amenities and styling so guests feel at home from night one.",
  },
  {
    icon: Clock,
    title: "Flexible short stays",
    desc: "Nightly and weekly bookings designed for travel, work trips, and getaways.",
  },
  {
    icon: MessagesSquare,
    title: "Fast guest support",
    desc: "Clear communication before, during, and after every stay.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable hosting",
    desc: "Professional turnover, maintenance, and standards you can count on.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent booking",
    desc: "Straightforward pricing and policies for every stay.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[oklch(0.82_0.07_25/0.18)] blur-3xl" />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-accent">Why choose us</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Short-term rentals done right — for guests and hosting partners.
          </h2>
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
