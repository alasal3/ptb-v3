"use client";

import { Users, FileCheck, HardHat, PaintBucket, Key, ShieldCheck } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "الاختيار والتأسيس",
        description: "دراسة احتياجاتك بدقة، وانضمامك لنخبة من الشركاء في اتحاد الملاك لمشروع تم اختيار موقعه بعناية فائقة استثمارياً وسكنياً.",
        icon: Users,
    },
    {
        id: 2,
        title: "الحيازة القانونية",
        description: "ننتقل فوراً لإجراءات الشراء الفعلي والحيازة القانونية للأرض. نضمن أن مدخرات الاتحاد تحولت إلى أصل عقاري مملوك.",
        icon: FileCheck,
    },
    {
        id: 3,
        title: "التنفيذ والبناء",
        description: "تبدأ شركة المقاولات التابعة لنا العمل فوراً. لا توقفات ولا تباطؤ، مع إمكانية متابعة سير العمل والالتزام بالجدول الزمني بشفافية تامة.",
        icon: HardHat,
    },
    {
        id: 4,
        title: "التشطيب الهندسي",
        description: "تستلم شركة التشطيبات الموقع لتنفيذ الأعمال الداخلية بإشراف هندسي صارم، لضمان جودة الحياة داخل وحدتك.",
        icon: PaintBucket,
    },
    {
        id: 5,
        title: "الاستلام",
        description: "تسليم الوحدة جاهزة للسكن في الموعد المتفق عليه، خالية من الملاحظات، وجاهزة لبدء حياتك الجديدة.",
        icon: Key,
    },
    {
        id: 6,
        title: "الحياة المستدامة",
        description: "تفعيل منظومة الأمن والكاميرات والحراسة فوراً. البدء في استثمار وديعة الصيانة في البنوك الإسلامية لضمان تدفق مالي يغطي مصاريف تشغيل المبنى.",
        icon: ShieldCheck,
    },
];

export default function Process() {
    return (
        <section id="process" className="py-20 relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto p-4">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        رحلة امتلاكك
                    </h3>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        خطوات مدروسة تضمن حقك من الفكرة وحتى مفتاح البيت
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.id} className="relative group">
                                <div className="glass-card p-6 h-full flex flex-col items-center text-center hover:bg-slate-800/50 transition-colors duration-300">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                                        {step.id}
                                    </div>
                                    <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/10 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 z-10">
                                        <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">
                                        {step.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
