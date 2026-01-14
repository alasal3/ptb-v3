import React from 'react';
import { Shield, Settings, Wallet, Activity, Smartphone, HeartHandshake, Eye } from 'lucide-react';

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        نظام خدمات..
                        <span className="text-purple-400 block mt-2">يجعل العمارة أقرب إلى كمبوند</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        الخدمة الحقيقية في العقار لا تنتهي عند تسليم الشقة، بل تبدأ بعد سكناك الفعلي. لذلك، تعتمد برايم توب بيلد نظاماً لإدارة خدمات المبنى يهدف إلى أن تكون تجربتك اليومية مريحة ومنظمة.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="glass-card p-8 rounded-2xl hover:bg-slate-800/60 transition-colors group text-center">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Settings className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">تنظيم الخدمات المشتركة</h3>
                        <p className="text-slate-300 leading-relaxed">
                            تنظيم استخدام المصعد والمداخل والمساحات المشتركة ووضع قواعد واضحة تحافظ على راحة جميع السكان.
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl hover:bg-slate-800/60 transition-colors group text-center">
                        <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Activity className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">متابعة حالة المبنى</h3>
                        <p className="text-slate-300 leading-relaxed">
                            مراقبة دورية لحالة المداخل والواجهات والخدمات الأساسية والحرص على بقاء صورة العمارة لائقة مع مرور الوقت.
                        </p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl hover:bg-slate-800/60 transition-colors group text-center">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <HeartHandshake className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">تنسيق شؤون الصيانة</h3>
                        <p className="text-slate-300 leading-relaxed">
                            آلية واضحة للإبلاغ عن الأعطال والملاحظات في الخدمات المشتركة وتنسيق أعمال الصيانة العامة بطريقة منظّمة.
                        </p>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-slate-700/50">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-right">
                        <div className="p-4 bg-slate-800 rounded-full">
                            <Eye className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">النتيجة التي نعدك بها</h3>
                            <p className="text-slate-300 text-lg">
                                مظهر عام منظّم، تجربة يومية أكثر راحة، وشعور بأنك تعيش في مجتمع سكني منظم داخل عمارة، لا في مبنى عشوائي بلا إدارة.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
