import React from 'react';
import { Building2, Home, ArrowUpFromLine, ShieldCheck, Car, Package, MonitorSmartphone, LayoutGrid } from 'lucide-react';

export default function Features() {
    return (
        <section id="features" className="py-20 bg-slate-900/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        أكثر من مجرد شقة... <br />
                        <span className="text-blue-400">ما الذي يشمله عقارك مع برايم توب بيلد؟</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        عندما تشتري وحدة في أحد مشروعات برايم توب بيلد، فأنت لا تحصل على أربعة جدران وسقف فقط، بل على مجموعة متكاملة من المزايا والخدمات
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="glass-card p-6 rounded-2xl hover:bg-slate-800/60 transition-colors group">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Building2 className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">عمارة كاملة الخدمات</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            تصميم معاصر ومدروس للعمارة ككل، مع توزيع ذكي للوحدات يضمن الخصوصية
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl hover:bg-slate-800/60 transition-colors group">
                        <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Home className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">واجهة خارجية متشطبة</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            تشطيب واجهات راقٍ يعبّر عن قيمة المبنى ومظهر خارجي منسّق
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl hover:bg-slate-800/60 transition-colors group">
                        <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <ArrowUpFromLine className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">مداخل العمارة + المصعد</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            مدخل رئيسي متشطب بعناية وحصة قانونية في المصعد لكل شقة
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl hover:bg-slate-800/60 transition-colors group">
                        <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-8 h-8 text-orange-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">أبواب مصفحة</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            باب مصفح لكل شقة لزيادة الأمان، وباب رئيسي مصفح للعمارة
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl hover:bg-slate-800/60 transition-colors group">
                        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Car className="w-8 h-8 text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">باكية جراج خاصة</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            مكان مخصص لسيارتك داخل حدود المشروع، يحافظ على قيمتها وسلامتها
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl hover:bg-slate-800/60 transition-colors group">
                        <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Package className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">مخزن مستقل</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            مساحة تخزين إضافية لكل شقة لتنظيم أغراضك الموسمية
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl hover:bg-slate-800/60 transition-colors group">
                        <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <LayoutGrid className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">ألوميتال</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            تركيب شبابيك وبلكونات ألوميتال بجودة مناسبة لعزل أفضل ومظهر حديث
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl hover:bg-slate-800/60 transition-colors group">
                        <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <MonitorSmartphone className="w-8 h-8 text-teal-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">نظام خدمات متكامل</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            إدارة منظمة لخدمات المبنى ومرافقه مما يمنحك شعور الكمبوند
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
