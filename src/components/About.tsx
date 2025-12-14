"use client";

import {
    FileCheck,
    FileX,
    Shield,
    Landmark,
    Building2,
    HardHat,
    Key,
    Users,
    MapPin,
    Camera,
    Wrench,
    BadgeCheck,
    ArrowLeftRight
} from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto p-4">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                        الفرق الجوهري
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        منهجية Prime Top Build
                        <span className="block text-blue-400 mt-2">من مجازفة &quot;الوعد&quot; إلى أمان &quot;الملكية والتشغيل&quot;</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        في سوق مليء بالوعود، قررنا في Prime Top Build أن نكون شركة الأفعال والضمانات. نحن لا نقدم مجرد وحدة سكنية، بل نقدم دورة حياة عقارية متكاملة ومحسوبة بدقة، تبدأ من اختيار الأرض وحتى استدامة الخدمات لسنوات طويلة.
                    </p>
                </div>

                {/* Section 1: Legal Problem vs Solution */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                            1
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            المعضلة القانونية: الفرق بين &quot;بيع الوهم&quot; و&quot;الواقع&quot;
                        </h3>
                    </div>
                    <p className="text-slate-400 mb-10 text-lg">
                        هنا تكمن أخطر مشاكل السوق التي يغفل عنها الكثيرون، وهذا هو حلنا الجذري لها:
                    </p>

                    {/* Comparison Infographic */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                        {/* VS Badge in center */}
                        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center">
                                <ArrowLeftRight className="w-6 h-6 text-slate-400" />
                            </div>
                        </div>

                        {/* Problem Card */}
                        <div className="glass-card p-8 border-2 border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent relative overflow-hidden group hover:border-red-500/50 transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FileX className="w-8 h-8 text-red-400" />
                                </div>
                                <div>
                                    <span className="text-red-400 text-base font-medium">مشكلة السوق</span>
                                    <h4 className="text-2xl font-bold text-white">نظام الوعد بالشراء</h4>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    تعمل معظم الشركات بنظام تسويق &quot;فكرة&quot; مبنية على &quot;وعد شراء&quot; للأرض وليس ملكيتها.
                                </p>

                                <div className="p-5 bg-red-500/10 rounded-xl border border-red-500/20">
                                    <h5 className="text-red-400 font-semibold mb-3 flex items-center gap-2 text-lg">
                                        <Shield className="w-5 h-5" />
                                        المخاطرة:
                                    </h5>
                                    <p className="text-slate-400 text-base leading-relaxed">
                                        قد تفشل الشركة في إتمام شراء الأرض لعدم توفر السيولة أو مشاكل قانونية، مما يؤدي لضياع أموالك أو الدخول في دوامة الشروط الجزائية المعقدة واسترداد الأموال بعد سنوات بلا قيمة.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-5 h-5 text-red-400" />
                                    </div>
                                    <p className="text-slate-400 text-base">
                                        <span className="text-red-400 font-semibold">النتيجة:</span> تأخر لا نهائي، وعدم وجود حيازة فعلية للأرض.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solution Card */}
                        <div className="glass-card p-8 border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent relative overflow-hidden group hover:border-green-500/50 transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FileCheck className="w-8 h-8 text-green-400" />
                                </div>
                                <div>
                                    <span className="text-green-400 text-base font-medium">حل Prime Top Build</span>
                                    <h4 className="text-2xl font-bold text-white">حيازة وعقد حقيقي</h4>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    نحن نعمل بمعايير صارمة؛ لا نبدأ التسويق إلا بوجود عقد حقيقي وحيازة فعلية، أو من خلال انتقاء دقيق لأرض خالية من النزاعات وجاهزة للتنفيذ الفوري.
                                </p>

                                <div className="p-5 bg-green-500/10 rounded-xl border border-green-500/20">
                                    <h5 className="text-green-400 font-semibold mb-3 flex items-center gap-2 text-lg">
                                        <BadgeCheck className="w-5 h-5" />
                                        الضمان:
                                    </h5>
                                    <p className="text-slate-400 text-base leading-relaxed">
                                        أموالك تذهب لبناء أصل ملموس تمتلكه فعلياً ضمن &quot;اتحاد الملاك&quot;، مما يلغي تماماً مخاطر الشروط الجزائية الناتجة عن تعثر شراء الأرض.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-400 text-xl">✓</span>
                                    </div>
                                    <p className="text-slate-400 text-base">
                                        <span className="text-green-400 font-semibold">النتيجة:</span> أنت تشتري واقعاً ملموساً، لا وعوداً مستقبلية.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Comprehensive System */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                            2
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            دورنا المحوري: منظومة شاملة تحت سقف واحد
                        </h3>
                    </div>
                    <p className="text-slate-400 mb-10 text-lg">
                        نحن لا نلعب دور المقاول فقط، بل نحن &quot;الشريك المؤسس&quot; لراحتك من خلال خطوات مدروسة:
                    </p>


                    {/* Umbrella Infographic - 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: MapPin,
                                title: "الانتقاء الاستراتيجي",
                                description: "فريقنا يختار الأرض بعناية فائقة بناءً على الموقع، المستقبل الاستثماري، وقانونية الأوراق.",
                                color: "blue",
                                gradient: "from-blue-500 to-blue-600",
                                bgGradient: "from-blue-500/10 to-transparent"
                            },
                            {
                                icon: Users,
                                title: "تأسيس اتحاد الملاك",
                                description: "نقوم نحن بجمع وتأسيس اتحاد الملاك بشكل قانوني سليم يضمن حقوق جميع الأطراف.",
                                color: "emerald",
                                gradient: "from-emerald-500 to-emerald-600",
                                bgGradient: "from-emerald-500/10 to-transparent"
                            },
                            {
                                icon: HardHat,
                                title: "البناء والتشطيب",
                                description: "نتولى المسؤولية الكاملة عن التنفيذ والتشطيبات بأعلى معايير الجودة الهندسية.",
                                color: "amber",
                                gradient: "from-amber-500 to-amber-600",
                                bgGradient: "from-amber-500/10 to-transparent"
                            },
                            {
                                icon: Key,
                                title: "التسليم الفعلي",
                                description: "تسليم في الموعد المتفق عليه دون مفاجآت.",
                                color: "purple",
                                gradient: "from-purple-500 to-purple-600",
                                bgGradient: "from-purple-500/10 to-transparent"
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            const colorClass = {
                                blue: "text-blue-400 border-blue-500/30",
                                emerald: "text-emerald-400 border-emerald-500/30",
                                amber: "text-amber-400 border-amber-500/30",
                                purple: "text-purple-400 border-purple-500/30"
                            };
                            const colors = colorClass[item.color as keyof typeof colorClass];

                            return (
                                <div key={index} className="group">
                                    <div className={`glass-card p-6 md:p-8 bg-gradient-to-l ${item.bgGradient} border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl`}>
                                        <div className="flex flex-col md:flex-row items-start gap-6">
                                            {/* Icon */}
                                            <div className={`w-16 h-16 rounded-2xl bg-slate-800/80 border ${colors} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 md:flex-shrink-0`}>
                                                <Icon className={`w-8 h-8 ${colors.split(' ')[0]}`} />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h4 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h4>
                                                <p className="text-slate-400 text-base md:text-lg leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Section 3: After Sales */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
                            3
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            ما بعد البيع: استدامة الخدمات بمرجعية شرعية
                        </h3>
                    </div>
                    <p className="text-slate-400 mb-10 text-lg">
                        لأن أغلب المباني تفقد قيمتها بسبب سوء الإدارة، وضعنا نظاماً مستداماً يحفظ قيمة عقارك:
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Security System Card */}
                        <div className="glass-card p-8 group hover:bg-slate-800/30 transition-all duration-300">
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Camera className="w-10 h-10 text-blue-400" />
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <h4 className="text-xl font-bold text-white">منظومة أمنية متكاملة</h4>
                                    </div>
                                    <p className="text-slate-400 leading-relaxed mb-4">
                                        توفير خدمات الأمن والحراسة وكاميرات المراقبة الحديثة 24/7 لضمان سلامة السكان.
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs">أمن 24/7</span>
                                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs">كاميرات مراقبة</span>
                                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs">حراسة</span>
                                    </div>

                                    {/* Added Benefit Section */}
                                    <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                        <h5 className="text-blue-400 font-semibold mb-2">✓ الفائدة :</h5>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            ضمان بيئة آمنة تماماً للأسرة والأطفال، وحماية الممتلكات من أي عبث، مما يمنح السكان راحة البال ويرفع القيمة السوقية والإيجارية للوحدة.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Maintenance Deposit Card */}
                        <div className="glass-card p-8 group hover:bg-slate-800/30 transition-all duration-300 border-2 border-emerald-500/20">
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Landmark className="w-10 h-10 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <h4 className="text-xl font-bold text-white">وديعة الصيانة الاستثمارية</h4>
                                    </div>
                                    <p className="text-slate-400 leading-relaxed mb-4">
                                        نحن لا نجمع أموال الصيانة لتنفق وتنفد؛ بل نؤسس وديعة صيانة يتم استثمار عوائدها في <span className="text-emerald-400 font-semibold">بنوك إسلامية</span> (بأرباح شرعية).
                                    </p>
                                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                        <h5 className="text-emerald-400 font-semibold mb-2">✓ الفائدة :</h5>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            يتم الصرف على خدمات المبنى (نظافة، أمن، صيانة مصاعد) من أرباح الوديعة وليس من أصل المبلغ، مما يضمن استمرار الخدمات مدى الحياة دون مطالبة الملاك بمصاريف إضافية مستقبلاً.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Quote */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                    <div className="relative glass-card p-8 md:p-12 border-2 border-blue-500/20 text-center">
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
                            <BadgeCheck className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-4">الملخص  </h4>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                            &quot;مع <span className="text-blue-400 font-bold">Prime Top Build</span>، أنت تتفادى مخاطر عدم تملك الأرض، تضمن جودة التنفيذ، وتستثمر في مبنى يدير نفسه ذاتياً بمرجعية مالية شرعية..
                            <span className="text-emerald-400 font-bold"> استلم مفتاحك وأنت مطمئن.</span>&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}
