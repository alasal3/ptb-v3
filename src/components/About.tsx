"use client";

import {
    FileCheck,
    FileX,
    Shield,
    Landmark,
    Building2,
    HardHat,
    Key,
    Users,
    MapPin,
    Camera,
    Wrench,
    BadgeCheck,
    ArrowLeftRight
} from "lucide-react";

import { Calculator, CheckCircle2, BadgePercent, Scale } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-slate-900/50 -z-10"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto p-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                        فلسفتنا: لعبة السعر الحقيقي
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        الحسبة بسيطة.. والمكسب لك
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        في "برايم توب بيلد"، نحن لا نبيع بأسعار السوق المبالغ فيها. معادلتنا واضحة وشفافة:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/10 via-blue-500/30 to-blue-500/10 -translate-y-1/2 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10">
                        <div className="glass-card p-8 text-center h-full hover:-translate-y-2 transition-transform duration-300 border border-slate-700/50 group">
                            <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full border border-blue-500/30 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                <Calculator className="w-10 h-10 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">نحسب التكلفة بدقة</h3>
                            <p className="text-slate-400 leading-relaxed">
                                نحسب تكلفة الأرض والمباني بدقة (بالورقة والقلم) وأمامك بشفافية تامة.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10">
                        <div className="glass-card p-8 text-center h-full hover:-translate-y-2 transition-transform duration-300 border border-slate-700/50 group">
                            <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full border border-green-500/30 flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                                <BadgePercent className="w-10 h-10 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">هامش ربح ثابت</h3>
                            <p className="text-slate-400 leading-relaxed">
                                نضيف هامش ربح ثابت <span className="text-green-400 font-bold">10% فقط</span> لنا على التكلفة الفعلية.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative z-10">
                        <div className="glass-card p-8 text-center h-full hover:-translate-y-2 transition-transform duration-300 border border-slate-700/50 group">
                            <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full border border-purple-500/30 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-10 h-10 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">النتيجة؟</h3>
                            <p className="text-slate-400 leading-relaxed">
                                تمتلك وحدتك بخصم يقترب من <span className="text-purple-400 font-bold">40%</span> عن أي جار لك في نفس المنطقة.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Challenge Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card p-8 md:p-12 text-center border-2 border-blue-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-500/10 mb-6">
                            <Scale className="w-8 h-8 text-blue-400" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">تحدي المصداقية</h3>

                        <blockquote className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic">
                            &quot;خد المقايسة في إيدك، ولف بيها على أي مكتب هندسي في مصر.. لو لقتنا مزودين مليم، <span className="text-red-400 font-bold decoration-red-500 underline decoration-wavy">متشتريش</span>.&quot;
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
