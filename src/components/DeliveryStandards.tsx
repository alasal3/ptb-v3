import React from 'react';
import { Home, CheckSquare, Layers, Palette, Building, Volume2, Shield, Settings, Wrench } from 'lucide-react';

export default function DeliveryStandards() {
    const deliverySpecs = [
        {
            icon: Palette,
            title: "حرية التصميم الداخلي (طوب أحمر)",
            description: "نسلمك الوحدة \"طوب أحمر\" داخلياً لتمنحك المرونة الكاملة في تقسيم الغرف واختيار التشطيبات والديكورات التي تناسب ذوقك واحتياجات أسرتك الخاصة، دون فرض ذوق معين عليك.",
            color: "blue"
        },
        {
            icon: Building,
            title: "فخامة المداخل والواجهات",
            description: "تشطيب خارجي كامل، مداخل فندقية فاخرة تعكس رقي السكان، وبوابات إلكترونية حديثة للعمارة.",
            color: "purple"
        },
        {
            icon: Volume2,
            title: "الهدوء والخصوصية",
            description: "جميع الوحدات مزودة بشبابيك \"ألوميتال\" قطاعات عازلة للصوت والأتربة، لتنعم بمنزل هادئ ونظيف دائماً.",
            color: "green"
        },
        {
            icon: Shield,
            title: "أقصى درجات الأمان",
            description: "أبواب مصفحة لكل شقة، نظام مراقبة بالكاميرات (CCTV) يغطي المبنى، ونظام أمن وحراسة.",
            color: "red"
        },
        {
            icon: Settings,
            title: "مرافق متكاملة",
            description: "مصاعد عالية الجودة، عدادات مياه وكهرباء رسمية جاهزة للعمل.",
            color: "orange"
        },
        {
            icon: Wrench,
            title: "استدامة القيمة (Facility Management)",
            description: "لا تنتهي علاقتنا بك عند البيع؛ نوفر نظام إدارة وصيانة دورية للمبنى بعد التسليم للحفاظ على نظافته وكفاءته، مما يضمن زيادة سعره مستقبلاً.",
            color: "teal"
        },
        {
            icon: CheckSquare,
            title: "باكيه جراش",
            description: "نضمن لك مكاناً مخصصاً لسيارتك داخل جراش المبنى، لتوفير أقصى درجات الراحة والأمان لك ولأسرتك.",
            color: "blue"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { icon: string; bg: string; border: string } } = {
            blue: { icon: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/30" },
            purple: { icon: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-500/30" },
            green: { icon: "text-green-400", bg: "bg-green-500/20", border: "border-green-500/30" },
            red: { icon: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/30" },
            orange: { icon: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-500/30" },
            teal: { icon: "text-teal-400", bg: "bg-teal-500/20", border: "border-teal-500/30" }
        };
        return colors[color] || colors.blue;
    };

    return (
        <section id="delivery" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        استلم عقارك بأعلى معايير الرفاهية والأمان
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        في Prime Top Build، نوازن بين رفاهية المظهر الخارجي وحريتك في اختيار ذوقك الداخلي. إليك ما ستحصل عليه:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deliverySpecs.map((spec, index) => {
                        const colorClasses = getColorClasses(spec.color);
                        return (
                            <div
                                key={index}
                                className={`glass-card p-6 rounded-2xl border ${colorClasses.border} hover:bg-slate-800/60 transition-all duration-300 group hover:-translate-y-2`}
                            >
                                <div className={`w-14 h-14 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <spec.icon className={`w-7 h-7 ${colorClasses.icon}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{spec.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{spec.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
