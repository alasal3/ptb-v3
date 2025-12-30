"use client";

import { TrendingUp, Wallet, Zap, ArrowUpRight } from "lucide-react";

export default function Investment() {
    return (
        <section id="investment" className="py-20 bg-slate-900/50">
            <div className="container mx-auto p-4">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                        القيمة الحقيقية
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        شقتك مشروع استثماري من اليوم الأول
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        سواء كنت هتشتريها للسكن أو للاستثمار، أنت الكسبان
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">ربح فوري</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            الفارق السعري (الـ 40%) هو مكسب مباشر لك بمجرد التعاقد.
                        </p>
                        <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                            <p className="text-sm text-green-300">
                                <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
                                عملاؤنا الذين دخلوا معنا منذ سنة، يبيعون وحداتهم اليوم بربح ممتاز لأنهم اشتروا بـ"السعر الحقيقي".
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Wallet className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">أرخص من السوق</h3>
                        <p className="text-slate-400 leading-relaxed">
                            نوفر شقق "استلام فوري" أو تحت الإنشاء بأسعار أقل من المنافسين، مما يمنحك أفضلية سعرية عند إعادة البيع أو التأجير.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Zap className="w-8 h-8 text-amber-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">السرعة في التنفيذ</h3>
                        <p className="text-slate-400 leading-relaxed">
                            في سنة واحدة فتحنا <span className="text-amber-400 font-bold">15 مشروعاً</span> (بعضها تسليم فوري، والبعض الآخر يكتمل خلال أيام). نلتزم بالجدول الزمني كمعيار أساسي.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
