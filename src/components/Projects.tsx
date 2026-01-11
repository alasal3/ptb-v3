"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { V1Project, V1Unit, V1ProjectStage, V1HeroSettings, V1MasterStage } from "@/types/database";
import { X, MapPin, CheckCircle, HardHat, Image as ImageIcon, LayoutGrid, Check, Info, Maximize, ArrowLeft, Volume2, VolumeX, ChevronRight, ChevronLeft, MessageCircle, FileText } from "lucide-react";

const isPdf = (url: string) => {
    return url?.toLowerCase().includes('.pdf');
};

interface ProjectsProps {
    projects: V1Project[];
    heroSettings: V1HeroSettings | null;
    masterStages: V1MasterStage[];
}

interface LightboxState {
    images: { src: string; caption: string }[];
    currentIndex: number;
}

export default function Projects({ projects, heroSettings, masterStages }: ProjectsProps) {
    const [filter, setFilter] = useState<'all' | 'completed' | 'under-construction'>('all');
    const [selectedProject, setSelectedProject] = useState<V1Project | null>(null);
    const [activeTab, setActiveTab] = useState<'timeline' | 'units'>('timeline');
    const [showAll, setShowAll] = useState(false);

    // Updated Lightbox State
    const [lightbox, setLightbox] = useState<LightboxState | null>(null);

    const [selectedUnit, setSelectedUnit] = useState<V1Unit | null>(null);

    // Video state control
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const togglePlay = () => {
        if (heroYoutubeId && iframeRef.current) {
            const action = isPlaying ? 'pauseVideo' : 'playVideo';
            iframeRef.current.contentWindow?.postMessage(JSON.stringify({
                event: 'command',
                func: action,
                args: []
            }), '*');
            setIsPlaying(!isPlaying);
            return;
        }

        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const toggleSound = () => {
        if (heroYoutubeId && iframeRef.current) {
            const action = isMuted ? 'unMute' : 'mute';
            iframeRef.current.contentWindow?.postMessage(JSON.stringify({
                event: 'command',
                func: action,
                args: []
            }), '*');
            setIsMuted(!isMuted);
            return;
        }

        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const heroVideoUrl = heroSettings?.video_url || "https://videos.pexels.com/video-files/3205915/3205915-hd_1920_1080_25fps.mp4";
    const heroYoutubeId = getYouTubeId(heroVideoUrl);

    const filteredProjects = projects.filter(p => filter === 'all' || p.status === filter);
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

    const openModal = (project: V1Project) => {
        setSelectedProject(project);
        setActiveTab('timeline');
        // Reset selected unit when opening a new project
        setSelectedUnit(null);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    // Open lightbox with a single image or an array of images
    const openLightbox = (images: string[] | string, caption: string, startIndex: number = 0) => {
        const imageArray = Array.isArray(images) ? images : [images];
        // Filter out empty strings just in case
        const validImages = imageArray.filter(src => src && src.trim() !== "").map(src => ({ src, caption }));

        if (validImages.length > 0) {
            setLightbox({
                images: validImages,
                currentIndex: startIndex
            });
        }
    };

    const closeLightbox = () => {
        setLightbox(null);
    };

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

    // Keyboard navigation for lightbox
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

    useEffect(() => {
        // Cleanup body overflow on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Listen for YouTube player state changes
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Only process messages from YouTube
            if (event.origin !== 'https://www.youtube-nocookie.com' && event.origin !== 'https://www.youtube.com') return;

            try {
                const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
                // YouTube player state: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering)
                if (data.event === 'onStateChange') {
                    if (data.info === 1) {
                        setIsPlaying(true);
                    } else if (data.info === 2 || data.info === 0) {
                        setIsPlaying(false);
                    }
                }
            } catch (e) {
                // Ignore parsing errors from other messages
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

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

    // Compute visible stages by merging master stages with project-specific overrides
    const getVisibleStages = (project: V1Project) => {
        const projectStages = project.v1_project_stages || [];

        // 1. Map master stages with their project-specific overrides
        const masterStageItems = masterStages
            .map(masterStage => {
                // Find the project-specific override for this master stage
                const override = projectStages.find(ps => ps.master_stage_id === masterStage.id);

                if (override?.is_hidden) {
                    return null; // Stage is hidden for this project
                }

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

        // 2. Add custom project stages (those without a master_stage_id)
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

        // 3. Combine and sort by display_order
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

    return (
        <section id="projects" className="py-20 bg-transparent text-[#f8fafc] font-tajawal selection:bg-accent selection:text-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(at_0%_0%,rgba(212,175,55,0.05)_0,transparent_50%)]"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(at_100%_0%,rgba(59,130,246,0.05)_0,transparent_50%)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header (Static) */}
                <div className="text-center mb-12 animate-card" style={{ animationDelay: '0.1s' }}>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-b from-white to-gray-400 tracking-tight">
                        أعمالنا <span className="text-accent">ومشاريعنا</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        نحول الرؤى الهندسية إلى واقع ملموس.. التزام بالجودة، دقة في التنفيذ، وإبداع في التصميم.
                    </p>
                </div>

                {/* Video Section (Dynamic Overlay) */}
                {(!heroSettings || heroSettings.is_video_active) && (
                    <div className="relative w-full max-w-5xl mx-auto min-h-[350px] aspect-video md:h-auto lg:h-auto video-container mb-16 group animate-card" style={{ animationDelay: '0.2s' }}>
                        {heroYoutubeId ? (
                            <div className="w-full h-full relative">
                                {/* YouTube Thumbnail/Poster - shows when not playing */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 z-[5]">
                                        <Image
                                            src={heroSettings?.poster_url || `https://img.youtube.com/vi/${heroYoutubeId}/maxresdefault.jpg`}
                                            alt={heroSettings?.main_title || 'Video thumbnail'}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}
                                <iframe
                                    ref={iframeRef}
                                    src={`https://www.youtube-nocookie.com/embed/${heroYoutubeId}?enablejsapi=1&mute=1&loop=1&playlist=${heroYoutubeId}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                    className="w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <video
                                ref={videoRef}
                                id="promoVideo"
                                className="w-full h-full object-cover cursor-pointer"
                                muted
                                loop
                                playsInline
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                onClick={togglePlay}
                                poster={heroSettings?.poster_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"}
                            >
                                <source src={heroVideoUrl} type="video/mp4" />
                                المتصفح لا يدعم الفيديو.
                            </video>
                        )}

                        <div className={`absolute inset-0 z-10 transition-all duration-700 flex flex-col items-center justify-center text-center px-6 ${isPlaying ? 'bg-transparent opacity-0 pointer-events-none' : 'bg-black/60 backdrop-blur-[2px] opacity-100 pointer-events-auto'}`}>
                            <div className="max-w-3xl w-full animate-[fadeInUp_0.5s_ease-out]">
                                <span className="bg-accent/30 text-accent border border-accent/50 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-3 inline-block uppercase tracking-wider">
                                    فيديو تعريفي
                                </span>
                                <h2 className="text-xl md:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight drop-shadow-2xl">
                                    {heroSettings?.main_title || 'جولة في أحدث مشاريعنا'}
                                </h2>
                                <p className="text-gray-200 max-w-xl mx-auto text-xs md:text-lg mb-6 leading-relaxed font-light drop-shadow-lg">
                                    {heroSettings?.subtitle || 'شاهد ملخصاً مرئياً لعمليات البناء والتشطيب في مشاريعنا الأخيرة بأعلى معايير الجودة.'}
                                </p>

                                <button
                                    onClick={togglePlay}
                                    className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/80 text-primary px-10 py-4 rounded-2xl font-black text-lg transition transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.4)] mx-auto"
                                >
                                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                                    <span>{isPlaying ? 'إيقاف مؤقت' : 'شاهد الفيديو'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Sound Toggle - Corner Position */}
                        <button
                            onClick={toggleSound}
                            className="absolute top-6 left-6 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-2xl border-2 border-white/30 text-white transition-all shadow-2xl active:scale-95 group"
                            title={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
                        >
                            {isMuted ? (
                                <VolumeX size={24} className="text-accent group-hover:scale-110 transition" />
                            ) : (
                                <Volume2 size={24} className="text-accent group-hover:scale-110 transition" />
                            )}
                        </button>
                    </div>
                )}

                {heroSettings && !heroSettings.is_video_active && (
                    <div className="relative w-full max-w-5xl mx-auto aspect-video md:h-[500px] video-container mb-16 group animate-card" style={{ animationDelay: '0.2s' }}>
                        <Image
                            src={heroSettings.poster_url}
                            alt={heroSettings.main_title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Filters */}
                <div className="flex justify-center gap-3 mb-12 flex-wrap animate-card" style={{ animationDelay: '0.3s' }}>
                    <button
                        onClick={() => setFilter('all')}
                        className={`px-6 py-2.5 rounded-full border border-white/10 transition duration-300 ${filter === 'all' ? 'bg-accent text-black font-bold border-accent' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                    >
                        الكل
                    </button>
                    <button
                        onClick={() => setFilter('completed')}
                        className={`px-6 py-2.5 rounded-full border border-white/10 transition duration-300 ${filter === 'completed' ? 'bg-accent text-black font-bold border-accent' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                    >
                        مشاريع منتهية
                    </button>
                    <button
                        onClick={() => setFilter('under-construction')}
                        className={`px-6 py-2.5 rounded-full border border-white/10 transition duration-300 ${filter === 'under-construction' ? 'bg-accent text-black font-bold border-accent' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                    >
                        تحت الإنشاء
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto pb-20">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => openModal(project)}
                            className="glass-card rounded-3xl cursor-pointer group h-[450px] animate-card"
                            style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                        >
                            <div className={`status-badge shadow-lg ${project.status === 'completed' ? 'status-completed' : 'status-pending'}`}>
                                {project.status === 'completed' ? (
                                    <><CheckCircle size={14} /> مكتمل</>
                                ) : (
                                    <><HardHat size={14} /> جاري التنفيذ</>
                                )}
                            </div>

                            <div className="h-3/5 w-full relative overflow-hidden">
                                {isPdf(project.cover_image_url || "") ? (
                                    <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-center group-hover:scale-110 transition duration-1000">
                                        <FileText size={64} className="text-gray-600 mb-2" />
                                        <span className="text-gray-500 text-sm font-bold">ملف PDF</span>
                                    </div>
                                ) : (
                                    <Image
                                        src={project.cover_image_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-1000"
                                    />
                                )}
                                {/* Overlay to indicate multiple images if available */}
                                {project.cover_images && project.cover_images.length > 0 && (
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-white text-xs flex items-center gap-1 z-10">
                                        <ImageIcon size={12} />
                                        <span>+{project.cover_images.length}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-90"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-linear-to-t from-primary via-primary/95 to-transparent pt-12">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition">{project.title}</h3>
                                <div className="flex flex-col gap-3 text-gray-300 mb-4">
                                    <span className="text-sm flex items-center gap-2"><MapPin size={14} className="text-accent" /> {project.location}</span>
                                    <div className="flex gap-3 text-xs">
                                        <span className="bg-white/10 px-3 py-1.5 rounded text-gray-300 border border-white/5">المساحة: {project.area} م²</span>
                                        <span className="bg-white/10 px-3 py-1.5 rounded text-gray-300 border border-white/5">{project.units_count} وحدة</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                    <div className="text-xs text-gray-400">نسبة الإنجاز: <span className="text-accent font-bold text-sm">{project.progress_percentage}%</span></div>
                                    <div className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 shadow-[0_0_15px_#d4af37]">
                                        <ArrowLeft size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                {filteredProjects.length > 4 && (
                    <div className="flex justify-center mb-12 -mt-10 relative z-20 animate-[fadeIn_0.5s_ease-out]">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-accent text-white hover:text-black rounded-full transition-all duration-300 border border-white/10 hover:border-accent shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] backdrop-blur-sm"
                        >
                            <span className="font-bold text-lg">
                                {showAll ? 'عرض أقل' : 'عرض المزيد'}
                            </span>
                            <div className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
                                <ChevronRight size={20} className="transform rotate-90" />
                            </div>
                        </button>
                    </div>
                )}
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300" onClick={closeModal}></div>

                    <div className="pointer-events-auto bg-primary border border-white/10 w-full max-w-6xl h-[90vh] rounded-3xl flex flex-col shadow-2xl overflow-hidden relative animate-[fadeInUp_0.4s_ease-out]">

                        {/* Modal Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-primary z-10 shrink-0">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedProject.title}</h2>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="text-gray-400 flex items-center gap-1"><MapPin size={14} className="text-accent" /> {selectedProject.location}</span>
                                    {selectedProject.status === 'completed' ? (
                                        <span className="bg-green-500/20 text-green-400 border border-green-500/50 px-3 py-1 rounded text-xs">مكتمل</span>
                                    ) : (
                                        <span className="bg-amber-500/20 text-amber-400 border border-amber-500/50 px-3 py-1 rounded text-xs">تحت الإنشاء</span>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <a
                                    href={getWhatsAppLink(selectedProject.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white transition flex items-center justify-center shadow-lg hover:scale-110 active:scale-95"
                                    title="استفسر عبر واتساب"
                                >
                                    <MessageCircle size={20} />
                                </a>
                                <button onClick={closeModal} className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-500 hover:text-white text-gray-400 transition flex items-center justify-center">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-white/10 bg-[#1e293b]/50 shrink-0">
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

                        {/* Modal Body */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-primary">

                            {/* Timeline Content */}
                            {activeTab === 'timeline' && (
                                <div className="block">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                            <div className="text-gray-500 text-xs mb-1">المساحة الإجمالية</div>
                                            <div className="font-bold text-xl md:text-2xl text-white">{selectedProject.area} م²</div>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                            <div className="text-gray-500 text-xs mb-1">عدد الوحدات</div>
                                            <div className="font-bold text-xl md:text-2xl text-white">{selectedProject.units_count}</div>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                            <div className="text-gray-500 text-xs mb-1">نسبة الإنجاز</div>
                                            <div className="font-bold text-xl md:text-2xl text-accent">{selectedProject.progress_percentage}%</div>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                            <div className="text-gray-500 text-xs mb-1">التسليم المتوقع</div>
                                            <div className="font-bold text-xl md:text-2xl text-white">{selectedProject.delivery_date}</div>
                                        </div>
                                    </div>

                                    {/* Project Gallery */}
                                    {selectedProject.cover_images && selectedProject.cover_images.length > 0 && (
                                        <div className="mb-12">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-1 h-8 bg-accent rounded-full"></div>
                                                <h3 className="text-xl font-bold text-white">معرض صور المشروع</h3>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {selectedProject.cover_images.map((img, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="relative h-40 rounded-xl overflow-hidden cursor-pointer group border border-white/10"
                                                        onClick={() => openLightbox(selectedProject.cover_images!, selectedProject.title, idx)}
                                                    >
                                                        {isPdf(img) ? (
                                                            <div className="w-full h-full bg-gray-800 flex items-center justify-center group-hover:scale-110 transition duration-700">
                                                                <FileText size={48} className="text-white drop-shadow-lg" />
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <Image
                                                                    src={img}
                                                                    alt={`${selectedProject.title} - ${idx + 1}`}
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

                                    {/* Project Stages */}
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-1 h-8 bg-accent rounded-full"></div>
                                        <h3 className="text-xl font-bold text-white">جدول سير العمل</h3>
                                    </div>

                                    <div className="relative space-y-10 pr-4 pb-10 mr-2 border-r border-white/10">
                                        {getVisibleStages(selectedProject).map((stage) => (
                                            <div key={stage.id} className={`relative flex gap-6 ${stage.is_completed ? 'opacity-100' : 'opacity-50 grayscale'}`}>
                                                <div className={`absolute -right-[1.4rem] top-0 w-9 h-9 rounded-full flex items-center justify-center z-10 border-4 border-primary ${stage.is_completed ? 'bg-green-500 text-white shadow-[0_0_10px_#22c55e]' : 'bg-gray-700 text-gray-400'}`}>
                                                    {stage.is_completed ? <Check size={16} /> : <HardHat size={16} />}
                                                </div>
                                                <div className="flex-1 glass-panel p-6 rounded-xl border border-white/5 hover:border-accent/30 transition">
                                                    <h4 className="text-lg font-bold text-white mb-1">{stage.title}</h4>
                                                    {stage.description && <p className="text-sm text-gray-300 leading-relaxed mb-4">{stage.description}</p>}

                                                    {stage.images && stage.images.length > 0 && (
                                                        <button
                                                            onClick={() => openLightbox(stage.images!, `${selectedProject.title} - ${stage.title}`, 0)}
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

                            {/* Units Content */}
                            {activeTab === 'units' && (
                                <div className="h-full">
                                    <div className="flex flex-col lg:flex-row h-full gap-8 min-h-[500px]">
                                        {/* Left: List */}
                                        <div className="w-full lg:w-1/3 flex flex-col">
                                            <div className="bg-white/5 p-4 rounded-xl mb-4 shrink-0">
                                                <h4 className="text-white font-bold mb-1">قائمة الوحدات</h4>
                                                <p className="text-xs text-gray-400">اختر وحدة لعرض التفاصيل</p>
                                            </div>
                                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-3 overflow-y-auto pr-2 custom-scrollbar flex-1 content-start">
                                                {selectedProject.v1_units?.map((unit) => (
                                                    <button
                                                        key={unit.id}
                                                        onClick={() => setSelectedUnit(unit)}
                                                        className={`glass-panel p-3 rounded-lg flex flex-col items-center justify-center gap-1 hover:bg-accent hover:text-black hover:border-accent transition group ${selectedUnit?.id === unit.id ? 'bg-accent text-black border-accent' : ''}`}
                                                    >
                                                        <LayoutGrid size={24} className={`mb-1 transition ${selectedUnit?.id === unit.id ? 'text-black' : 'text-gray-400 group-hover:text-black'}`} />
                                                        <span className={`font-bold text-sm transition ${selectedUnit?.id === unit.id ? 'text-black' : 'text-white group-hover:text-black'}`}>
                                                            {unit.unit_code}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right: Details */}
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
                                                                <div
                                                                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer"
                                                                    onClick={() => openLightbox(selectedUnit.image_url!, `${selectedUnit.unit_code} - ${translateUnitType(selectedUnit.type)}`)}
                                                                >
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
                                                                <a
                                                                    href={getWhatsAppLink(selectedProject.title, selectedUnit.unit_code)}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20 font-bold text-sm"
                                                                >
                                                                    <MessageCircle size={18} />
                                                                    استفسر الآن
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

                                                        {/* Unit Gallery */}
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
            )}

            {/* Lightbox */}
            {lightbox && (
                <div className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center animate-[fadeIn_0.3s_ease-out]">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white text-4xl hover:text-accent transition z-50 p-2"
                    >
                        <X size={32} />
                    </button>

                    {/* Navigation Buttons */}
                    {lightbox.images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition z-50"
                            >
                                <ChevronLeft size={48} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition z-50"
                            >
                                <ChevronRight size={48} />
                            </button>
                        </>
                    )}

                    <div className="w-full max-w-6xl p-4 text-center h-full flex flex-col justify-center">
                        <div className="relative h-[80vh] w-full">
                            {isPdf(lightbox.images[lightbox.currentIndex].src) ? (
                                <iframe
                                    src={lightbox.images[lightbox.currentIndex].src}
                                    className="w-full h-full rounded-lg bg-white"
                                    title={lightbox.images[lightbox.currentIndex].caption}
                                />
                            ) : (
                                <Image
                                    src={lightbox.images[lightbox.currentIndex].src}
                                    alt={lightbox.images[lightbox.currentIndex].caption}
                                    fill
                                    className="object-contain"
                                />
                            )}
                        </div>
                        <div className="mt-4">
                            <p className="text-white font-bold text-xl tracking-wide">
                                {lightbox.images[lightbox.currentIndex].caption}
                            </p>
                            {lightbox.images.length > 1 && (
                                <p className="text-gray-400 text-sm mt-1">
                                    {lightbox.currentIndex + 1} / {lightbox.images.length}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
