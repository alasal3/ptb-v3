import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="relative z-10 mt-20">
                <Services />
            </main>
            <Footer />
        </>
    );
}
