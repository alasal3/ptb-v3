"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Building, Sparkles } from 'lucide-react';

export default function MallBanner() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl group">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="https://gkepkqimbktyzfcflrrr.supabase.co/storage/v1/object/public/files/1768173494972-ah67vrejjsh.webp"
                            alt="Mall Background"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-linear-to-r from-accent/20 to-blue-500/20 blur-3xl rounded-full"></div>
                    </div>

                    <div className="relative p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl text-center md:text-right">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/20 text-accent text-sm font-bold mb-6">
                                <Sparkles size={16} />
                                <span>أحدث مشاريعنا التجارية</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                <span className="text-accent">المول</span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                انطلاق أحدث وجهاتنا التجارية على مساحة 3000 متر مربع. مجمع تجاري متكامل يخدم المنطقة ويوفر فرصاً استثمارية واعدة للمستثمرين وأصحاب العلامات التجارية.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg text-white flex items-center gap-2">
                                    <Building size={18} className="text-accent" />
                                    <span>مساحة 3048 م²</span>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg text-white flex items-center gap-2">
                                    <Building size={18} className="text-accent" />
                                    <span>3048 م²</span>
                                </div>
                            </div>
                        </div>

                        <div className="shrink-0">
                            <Link
                                href="/mall"
                                className="inline-flex items-center gap-3 bg-accent hover:bg-white text-primary hover:text-accent px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-white/20 transform hover:-translate-y-1 group/btn"
                            >
                                <span>تفاصيل المول</span>
                                <ArrowLeft className="group-hover/btn:-translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
