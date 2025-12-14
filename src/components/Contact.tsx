"use client";

import { FormEvent, useState, useEffect } from "react";
// تأكد أن المسار يطابق مكان ملف الـ lib عندك
import { supabase } from "@/lib/supabase";
import { Building, Apartment } from "@/types/database";

export default function Contact() {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // State للمباني والشقق
    const [buildings, setBuildings] = useState<Building[]>([]);
    const [selectedBuildingId, setSelectedBuildingId] = useState<number | null>(null);
    const [selectedApartmentId, setSelectedApartmentId] = useState<number | null>(null);
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [loadingBuildings, setLoadingBuildings] = useState(true);

    // جلب المباني عند تحميل الكومبوننت
    useEffect(() => {
        const fetchBuildings = async () => {
            try {
                const { data, error } = await supabase
                    .from('buildings')
                    .select('*, apartments(*)');

                if (error) {
                    console.error('Error fetching buildings:', error);
                    return;
                }

                setBuildings(data as Building[]);
            } catch (err) {
                console.error('Error:', err);
            } finally {
                setLoadingBuildings(false);
            }
        };

        fetchBuildings();
    }, []);

    // تحديث الشقق عند تغيير المبنى المختار
    useEffect(() => {
        if (selectedBuildingId) {
            const building = buildings.find(b => b.id === selectedBuildingId);
            setApartments(building?.apartments || []);
            setSelectedApartmentId(null); // Reset apartment selection
        } else {
            setApartments([]);
            setSelectedApartmentId(null);
        }
    }, [selectedBuildingId, buildings]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        const formData = new FormData(e.currentTarget);

        // تجهيز البيانات للإرسال
        const dataToSend: Record<string, unknown> = {
            name: formData.get("name") as string,
            phone: formData.get("phone") as string,
            message: formData.get("message") as string, // تأكد إنك ضفت العمود ده في الجدول
            status: "جديد", // قيمة افتراضية عشان نعرف إن ده عميل جديد
            // created_at: سوبا بيز بتعمله أوتوماتيك
        };

        // إضافة المبنى والشقة إذا تم اختيارهم (اختياري)
        if (selectedBuildingId) {
            dataToSend.interest_buildings_id = selectedBuildingId;
        }
        if (selectedApartmentId) {
            dataToSend.interest_apartments_id = selectedApartmentId;
        }

        try {
            // انتبه: تأكد أن اسم الجدول هنا 'contacts' هو نفس اسم الجدول في سوبا بيز
            const { error } = await supabase
                .from('leads')
                .insert([dataToSend]);

            if (error) {
                console.error("Supabase Detailed Error:", error);
                throw error;
            }

            // نجاح العملية
            setStatus("تم الإرسال بنجاح! سنتواصل معك قريباً.");
            (e.target as HTMLFormElement).reset(); // تفريغ الخانات
            setSelectedBuildingId(null);
            setSelectedApartmentId(null);

        } catch (error: unknown) {
            const err = error as { message?: string; code?: string; details?: string; hint?: string };
            // هذا السطر هو الأهم: سيحول الخطأ لنص مقروء
            console.log("FULL ERROR JSON:", JSON.stringify(error, null, 2));

            // محاولة طباعة الخصائص بشكل منفصل
            console.error("Error Message:", err.message);
            console.error("Error Code:", err.code);
            console.error("Error Details:", err.details);
            console.error("Error Hint:", err.hint);

            setStatus("حدث خطأ أثناء الإرسال. راجع الكونسول للتفاصيل.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto p-4">
                <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-l from-[#C69C2C] via-[#D4AF37] to-[#EAD27A]">
                    ابدأ رحلة التملك اليوم
                </h3>
                <div className="max-w-3xl mx-auto glass-card p-8">
                    <p className="text-center text-slate-300 mb-8 text-lg leading-relaxed">
                        الفرص العظيمة لا تتكرر كثيراً. اكتشف كيف يمكن لبرايم توب بيلد أن تحول طموحاتك إلى واقع ملموس.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* حقل الاسم */}
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                                الاسم الكامل
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="glass-card w-full p-3 rounded-lg border-transparent focus:border-blue-400 focus:ring-0 bg-slate-800/50 text-white"
                                required
                            />
                        </div>

                        {/* حقل الهاتف */}
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-slate-300">
                                رقم الهاتف
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="glass-card w-full p-3 rounded-lg border-transparent focus:border-blue-400 focus:ring-0 bg-slate-800/50 text-white"
                                required
                            />
                        </div>

                        {/* اختيار المبنى (اختياري) */}
                        <div>
                            <label htmlFor="building" className="block mb-2 text-sm font-medium text-slate-300">
                                المبنى المهتم به <span className="text-slate-500">(اختياري)</span>
                            </label>
                            <select
                                id="building"
                                name="building"
                                value={selectedBuildingId ?? ""}
                                onChange={(e) => setSelectedBuildingId(e.target.value ? Number(e.target.value) : null)}
                                className="glass-card w-full p-3 rounded-lg border-transparent focus:border-blue-400 focus:ring-0 bg-slate-800/50 text-white"
                                disabled={loadingBuildings}
                            >
                                <option value="">اختر المبنى...</option>
                                {buildings.map((building) => (
                                    <option key={building.id} value={building.id}>
                                        {building.name} - {building.district}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* اختيار الوحدة/الشقة (اختياري - يظهر بعد اختيار المبنى) */}
                        {selectedBuildingId && apartments.length > 0 && (
                            <div>
                                <label htmlFor="apartment" className="block mb-2 text-sm font-medium text-slate-300">
                                    الوحدة المهتم بها <span className="text-slate-500">(اختياري)</span>
                                </label>
                                <select
                                    id="apartment"
                                    name="apartment"
                                    value={selectedApartmentId ?? ""}
                                    onChange={(e) => setSelectedApartmentId(e.target.value ? Number(e.target.value) : null)}
                                    className="glass-card w-full p-3 rounded-lg border-transparent focus:border-blue-400 focus:ring-0 bg-slate-800/50 text-white"
                                >
                                    <option value="">اختر الوحدة...</option>
                                    {apartments.map((apartment) => (
                                        <option key={apartment.id} value={apartment.id}>
                                            {apartment.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* حقل الرسالة */}
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">
                                الرسالة / الاهتمام
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="glass-card w-full p-3 rounded-lg border-transparent focus:border-blue-400 focus:ring-0 bg-slate-800/50 text-white"
                                required
                            ></textarea>
                        </div>

                        {/* زر الإرسال */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full btn-primary font-bold py-3 px-6 rounded-xl text-lg hover:bg-blue-600 transition-colors ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {isSubmitting ? "جاري الإرسال..." : "إرسال"}
                        </button>

                        {/* رسالة الحالة */}
                        {status && (
                            <div className={`text-center mt-4 font-bold fade-in p-2 rounded ${status.includes("خطأ") ? "text-red-400 bg-red-900/20" : "text-green-400 bg-green-900/20"
                                }`}>
                                {status}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}