import React from 'react';
import { Target, Eye, Quote, Award, Users, Building2 } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-slate-900">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6">
                        قصتنا ورؤيتنا
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                        نحن <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Prime Top Build</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        نحن شركة تطوير عقاري تأسست برؤية واضحة تهدف إلى تغيير مفهوم السكن والاستثمار. في Prime Top Build، لا نبني مجرد جدران، بل نبني <span className="text-white font-bold">"قيمة"</span>.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { icon: Building2, label: "حجم استثمارات", value: "+300M" },
                        { icon: Users, label: "أسرة وعميل", value: "+150" },
                        { icon: Award, label: "سنوات خبرة", value: "+10" },
                        { icon: Target, label: "مشروع سكني", value: "+20" }
                    ].map((stat, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl text-center group hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2">
                            <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-8 animate-in slide-in-from-right-10 duration-700">
                        <div className="glass-card p-8 rounded-3xl border-r-4 border-r-blue-500 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Eye className="w-6 h-6 text-blue-400" />
                                رؤيتنا
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                أن نكون المعيار الذهبي للجودة الإنشائية في السوق العقاري، من خلال تقديم منتج عقاري يجمع بين متانة البناء، رقي المظهر الخارجي، وحرية التصميم الداخلي، مع ضمان استدامة المبنى لسنوات طويلة.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border-r-4 border-r-purple-500 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Target className="w-6 h-6 text-purple-400" />
                                مهمتنا
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                نركز جهودنا بالكامل على جودة الإنشاءات (الخراسانات والأساسات) لأنها الأصل الذي يحفظ قيمة عقارك مع الزمن. نجحنا في وقت قياسي في كسب ثقة أكثر من 150 أسرة ومستثمر.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group animate-in slide-in-from-left-10 duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                            alt="عن الشركة"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                        <div className="absolute bottom-10 right-10 text-white max-w-md">
                            <div className="inline-block px-4 py-2 bg-blue-500 rounded-lg text-sm font-bold mb-4">قيمنا الأساسية</div>
                            <div className="font-bold text-3xl mb-4">الأمانة الهندسية</div>
                            <p className="text-slate-200 text-lg leading-relaxed">
                                نستثمر في الأساسات والبنية التحتية للمبنى بنفس قدر اهتمامنا بالشكل الجمالي، لضمان استثمار آمن يدوم للعمر.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chairman's Message */}
                <div className="max-w-5xl mx-auto">
                    <div className="glass-card p-8 md:p-16 rounded-[3rem] border border-blue-500/20 relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -z-10"></div>

                        <Quote className="w-12 h-12 text-blue-400 mx-auto mb-8 opacity-50" />

                        <h3 className="text-3xl font-bold text-white mb-2">كلمة رئيس مجلس الإدارة</h3>
                        <p className="text-slate-400 mb-10">Chairman's Message</p>

                        <div className="space-y-6 text-xl text-slate-300 leading-relaxed font-light">
                            <p>
                                "منذ اللحظة الأولى لتأسيس <span className="text-white font-medium">Prime Top Build</span>، كان هدفنا ليس مجرد زيادة عدد المباني، بل تقديم <span className="text-blue-400 font-bold">'القيمة الحقيقية للعقار'</span> كما يعد شعارنا.
                            </p>
                            <p>
                                في سوق يتسم بالتنافسية، اخترنا أن نتميز بـ <span className="text-green-400 font-bold">'الأمانة الهندسية'</span>؛ فنحن نستثمر في الأساسات والبنية التحتية للمبنى بنفس قدر اهتمامنا بالشكل الجمالي.
                            </p>
                            <p>
                                نجاحنا في ضخ استثمارات تجاوزت 300 مليون جنيه وكسب ثقة مئات العملاء في أقل من عام ونصف، هو دليل على أن الجودة والشفافية هما العملة الرابحة.
                            </p>
                            <p className="text-white font-medium text-2xl pt-4">
                                "نعدكم بأن تظل مشاريعنا، سواء السكنية أو المول التجاري الجديد، علامات فارقة تضمن لكم سكناً آمناً واستثماراً متنامياً."
                            </p>
                        </div>

                        {/* Signature or Name could go here if available */}
                    </div>
                </div>
            </div>
        </section>
    );
}
