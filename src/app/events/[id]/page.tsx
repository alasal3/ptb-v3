import { getEventById } from "@/data/events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { MapPin, CalendarClock, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const eventId = parseInt(id);
    const event = getEventById(eventId);

    if (!event) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="relative min-h-screen pt-24 pb-12">

                <div className="container mx-auto p-4 relative z-10">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link href="/#events" className="inline-flex items-center text-slate-400 hover:text-white transition-colors gap-2">
                            <ArrowRight className="w-5 h-5" />
                            العودة للرئيسية
                        </Link>
                    </div>

                    <div className="glass-card p-1 border border-purple-500/30 relative max-w-5xl mx-auto">
                        {/* Glowing effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 blur-xl -z-10"></div>

                        <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 md:p-10 overflow-hidden relative">
                            {/* Coming Soon Badge */}
                            {event.status === "upcoming" && (
                                <div className="absolute top-6 left-6 z-20">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/20 animate-pulse">
                                        <CalendarClock className="w-4 h-4 text-white" />
                                        <span className="text-white font-bold text-sm">قريباً</span>
                                    </div>
                                </div>
                            )}

                            {/* Header */}
                            <div className="text-center mb-12">
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    {event.title}
                                </h1>
                                <div className="flex items-center justify-center gap-2 text-purple-400 text-lg mb-8">
                                    <MapPin className="w-5 h-5" />
                                    {event.location}
                                </div>
                                <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                                    {event.description}
                                </p>
                            </div>

                            {/* Date Cards */}
                            <div className="flex justify-center items-center gap-4 mb-16">
                                <div className="text-center px-8 py-4 bg-slate-800/50 rounded-xl border border-slate-700">
                                    <span className="block text-3xl font-bold text-white">{event.date.day}</span>
                                    <span className="text-sm text-slate-400">يوم</span>
                                </div>
                                <div className="text-center px-8 py-4 bg-slate-800/50 rounded-xl border border-slate-700">
                                    <span className="block text-3xl font-bold text-white">{event.date.month}</span>
                                    <span className="text-sm text-slate-400">شهر</span>
                                </div>
                                <div className="text-center px-8 py-4 bg-slate-800/50 rounded-xl border border-slate-700">
                                    <span className="block text-3xl font-bold text-white">{event.date.year}</span>
                                    <span className="text-sm text-slate-400">سنة</span>
                                </div>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                                {event.features.map((feature, idx) => {
                                    const Icon = feature.icon;
                                    const colorClass = {
                                        purple: "text-purple-400 bg-purple-500/20 border-purple-500/30",
                                        blue: "text-blue-400 bg-blue-500/20 border-blue-500/30",
                                        pink: "text-pink-400 bg-pink-500/20 border-pink-500/30",
                                        amber: "text-amber-400 bg-amber-500/20 border-amber-500/30",
                                        emerald: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
                                    }[feature.color] || "text-slate-400 bg-slate-500/20";

                                    // Spread features gracefully if last one
                                    const gridClass = idx === event.features.length - 1 ? "col-span-1 md:col-span-2 lg:col-span-1" : "";

                                    return (
                                        <div key={idx} className={`group p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 ${gridClass}`}>
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${colorClass.split(' ')[1]}`}>
                                                <Icon className={`w-6 h-6 ${colorClass.split(' ')[0]}`} />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                                            <p className="text-slate-400 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <div className="text-center border-t border-slate-700/50 pt-10">
                                <h3 className="text-2xl font-bold text-white mb-6">هل ترغب في الحضور؟</h3>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="tel:+201000000000"
                                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center gap-2 group w-full sm:w-auto justify-center"
                                    >
                                        <span className="text-lg">اتصل للحجز الآن</span>
                                        <Play className="w-5 h-5 fill-current group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                                <p className="mt-4 text-slate-500 text-sm">
                                    * الأماكن محدودة جداً
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
