"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { V1Project, V1Unit } from '@/types/database';
import { createLead, getV1Projects } from '@/lib/api';
import { Send, CheckCircle2, User, Phone, MessageSquare, Building2, HardHat, Key } from 'lucide-react';

function ContactFormContent() {
    const searchParams = useSearchParams();
    const [projects, setProjects] = useState<V1Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
        isInterestedInProject: false,
        selectedProjectId: '' as string,
        selectedApartmentId: '' as string,
    });

    // Interest Logic
    const [availableUnits, setAvailableUnits] = useState<V1Unit[]>([]);

    useEffect(() => {
        // Fetch projects on mount
        const loadProjects = async () => {
            const data = await getV1Projects();
            setProjects(data);
        };
        loadProjects();

        // Check for message param
        const messageParam = searchParams.get('message');
        if (messageParam) {
            setFormData(prev => ({ ...prev, message: messageParam }));
        }
    }, [searchParams]);

    // Handle Project Selection
    useEffect(() => {
        if (formData.selectedProjectId) {
            const project = projects.find(p => p.id === formData.selectedProjectId);
            setAvailableUnits(project?.v1_units || []);
            setFormData(prev => ({ ...prev, selectedApartmentId: '' })); // Reset unit
        } else {
            setAvailableUnits([]);
        }
    }, [formData.selectedProjectId, projects]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const payload = {
            name: formData.name,
            phone: formData.phone,
            status: 'جديد',
            message: formData.message || undefined,
            // Using new columns for v1_projects references
            interest_project_id: formData.isInterestedInProject && formData.selectedProjectId ? formData.selectedProjectId : null,
            interest_unit_id: formData.isInterestedInProject && formData.selectedApartmentId ? formData.selectedApartmentId : null,
        };

        const result = await createLead(payload);

        if (result.success) {
            setSuccess(true);
            setFormData({
                name: '',
                phone: '',
                message: '',
                isInterestedInProject: false,
                selectedProjectId: '',
                selectedApartmentId: '',
            });
            setTimeout(() => setSuccess(false), 5000);
        } else {
            alert('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
        }

        setSubmitting(false);
    };

    const handleQuickMessage = (msg: string) => {
        setFormData(prev => ({ ...prev, message: msg }));
    };

    const translateUnitType = (type: string) => {
        const types: Record<string, string> = {
            'apartment': 'شقة',
            'duplex': 'دوبلكس',
            'villa': 'فيلا',
            'penthouse': 'بنتهاوس',
            'commercial': 'تجاري',
            'studio': 'استوديو',
            'office': 'مكتب',
            'shop': 'محل',
        };
        return types[type.toLowerCase()] || type;
    };

    return (
        <div className="max-w-4xl mx-auto glass-card p-6 md:p-12 rounded-3xl border-t-4 border-t-blue-500 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">سجل اهتمامك الآن</h2>
                <p className="text-slate-300">املأ البيانات وسيتم التواصل معك من قبل فريق المبيعات لتوضيح كافة التفاصيل.</p>
            </div>

            {success ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">تم الإرسال بنجاح!</h3>
                    <p className="text-green-200">شكراً لتواصلك معنا، سيقوم فريقنا بالرد عليك في أقرب وقت.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-bold flex items-center gap-2">
                                <User className="w-4 h-4 text-blue-400" />
                                الاسم بالكامل
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="ادخل اسمك هنا"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-slate-300 text-sm font-bold flex items-center gap-2">
                                <Phone className="w-4 h-4 text-blue-400" />
                                رقم الهاتف
                            </label>
                            <input
                                required
                                type="tel"
                                placeholder="01xxxxxxxxx"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                dir="ltr"
                                style={{ textAlign: 'right' }}
                            />
                        </div>
                    </div>

                    {/* Project Interest Checkbox */}
                    <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/30">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.isInterestedInProject}
                                onChange={e => setFormData({ ...formData, isInterestedInProject: e.target.checked })}
                                className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-offset-slate-900 focus:ring-blue-500"
                            />
                            <span className="text-white font-medium">هل أنت مهتم بمشروع أو وحدة معينة؟</span>
                        </label>

                        {/* Conditional Dropdowns */}
                        {formData.isInterestedInProject && (
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-top-2 duration-300">
                                <div className="space-y-2">
                                    <label className="text-slate-400 text-xs">المشروع</label>
                                    <div className="relative">
                                        <select
                                            value={formData.selectedProjectId}
                                            onChange={e => setFormData({ ...formData, selectedProjectId: e.target.value })}
                                            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white appearance-none focus:border-blue-500 focus:outline-none"
                                        >
                                            <option value="">اختر المشروع...</option>
                                            {projects.map(p => (
                                                <option key={p.id} value={p.id}>{p.title}</option>
                                            ))}
                                        </select>
                                        <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-slate-500 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-slate-400 text-xs">الوحدة (اختياري)</label>
                                    <div className="relative">
                                        <select
                                            value={formData.selectedApartmentId}
                                            onChange={e => setFormData({ ...formData, selectedApartmentId: e.target.value })}
                                            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white appearance-none focus:border-blue-500 focus:outline-none disabled:opacity-50"
                                            disabled={!formData.selectedProjectId || availableUnits.length === 0}
                                        >
                                            <option value="">
                                                {availableUnits.length > 0 ? "اختر الوحدة..." : (formData.selectedProjectId ? "لا توجد وحدات متاحة" : "اختر مشروعاً أولاً")}
                                            </option>
                                            {availableUnits.map(unit => (
                                                <option key={unit.id} value={unit.id}>{unit.unit_code} - {translateUnitType(unit.type)}</option>
                                            ))}
                                        </select>
                                        <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-slate-500 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Message Section */}
                    <div className="space-y-3">
                        <label className="text-slate-300 text-sm font-bold flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-blue-400" />
                            تفاصيل الطلب أو الاستفسار
                        </label>

                        {/* Quick Action Buttons */}
                        {!formData.isInterestedInProject && (
                            <div className="flex flex-wrap gap-3 mb-2">
                                <button
                                    type="button"
                                    onClick={() => handleQuickMessage("أنا مهتم بنظام (تحت الإنشاء) - التكلفة الحقيقية")}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs md:text-sm rounded-full transition-colors"
                                >
                                    <HardHat className="w-3 h-3 md:w-4 md:h-4" />
                                    مهتم بنظام تحت الإنشاء
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleQuickMessage("أنا مهتم بنظام (الاستلام الفوري) - جاهز للسكن")}
                                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 text-xs md:text-sm rounded-full transition-colors"
                                >
                                    <Key className="w-3 h-3 md:w-4 md:h-4" />
                                    مهتم بنظام الاستلام الفوري
                                </button>
                            </div>
                        )}

                        <textarea
                            rows={4}
                            placeholder="اكتب رسالتك هنا..."
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {submitting ? (
                            <span className="inline-block animate-pulse">جاري الإرسال...</span>
                        ) : (
                            <>
                                إرسال الطلب
                                <Send className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}

export default function ContactForm() {
    return (
        <Suspense fallback={<div className="text-white text-center py-10">جاري تحميل النموذج...</div>}>
            <ContactFormContent />
        </Suspense>
    );
}
