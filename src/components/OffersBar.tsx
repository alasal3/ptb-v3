"use client";

import { useState, useEffect } from "react";
import { X, Bell } from "lucide-react";

interface OffersBarProps {
    news: string[];
}

export default function OffersBar({ news }: OffersBarProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // Auto-cycle news
    useEffect(() => {
        if (news.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % news.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [news.length]);

    if (!isVisible || !news || news.length === 0) return null;

    const currentText = news[currentIndex];

    return (
        <div className="w-full bg-slate-900/90 backdrop-blur-md border-b border-white/5 text-white relative overflow-hidden z-[60] shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">

                {/* News Content */}
                <div className="flex-1 flex items-center justify-center overflow-hidden min-h-[1.5rem]">
                    <div className="flex items-center gap-3 w-full justify-center">
                        <Bell className="w-4 h-4 text-blue-400 shrink-0 animate-pulse hidden sm:block" />
                        <div
                            key={currentIndex}
                            className="animate-in fade-in slide-in-from-bottom-2 duration-500 text-center font-medium text-slate-200 text-sm md:text-base leading-snug"
                        >
                            {currentText}
                        </div>
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-slate-400 hover:text-white transition-colors shrink-0 p-1 hover:bg-white/10 rounded-full cursor-pointer relative z-10"
                    aria-label="Close news bar"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_4s_infinite] pointer-events-none" />
        </div>
    );
}
