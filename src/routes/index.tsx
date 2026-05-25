import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SpaceGallery } from "@/components/site/SpaceGallery";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forvima Property Ventures — Property Management / Hosting" },
      {
        name: "description",
        content:
          "Forvima Property Ventures offers property management and hosting for Airbnb and vacation rentals in the United States.",
      },
      { property: "og:title", content: "Forvima Property Ventures — Property Management / Hosting" },
      {
        property: "og:description",
        content:
          "Guest-ready Airbnb and vacation rentals with professional property management and hosting across the United States.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SpaceGallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster richColors position="top-center" />
    </main>
  );
}
