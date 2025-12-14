"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section id="hero" className="min-h-[70vh] flex items-center">
            <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-center lg:text-right">
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide text-white">
                        نعيد تعريف الاستثمار العقاري..
                        <span className="block text-blue-400 mt-4 text-3xl md:text-5xl">
                            جودة، أمان، وشفافية مطلقة
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-slate-300 leading-relaxed">
                        من رحم تحديات السوق، انطلقت Prime Top Build لتقدم الحل الأمثل بنظام &quot;اتحاد الملاك&quot; والمظلة الخدمية المتكاملة. نضمن لك حيازة الأرض بعقود حقيقية، وتنفيذاً هندسياً دقيقاً، واستدامة لخدماتك بمرجعية شرعية.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a
                            href="#contact"
                            className="inline-block btn-primary font-bold py-3 px-10 rounded-xl text-lg hover:shadow-blue-500/50 hover:-translate-y-1 transition-all"
                        >
                            ابدأ رحلتك معنا
                        </a>
                        <a
                            href="#contact"
                            className="inline-block border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-10 rounded-xl text-lg hover:-translate-y-1 transition-all"
                        >
                            تواصل مع مستشارك العقاري
                        </a>
                    </div>
                </div>
                <div className="hidden lg:block relative h-[500px] w-full glass-card p-2 rounded-3xl overflow-hidden group">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <video
                            ref={videoRef}
                            controls
                            playsInline
                            poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src="https://res.cloudinary.com/degasaeyb/video/upload/v1739970335/gm7wrgohk8yghokx3brb.mp4" type="video/mp4" />
                            المتصفح الخاص بك لا يدعم تشغيل الفيديو.
                        </video>

                        {/* Persistent Dark Overlay */}
                        <div className="absolute inset-0 bg-slate-900/25 pointer-events-none z-10 transition-opacity duration-300"></div>

                        {/* Play Button Overlay */}
                        {!isPlaying && (
                            <div
                                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
                                onClick={handlePlay}
                            >
                                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
