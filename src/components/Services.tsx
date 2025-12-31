import React from 'react';
import { Shield, Settings, Wallet, Activity, Smartphone, HeartHandshake, Eye } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        الخدمات وما بعد البيع
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        نقدم خدمات بمستوى "الكمبوند" داخل عمارات منفصلة، لأننا نؤمن أن السكن أسلوب حياة
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { icon: Shield, title: "أمن وحراسة", color: "text-blue-400", bg: "bg-blue-500/10" },
                        { icon: Settings, title: "نظام إدارة متكامل", color: "text-purple-400", bg: "bg-purple-500/10" },
                        { icon: Wallet, title: "وديعة صيانة واضحة", color: "text-green-400", bg: "bg-green-500/10" },
                        { icon: Activity, title: "الحفاظ على الرقي", color: "text-orange-400", bg: "bg-orange-500/10" }
                    ].map((service, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300 text-center">
                            <div className={`w-14 h-14 ${service.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>
                            <h3 className="text-lg font-bold text-white">{service.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Technology & Relationship Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4"></div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Smartphone className="w-8 h-8 text-blue-400" />
                            منظومة التكنولوجيا
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            نستخدم نظامًا (System) داخليًا وموقعًا إلكترونيًا يتيح التوثيق والمتابعة والوضوح لكل الأطراف. التكنولوجيا هنا ليست للمظهر، بل هي أداة لحماية العميل وحماية الشركة، ولضمان أن كل شيء يسير بنظام دقيق.
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4"></div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <HeartHandshake className="w-8 h-8 text-purple-400" />
                            علاقتنا بالعميل
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-300">
                                <Eye className="w-4 h-4 text-purple-400" />
                                نشجعك على رؤية المقايسة.
                            </li>
                            <li className="flex items-center gap-2 text-slate-300">
                                <Eye className="w-4 h-4 text-purple-400" />
                                ندعوك لسؤال المكاتب الهندسية ومقارنة الأسعار.
                            </li>
                            <li className="flex items-center gap-2 text-slate-300">
                                <Eye className="w-4 h-4 text-purple-400" />
                                نطلب منك أن تقرأ وتفهم قبل أن توقع.
                            </li>
                        </ul>
                        <p className="mt-4 text-sm text-slate-400 border-t border-slate-700/50 pt-3">
                            ما نقوله على وسائل التواصل هو نفسه المكتوب في العقد.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
