export interface Building {
    id: number;
    name: string;
    district: string;
    details: string;
    facade_images: string[];
    construction_images: string[];
    apartments?: Apartment[]; // Joined data
}

export interface Apartment {
    id: number;
    building_id: number;
    name: string;
    image_url: string;
    images?: string[]; // مصفوفة الصور المتعددة
}

export interface DateDetails {
    day: string;
    month: string;
    year: string;
}

export interface EventFeature {
    icon: string;
    title: string;
    description: string;
    color: string;
}

export interface Event {
    id: string;
    created_at: string;
    title: string;
    description: string;
    location: string;
    status: 'upcoming' | 'past';
    date_details: DateDetails;
    features: EventFeature[];
    video_links: string[];
}

export interface Lead {
    id?: number;
    created_at?: string;
    name: string;
    email?: string;
    phone: string;
    interest_apartments_id?: number | string | null;
    status: string;
    interest_buildings_id?: number | string | null;
    message?: string;
    // New columns for v1_projects references
    interest_project_id?: string | null;
    interest_unit_id?: string | null;
}

// --- V1 Schema (New) ---

export interface V1Project {
    id: string; // UUID
    created_at: string;
    title: string;
    status: 'completed' | 'under-construction' | 'planned';
    location: string;
    area: string;
    units_count: number;
    progress_percentage: number;
    delivery_date?: string;
    cover_image_url?: string;
    video_url?: string;
    cover_images?: string[]; // Array of project images
    v1_units?: V1Unit[];
    v1_project_stages?: V1ProjectStage[];
}

export interface V1Unit {
    id: string; // UUID
    project_id: string;
    unit_code: string;
    type: string;
    area: string;
    rooms_count?: number;
    floor_number?: string;
    price?: string;
    status: 'available' | 'sold';
    image_url?: string;
    images?: string[]; // Array of unit images
    layout_description?: string;
    created_at: string;
}

export interface V1ProjectStage {
    id: string; // UUID
    project_id: string;
    title: string;
    description?: string;
    is_completed: boolean;
    images?: string[];
    display_order: number;
    created_at: string;
    master_stage_id?: string; // FK to v1_master_stages
    is_hidden?: boolean;
}

export interface V1MasterStage {
    id: string; // UUID
    title: string;
    default_order: number;
    created_at: string;
}

export interface V1HeroSettings {
    id: string;
    is_video_active: boolean;
    video_url: string;
    poster_url: string;
    main_title: string;
    subtitle: string;
    created_at: string;
}
