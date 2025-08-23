import { getAllTeam } from '@/lib/keystatic';
import AboutHero from './components/about-hero';
import AboutHistory from './components/about-history';
import AboutStats from './components/about-stats';
import AboutTeam from './components/about-team';

export default async function Page() {
    const allTeam = await getAllTeam();

    return (
        <main className="w-full">
            <AboutHero />
            <AboutStats />
            <AboutHistory />
            <AboutTeam data={allTeam} />
        </main>
    );
}
