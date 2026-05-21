import logo from "@/assets/forvima-logo.jpeg";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_MAILTO,
  CONTACT_OFFICE,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Forvima" className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20" />
            <div>
              <div className="font-display text-lg">Forvima</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Short-Term Rentals</div>
            </div>
          </div>
          <p className="mt-5 text-primary-foreground/75 italic">"Guest-ready Airbnb and short-term stays."</p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-accent">Quick links</h4>
          <ul className="mt-4 space-y-2.5 text-primary-foreground/80">
            {[
              ["Home", "#home"],
              ["The Space", "#spaces"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-accent transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-primary-foreground/80">
            <li>{CONTACT_OFFICE}</li>
            <li>
              <a href={CONTACT_PHONE_TEL} className="hover:text-accent transition">
                {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={CONTACT_EMAIL_MAILTO} className="hover:text-accent transition">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Forvima Property Ventures. All rights reserved.</div>
          <div>Crafted with care.</div>
        </div>
      </div>
    </footer>
  );
}
