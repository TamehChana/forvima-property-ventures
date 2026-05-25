import livingImg from "@/assets/property-3.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import bathroomImg from "@/assets/bathroom.jpg";

const spaces = [
  {
    title: "Living Space",
    desc: "Bright, comfortable areas for relaxing and gathering.",
    img: livingImg,
    alt: "Living Space in a managed rental property",
  },
  {
    title: "Kitchen",
    desc: "Fully equipped for meals, coffee, and easy self-catering.",
    img: kitchenImg,
    alt: "Modern kitchen in a guest-ready rental home",
  },
  {
    title: "Bedrooms",
    desc: "Clean, restful rooms with quality linens and storage.",
    img: bedroomImg,
    alt: "Comfortable bedroom in a managed rental property",
  },
  {
    title: "Bathrooms",
    desc: "Spotless bathrooms stocked for every guest stay.",
    img: bathroomImg,
    alt: "Bathrooms in a professionally hosted rental",
  },
] as const;

export function SpaceGallery() {
  return (
    <section id="spaces" className="py-28 md:py-36 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">The space</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-primary text-balance">
            See what guests enjoy inside our rentals.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Every Forvima stay is set up with care — from the Living Space and Kitchen to Bedrooms and
            Bathrooms.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 md:gap-6">
          {spaces.map(({ title, desc, img, alt }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.075_42/0.88)] via-[oklch(0.22_0.075_42/0.2)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl text-[oklch(0.98_0.012_65)]">{title}</h3>
                <p className="mt-2 text-sm text-white/80 max-w-sm leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
