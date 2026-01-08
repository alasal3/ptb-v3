import { supabase } from './supabase';
import { Building, Event as DBEvent, Lead, V1Project, V1HeroSettings, V1MasterStage } from '../types/database';
import { EventItem } from '../data/events';
import {
    Gift,
    Mic2,
    MessageCircle,
    Camera,
    Video,
    Sparkles,
    Calendar,
    MapPin,
    Play,
    CalendarClock,
    Plus
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, any> = {
    Gift,
    Mic2,
    MessageCircle,
    Camera,
    Video,
    Sparkles,
    Calendar,
    MapPin,
    Play,
    CalendarClock,
    Plus
};

export async function getNews(): Promise<string[]> {
    const { data, error } = await supabase
        .from('news')
        .select('details')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching news:', error);
        return [];
    }

    return data.map(item => item.details);
}

export async function getBuildings(): Promise<Building[]> {
    const { data, error } = await supabase
        .from('buildings')
        .select('*, apartments(*)');

    if (error) {
        console.error('Error fetching buildings:', error);
        return [];
    }

    return data as Building[];
}

export async function getBuildingById(id: string): Promise<Building | null> {
    console.log(`Fetching building with ID: ${id} (type: ${typeof id})`);

    const { data, error } = await supabase
        .from('buildings')
        .select('*, apartments(*)')
        .eq('id', id)
        .single();

    if (error) {
        console.error(`Error fetching building with id ${id}:`, error);
        // Fallback: Try fetching all and filtering (debug only)
        const { data: all } = await supabase.from('buildings').select('id');
        console.log('Available IDs:', all);
        return null;
    }

    return data as Building;
}

// Helper to map DB Event to UI EventItem
function mapEventFromDB(event: DBEvent): EventItem {
    return {
        id: event.id,
        title: event.title,
        description: event.description,
        location: event.location,
        status: event.status,
        date: event.date_details, // Map date_details to date
        features: event.features.map(f => ({
            ...f,
            icon: iconMap[f.icon] || Gift // Fallback to Gift if icon not found
        })),
        video_links: event.video_links
    };
}

export async function getEvents(): Promise<EventItem[]> {
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching events:', JSON.stringify(error, null, 2));
        return [];
    }

    return (data as DBEvent[]).map(mapEventFromDB);
}

export async function getEventById(id: string): Promise<EventItem | undefined> {
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        return undefined;
    }

    return mapEventFromDB(data as DBEvent);
}

export async function createLead(lead: Omit<Lead, 'id' | 'created_at'>): Promise<{ success: boolean; error?: any }> {
    console.log('Sending lead payload:', lead);
    const { data, error } = await supabase
        .from('leads')
        .insert([lead])
        .select();

    if (error) {
        console.error('Error creating lead:', JSON.stringify(error, null, 2));
        return { success: false, error };
    }

    return { success: true };
}

export async function getV1Projects(): Promise<V1Project[]> {
    const { data, error } = await supabase
        .from('v1_projects')
        .select(`
            *,
            v1_units (*),
            v1_project_stages (*)
        `)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching v1 projects:', error);
        return [];
    }

    // Sort stages by display_order
    const projects = data?.map(project => ({
        ...project,
        v1_project_stages: project.v1_project_stages?.sort((a: any, b: any) => a.display_order - b.display_order)
    }));

    return projects as V1Project[];
}

export async function getV1HeroSettings(): Promise<V1HeroSettings | null> {
    const { data, error } = await supabase
        .from('v1_hero_settings')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        console.error('Error fetching v1 hero settings:', error);
        return null;
    }

    return data as V1HeroSettings;
}

export async function getV1MasterStages(): Promise<V1MasterStage[]> {
    const { data, error } = await supabase
        .from('v1_master_stages')
        .select('*')
        .order('default_order', { ascending: true });

    if (error) {
        console.error('Error fetching v1 master stages:', error);
        return [];
    }

    return data as V1MasterStage[];
}
