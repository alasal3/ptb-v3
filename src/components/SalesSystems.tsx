import React from 'react';
import { Construction, Key, Wallet } from 'lucide-react';

export default function SalesSystems() {
    return (
        <section id="sales-systems" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        أنظمة البيع والتعاقد
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        نقدم مسارين واضحين للتعاقد يضمنان العدالة وفهم التكلفة
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* System 1 */}
                    <div className="glass-card rounded-3xl overflow-hidden border border-blue-500/30 relative flex flex-col">
                        <div className="bg-blue-600/20 p-6 text-center border-b border-blue-500/30">
                            <Construction className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                            <h3 className="text-2xl font-bold text-white">نظام تحت الإنشاء</h3>
                            <span className="text-sm text-blue-300">(التكلفة الحقيقية)</span>
                        </div>
                        <div className="p-8 space-y-4 flex-grow">
                            <div className="flex justify-between border-b border-slate-700/50 pb-2">
                                <span className="text-slate-400">مدة الاستلام</span>
                                <span className="text-white font-bold">سنتان</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-700/50 pb-2">
                                <span className="text-slate-400">المقدم</span>
                                <span className="text-white font-bold">40%</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-700/50 pb-2">
                                <span className="text-slate-400">نظام الدفع</span>
                                <span className="text-white font-bold">تقسيط على فترة الإنشاء</span>
                            </div>
                            <div className="pt-2">
                                <span className="text-slate-400 block mb-1">السعر:</span>
                                <p className="text-sm text-slate-300">
                                    هو السعر الحقيقي للتكلفة، حيث يشارك العميل في تمويل البناء دون أي فروق أسعار وهمية.
                                </p>
                            </div>
                        </div>
                        <div className="p-6 pt-0 mt-auto">
                            <a
                                href="/?message=أنا مهتم بنظام (تحت الإنشاء)#contact-form"
                                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
                            >
                                أنا مهتم بهذه الخطة
                            </a>
                        </div>
                    </div>

                    {/* System 2 */}
                    <div className="glass-card rounded-3xl overflow-hidden border border-green-500/30 relative flex flex-col">
                        <div className="bg-green-600/20 p-6 text-center border-b border-green-500/30">
                            <Key className="w-12 h-12 text-green-400 mx-auto mb-3" />
                            <h3 className="text-2xl font-bold text-white">نظام الاستلام الفوري</h3>
                            <span className="text-sm text-green-300">(جاهز للسكن)</span>
                        </div>
                        <div className="p-8 space-y-4 flex-grow">
                            <div className="flex justify-between border-b border-slate-700/50 pb-2">
                                <span className="text-slate-400">المواصفات</span>
                                <span className="text-white font-bold">نفس الجودة والمواصفات</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-700/50 pb-2">
                                <span className="text-slate-400">طريقة الدفع</span>
                                <span className="text-white font-bold">كاش (نقدًا)</span>
                            </div>
                            <div className="pt-2 bg-slate-800/50 p-4 rounded-xl mt-4">
                                <span className="text-white font-bold flex items-center gap-2 mb-2">
                                    <Wallet className="w-4 h-4 text-purple-400" />
                                    خيار إضافي:
                                </span>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    استلام فوري مع التقسيط بزيادة تمويلية بسيطة (~2000 ج/م) تقسط على سنتين. (استثناء وليس قاعدة).
                                </p>
                            </div>
                        </div>
                        <div className="p-6 pt-0 mt-auto">
                            <a
                                href="/?message=أنا مهتم بنظام (الاستلام الفوري)#contact-form"
                                className="block w-full text-center bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-green-900/20"
                            >
                                أنا مهتم بهذه الخطة
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
