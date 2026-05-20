const steps = [
  { n: "01", title: "Tell us what you need", desc: "Share your goals — buy, rent, manage, or invest. We listen first." },
  { n: "02", title: "We search, verify, and guide", desc: "Our team curates options, vets paperwork, and walks you through them." },
  { n: "03", title: "You get the right property", desc: "From keys to contracts, we handle the handover end-to-end." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28 md:py-36 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.22em] text-accent-foreground/70">How it works</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-primary text-balance">
            Three calm steps to your next address.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl bg-card border border-border p-8 shadow-soft">
              <div className="font-display text-5xl text-accent">{s.n}</div>
              <h3 className="mt-5 text-xl text-primary">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 h-px w-6 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
