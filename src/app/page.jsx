import { Navbar, SpinningTextDivider, TextDivider, Footer } from "@/components/shared";
import AboutUs from "@/features/about-us/AboutUs";
import ForWhom from "@/features/for-whom";
import Hero from "@/features/hero";
import Highlights from "@/features/highlights";
import Modalities from "@/features/modalities";
import Services from "@/features/services";
import Team from "@/features/team";
import { CTA } from "@/features/cta";
import { Contact } from "@/features/contact";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
        <Hero />
      </header>
      <SpinningTextDivider />
      <AboutUs />
      <Highlights />
      <TextDivider />
      <ForWhom />
      <Modalities />
      <Services />
      <CTA />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
