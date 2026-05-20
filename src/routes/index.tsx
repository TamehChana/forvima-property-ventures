import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Properties } from "@/components/site/Properties";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forvima Property Ventures — We Handle The Keys, You Relax" },
      {
        name: "description",
        content:
          "Forvima Property Ventures helps you find, rent, buy, manage, and invest in property with ease, trust, and professionalism.",
      },
      { property: "og:title", content: "Forvima Property Ventures" },
      { property: "og:description", content: "We handle the keys, you relax. Trusted property partner in Cameroon." },
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
      <About />
      <Services />
      <Properties />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster richColors position="top-center" />
    </main>
  );
}
