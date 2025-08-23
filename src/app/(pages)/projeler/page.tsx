import { getAllProjects } from '@/lib/keystatic';
import ProjectsFilter from './components/projects-filter';
import ProjectsHero from './components/projects-hero';

export default async function Page() {
    const allProjects = await getAllProjects();

    return (
        <main className="w-full">
            <ProjectsHero />
            <ProjectsFilter data={allProjects} />
        </main>
    );
}
