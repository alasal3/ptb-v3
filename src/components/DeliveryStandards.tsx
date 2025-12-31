import React from 'react';
import { Home, CheckSquare, Layers } from 'lucide-react';

export default function DeliveryStandards() {
    return (
        <section id="delivery" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        مواصفات التسليم
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        نحن نؤمن بأن العميل يستحق استلام وحدة جاهزة للسكن في بيئة محترمة
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Unit Specs */}
                    <div className="glass-card p-8 rounded-2xl border-t-4 border-t-blue-500 hover:bg-slate-800/60 transition-colors">
                        <div className="flex items-center gap-4 mb-6 border-b border-slate-700/50 pb-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                <Home className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">مواصفات الوحدة</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                                <div>
                                    <span className="text-white font-bold block mb-1">الشقة:</span>
                                    <span className="text-slate-400">طوب أحمر (من الداخل) لتترك لك حرية التقسيم والديكور.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                                <div>
                                    <span className="text-white font-bold block mb-1">باب الشقة:</span>
                                    <span className="text-slate-400">باب مصفح عالي الجودة.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Building Specs */}
                    <div className="glass-card p-8 rounded-2xl border-t-4 border-t-purple-500 hover:bg-slate-800/60 transition-colors">
                        <div className="flex items-center gap-4 mb-6 border-b border-slate-700/50 pb-4">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <Layers className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">مواصفات المبنى</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <CheckSquare className="w-5 h-5 text-purple-400 shrink-0" />
                                <span className="text-slate-300">واجهات مشطبة بالكامل.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckSquare className="w-5 h-5 text-purple-400 shrink-0" />
                                <span className="text-slate-300">مداخل كاملة يتشطيب فاخر.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckSquare className="w-5 h-5 text-purple-400 shrink-0" />
                                <span className="text-slate-300">مصعد (أسانسير) يعمل بكفاءة.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckSquare className="w-5 h-5 text-purple-400 shrink-0" />
                                <span className="text-slate-300">باب مصفح رئيسي للعمارة.</span>
                            </li>
                            <li className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 mt-2">
                                <CheckSquare className="w-5 h-5 text-green-400 shrink-0" />
                                <span className="text-white font-bold">الإضافات: باكية جراج خاصة + مخزن لكل وحدة.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
