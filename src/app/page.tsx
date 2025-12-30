import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamicImport from "next/dynamic";
import { getBuildings } from "@/lib/api";

// Lazy load components below the fold
const About = dynamicImport(() => import("@/components/About"), { ssr: true });
const Investment = dynamicImport(() => import("@/components/Investment"), { ssr: true });
const Lifestyle = dynamicImport(() => import("@/components/Lifestyle"), { ssr: true });
const Services = dynamicImport(() => import("@/components/Services"), { ssr: true });
const Events = dynamicImport(() => import("@/components/Events"), { ssr: true });
const Projects = dynamicImport(() => import("@/components/Projects"), { ssr: true });
const Contact = dynamicImport(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamicImport(() => import("@/components/Footer"), { ssr: true });

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default async function Home() {
  const buildings = await getBuildings();

  return (
    <>
      <Navbar />
      <main className="relative z-10 mt-8">
        <div id="main-content">
          <Hero />
          <About />
          <Investment />
          <Lifestyle />
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
