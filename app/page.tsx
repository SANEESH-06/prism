import dynamic from "next/dynamic";

import Navbar from "./components/navbar";
import HeroCarousel from "./components/hero-carousel";

const ServicesSection = dynamic(() => import("./components/services-section"));
const AboutSection = dynamic(() => import("./components/about-section"));
const Footer = dynamic(() => import("./components/footer"));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      {/* Hero Carousel */}
      <div className="w-full px-4 pt-20 pb-8 sm:px-6 lg:px-8">
        <HeroCarousel />
      </div>

      {/* Services */}
      <ServicesSection />

      {/* About */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
