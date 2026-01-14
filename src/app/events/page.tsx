import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Events from "@/components/Events";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EventsPage() {
    return (
        <>
            <Navbar />
            <main className="relative z-10 mt-20">
                <Events />
            </main>
            <Footer />
        </>
    );
}
