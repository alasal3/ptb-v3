import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        عن الشركة
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="glass-card p-8 rounded-2xl border-r-4 border-r-blue-500">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Users className="w-8 h-8 text-blue-400" />
                                من نحن؟ ولماذا الآن؟
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                نحن شركة تطوير عقاري تأسست بإيمان راسخ بأن السوق العقاري يحتاج إلى تصحيح. السوق ممتلئ بالأرقام، ولكنه يفتقر إلى الحساب الدقيق. نرى عملاء يدفعون هوامش ربح ضخمة للمطورين تصل إلى 60% تحت غطاء من الشعارات التسويقية البراقة وأنظمة التقسيط الطويلة التي تخفي التكلفة الحقيقية.
                                <br /><br />
                                مشكلتنا ليست في السعر العالي فحسب، بل في "غياب الحقيقة". لذلك، جئنا لنقدم نموذجًا مختلفًا جذريًا.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border-r-4 border-r-purple-500">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <Target className="w-8 h-8 text-purple-400" />
                                رسالتنا
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                أن نرتقي بالعميل، نحترم عقله، نحمي أمواله، ونقدم له سكنًا يليق به. طريقنا هو طريق الحقيقة، لا طريق الوهم.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                            alt="عن الشركة"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                        <div className="absolute bottom-6 right-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck className="w-6 h-6 text-blue-400" />
                                <span className="font-bold">ثقة ومصداقية</span>
                            </div>
                            <p className="text-sm text-slate-300">نأسس لعلاقة طويلة الأمد مبنية على الشفافية.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
