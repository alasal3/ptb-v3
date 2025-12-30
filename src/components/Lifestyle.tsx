"use client";

import { ShieldCheck, Sparkles, Landmark, Banknote } from "lucide-react";

export default function Lifestyle() {
    return (
        <section id="lifestyle" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="md:w-1/2">
                        <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                            خدماتنا - رفاهية الكمبوند
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            خدمات متكاملة.. <br />
                            <span className="text-blue-400">وإدارة مالية ذكية</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            نحول المبنى المستقل إلى "ميني كمبوند" يوفر لك الراحة والأمان، وندير أموال الصيانة بذكاء لضمان استدامة الخدمات.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Security */}
                        <div className="glass-card p-6 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                            <ShieldCheck className="w-10 h-10 text-blue-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">الأمن والحراسة</h4>
                            <p className="text-slate-400 text-sm">
                                منظومة أمنية 24/7 وكاميرات مراقبة تغطي المداخل والمحيط لضمان أمانك وأمان أسرتك.
                            </p>
                        </div>
                        {/* Cleaning */}
                        <div className="glass-card p-6 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                            <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">النظافة والصيانة</h4>
                            <p className="text-slate-400 text-sm">
                                فريق متخصص للنظافة وللاهتمام بالمرافق والمصاعد بشكل دوري لبيئة سكنية راقية.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Investment Deposit Feature */}
                <div className="glass-card p-8 md:p-12 border-2 border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>

                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/3 text-center lg:text-right">
                            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-amber-500/20 mb-6">
                                <Landmark className="w-12 h-12 text-amber-400" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                نظام "وديعة الصيانة الاستثمارية"
                            </h3>
                            <span className="inline-block px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-full">
                                حصري
                            </span>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold">1</div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">استثمار ذكي</h4>
                                    <p className="text-slate-400 text-sm">بدلاً من استهلاك أموال الصيانة حتى تنفد، نقوم باستثمار الوديعة في قنوات بنكية إسلامية.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold">2</div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">تمويل ذاتي</h4>
                                    <p className="text-slate-400 text-sm">يتم الصرف على خدمات المبنى (أمن، نظافة، إنارة) من <span className="text-amber-400 font-semibold">الأرباح فقط</span>.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 md:col-span-2">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold">3</div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">حفظ الأصول</h4>
                                    <p className="text-slate-400 text-sm">يظل أصل الوديعة محفوظاً، مما يضمن استمرار جودة الخدمات مدى الحياة وحفظ قيمة عقارك دون مصاريف إضافية.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
