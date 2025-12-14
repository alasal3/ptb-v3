"use client";

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { services } from "@/data/services";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DraftingCompass, Map, Sofa, Briefcase } from "lucide-react";

const iconMap = {
    DraftingCompass: DraftingCompass,
    Map: Map,
    Sofa: Sofa,
    Briefcase: Briefcase,
};

export default function ServiceDetails() {
    const params = useParams();
    const router = useRouter();
    const [service, setService] = useState<(typeof services)[0] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            // Simulate loading
            await new Promise((resolve) => setTimeout(resolve, 500));
            const id = Number(params?.id);
            const foundService = services.find((p) => p.id === id);
            if (foundService) {
                setService(foundService);
            } else {
                // Handle not found
            }
            setLoading(false);
        };
        fetchService();
    }, [params?.id]);

    if (loading) {
        return (
            <div className="min-h-screen text-white flex items-center justify-center">
                <p className="text-xl">جاري تحميل تفاصيل الخدمة...</p>
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
                <h1 className="text-3xl font-bold mb-4">الخدمة غير موجودة</h1>
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                    العودة إلى الرئيسية
                </Link>
            </div>
        );
    }

    const IconComponent = iconMap[service.iconName as keyof typeof iconMap];

    return (
        <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500/30">
            <Navbar />
            <div className="relative pt-32 pb-20 overflow-hidden">


                <main className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/#services"
                            className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
                        >
                            <div className="bg-slate-800/50 p-2 rounded-full mr-3 group-hover:bg-slate-700/50 transition-colors ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-medium">العودة للخدمات</span>
                        </Link>

                        <div className="glass-card p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                                <div className="text-blue-400 flex-shrink-0">
                                    {IconComponent && <IconComponent size={80} strokeWidth={1.5} />}
                                </div>
                                <div className="text-center md:text-right flex-1">
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                        {service.title}
                                    </h1>
                                    <p className="text-xl text-blue-400 font-medium">{service.description}</p>
                                </div>
                            </div>

                            <div className="prose prose-lg prose-invert max-w-none">
                                <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700/50 pb-4">تفاصيل الخدمة</h3>
                                <p className="text-slate-300 leading-loose text-lg whitespace-pre-line">
                                    {service.details || service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
