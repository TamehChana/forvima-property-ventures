import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/forvima-logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#spaces", label: "The Space" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-18 py-3">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Forvima Property Ventures" className="h-11 w-11 rounded-full object-cover ring-1 ring-border" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg text-primary">Forvima</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Property Management / Hosting
            </div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition shadow-soft"
        >
          Get in touch
        </a>
        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
