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
    email?: string; // Optional based on user request (only name/phone were emphasized)
    phone: string;
    interest_apartments_id?: number | null;
    status: string;
    interest_buildings_id?: number | null;
    message?: string;
}
