import {
    Gift,
    Mic2,
    MessageCircle,
    Camera,
    Video
} from "lucide-react";

export interface EventItem {
    id: string;
    title: string;
    description: string;
    location: string;
    date: {
        day: string;
        month: string;
        year: string;
    };
    features: {
        icon: any;
        title: string;
        description: string;
        color: string;
    }[];
    status: "upcoming" | "past";
    video_links?: string[];
}

export const eventsList: EventItem[] = [
    {
        id: "1",
        title: "اكبر حدث عقاري اتحاد الملاك: من الحلم الى الحقيقة ، قريباً...",
        description: "لا تسمع للوعود، بل شاهد تحقيقها.. يوم حصري للكشف عن أول تجربة واقعية لفكرة اتحاد الملاك بعد اكتمالها.",
        location: "أمام مشروع B2",
        date: {
            day: "??",
            month: "??",
            year: "2025"
        },
        status: "upcoming",
        features: [
            {
                icon: Gift,
                title: "إزاحة الستار",
                description: "لحظة الكشف عن المبنى مكتمل التشطيب والواجهات، لنثبت أن الفكرة تحولت إلى واقع ملموس.",
                color: "purple"
            },
            {
                icon: Mic2,
                title: "رؤية المستقبل",
                description: "كلمة لرئيس مجلس الإدارة، يشرح فيها كيف نجحت التجربة وكيف نضمن تكرار النجاح.",
                color: "blue"
            },
            {
                icon: MessageCircle,
                title: "شركاء النجاح",
                description: "شهادات حية من الملاك الذين وثقوا بنا، يحكون تجربتهم من الفكرة إلى الاستلام.",
                color: "pink"
            },
            {
                icon: Camera,
                title: "التوثيق الكامل",
                description: "تغطية شاملة لكل زاوية في المشروع، لتكون دليلاً قاطعاً على جودة التنفيذ.",
                color: "amber"
            },
            {
                icon: Video,
                title: "قصة النجاح",
                description: "عرض فيلم وثائقي قصير يروي رحلة المشروع، ليكون إلهاماً لكل من يبحث عن استثمار آمن.",
                color: "emerald"
            }
        ]
    }
];

export function getEventById(id: string): EventItem | undefined {
    return eventsList.find(event => event.id === id);
}
