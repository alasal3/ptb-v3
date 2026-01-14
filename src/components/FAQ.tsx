import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
    return (
        <section id="faq" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white flex justify-center items-center gap-3">
                        <HelpCircle className="w-10 h-10 text-blue-400" />
                        الأسئلة الشائعة
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        إجابات على كل ما يدور في ذهنك حول مشروعات برايم توب بيلد
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                            <span className="text-blue-400 mt-1">س:</span>
                            ما الفرق بين شقة برايم توب بيلد والشقة الطوب الأحمر التقليدية؟
                        </h3>
                        <div className="pr-8 text-slate-300 leading-relaxed">
                            <p className="mb-2">ج: مع الشقة التقليدية، تشتري جدراناً خاماً ثم تبدأ رحلة التشطيب والتجهيز على نفقتك، مع تكلفة غير واضحة. أما معنا، فأنت تحصل على:</p>
                            <ul className="list-disc list-inside space-y-1 mr-4">
                                <li>عمارة كاملة الخدمات والتشطيب الخارجي</li>
                                <li>مداخل جاهزة + حصة في المصعد</li>
                                <li>أبواب مصفحة، باكية جراج، مخزن، ألوميتال للشبابيك والبلكونات</li>
                                <li>بنظام واضح وسعر معروف من البداية</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                            <span className="text-blue-400 mt-1">س:</span>
                            هل أسعاركم فعلاً أقل من سعر السوق؟
                        </h3>
                        <p className="pr-8 text-slate-300 leading-relaxed">
                            ج: الأسعار الاسمية للوحدات قد تبدو قريبة من بعض العروض في السوق، لكن عند حساب التكلفة الفعلية (تشطيب خارجي، مداخل، مصاعد، جراج، مخازن، ألوميتال، وأبواب مصفحة) ستجد أن ما نقدّمه في باقة واحدة متكاملة أقل من مجموع ما ستدفعه لو نفّذت كل ذلك منفصلاً.
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                            <span className="text-blue-400 mt-1">س:</span>
                            ما المقصود بـ "القيمة الحقيقية للعقار"؟
                        </h3>
                        <div className="pr-8 text-slate-300 leading-relaxed">
                            <p className="mb-2">ج: نقصد بها أن:</p>
                            <ul className="list-disc list-inside space-y-1 mr-4">
                                <li>تعرف بالضبط ما الذي تشتريه</li>
                                <li>تحصل على عقار جاهز للسكن في مبنى متكامل الخدمات</li>
                                <li>تدفع تكلفة مدروسة تعكس الصورة الكاملة للعقار، وليس مجرد سعر شقة غير مكتملة</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                            <span className="text-blue-400 mt-1">س:</span>
                            ما الذي يُسلّم مع الشقة بالتحديد؟
                        </h3>
                        <div className="pr-8 text-slate-300 leading-relaxed">
                            <p className="mb-2">ج: وفقاً لمواصفات مشروعاتنا، تحصل على:</p>
                            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2 mr-4">
                                <li>واجهة متشّطبة للعمارة</li>
                                <li>مداخل متشّطبة + حصة في المصعد</li>
                                <li>باب مصفح للشقة، وباب مصفح رئيسي</li>
                                <li>باكية جراج مخصصة (حسب المشروع)</li>
                                <li>مخزن خاص</li>
                                <li>شبابيك وبلكونات ألوميتال</li>
                                <li>نظام خدمات لإدارة المبنى</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                            <span className="text-blue-400 mt-1">س:</span>
                            هل يمكن الشراء بنظام سداد مرن أو تقسيط؟
                        </h3>
                        <p className="pr-8 text-slate-300 leading-relaxed">
                            ج: أنظمة السداد تُحدَّد وفقاً لكل مشروع وعلى حسب مرحلة التنفيذ عند التعاقد. للحصول على تفاصيل أنظمة السداد المتاحة حالياً، يُرجى التواصل معنا.
                        </p>
                    </div>

                    <div className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                            <span className="text-blue-400 mt-1">س:</span>
                            هل يمكن زيارة الموقع ومعاينة المشروع على الطبيعة؟
                        </h3>
                        <p className="pr-8 text-slate-300 leading-relaxed">
                            ج: نعم، يمكن حجز موعد لزيارة المشروعات المتاحة ، والتعرّف عن قرب على مستوى التشطيب والخدمات. فقط تواصل معنا لتحديد الموعد.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
