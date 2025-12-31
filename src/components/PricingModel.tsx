import React from 'react';
import { DollarSign, Handshake, TrendingUp } from 'lucide-react';

export default function PricingModel() {
    return (
        <section id="pricing" className="py-20 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        نموذج التسعير الحقيقي
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        تتبنى Prime Top Build نموذج تسعير ثوريًا يعتمد على الشراكة لا الاستغلال
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 bg-blue-500/10 rounded-bl-2xl">
                            <DollarSign className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 mt-4">هامش ربح ثابت</h3>
                        <p className="text-slate-300 leading-relaxed">
                            نعلن بوضوح أن هامش الربح الفعلي من العميل هو
                            <span className="text-blue-400 font-bold text-xl mx-1">10% فقط</span>.
                        </p>
                        <p className="text-xs text-slate-500 mt-4 border-t border-slate-700/50 pt-4">
                            (الـ 20% المعلنة كنسبة ربح هي إطار عام للمشروع، لكن الربح المباشر من جيب العميل لا يتجاوز 10%، والباقي يأتي من إدارة أصول المشروع والمرافق)
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 bg-purple-500/10 rounded-bl-2xl">
                            <Handshake className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 mt-4">نحن شركاء</h3>
                        <p className="text-slate-300 leading-relaxed">
                            الشركة كمطور تعتبر نفسها مشتريًا مع العميل؛ نتحمل نفس الالتزامات، نفس المخاطر، ونفس الحسابات.
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-green-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 bg-green-500/10 rounded-bl-2xl">
                            <TrendingUp className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 mt-4">الاستدامة هي المكسب</h3>
                        <p className="text-slate-300 leading-relaxed">
                            نؤمن أن مكسب الشركة الحقيقي لا يأتي من الضغط على العميل، بل من الاستدامة، السمعة الطيبة، تكرار البيع، وارتفاع قيمة العلامة التجارية.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
