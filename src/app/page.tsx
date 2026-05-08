import About from "@/components/About";
import AppDownload from "@/components/AppDownload";
import ChefsSpecial from "@/components/ChefsSpecial";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <ChefsSpecial />
        </ScrollReveal>
        <Menu />
        <ScrollReveal delay={0.05}>
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <AppDownload />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <Location />
        </ScrollReveal>
      </main>
      <ScrollReveal delay={0.05}>
        <Footer />
      </ScrollReveal>
    </>
  );
}
