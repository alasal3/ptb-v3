import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getBuildings } from "@/lib/api";

export default async function Home() {
  const buildings = await getBuildings();

  return (
    <>
      <Navbar />
      <main className="relative z-10 mt-8">
        <div id="main-content">
          <Hero />
          <Process />
          <About />
          <Services />
          <Events />
          <Projects projects={buildings} />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
