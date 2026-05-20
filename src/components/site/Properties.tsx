import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import { MapPin, ArrowUpRight, BedDouble, Bath, Maximize } from "lucide-react";

const properties = [
  {
    img: p1,
    title: "Akwa Heights Residences",
    location: "Fort Worth, TX, United States",
    price: "$142,000",
    tag: "For Sale",
    beds: 3, baths: 2, area: "145 m²",
  },
  {
    img: p2,
    title: "Bastos Garden Villa",
    location: "Dallas, TX, United States",
    price: "$1,100 / mo",
    tag: "For Rent",
    beds: 4, baths: 3, area: "320 m²",
  },
  {
    img: p3,
    title: "Bonapriso Sky Penthouse",
    location: "Arlington, TX, United States",
    price: "$300,000",
    tag: "For Sale",
    beds: 4, baths: 4, area: "260 m²",
  },
];

export function Properties() {
  return (
    <section id="properties" className="py-28 md:py-36 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.24em] text-accent-foreground/60">Featured listings</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-primary text-balance leading-[1.05]">
              Properties hand-picked
              <br />
              <span className="italic text-accent-foreground/80">for our clients.</span>
            </h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent-foreground group">
            Request the full list
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-[28px] overflow-hidden bg-card border border-border/60 hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.075_42/0.92)] via-[oklch(0.22_0.075_42/0.25)] to-transparent" />

                <span className="absolute top-5 left-5 rounded-full bg-background/95 backdrop-blur text-primary px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-medium">
                  {p.tag}
                </span>

                <a
                  href="#contact"
                  aria-label="View details"
                  className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/95 text-primary hover:bg-accent transition"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-white/75">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </div>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{p.title}</h3>
                  <div className="mt-4 font-display text-xl text-[oklch(0.92_0.05_22)]">{p.price}</div>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-5 text-sm text-muted-foreground">
                <Meta icon={<BedDouble className="h-4 w-4" />} value={`${p.beds} Beds`} />
                <span className="h-4 w-px bg-border" />
                <Meta icon={<Bath className="h-4 w-4" />} value={`${p.baths} Baths`} />
                <span className="h-4 w-px bg-border" />
                <Meta icon={<Maximize className="h-4 w-4" />} value={p.area} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meta({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-primary/70">{icon}</span>
      {value}
    </span>
  );
}
