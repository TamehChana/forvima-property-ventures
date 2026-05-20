import { ShieldCheck, Heart, BadgeCheck, MessagesSquare, UserCheck, Eye } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Trusted property support", desc: "A team that stands behind every recommendation." },
  { icon: Heart, title: "Stress-free process", desc: "We carry the heavy lifting so you don't have to." },
  { icon: BadgeCheck, title: "Verified property options", desc: "Every listing checked for authenticity and value." },
  { icon: MessagesSquare, title: "Professional communication", desc: "Clear, prompt updates at every step." },
  { icon: UserCheck, title: "Client-focused service", desc: "Your goals shape every decision we make." },
  { icon: Eye, title: "Transparent process", desc: "Honest pricing, honest paperwork, honest advice." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[oklch(0.82_0.07_25/0.18)] blur-3xl" />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-accent">Why choose us</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Reasons clients trust Forvima with their property journey.
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
