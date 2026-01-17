import React from 'react';
import { DollarSign, Users, Building2, Clock } from 'lucide-react';

export default function StatsBar() {
    const stats = [
        {
            icon: DollarSign,
            value: "+300",
            unit: "مليون ج.م",
            label: "حجم استثماراتنا في السوق المصري",
            color: "text-green-400",
            bgColor: "bg-green-500/20"
        },
        {
            icon: Users,
            value: "+150",
            unit: "عميل",
            label: "وثقوا في Prime Top Build",
            color: "text-blue-400",
            bgColor: "bg-blue-500/20"
        },
        {
            icon: Building2,
            value: "18",
            unit: "مشروع",
            label: "(سكني وتجاري) تحت التنفيذ والتسليم",
            color: "text-purple-400",
            bgColor: "bg-purple-500/20"
        },
        {
            icon: Clock,
            value: "< 1.5",
            unit: "سنة",
            label: "مدة زمنية قياسية حققنا فيها هذه النجاحات",
            color: "text-orange-400",
            bgColor: "bg-orange-500/20"
        }
    ];

    return (
        <section id="stats" className="py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 group"
                        >
                            <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                <stat.icon className={`w-7 h-7 ${stat.color}`} />
                            </div>
                            <div className="mb-2">
                                <span className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                                    {stat.value}
                                </span>
                                <span className="text-lg text-white font-bold mr-2">
                                    {stat.unit}
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
