import { getAllCourses } from '@/lib/keystatic';
import CoursesGrid from './components/courses-grid';
import CoursesHero from './components/courses-hero';
import CoursesTestimonials from './components/courses-testimonials';

export default async function Page() {
    const courses = await getAllCourses();

    return (
        <main className="w-full">
            <CoursesHero />
            <CoursesGrid data={courses} />
            <CoursesTestimonials />
        </main>
    );
}
