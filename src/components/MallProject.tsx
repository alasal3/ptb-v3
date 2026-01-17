"use client";

import React, { useState } from 'react';
import { MapPin, ArrowRight, Download, Maximize2, X, Store, Building2, CheckCircle2 } from 'lucide-react';
import { V1Project } from '@/types/database';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

// Mock data based on user input, or we can fetch it. 
// Since this is a specific page, we can pass the data directly or fetch it.
// For now, I'll structure the page to accept data or fetch it, but given standard next.js, I'll make it a server component page fetching data.
// But this file is a component if the user wants it reusable, or I can put the logic in app/mall/page.tsx.
// Let's assume this is the UI component.

interface MallProjectProps {
    project: V1Project;
}

export default function MallProject({ project }: MallProjectProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Filter images (webp only) for gallery, PDFs for downloads if needed
    const galleryImages = project.cover_images?.filter(img => img.endsWith('.webp')) || [];
    const pdfFiles = project.cover_images?.filter(img => img.endsWith('.pdf')) || [];

    return (
        <div className="bg-slate-950 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
                <img
                    src={project.cover_image_url || galleryImages[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/80 text-slate-900 rounded-full font-bold mb-6">
                            <Store className="w-4 h-4" />
                            <span>مشروع تجاري متميز</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{project.title}</h1>
                        <div className="flex items-center gap-4 text-slate-300 text-xl">
                            <MapPin className="w-6 h-6 text-yellow-500" />
                            {project.location}
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16 relative z-10 -mt-20">
                {/* Quick Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="glass-card p-8 rounded-3xl border-t-4 border-t-yellow-500 bg-slate-900/80 backdrop-blur-xl">
                        <div className="text-slate-400 mb-2">المساحة الإجمالية</div>
                        <div className="text-3xl font-bold text-white mb-1">{project.area} م²</div>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border-t-4 border-t-blue-500 bg-slate-900/80 backdrop-blur-xl">
                        <div className="text-slate-400 mb-2">حالة المشروع</div>
                        <div className="text-3xl font-bold text-white mb-1">
                            {project.status === 'under-construction' ? 'تحت الإنشاء' : 'مكتمل'}
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-yellow-500 pr-4">تفاصيل المشروع</h2>
                            <div className="prose prose-lg prose-invert text-slate-300 leading-relaxed">
                                <p>
                                    يقدم هذا المول تجربة تجارية فريدة في قلب الحي الثالث. تم تصميمه بمعايير عالمية ليخدم سكان المنطقة والمناطق المجاورة، مع تنوع في الوحدات التجارية والإدارية لتناسب مختلف الأنشطة.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    {['موقع استراتيجي متميز', 'واجهات زجاجية عصرية', 'مواقف سيارات خاصة', 'أمن وحراسة 24 ساعة', 'أنظمة مكافحة حريق متطورة', 'مصاعد كهربائية بانوراما'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8 border-r-4 border-blue-500 pr-4">معرض الصور</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Maximize2 className="text-white w-8 h-8" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Downloads */}
                        {pdfFiles.length > 0 && (
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6 border-r-4 border-red-500 pr-4">تحميل الملفات</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {pdfFiles.map((pdf, idx) => (
                                        <a
                                            key={idx}
                                            href={pdf}
                                            target="_blank"
                                            className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-colors group"
                                        >
                                            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                                <Download className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white group-hover:text-red-400 transition-colors">ملف المشروع {idx + 1}</div>
                                                <div className="text-xs text-slate-500">PDF Document</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="glass-card p-6 rounded-3xl mb-8">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Building2 className="text-yellow-500" />
                                    تواصل معنا بخصوص المول
                                </h3>
                                {/* Simple contact prompt or form usage */}
                                <p className="text-slate-300 text-sm mb-6">
                                    سجل اهتمامك الآن وسيتم التواصل معك من قبل فريق المبيعات لتوضيح كافة التفاصيل والعروض المتاحة للمحلات التجارية والمكاتب.
                                </p>
                                <a href="#contact-section" className="w-full btn-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                                    حجز موعد
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="contact-section" className="mt-20">
                    <ContactForm />
                </div>
            </main>

            <Footer />

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-8 right-8 text-white hover:text-red-500 transition-colors">
                        <X className="w-10 h-10" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full view"
                        className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
