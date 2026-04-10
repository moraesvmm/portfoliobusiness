import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import PremiumLandingPages from "@/components/PremiumLandingPages";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <PremiumLandingPages />
        <About />
      </main>
      <Footer />
    </>
  );
}
