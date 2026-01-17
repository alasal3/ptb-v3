import { createClient } from '@supabase/supabase-js';
import MallProject from '@/components/MallProject';
import { V1Project } from '@/types/database';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function getMallData() {
    const { data, error } = await supabase
        .from('v1_projects')
        .select(`
        *,
        v1_units (*)
      `)
        .eq('id', '2a0695b8-500e-4adb-8608-b58a1fe0f34d') // The Mall ID
        .single();

    if (error) {
        console.error('Error fetching mall data:', error);
        return null;
    }

    return data as V1Project;
}

export const revalidate = 0; // Dynamic

export default async function MallPage() {
    const project = await getMallData();

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center text-white">Project not found</div>;
    }

    return <MallProject project={project} />;
}
