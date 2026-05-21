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
      { title: "Forvima Property Ventures — Short-Term & Airbnb Rentals" },
      {
        name: "description",
        content:
          "Forvima Property Ventures offers professionally managed short-term and Airbnb rentals in the United States.",
      },
      { property: "og:title", content: "Forvima Property Ventures — Short-Term Rentals" },
      {
        property: "og:description",
        content: "Book guest-ready Airbnb and short-term stays. Professional hosting across the United States.",
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
