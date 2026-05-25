import hero from "@/assets/hero-villa.jpg";
import logo from "@/assets/forvima-logo.jpeg";
import { ArrowRight, ShieldCheck, Home, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Property managed home ready for guests"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.22_0.075_42/0.92)] via-[oklch(0.22_0.075_42/0.7)] to-[oklch(0.22_0.075_42/0.25)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.075_42/0.6)] via-transparent to-transparent" />
      </div>

      <div className="relative container-px mx-auto max-w-7xl py-28 md:py-36 w-full">
        <div className="max-w-3xl text-[oklch(0.98_0.012_65)]">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/8 backdrop-blur-md pl-1.5 pr-4 py-1.5 border border-white/15 fade-up">
            <img src={logo} alt="" className="h-6 w-6 rounded-full object-cover" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/90">
              Property Management / Hosting
            </span>
          </div>

          <h1 className="mt-7 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08] text-balance fade-up">
            Welcome to Forvima Property Ventures.
          </h1>

          <p className="mt-8 text-lg text-white/85 max-w-2xl text-pretty leading-relaxed">
            Your trusted partner in professional property management and luxury short-term rental
            services.
          </p>
          <p className="mt-4 text-lg text-white/80 max-w-2xl text-pretty leading-relaxed">
            We specialize in managing vacation rentals and investment properties with a focus on
            maximizing revenue, maintaining exceptional property standards, and delivering outstanding
            guest experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[oklch(0.98_0.012_65)] text-primary px-7 py-4 text-sm font-medium hover:bg-accent transition-all shadow-elegant"
            >
              Book a stay
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-7 py-4 text-sm font-medium hover:bg-white/10 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-20 lg:mt-28 grid grid-cols-3 gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden max-w-3xl backdrop-blur-md">
          <Stat icon={<Home className="h-4 w-4" />} value="Guest-ready" label="Airbnb homes" />
          <Stat icon={<ShieldCheck className="h-4 w-4" />} value="5-star" label="Guest experience" />
          <Stat icon={<Sparkles className="h-4 w-4" />} value="24/7" label="Hosting support" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-[oklch(0.22_0.075_42/0.55)] backdrop-blur px-5 py-5 sm:px-7 sm:py-6">
      <div className="flex items-center gap-2 text-[oklch(0.92_0.05_22)]">{icon}</div>
      <div className="mt-2 font-display text-2xl sm:text-3xl text-white">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-white/65 mt-1">{label}</div>
    </div>
  );
}
