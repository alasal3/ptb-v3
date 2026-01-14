import React from 'react';
import { DollarSign, Handshake, TrendingUp } from 'lucide-react';

export default function PricingModel() {
    return (
        <section id="pricing" className="py-20 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        القيمة الحقيقية للعقار… <br />
                        <span className="text-green-400">بسعر أقل من سعر السوق</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        نحن لا ننافس في سعر الشقة الطوب الأحمر، بل ننافس في تكلفة العيشة الحقيقية
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors h-full">
                        <div className="absolute top-0 left-0 p-4 bg-blue-500/10 rounded-br-2xl">
                            <TrendingUp className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 mt-4">المعادلة الصعبة</h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            عندما تضيف تكلفة التشطيب الخارجي، وتجهيز المداخل، وتركيب الأبواب المصفحة، وتجهيز الجراج والمخازن والألوميتال، واختيار نظام إدارة وخدمات للمبنى… ستكتشف أن ما نوفّره لك في باقة واحدة متكاملة هو في الواقع <span className="text-green-400 font-bold">أقل من مجموع ما ستدفعه منفصلاً</span>.
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-green-500/50 transition-colors h-full flex flex-col justify-center text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">وعدنا لكم</h3>
                        <div className="text-4xl font-bold text-white mb-6">
                            سعر <span className="text-blue-400">حقيقي</span> بلا تكاليف مخفية
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg mb-8">
                            مع برايم توب بيلد، ما تدفعه هو السعر الحقيقي للعقار… من دون لعب أو بنود غامضة.
                        </p>
                        <a href="#contact" className="inline-block btn-primary py-3 px-8 rounded-xl font-bold self-center">
                            اعرف التفاصيل الكاملة للأسعار
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
