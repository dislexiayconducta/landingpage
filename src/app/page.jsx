import Navbar from "@/components/navbar";
import { SpinningTextDivider } from "@/components/shared";
import AboutUs from "@/features/about-us/AboutUs";
import Hero from "@/features/hero";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
        <Hero />
      </header>
      <SpinningTextDivider />
      <AboutUs />
    </main>
  );
}
