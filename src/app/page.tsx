import CocktailBites from "@/components/CocktailBites";
import CocktailMenu from "@/components/CocktailMenu";
import Concepts from "@/components/Concepts";
import Contact from "@/components/Contact";
import EventTypes from "@/components/EventTypes";
import Faq from "@/components/Faq";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <EventTypes />
        <Services />
        <Concepts />
        <CocktailBites />
        <CocktailMenu />
        <Packages />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
