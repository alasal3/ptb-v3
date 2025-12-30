"use client";

import { Building2, HardHat, PaintBucket, ShieldCheck } from "lucide-react";

const services = [
    {
        id: 1,
        title: "ذراع التطوير",
        description: "انتقاء استراتيجي للأرض (موقع متميز + أوراق قانونية سليمة 100%).",
        icon: Building2,
        color: "blue",
    },
    {
        id: 2,
        title: "ذراع المقاولات",
        description: "تنفيذ دقيق للخرسانات والمباني، وتسليم في الموعد (نظام سنتين مريح للجميع).",
        icon: HardHat,
        color: "emerald",
    },
    {
        id: 3,
        title: "ذراع التشطيبات",
        description: "إشراف هندسي لتحويل الوحدة إلى سكن راقٍ.",
        icon: PaintBucket,
        color: "amber",
    },
    {
        id: 4,
        title: "إدارة الممتلكات (اتحاد الملاك)",
        description: "نؤسس اتحاد الملاك قانونياً لضمان حقوقك وتنظيم العلاقة بين الجيران.",
        icon: ShieldCheck,
        color: "purple",
    },
];

const colorClasses = {
    blue: {
        bg: "bg-blue-500/20",
        text: "text-blue-300",
        hoverBg: "group-hover:bg-blue-500",
        hoverText: "group-hover:text-blue-400",
    },
    emerald: {
        bg: "bg-emerald-500/20",
        text: "text-emerald-300",
        hoverBg: "group-hover:bg-emerald-500",
        hoverText: "group-hover:text-emerald-400",
    },
    amber: {
        bg: "bg-amber-500/20",
        text: "text-amber-300",
        hoverBg: "group-hover:bg-amber-500",
        hoverText: "group-hover:text-amber-400",
    },
    purple: {
        bg: "bg-purple-500/20",
        text: "text-purple-300",
        hoverBg: "group-hover:bg-purple-500",
        hoverText: "group-hover:text-purple-400",
    },
};

export default function Services() {
    return (
        <section id="services" className="py-20 relative">
            <div className="container mx-auto p-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm font-medium mb-6">
                        منهجية العمل
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-l from-[#C69C2C] via-[#D4AF37] to-[#EAD27A] leading-tight pb-2">
                        نظام المظلة الواحدة.. التزام "مسطرة"
                    </h3>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        ندير مشروعك عبر 4 أذرع رئيسية لضمان الجودة والجدول الزمني
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        const colors = colorClasses[service.color as keyof typeof colorClasses];
                        return (
                            <div
                                key={service.id}
                                className="block group h-full"
                            >
                                <div className="glass-card p-8 h-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20 border border-slate-700/50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10 flex flex-col items-center text-center h-full">
                                        <div className={`mb-6 p-4 rounded-xl ${colors.bg} ${colors.text} ${colors.hoverBg} group-hover:text-white transition-all duration-300 group-hover:scale-110`}>
                                            <Icon size={48} strokeWidth={1.5} />
                                        </div>
                                        <h4 className={`text-xl font-bold mb-4 text-white ${colors.hoverText} transition-colors`}>
                                            {service.title}
                                        </h4>
                                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
