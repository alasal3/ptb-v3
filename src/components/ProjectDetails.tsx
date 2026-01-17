"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { V1Project, V1Unit, V1MasterStage } from "@/types/database";
import { X, MapPin, CheckCircle, HardHat, Image as ImageIcon, LayoutGrid, Check, Info, Maximize, ArrowLeft, MessageCircle, FileText, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link"; // Ensure Link is imported

const isPdf = (url: string) => {
    return url?.toLowerCase().includes('.pdf');
};

interface ProjectDetailsProps {
    project: V1Project;
    masterStages: V1MasterStage[];
}

interface LightboxState {
    images: { src: string; caption: string }[];
    currentIndex: number;
}

export default function ProjectDetails({ project, masterStages }: ProjectDetailsProps) {
    const [activeTab, setActiveTab] = useState<'timeline' | 'units'>('timeline');
    const [selectedUnit, setSelectedUnit] = useState<V1Unit | null>(null);
    const [lightbox, setLightbox] = useState<LightboxState | null>(null);

    // WhatsApp utility
    const getWhatsAppLink = (projectName: string, unitCode?: string) => {
        const message = unitCode
            ? `مرحباً، أستفسر عن الوحدة: ${unitCode} في مشروع: ${projectName}`
            : `مرحباً، أستفسر عن مشروع: ${projectName}`;
        return `https://wa.me/201000262701?text=${encodeURIComponent(message)}`;
    };

    const translateUnitType = (type: string) => {
        const types: Record<string, string> = {
            'apartment': 'شقة',
            'duplex': 'دوبلكس',
            'villa': 'فيلا',
            'penthouse': 'بنتهاوس',
            'commercial': 'تجاري',
            'studio': 'استوديو',
            'office': 'مكتب',
            'shop': 'محل',
        };
        return types[type.toLowerCase()] || type;
    };

    const getVisibleStages = (project: V1Project) => {
        const projectStages = project.v1_project_stages || [];
        const masterStageItems = masterStages
            .map(masterStage => {
                const override = projectStages.find(ps => ps.master_stage_id === masterStage.id);
                if (override?.is_hidden) return null;
                return {
                    id: override?.id || masterStage.id,
                    title: override?.title || masterStage.title,
                    description: override?.description || null,
                    is_completed: override?.is_completed || false,
                    images: override?.images || null,
                    display_order: override?.display_order ?? masterStage.default_order,
                };
            })
            .filter(Boolean);

        const customStages = projectStages
            .filter(ps => !ps.master_stage_id && !ps.is_hidden)
            .map(ps => ({
                id: ps.id,
                title: ps.title,
                description: ps.description || null,
                is_completed: ps.is_completed || false,
                images: ps.images || null,
                display_order: ps.display_order,
            }));

        return [...masterStageItems, ...customStages]
            .sort((a, b) => (a?.display_order || 0) - (b?.display_order || 0)) as {
                id: string;
                title: string;
                description: string | null;
                is_completed: boolean;
                images: string[] | null;
                display_order: number;
            }[];
    };

    // Lightbox Handlers
    const openLightbox = (images: string[] | string, caption: string, startIndex: number = 0) => {
        const imageArray = Array.isArray(images) ? images : [images];
        const validImages = imageArray.filter(src => src && src.trim() !== "").map(src => ({ src, caption }));

        if (validImages.length > 0) {
            setLightbox({
                images: validImages,
                currentIndex: startIndex
            });
        }
    };

    const closeLightbox = () => setLightbox(null);

    const nextImage = useCallback(() => {
        if (lightbox) {
            setLightbox(prev => prev ? ({
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.images.length
            }) : null);
        }
    }, [lightbox]);

    const prevImage = useCallback(() => {
        if (lightbox) {
            setLightbox(prev => prev ? ({
                ...prev,
                currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
            }) : null);
        }
    }, [lightbox]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightbox) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightbox, nextImage, prevImage]);

    return (
        <div className="bg-primary min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="pointer-events-auto bg-primary border border-white/10 w-full rounded-3xl flex flex-col shadow-2xl overflow-hidden relative animate-[fadeInUp_0.4s_ease-out]">
                    {/* Header */}
                    <div className="p-6 border-b border-white/10 flex flex-wrap gap-6 justify-between items-start bg-primary z-10 shrink-0">
                        <div className="flex-1 min-w-[200px]">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h2>
                            <div className="flex items-center gap-4 text-sm">
                                <span className="text-gray-400 flex items-center gap-1"><MapPin size={14} className="text-accent" /> {project.location}</span>
                                {project.status === 'completed' ? (
                                    <span className="bg-green-500/20 text-green-400 border border-green-500/50 px-3 py-1 rounded text-xs">مكتمل</span>
                                ) : (
                                    <span className="bg-amber-500/20 text-amber-400 border border-amber-500/50 px-3 py-1 rounded text-xs">تحت الإنشاء</span>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-4 shrink-0">
                            <a
                                href={getWhatsAppLink(project.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white transition flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 shrink-0"
                                title="استفسر عبر واتساب"
                            >
                                <MessageCircle size={20} />
                            </a>
                            <Link href="/#projects" className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-500 hover:text-white text-gray-400 transition flex items-center justify-center shrink-0">
                                <X size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-white/10 bg-[#1e293b]/50 shrink-0 sticky top-0 z-20 backdrop-blur-md">
                        <button
                            onClick={() => setActiveTab('timeline')}
                            className={`flex-1 py-4 text-center font-bold border-b-2 transition ${activeTab === 'timeline' ? 'border-accent text-accent bg-accent/5' : 'border-transparent text-gray-400 hover:text-white'}`}
                        >
                            مراحل التنفيذ والمعرض
                        </button>
                        <button
                            onClick={() => setActiveTab('units')}
                            className={`flex-1 py-4 text-center font-bold border-b-2 transition ${activeTab === 'units' ? 'border-accent text-accent bg-accent/5' : 'border-transparent text-gray-400 hover:text-white'}`}
                        >
                            الوحدات والمخططات
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 p-6 md:p-8 bg-primary">
                        {activeTab === 'timeline' && (
                            <div className="block">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <div className="text-gray-500 text-xs mb-1">المساحة الإجمالية</div>
                                        <div className="font-bold text-xl md:text-2xl text-white">{project.area} م²</div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <div className="text-gray-500 text-xs mb-1">عدد الوحدات</div>
                                        <div className="font-bold text-xl md:text-2xl text-white">{project.units_count}</div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <div className="text-gray-500 text-xs mb-1">نسبة الإنجاز</div>
                                        <div className="font-bold text-xl md:text-2xl text-accent">{project.progress_percentage}%</div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <div className="text-gray-500 text-xs mb-1">التسليم المتوقع</div>
                                        <div className="font-bold text-xl md:text-2xl text-white">{project.delivery_date}</div>
                                    </div>
                                </div>

                                {project.cover_images && project.cover_images.length > 0 && (
                                    <div className="mb-12">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-1 h-8 bg-accent rounded-full"></div>
                                            <h3 className="text-xl font-bold text-white">معرض صور المشروع</h3>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {project.cover_images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="relative h-40 rounded-xl overflow-hidden cursor-pointer group border border-white/10"
                                                    onClick={() => openLightbox(project.cover_images!, project.title, idx)}
                                                >
                                                    {isPdf(img) ? (
                                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition duration-700">
                                                            <FileText size={48} className="text-white drop-shadow-lg" />
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <Image
                                                                src={img}
                                                                alt={`${project.title} - ${idx + 1}`}
                                                                fill
                                                                className="object-cover group-hover:scale-110 transition duration-700"
                                                            />
                                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-1 h-8 bg-accent rounded-full"></div>
                                    <h3 className="text-xl font-bold text-white">جدول سير العمل</h3>
                                </div>
                                <div className="relative space-y-10 pr-4 pb-10 mr-2 border-r border-white/10">
                                    {getVisibleStages(project).map((stage) => (
                                        <div key={stage.id} className={`relative flex gap-6 ${stage.is_completed ? 'opacity-100' : 'opacity-50 grayscale'}`}>
                                            <div className={`absolute -right-[1.4rem] top-0 w-9 h-9 rounded-full flex items-center justify-center z-10 border-4 border-primary ${stage.is_completed ? 'bg-green-500 text-white shadow-[0_0_10px_#22c55e]' : 'bg-gray-700 text-gray-400'}`}>
                                                {stage.is_completed ? <Check size={16} /> : <HardHat size={16} />}
                                            </div>
                                            <div className="flex-1 glass-panel p-6 rounded-xl border border-white/5 hover:border-accent/30 transition">
                                                <h4 className="text-lg font-bold text-white mb-1">{stage.title}</h4>
                                                {stage.description && <p className="text-sm text-gray-300 leading-relaxed mb-4">{stage.description}</p>}
                                                {stage.images && stage.images.length > 0 && (
                                                    <button
                                                        onClick={() => openLightbox(stage.images!, `${project.title} - ${stage.title}`, 0)}
                                                        className="text-xs bg-white/5 hover:bg-accent hover:text-black text-white px-4 py-2 rounded border border-white/10 transition flex items-center gap-2 w-fit"
                                                    >
                                                        <ImageIcon size={14} /> عرض صور المرحلة ({stage.images.length})
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'units' && (
                            <div className="h-full">
                                <div className="flex flex-col lg:flex-row h-full gap-8 min-h-[500px]">
                                    <div className="w-full lg:w-1/3 flex flex-col">
                                        <div className="bg-white/5 p-4 rounded-xl mb-4 shrink-0">
                                            <h4 className="text-white font-bold mb-1">قائمة الوحدات</h4>
                                            <p className="text-xs text-gray-400">اختر وحدة لعرض التفاصيل</p>
                                        </div>
                                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-3 overflow-y-auto pr-2 custom-scrollbar flex-1 content-start max-h-[800px]">
                                            {project.v1_units?.map((unit) => (
                                                <button
                                                    key={unit.id}
                                                    onClick={() => setSelectedUnit(unit)}
                                                    className={`glass-panel p-3 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-accent hover:text-black hover:border-accent transition group ${selectedUnit?.id === unit.id ? 'bg-accent text-black border-accent' : ''}`}
                                                >
                                                    <LayoutGrid size={24} className={`mb-1 transition ${selectedUnit?.id === unit.id ? 'text-black' : 'text-gray-400 group-hover:text-black'}`} />
                                                    <span className={`font-bold text-sm transition ${selectedUnit?.id === unit.id ? 'text-black' : 'text-white group-hover:text-black'}`}>{unit.unit_code}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-2/3 glass-panel rounded-2xl p-1 relative flex flex-col overflow-hidden min-h-[400px]">
                                        {selectedUnit ? (
                                            <div className="relative w-full h-full flex flex-col animate-[fadeInUp_0.4s_ease-out] overflow-y-auto custom-scrollbar">
                                                <div className="relative h-48 md:h-64 w-full shrink-0 group overflow-hidden bg-gray-900">
                                                    {selectedUnit.image_url ? (
                                                        <>
                                                            {isPdf(selectedUnit.image_url) ? (
                                                                <div className="w-full h-full flex items-center justify-center bg-gray-800 group-hover:bg-gray-700 transition">
                                                                    <FileText size={64} className="text-white/50 group-hover:text-white transition" />
                                                                </div>
                                                            ) : (
                                                                <Image
                                                                    src={selectedUnit.image_url}
                                                                    alt={selectedUnit.unit_code}
                                                                    fill
                                                                    className="object-cover transition duration-700 group-hover:scale-110"
                                                                />
                                                            )}
                                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer" onClick={() => openLightbox(selectedUnit.image_url!, `${selectedUnit.unit_code} - ${translateUnitType(selectedUnit.type)}`)}>
                                                                <span className="bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                                                                    <Maximize size={14} /> {isPdf(selectedUnit.image_url) ? "عرض الملف" : "تكبير"}
                                                                </span>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-gray-500">لا توجد صورة</div>
                                                    )}
                                                </div>
                                                <div className="p-6 flex-1 bg-[#151f32]">
                                                    <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white mb-1">وحدة {selectedUnit.unit_code}</h3>
                                                            <p className="text-accent text-sm font-semibold">{translateUnitType(selectedUnit.type)}</p>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-left ml-4">
                                                                <span className="block text-gray-500 text-xs">السعر</span>
                                                                <span className="font-bold text-xl text-green-400">{selectedUnit.price || "غير محدد"}</span>
                                                            </div>
                                                            <a href={getWhatsAppLink(project.title, selectedUnit.unit_code)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20 font-bold text-sm">
                                                                <MessageCircle size={18} /> استفسر الآن
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                                        <div className="bg-black/30 p-3 rounded-lg flex items-center gap-3">
                                                            <Maximize size={16} className="text-gray-500" />
                                                            <div>
                                                                <span className="block text-gray-500 text-[10px]">المساحة</span>
                                                                <span className="text-white font-bold">{selectedUnit.area} م²</span>
                                                            </div>
                                                        </div>
                                                        <div className="bg-black/30 p-3 rounded-lg flex items-center gap-3">
                                                            <LayoutGrid size={16} className="text-gray-500" />
                                                            <div>
                                                                <span className="block text-gray-500 text-[10px]">الغرف</span>
                                                                <span className="text-white font-bold">{selectedUnit.rooms_count || '-'}</span>
                                                            </div>
                                                        </div>
                                                        <div className="bg-black/30 p-3 rounded-lg flex items-center gap-3">
                                                            <LayoutGrid size={16} className="text-gray-500" />
                                                            <div>
                                                                <span className="block text-gray-500 text-[10px]">الدور</span>
                                                                <span className="text-white font-bold">{selectedUnit.floor_number || '-'}</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="bg-accent/5 border border-accent/10 p-3 rounded-lg mb-6">
                                                        <p className="text-sm text-gray-300 leading-relaxed flex gap-2">
                                                            <Info size={16} className="text-accent shrink-0 mt-0.5" />
                                                            {selectedUnit.layout_description || "لا يوجد وصف متاح"}
                                                        </p>
                                                    </div>
                                                    {selectedUnit.images && selectedUnit.images.length > 0 && (
                                                        <div>
                                                            <h5 className="text-sm text-gray-400 font-bold mb-3 border-b border-white/5 pb-2">صور الوحدة الإضافية</h5>
                                                            <div className="grid grid-cols-3 gap-3">
                                                                {selectedUnit.images.map((img, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className="relative h-24 rounded-lg overflow-hidden cursor-pointer group border border-white/10"
                                                                        onClick={() => openLightbox(selectedUnit.images!, `${selectedUnit.unit_code} - صورة ${idx + 1}`, idx)}
                                                                    >
                                                                        {isPdf(img) ? (
                                                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition duration-700">
                                                                                <FileText size={32} className="text-white/70" />
                                                                            </div>
                                                                        ) : (
                                                                            <Image
                                                                                src={img}
                                                                                alt={`Unit Image ${idx}`}
                                                                                fill
                                                                                className="object-cover group-hover:scale-110 transition duration-700"
                                                                            />
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center h-full text-center p-10">
                                                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                                    <LayoutGrid size={32} className="text-gray-500" />
                                                </div>
                                                <p className="text-gray-400 text-lg">اضغط على أي وحدة من القائمة لعرض المخطط والتسعير</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
                    <button onClick={closeLightbox} className="absolute top-6 right-6 text-white text-4xl hover:text-accent transition z-50 p-2"><X size={32} /></button>
                    {lightbox.images.length > 1 && (
                        <>
                            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition z-50"><ChevronLeft size={48} /></button>
                            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition z-50"><ChevronRight size={48} /></button>
                        </>
                    )}
                    <div className="max-w-5xl max-h-[90vh] w-full p-4 relative flex flex-col items-center">
                        <div className="relative w-full h-[80vh] mb-4">
                            {isPdf(lightbox.images[lightbox.currentIndex].src) ? (
                                <iframe src={lightbox.images[lightbox.currentIndex].src} className="w-full h-full border-0 rounded-lg bg-white" title="PDF Viewer" />
                            ) : (
                                <Image src={lightbox.images[lightbox.currentIndex].src} alt={lightbox.images[lightbox.currentIndex].caption} fill className="object-contain" />
                            )}
                        </div>
                        <div className="text-white text-center bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
                            <p className="text-lg font-bold">{lightbox.images[lightbox.currentIndex].caption}</p>
                            {lightbox.images.length > 1 && <p className="text-sm text-gray-400 mt-1">{lightbox.currentIndex + 1} / {lightbox.images.length}</p>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
