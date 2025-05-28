import CoursesSection from '~/components/pages/home/courses-section';
import HeroSection from '~/components/pages/home/hero-section';
import PartnersSection from '~/components/pages/home/partners-section';
import ProjectsSection from '~/components/pages/home/projects-section';
import SkillsSection from '~/components/pages/home/skills-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <PartnersSection />
      <CoursesSection />
    </main>
  );
}
