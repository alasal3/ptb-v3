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
