import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { getBuildings } from "@/lib/api";

// Lazy load components below the fold
const Process = dynamic(() => import("@/components/Process"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Events = dynamic(() => import("@/components/Events"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export const revalidate = 20;

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
      <div className="fixed bottom-0 right-0 bg-black/50 text-white text-xs p-1 z-50 pointer-events-none">
        Last Updated: {new Date().toLocaleTimeString()}
      </div>
    </>
  );
}
