import { supabase } from './supabase';
import { Building } from '@/types/database';

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
