import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="relative z-10 mt-8">
                <div id="main-content">
                    <About />
                </div>
            </main>
            <Footer />
        </>
    );
}
