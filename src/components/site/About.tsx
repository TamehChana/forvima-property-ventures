import about from "@/assets/about-image.jpg";
import { Check } from "lucide-react";

const points = [
  "Locally rooted, internationally professional",
  "Honest guidance from search to handover",
  "Discreet, dedicated client management",
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-background">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="relative lg:col-span-5">
          <div className="absolute -inset-5 rounded-[32px] bg-secondary -z-10 rotate-[-2deg]" />
          <img
            src={about}
            alt="Aerial view of upscale neighborhood"
            loading="lazy"
            className="rounded-[28px] object-cover w-full aspect-[4/5] shadow-elegant"
          />
        </div>
        <div className="lg:col-span-7">
          <span className="text-[11px] uppercase tracking-[0.24em] text-accent-foreground/60">About Forvima</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-primary text-balance leading-[1.05]">
            A trusted partner for every
            <span className="italic text-accent-foreground/80"> property decision.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Forvima Property Ventures is a full-service property company helping clients secure,
            manage, and invest in real estate without the usual stress. From your first viewing
            to the day you hold the keys, our team handles the detail — quietly, professionally,
            and with your interests at the centre.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
