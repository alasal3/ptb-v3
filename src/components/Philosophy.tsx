import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 mb-6 border border-blue-500/20">
                        <BookOpen size={20} />
                        <span className="font-bold">شفافية مطلقة</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        فلسفتنا: الكتاب المفتوح
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        نعمل بفلسفة بسيطة وواضحة: "البناء على المكشوف".
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "سعر الأرض الحقيقي", desc: "تعرف سعر المتر الفعلي للأرض دون زيادات خفية" },
                        { title: "تكلفة البناء الفعلية", desc: "نطلعك على تكاليف المواد والمصنعية بشفافية" },
                        { title: "هامش الربح المحدد", desc: "نسبة ربح ثابتة ومعلنة لا تتغير" },
                        { title: "أين يذهب مالك؟", desc: "تعلم سبب دفع كل جنيه ومساره الحقيقي" }
                    ].map((item, index) => (
                        <div key={index} className="glass-card p-6 rounded-xl hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-2">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        نحن نؤمن بأن "الشفافية ليست خيارًا، بل هي الأساس".
                    </p>
                </div>
            </div>
        </section>
    );
}
