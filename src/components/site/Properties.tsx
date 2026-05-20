import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import { MapPin, ArrowUpRight } from "lucide-react";

const properties = [
  {
    img: p1,
    title: "Akwa Heights Residences",
    location: "Douala, Cameroon",
    price: "From 85,000,000 FCFA",
    desc: "Modern 2 & 3-bedroom apartments with private balconies and concierge service.",
    tag: "For Sale",
  },
  {
    img: p2,
    title: "Bastos Garden Villa",
    location: "Yaoundé, Cameroon",
    price: "650,000 FCFA / month",
    desc: "Serene 4-bedroom family home surrounded by mature gardens and quiet streets.",
    tag: "For Rent",
  },
  {
    img: p3,
    title: "Bonapriso Sky Penthouse",
    location: "Douala, Cameroon",
    price: "From 180,000,000 FCFA",
    desc: "Top-floor penthouse with skyline views, warm interiors, and private terrace.",
    tag: "For Sale",
  },
];

export function Properties() {
  return (
    <section id="properties" className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">Featured listings</span>
            <h2 className="mt-4 text-4xl md:text-5xl text-primary text-balance">
              Properties hand-picked for our clients.
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent-foreground">
            Request the full list <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <article key={p.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur text-primary px-3 py-1 text-xs font-medium">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </div>
                <h3 className="mt-2 text-xl text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-lg text-primary">{p.price}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition"
                  >
                    View Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
