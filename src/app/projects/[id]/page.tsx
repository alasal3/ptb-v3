import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBuildingById } from "@/lib/api";
import { notFound } from "next/navigation";
import ApartmentGallery from "@/components/ApartmentGallery";
import ImageGallery from "@/components/ImageGallery";

interface ProjectDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

export const dynamic = 'force-dynamic'; // SSR for real-time updates

export default async function ProjectDetails({ params }: ProjectDetailsProps) {
    // Await params for Next.js 15+ compatibility
    const { id } = await params;

    const project = await getBuildingById(id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen text-slate-100 font-sans">
            <Navbar />
            <main className="container mx-auto px-4 py-24">
                <div className="max-w-6xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/#projects"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        العودة للمشاريع
                    </Link>

                    {/* Header Section */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{project.name}</h1>
                        <div className="flex items-center flex-wrap gap-4">
                            <p className="text-xl text-blue-400">{project.district}</p>
                            <a
                                href={`https://wa.me/201000262701?text=${encodeURIComponent(`مرحباً، أستفسر عن تفاصيل مشروع: ${project.name}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-full transition-colors text-sm font-bold"
                            >
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                استفسر الآن
                            </a>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-16 shadow-2xl glass-card border border-white/10">
                        <img
                            src={project.facade_images?.[0] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Details Section */}
                    <div className="glass-card p-8 md:p-10 rounded-3xl mb-16 border border-white/5 bg-slate-800/30">
                        <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-white/10 pb-4">تفاصيل المشروع</h2>
                        <p className="text-lg text-slate-300 leading-loose whitespace-pre-line">
                            {project.details}
                        </p>
                    </div>

                    {/* Facade Images Gallery */}
                    {project.facade_images && project.facade_images.length > 0 && (
                        <div className="mb-16">
                            <ImageGallery images={project.facade_images} title="صور الواجهة" />
                        </div>
                    )}

                    {/* Construction Images Gallery */}
                    {project.construction_images && project.construction_images.length > 0 && (
                        <div className="mb-16">
                            <ImageGallery images={project.construction_images} title="صور الإنشاءات" />
                        </div>
                    )}

                    <ApartmentGallery
                        apartments={project.apartments || []}
                        buildingName={project.name}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
