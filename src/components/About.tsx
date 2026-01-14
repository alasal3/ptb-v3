import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        من نحن؟
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        برايم توب بيلد هي شركة تطوير عقاري، انطلقت من فكرة بسيطة وواضحة:
                        <br />
                        "العقار ليس منتجاً نصف منجَز، بل تجربة سكنية متكاملة تبدأ من لحظة دخولك باب العمارة، لا من لحظة انتهاء التشطيب على نفقتك."
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="glass-card p-6 rounded-2xl border-r-4 border-r-blue-500">
                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <Target className="w-6 h-6 text-blue-400" />
                                رسالتنا
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                أن نقدّم  عقاراً يعبّر عن قيمته الفعلية، من خلال مشروعات سكنية متكاملة تحترم وقت العميل وماله، وتوفّر له حياة يومية منظمة ومريحة.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border-r-4 border-r-purple-500">
                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <Users className="w-6 h-6 text-purple-400" />
                                رؤيتنا
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                أن نكون الاسم الأبرز في السوق العقاري عندما يُذكر مفهوم "القيمة الحقيقية للعقار". أن نعيد تعريف ما يعنيه "شراء شقة" من كونه شراء جدران خام إلى كونه استثماراً في أسلوب حياة متكامل.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl border-r-4 border-r-green-500">
                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-green-400" />
                                قيمنا
                            </h3>
                            <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                <li><strong>الوضوح:</strong> نعرض لك ما تحصل عليه بدقة، بلا مبالغة، وبلا بنود مخفية.</li>
                                <li><strong>الالتزام:</strong> احترام مواعيد التسليم والمواصفات المتفق عليها هو أساس علاقتنا.</li>
                                <li><strong>القيمة الحقيقية:</strong> كل خدمة نضيفها هدفها زيادة راحة حياتك اليومية وقيمة استثمارك.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                            alt="عن الشركة"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                        <div className="absolute bottom-6 right-6 text-white max-w-sm">
                            <div className="font-bold text-xl mb-2">معادلتنا الصعبة</div>
                            <p className="text-slate-300 text-sm">
                                سعر أقل من متوسط سعر السوق + خدمات وتشطيبات تضيف قيمة حقيقية للعقار على المدى الطويل.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
