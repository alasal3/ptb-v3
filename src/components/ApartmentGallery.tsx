"use client";

import { useState, useRef, useEffect } from "react";
import { Apartment } from "@/types/database";
import { X, ChevronLeft, ChevronRight, ZoomIn, MessageCircle, FileText } from "lucide-react";

interface ApartmentGalleryProps {
    apartments: Apartment[];
    buildingName: string;
}

const isPdf = (url: string) => {
    return url?.toLowerCase().includes('.pdf');
};

export default function ApartmentGallery({ apartments, buildingName }: ApartmentGalleryProps) {
    const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    if (!apartments || apartments.length === 0) return null;

    // دالة للحصول على صور الوحدة
    const getApartmentImages = (apartment: Apartment): string[] => {
        if (apartment.images && apartment.images.length > 0) {
            return apartment.images;
        }
        if (apartment.image_url) {
            return [apartment.image_url];
        }
        return ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"];
    };

    // فتح الـ lightbox
    const openLightbox = (apartment: Apartment) => {
        setSelectedApartment(apartment);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    // إغلاق الـ lightbox
    const closeLightbox = () => {
        setSelectedApartment(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'auto';
    };

    // التنقل بين الصور
    const goToImage = (index: number) => {
        if (selectedApartment) {
            const images = getApartmentImages(selectedApartment);
            setCurrentImageIndex((index + images.length) % images.length);
        }
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedApartment) {
            const images = getApartmentImages(selectedApartment);
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedApartment) {
            const images = getApartmentImages(selectedApartment);
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // التنقل بلوحة المفاتيح
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedApartment) return;

            if (e.key === 'ArrowRight') prevImage();
            if (e.key === 'ArrowLeft') nextImage();
            if (e.key === 'Escape') closeLightbox();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedApartment]);

    // تمرير الـ thumbnails للصورة الحالية
    useEffect(() => {
        if (thumbnailsRef.current && selectedApartment) {
            const thumbnail = thumbnailsRef.current.children[currentImageIndex] as HTMLElement;
            if (thumbnail) {
                thumbnail.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [currentImageIndex, selectedApartment]);

    // رابط الواتساب
    const getWhatsAppLink = (apartmentName: string) => {
        const message = `مرحباً، أستفسر عن الوحدة: ${apartmentName} في مبنى: ${buildingName}`;
        return `https://wa.me/201000262701?text=${encodeURIComponent(message)}`;
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8 text-white">الوحدات المتاحة</h2>

            {/* Grid الوحدات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {apartments.map((apartment) => {
                    const images = getApartmentImages(apartment);

                    return (
                        <div
                            key={apartment.id}
                            className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                        >
                            {/* الصورة الرئيسية */}
                            <div
                                className="h-64 overflow-hidden relative cursor-pointer"
                                onClick={() => openLightbox(apartment)}
                            >
                                {isPdf(images[0]) ? (
                                    <div className="w-full h-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition duration-500">
                                        <FileText size={48} className="text-white drop-shadow-lg" />
                                    </div>
                                ) : (
                                    <img
                                        src={images[0]}
                                        alt={apartment.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}

                                {/* عدد الصور */}
                                {images.length > 1 && (
                                    <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm flex items-center gap-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-medium">{images.length}</span>
                                    </div>
                                )}

                                {/* Overlay عند الـ hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                        <ZoomIn className="h-8 w-8 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* معلومات الوحدة */}
                            <div className="p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
                                        {apartment.name}
                                    </h3>

                                    {/* زر الواتساب */}
                                    <a
                                        href={getWhatsAppLink(apartment.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/30"
                                        title="استفسر عبر واتساب"
                                    >
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </a>
                                </div>

                                {/* معاينة الصور المصغرة */}
                                {images.length > 1 && (
                                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                                        {images.slice(0, 4).map((img, idx) => (
                                            <div
                                                key={idx}
                                                className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border-2 border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer"
                                                onClick={() => {
                                                    setSelectedApartment(apartment);
                                                    setCurrentImageIndex(idx);
                                                    document.body.style.overflow = 'hidden';
                                                }}
                                            >
                                                <img src={img} alt="" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        {images.length > 4 && (
                                            <div
                                                className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-black/50 flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:bg-black/70 transition-colors"
                                                onClick={() => openLightbox(apartment)}
                                            >
                                                +{images.length - 4}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ============ Lightbox Modal مع Thumbnail Strip ============ */}
            {selectedApartment && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-6 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-20">
                        {/* اسم الوحدة */}
                        <div className="flex flex-wrap items-center gap-4 flex-1">
                            <h3 className="text-white text-lg md:text-xl font-bold">
                                {selectedApartment.name}
                            </h3>
                            <span className="text-white/60 text-sm hidden md:block">
                                {buildingName}
                            </span>
                        </div>

                        {/* الأزرار */}
                        <div className="flex items-center gap-4 shrink-0">
                            {/* زر الواتساب */}
                            <a
                                href={getWhatsAppLink(selectedApartment.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-full transition-colors font-bold text-sm"
                            >
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span className="hidden md:inline">استفسر الآن</span>
                            </a>

                            {/* زر الإغلاق */}
                            <button
                                className="text-white hover:text-red-400 transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
                                onClick={closeLightbox}
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    {/* الصورة الرئيسية */}
                    <div
                        className="flex-1 flex items-center justify-center px-4 py-20 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* زر السابق */}
                        {getApartmentImages(selectedApartment).length > 1 && (
                            <button
                                onClick={prevImage}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all z-10 group"
                            >
                                <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
                            </button>
                        )}

                        {/* الصورة */}
                        <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                            {isPdf(getApartmentImages(selectedApartment)[currentImageIndex]) ? (
                                <iframe
                                    src={getApartmentImages(selectedApartment)[currentImageIndex]}
                                    className="w-full h-[80vh] rounded-lg bg-white shadow-2xl"
                                    title={`${selectedApartment.name} - ملف ${currentImageIndex + 1}`}
                                />
                            ) : (
                                <img
                                    src={getApartmentImages(selectedApartment)[currentImageIndex]}
                                    alt={`${selectedApartment.name} - صورة ${currentImageIndex + 1}`}
                                    className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain rounded-lg shadow-2xl"
                                />
                            )}

                            {/* عداد الصور */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                                {currentImageIndex + 1} / {getApartmentImages(selectedApartment).length}
                            </div>
                        </div>

                        {/* زر التالي */}
                        {getApartmentImages(selectedApartment).length > 1 && (
                            <button
                                onClick={nextImage}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all z-10 group"
                            >
                                <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
                            </button>
                        )}
                    </div>

                    {/* ============ Thumbnail Strip ============ */}
                    {getApartmentImages(selectedApartment).length > 1 && (
                        <div
                            className="bg-black/80 backdrop-blur-md border-t border-white/10 p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                ref={thumbnailsRef}
                                className="flex gap-3 overflow-x-auto py-2 px-4 justify-start md:justify-center scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                            >
                                {getApartmentImages(selectedApartment).map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`
                                            relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden 
                                            transition-all duration-300 
                                            ${index === currentImageIndex
                                                ? 'ring-3 ring-blue-500 scale-105 shadow-lg shadow-blue-500/30'
                                                : 'ring-2 ring-white/20 hover:ring-white/50 opacity-60 hover:opacity-100'
                                            }
                                        `}
                                    >
                                        {isPdf(img) ? (
                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                                <FileText size={20} className="text-white/70" />
                                            </div>
                                        ) : (
                                            <img
                                                src={img}
                                                alt={`صورة ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                        {/* رقم الصورة */}
                                        <div className={`
                                            absolute bottom-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                                            ${index === currentImageIndex
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-black/60 text-white/80'
                                            }
                                        `}>
                                            {index + 1}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}