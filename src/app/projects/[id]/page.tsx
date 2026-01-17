import { createClient } from '@supabase/supabase-js';
import ProjectDetails from '@/components/ProjectDetails';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { V1Project, V1MasterStage } from '@/types/database';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { data: project } = await supabase
        .from('v1_projects')
        .select('*')
        .eq('id', id)
        .single();

    return {
        title: project ? `${project.title} - Prime Top Build` : 'Project Details',
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const [projectRes, masterStagesRes] = await Promise.all([
        supabase.from('v1_projects').select('*, v1_units(*), v1_project_stages(*)').eq('id', id).single(),
        supabase.from('v1_master_stages').select('*')
    ]);

    if (projectRes.error || !projectRes.data) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center">
                <div className="text-white text-2xl">Project not found</div>
            </div>
        );
    }

    const project = projectRes.data as V1Project;
    const masterStages = (masterStagesRes.data || []) as V1MasterStage[];

    return (
        <main className="min-h-screen bg-slate-900">
            <Navbar />
            <ProjectDetails project={project} masterStages={masterStages} />
            <Footer />
        </main>
    );
}
