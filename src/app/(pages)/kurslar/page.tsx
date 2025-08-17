import CoursesGrid from './components/courses-grid';
import CoursesHero from './components/courses-hero';
import CoursesTestimonials from './components/courses-testimonials';

export default function KurslarPage() {
    return (
        <main className="w-full">
            <CoursesHero />
            <CoursesGrid />
            <CoursesTestimonials />
        </main>
    );
}
