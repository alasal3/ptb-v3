import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamicImport from "next/dynamic";
import { getBuildings } from "@/lib/api";

// Lazy load components below the fold
const About = dynamicImport(() => import("@/components/About"), { ssr: true });
const Philosophy = dynamicImport(() => import("@/components/Philosophy"), { ssr: true });
const PricingModel = dynamicImport(() => import("@/components/PricingModel"), { ssr: true });
const SalesSystems = dynamicImport(() => import("@/components/SalesSystems"), { ssr: true });
const DeliveryStandards = dynamicImport(() => import("@/components/DeliveryStandards"), { ssr: true });
const Services = dynamicImport(() => import("@/components/Services"), { ssr: true });
const ContactForm = dynamicImport(() => import("@/components/ContactForm"), { ssr: true }); // Client component

const Events = dynamicImport(() => import("@/components/Events"), { ssr: true });
const Projects = dynamicImport(() => import("@/components/Projects"), { ssr: true });
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
          <Philosophy />
          <PricingModel />
          <SalesSystems />
          <DeliveryStandards />
          <Services />
          <Events />
          <Projects projects={buildings} />

          <section id="contact" className="py-20 text-center relative overflow-hidden">
            <div className="container mx-auto px-4">
              <ContactForm />

              <div className="mt-20">
                <h2 className="text-4xl font-bold text-white mb-8">تواصل معنا</h2>
                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                  نحن لا نبيع وحدات... نحن نقدم منظومة متكاملة. تابعونا لتعرفوا الحقيقة كما هي.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                  {/* Phone */}
                  <a href="tel:01000262701" className="glass-card p-8 hover:bg-slate-800/50 transition-colors group">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">اتصل بنا</h3>
                    <p className="text-slate-300" dir="ltr">01000262701</p>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/201000262701" target="_blank" rel="noopener noreferrer" className="glass-card p-8 hover:bg-slate-800/50 transition-colors group">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-400" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">واتساب</h3>
                    <p className="text-slate-300">تحدث معنا مباشرة</p>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
