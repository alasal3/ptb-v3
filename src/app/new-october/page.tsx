import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Train, Plane } from "lucide-react";
import Link from "next/link";

export const revalidate = 20; // Real-time updates

export default function NewOctoberPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-12 bg-[#0D1117] text-slate-200">
                <article className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <div className="mb-12 text-center md:text-right">
                        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 ml-2" />
                            العودة للرئيسية
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white mb-6">
                            أكتوبر الجديدة.. <span className="text-blue-500">مستقبل الاستثمار الواعد</span> في غرب القاهرة
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            رؤية استباقية للمستقبل، وفرص لا تتكرر.
                        </p>
                    </div>

                    {/* Content Body */}
                    <div className="space-y-12 bg-slate-800/20 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">

                        {/* Introduction */}
                        <div className="leading-loose text-lg text-slate-300">
                            <p className="mb-6">
                                في "برايم توب بيلد"، لا يتم اختيار مواقع مشاريعنا بشكل عشوائي، بل نعتمد على دراسات جدوى دقيقة وتحليلات سوقية عميقة لاتجاهات التوسع العمراني في مصر. قرارنا بالاستثمار والتركيز على منطقة <strong className="text-white">أكتوبر الجديدة</strong> والتوسعات الشمالية لم يكن مجرد خطوة توسعية، بل هو رهان رابح مبني على معطيات واضحة تؤكد أن هذه المنطقة هي "الحصان الأسود" القادم في السوق العقاري المصري، والامتداد الطبيعي والحتمي لمدينة الشيخ زايد وأكتوبر القديمة.
                            </p>
                            <p className="font-bold text-white">
                                إليك الأسباب الجوهرية التي جعلت من أكتوبر الجديدة وجهتنا الأولى، ولماذا يجب أن تكون وجهتك الاستثمارية القادمة:
                            </p>
                        </div>

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 text-sm">1</span>
                                موقع استراتيجي وشبكة طرق قومية
                            </h2>
                            <p className="text-slate-300 leading-loose mb-4">
                                تتمتع أكتوبر الجديدة بموقع عبقري يجعلها نقطة تلاقٍ محورية. لم تعد المنطقة بعيدة أو منعزلة بفضل الطفرة الهائلة في شبكة الطرق القومية. المنطقة محاطة ومخدومة بشرايين حيوية تربطها بكل أنحاء الجمهورية:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400 mr-4">
                                <li><strong className="text-white">الطريق الدائري الأوسطي:</strong> الذي يربط المدينة بقلب القاهرة الجديدة والعاصمة الإدارية في وقت قياسي.</li>
                                <li><strong className="text-white">محور الضبعة:</strong> الذي يفتح آفاقاً جديدة نحو الساحل الشمالي ومستقبل التنمية السياحية.</li>
                                <li><strong className="text-white">طريق الواحات والفيوم:</strong> لربطها بمحافظات الصعيد والجيزة.</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 text-sm">2</span>
                                تخطيط عمراني من الجيل الرابع
                            </h2>
                            <p className="text-slate-300 leading-loose mb-4">
                                تتميز أكتوبر الجديدة بأنها صُممت وفق معايير "مدن الجيل الرابع"، مما يعني تلافي العشوائية والتكدس الذي تعاني منه المناطق القديمة.
                            </p>
                            <ul className="space-y-4 mr-4">
                                <li className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                                    <strong className="block text-white mb-1">تقسيم هندسي متطور:</strong>
                                    شوارع واسعة، مساحات خضراء شاسعة تفصل بين الأحياء السكنية، ومناطق خدمات منفصلة عن المناطق السكنية لضمان الهدوء والخصوصية.
                                </li>
                                <li className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                                    <strong className="block text-white mb-1">بنية تحتية ذكية:</strong>
                                    شبكات مياه، صرف، وكهرباء حديثة مصممة لاستيعاب الكثافة المستقبلية دون أي مشاكل، مما يضمن استدامة الخدمات وجودة المعيشة لعقود قادمة.
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 text-sm">3</span>
                                العائد الاستثماري الأعلى (ROI)
                            </h2>
                            <div className="bg-amber-500/5 border-r-4 border-amber-500 p-4 rounded-l-lg mb-6">
                                <p className="text-amber-200 font-bold italic">"القاعدة الذهبية في الاستثمار العقاري هي: اشترِ في مناطق النمو، لا في مناطق التشبع".</p>
                            </div>
                            <ul className="space-y-4 mr-4 text-slate-300">
                                <li>
                                    <strong className="text-white block mb-1">هامش الربح:</strong>
                                    أسعار المتر في أكتوبر الجديدة ما زالت في مرحلة النمو مقارنة بمدينة الشيخ زايد أو التجمع الخامس التي وصلت لأسعار فلكية. هذا يعني أن هامش الربح المتوقع (Capital Appreciation) عند إعادة البيع بعد سنوات قليلة سيكون ضخماً للغاية.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">القوة الشرائية:</strong>
                                    المنطقة تستقطب الشريحة المتوسطة وفوق المتوسطة التي تبحث عن سكن راقٍ بأسعار منطقية، مما يضمن لك سهولة في تأجير وحدتك أو إعادة بيعها بسرعة.
                                </li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 text-sm">4</span>
                                القرب من المشاريع القومية والمعالم الحيوية
                            </h2>
                            <p className="text-slate-300 mb-4">قيمة العقار تتحدد بما يجاوره، وأكتوبر الجديدة تقع بالقرب من أهم معالم مصر الحديثة:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="glass-card p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Train className="w-7 h-7 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-2 text-lg">القطار السريع والمونوريل</h3>
                                            <p className="text-sm text-slate-400 leading-relaxed">نقل حضاري يسهل الحركة ويرفع الطلب على السكن.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="glass-card p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Plane className="w-7 h-7 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-2 text-lg">مطار سفنكس الدولي</h3>
                                            <p className="text-sm text-slate-400 leading-relaxed">جاذبية للمستثمرين العرب والأجانب.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-500 text-sm">5</span>
                                بيئة معيشية صحية ومتوازنة
                            </h2>
                            <p className="text-slate-300 leading-loose">
                                نحن في "برايم توب بيلد" ندرك أن العميل لا يشتري جدرانًا بل يشتري "جودة حياة". أكتوبر الجديدة توفر بيئة صحية بامتياز بفضل ارتفاعها عن سطح البحر مما يجعل جوها نقياً وأقل تلوثاً، بالإضافة إلى التخطيط الذي يراعي المساحات الخضراء والتهوية الجيدة، مما يوفر لعائلتك حياة هادئة بعيداً عن صخب وتلوث وسط المدينة.
                            </p>
                        </section>

                        {/* Conclusion */}
                        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-2xl text-center shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-4">الخلاصة: اختيارنا لأكتوبر الجديدة هو اختيار للمستقبل</h3>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                                نحن نسبق السوق بخطوة لنضع بين يديك فرصاً استثمارية في توقيت مثالي. امتلاكك لعقار في هذه المنطقة اليوم ليس مجرد سكن، بل هو تأمين لمستقبلك المالي.
                            </p>
                            <Link href="/#contact" className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                                ابدأ استثمارك الآن
                            </Link>
                        </div>

                        <div className="text-center pt-8">
                            <p className="text-slate-500 font-bold text-xl tracking-wider">برايم توب بيلد.. رؤية ثاقبة لاستثمار مستدام.</p>
                        </div>

                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
