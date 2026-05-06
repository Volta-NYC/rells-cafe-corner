import About from "@/components/About";
import AppDownload from "@/components/AppDownload";
import ChefsSpecial from "@/components/ChefsSpecial";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ChefsSpecial />
        <Menu />
        <HowItWorks />
        <AppDownload />
        <Location />
      </main>
      <Footer />
    </>
  );
}
