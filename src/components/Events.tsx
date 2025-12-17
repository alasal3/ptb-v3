import {
    MapPin,
    CalendarClock,
    Sparkles,
    Play,
    Plus,
    Calendar
} from "lucide-react";
import { getEvents } from "@/lib/api";
import Link from "next/link";

export default async function Events() {
    const eventsList = await getEvents();
    return (
        <section id="events" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto p-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4 inline-block ml-2" />
                        الفعاليات والأحداث
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                        سجلنا الحافل
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        نحن لا نكتفي بالوعود، بل نصنع الأحداث التي تثبت مصداقيتنا. تابع أحدث فعالياتنا.
                    </p>
                </div>

                {/* Events List */}
                <div className="space-y-12">
                    {eventsList.map((event) => (
                        <div key={event.id} className="glass-card p-1 border border-purple-500/30 relative group hover:border-purple-500/50 transition-colors duration-300">
                            {/* Glowing effect for upcoming events */}
                            {event.status === "upcoming" && (
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 blur-xl -z-10"></div>
                            )}

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

                                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-white mb-4 mt-8 md:mt-0">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center gap-4 mb-6">
                                            <p className="text-purple-400 text-lg flex items-center gap-2">
                                                <MapPin className="w-5 h-5" />
                                                {event.location}
                                            </p>
                                        </div>
                                        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                                            {event.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4">
                                            <Link
                                                href={`/events/${event.id}`}
                                                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-600 transition-colors flex items-center gap-2"
                                            >
                                                تفاصيل أكثر
                                            </Link>
                                            <a
                                                href="tel:+201000000000"
                                                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2"
                                            >
                                                <span>اتصل للحجز</span>
                                                <Play className="w-4 h-4 fill-current" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Date Box */}
                                    <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
                                        <div className="text-center px-5 py-3 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[80px]">
                                            <span className="block text-2xl font-bold text-white">{event.date.day}</span>
                                            <span className="text-xs text-slate-400">يوم</span>
                                        </div>
                                        <div className="text-center px-5 py-3 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[80px]">
                                            <span className="block text-2xl font-bold text-white">{event.date.month}</span>
                                            <span className="text-xs text-slate-400">شهر</span>
                                        </div>
                                        <div className="text-center px-5 py-3 bg-slate-800/50 rounded-xl border border-slate-700 min-w-[80px]">
                                            <span className="block text-2xl font-bold text-white">{event.date.year}</span>
                                            <span className="text-xs text-slate-400">سنة</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* "More Coming Soon" Card */}
                    <div className="glass-card border border-slate-800/50 border-dashed rounded-3xl p-8 md:p-12 text-center group hover:bg-slate-800/20 transition-all duration-300">
                        <div className="w-20 h-20 mx-auto bg-slate-800/50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Plus className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">المزيد من الفعاليات قريباً</h3>
                        <p className="text-slate-400 max-w-lg mx-auto">
                            نعمل باستمرار على تنظيم فعاليات ولقاءات جديدة لتعزيز التواصل مع عملائنا وشركائنا. تابعونا لمعرفة كل جديد.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
