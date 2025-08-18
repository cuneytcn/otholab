import ProjectsFilter from './components/projects-filter';
import ProjectsHero from './components/projects-hero';

export default function ProjelerPage() {
    return (
        <main className="w-full">
            <ProjectsHero />
            <ProjectsFilter />
        </main>
    );
}
