import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 mb-6 border border-blue-500/20">
                        <BookOpen size={20} />
                        <span className="font-bold">فلسفتنا</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        لماذا تكتفي بالجدران… <br />
                        <span className="text-blue-400">بينما يمكنك الحصول على القيمة الحقيقية للعقار؟</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        معظم المعروض في السوق يعتمد على فكرة: "شقة طوب أحمر، والباقي عليك".
                        نحن في برايم توب بيلد نبدأ من سؤال مختلف تماماً:
                        <br />
                        <span className="font-bold text-white block mt-2">هل جئت لتشتري شقة فقط… أم جئت لتشتري عيشة؟</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "سياق متكامل", desc: "لا نبيع وحدات سكنية منفصلة عن سياقها، بل نطوّر عمارات متكاملة الخدمات والتشطيب الخارجي." },
                        { title: "باقة واحدة", desc: "نوفّر لك حصة في المصعد، ومداخل راقية، وأبواباً مصفحة، وجراج، ومخزناً، وألوميتال ضمن العقد." },
                        { title: "سعر حقيقي", desc: "كل هذا بسعر حقيقي أقل من متوسط سعر السوق في المنطقة." },
                        { title: "وضوح تام", desc: "وضوح كامل في التفاصيل والمواصفات منذ اللحظة الأولى للتعاقد." }
                    ].map((item, index) => (
                        <div key={index} className="glass-card p-6 rounded-xl hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        نحن لا نبيع جدراناً... نحن نصنع حياة.
                    </p>
                </div>
            </div>
        </section>
    );
}
