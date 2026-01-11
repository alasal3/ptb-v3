import { MetadataRoute } from 'next'
import { getV1Projects } from '@/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://primetopbuild.com'

    // Fetch all projects
    const projects = await getV1Projects()

    // Static routes
    const routes = [
        '',
        '/about', // Assuming these exist or will exist based on typical structure
        '/projects',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(project.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...projectRoutes]
}
