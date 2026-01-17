"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* القائمة الجانبية للموبايل */}
            <div
                // قمنا بتعديل الخلفية هنا لتكون داكنة وواضحة
                className={`fixed top-0 left-0 w-full h-full bg-slate-900/98 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-bold transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0 visible" : "-translate-y-full invisible "
                    }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-8 right-8 text-white hover:text-red-500 transition-colors"
                    aria-label="Close menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10" // تكبير أيقونة الإغلاق قليلاً
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <Link
                    href="/#hero"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    الرئيسية
                </Link>
                <Link
                    href="/#philosophy"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    لماذا نحن
                </Link>

                <Link
                    href="/services"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    خدماتنا
                </Link>
                <Link
                    href="/#projects"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    مشاريعنا
                </Link>
                <Link
                    href="/events"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    الفعاليات
                </Link>
                <Link
                    href="/about"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    من نحن
                </Link>
                <Link
                    href="/contact"
                    className="text-white hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    تواصل معنا
                </Link>
            </div>

            {/* الهيدر الرئيسي */}
            <header className="w-full z-40 relative p-2">
                <div className="container mx-auto flex justify-between items-center p-4 glass-card mt-4 md:mt-8 rounded-full">
                    <Link href="/#hero" className="flex items-center">
                        <img
                            src="https://gkepkqimbktyzfcflrrr.supabase.co/storage/v1/object/public/files/ptb.png"
                            alt="برايم توب بيلد للتطوير العقاري"
                            className="h-16 md:h-20 w-auto object-contain"
                        />
                    </Link>

                    {/* هنا التعديل: استخدمنا gap بدلاً من space-x */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base font-medium">
                        <Link
                            href="/#hero"
                            className="nav-link hover:text-blue-400 transition-colors duration-300"
                        >
                            الرئيسية
                        </Link>
                        <Link
                            href="/#philosophy"
                            className="nav-link hover:text-blue-400 transition-colors duration-300"
                        >
                            لماذا نحن
                        </Link>

                        <Link
                            href="/services"
                            className="nav-link hover:text-blue-400 transition-colors duration-300"
                        >
                            خدماتنا
                        </Link>
                        <Link
                            href="/#projects"
                            className="nav-link hover:text-blue-400 transition-colors duration-300"
                        >
                            مشاريعنا
                        </Link>
                        <Link
                            href="/events"
                            className="nav-link hover:text-blue-400 transition-colors duration-300"
                        >
                            الفعاليات
                        </Link>
                        <Link
                            href="/about"
                            className="nav-link hover:text-blue-400 transition-colors duration-300"
                        >
                            من نحن
                        </Link>
                        <Link
                            href="/contact"
                            className="nav-link hover:text-blue-400 transition-colors duration-300"
                        >
                            تواصل معنا
                        </Link>
                    </nav>

                    {/* زر فتح القائمة للموبايل */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-white focus:outline-none"
                            aria-label="Open menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}