import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamicImport from "next/dynamic";
import { getV1Projects, getV1HeroSettings, getV1MasterStages } from "@/lib/api";
import JsonLd from "@/components/JsonLd";

// Lazy load components below the fold
const StatsBar = dynamicImport(() => import("@/components/StatsBar"), { ssr: true });
const MallBanner = dynamicImport(() => import("@/components/MallBanner"), { ssr: true });
const Projects = dynamicImport(() => import("@/components/Projects"), { ssr: true });
const DeliveryStandards = dynamicImport(() => import("@/components/DeliveryStandards"), { ssr: true });
const ContactForm = dynamicImport(() => import("@/components/ContactForm"), { ssr: true });
const Footer = dynamicImport(() => import("@/components/Footer"), { ssr: true });

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const [projects, heroSettings, masterStages] = await Promise.all([
    getV1Projects(),
    getV1HeroSettings(),
    getV1MasterStages()
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Prime Top Build",
    "image": "https://primetopbuild.com/assets/whitelogo-n5D6un3T.png",
    "@id": "https://primetopbuild.com",
    "url": "https://primetopbuild.com",
    "telephone": "01000262701",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressCountry": "EG"
    },
    "sameAs": [
      "https://facebook.com/primetopbuild",
      "https://instagram.com/primetopbuild"
    ]
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="relative z-10 mt-8">
        <div id="main-content">
          <Hero />
          <StatsBar />
          <DeliveryStandards />
          <Projects projects={projects} heroSettings={heroSettings} masterStages={masterStages} />
          <div className="mb-12"><MallBanner /></div>
          <ContactForm />
        </div>
      </main >
      <Footer />
    </>
  );
}
