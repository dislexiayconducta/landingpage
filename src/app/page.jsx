import Navbar from "@/components/navbar";
import { SpinningTextDivider } from "@/components/shared";
import AboutUs from "@/features/about-us/AboutUs";
import Hero from "@/features/hero";
import Highlights from "@/features/highlights";

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
    </main>
  );
}
