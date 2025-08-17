import ProjectsFilter from './components/projects-filter';
import ProjectsGrid from './components/projects-grid';
import ProjectsHero from './components/projects-hero';

export default function ProjelerPage() {
    return (
        <main className="w-full">
            <ProjectsHero />
            <ProjectsFilter />
            <ProjectsGrid />
        </main>
    );
}
