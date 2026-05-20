import about from "@/assets/about-image.jpg";
import { Check } from "lucide-react";

const points = [
  "Locally rooted, internationally professional",
  "Honest guidance from search to handover",
  "Discreet, dedicated client management",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-secondary -z-10" />
          <img
            src={about}
            alt="Aerial view of upscale neighborhood"
            loading="lazy"
            className="rounded-3xl object-cover w-full aspect-[4/5] shadow-elegant"
          />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">About Forvima</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-primary text-balance">
            A trusted partner for every property decision.
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
