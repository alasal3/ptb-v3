export default function Footer() {
    return (
        <footer className="py-8 mt-16 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-right gap-4">
                        <img
                            src="https://gkepkqimbktyzfcflrrr.supabase.co/storage/v1/object/public/files/ptb.png"
                            alt="برايم توب بيلد للتطوير العقاري"
                            className="h-32 w-auto object-contain"
                        />
                        <h3 className="text-xl font-bold text-white">برايم توب بيلد للتطوير العقاري</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            العنوان الأمثل للجودة والابتكار. نبني مستقبلك بأعلى معايير الرفاهية والاستثمار الآمن.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-lg font-bold text-white mb-6 border-b border-blue-500/30 inline-block pb-2">روابط سريعة</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">من نحن</a></li>
                            <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">مشاريعنا</a></li>

                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right lg:col-span-2">
                        <h4 className="text-lg font-bold text-white mb-6 border-b border-blue-500/30 inline-block pb-2">بيانات التواصل</h4>
                        <p className="text-slate-400 mb-4">للاستفسارات والحجز، يرجى التواصل معنا مباشرة عبر القنوات الرسمية:</p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                                <span className="font-bold text-blue-400">هاتف:</span>
                                <a href="tel:01000262701" className="hover:text-white transition-colors" dir="ltr">01000262701</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3 text-slate-300">
                                <span className="font-bold text-blue-400">البريد الإلكتروني:</span>
                                <a href="mailto:primtopbuild466@gmail.com" className="hover:text-white transition-colors font-sans">primtopbuild466@gmail.com</a>
                            </div>
                            <div className="pt-4 flex justify-center md:justify-start gap-4">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer" href="https://www.facebook.com/PrimeTopbuild" className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/primetopbuild_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors"
                                    aria-label="instagram"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M7.75 2h8.5C19.42 2 22 4.58 22 7.75v8.5C22 19.42 19.42 22 16.25 22h-8.5C4.58 22 2 19.42 2 16.25v-8.5C2 4.58 4.58 2 7.75 2zm0 1.5C5.41 3.5 3.5 5.41 3.5 7.75v8.5c0 2.34 1.91 4.25 4.25 4.25h8.5c2.34 0 4.25-1.91 4.25-4.25v-8.5c0-2.34-1.91-4.25-4.25-4.25h-8.5z" />
                                        <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                                        <circle cx="17.5" cy="6.5" r="1.2" />
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        جميع الحقوق محفوظة © {new Date().getFullYear()} برايم توب بيلد للتطوير العقاري
                    </p>
                </div>
            </div>
        </footer>
    );
}
