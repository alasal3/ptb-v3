export default function Footer() {
    return (
        <footer className="py-8 mt-16 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6 text-center md:text-right">
                        <img src="https://gkepkqimbktyzfcflrrr.supabase.co/storage/v1/object/public/files/ptb.png" alt="Prime Top Build" className="h-24 w-auto mx-auto md:mx-0" />
                        <p className="text-slate-400 leading-relaxed">
                            نطوّر مشروعات سكنية متكاملة  لنقدّم لك أكثر من مجرد شقة… نقدّم لك عيشة كاملة التفاصيل بسعر حقيقي ووضوح تام.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="https://facebook.com/primetopbuild" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/primetopbuild" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5C19.42 2 22 4.58 22 7.75v8.5C22 19.42 19.42 22 16.25 22h-8.5C4.58 22 2 19.42 2 16.25v-8.5C2 4.58 4.58 2 7.75 2zm0 1.5C5.41 3.5 3.5 5.41 3.5 7.75v8.5c0 2.34 1.91 4.25 4.25 4.25h8.5c2.34 0 4.25-1.91 4.25-4.25v-8.5c0-2.34-1.91-4.25-4.25-4.25h-8.5z" />
                                    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                                    <circle cx="17.5" cy="6.5" r="1.2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-white font-bold text-lg mb-6 border-b border-blue-500/30 inline-block pb-2">روابط سريعة</h4>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-slate-400 hover:text-blue-400 transition-colors">الرئيسية</a></li>
                            <li><a href="/#philosophy" className="text-slate-400 hover:text-blue-400 transition-colors">لماذا نحن</a></li>
                            <li><a href="/#projects" className="text-slate-400 hover:text-blue-400 transition-colors">مشاريعنا</a></li>
                            <li><a href="/services" className="text-slate-400 hover:text-blue-400 transition-colors">خدماتنا</a></li>
                            <li><a href="/events" className="text-slate-400 hover:text-blue-400 transition-colors">الفعاليات</a></li>
                            <li><a href="/about" className="text-slate-400 hover:text-blue-400 transition-colors">من نحن</a></li>
                            <li><a href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">تواصل معنا</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right lg:col-span-2">
                        <h4 className="text-white font-bold text-lg mb-6 border-b border-blue-500/30 inline-block pb-2">بيانات التواصل</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-center md:justify-start gap-3 text-slate-400">
                                <span className="font-bold text-white">العنوان:</span>
                                <div>الجيزة - مصر</div>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-slate-400">
                                <span className="font-bold text-white">الهاتف:</span>
                                <span dir="ltr">01000262701</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-slate-400">
                                <span className="font-bold text-white">البريد:</span>
                                <span>info@primetopbuild.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 text-center text-slate-500 text-sm">
                    <p>© جميع الحقوق محفوظة لشركة برايم توب بيلد – {new Date().getFullYear()}.</p>
                </div>
            </div>
        </footer>
    );
}
