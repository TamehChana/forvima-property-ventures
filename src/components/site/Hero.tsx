import hero from "@/assets/hero-villa.jpg";
import { ArrowRight, ShieldCheck, KeyRound, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Modern luxury villa at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.22_0.06_38/0.85)] via-[oklch(0.22_0.06_38/0.6)] to-[oklch(0.22_0.06_38/0.35)]" />
      </div>

      <div className="relative container-px mx-auto max-w-7xl pt-24 pb-32 md:pt-32 md:pb-44">
        <div className="max-w-3xl text-[oklch(0.98_0.01_60)] fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs uppercase tracking-[0.18em] border border-white/15">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Premium property partner
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
            Find, Rent, Buy, or Manage Property{" "}
            <span className="italic text-[oklch(0.93_0.04_25)]">Without Stress</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl text-pretty">
            Forvima Property Ventures helps you handle every property need with ease, trust,
            and professionalism. We handle the keys — you relax.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#properties"
              className="group inline-flex items-center gap-2 rounded-full bg-[oklch(0.98_0.01_60)] text-primary px-6 py-3.5 text-sm font-medium hover:bg-accent transition shadow-elegant"
            >
              View Properties
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white px-6 py-3.5 text-sm font-medium hover:bg-white/15 transition"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            <Stat icon={<KeyRound className="h-4 w-4" />} value="500+" label="Keys handed over" />
            <Stat icon={<ShieldCheck className="h-4 w-4" />} value="100%" label="Verified listings" />
            <Stat icon={<Sparkles className="h-4 w-4" />} value="10+ yrs" label="Trusted expertise" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="border-l border-white/20 pl-4">
      <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-wider">{icon}{label}</div>
      <div className="mt-1 font-display text-2xl text-white">{value}</div>
    </div>
  );
}
