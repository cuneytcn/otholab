import CourseCard from '~/components/course-card';
import Heading from '~/components/heading';

const courses = [
  {
    id: 1,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/04/christopher-burns-286429-unsplash-300x204.jpg',
    title: 'Integrated Way of Working',
    descrition: 'Boy prosperous increasing surrounded companions her nor advantages sufficient put. John on time down give meet help as..',
    url: '/courses/integrated-way-of-working',
  },
  {
    id: 2,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/04/dan-gold-224245-unsplash-300x169.jpg',
    title: 'Integrated Way of Working',
    descrition: 'Boy prosperous increasing surrounded companions her nor advantages sufficient put. John on time down give meet help as..',
    url: '/courses/integrated-way-of-working',
  },
  {
    id: 3,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/04/rob-bye-462762-unsplash-300x200.jpg',
    title: 'Integrated Way of Working',
    descrition: 'Boy prosperous increasing surrounded companions her nor advantages sufficient put. John on time down give meet help as..',
    url: '/courses/integrated-way-of-working',
  },
  {
    id: 4,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/04/rodrigo-martins-540358-unsplash-300x200.jpg',
    title: 'Integrated Way of Working',
    descrition: 'Boy prosperous increasing surrounded companions her nor advantages sufficient put. John on time down give meet help as..',
    url: '/courses/integrated-way-of-working',
  },
];

const CoursesSection = () => {
  return (
    <section className="relative w-full h-auto py-10 lg:py-20 bg-neutral-100">
      <div className="container mx-auto px-5">
        {/* Heading Content */}
        <Heading title="Courses">
          <p>Pellentesque luctus, dui sit amet blandit ornare, lacus turpis maximus nulla, at porttitor magna purus vel nunc.</p>
        </Heading>

        {/* Courses Grid */}
        <div className="grid grid-cols-12 gap-5 mt-10">
          {courses.map((course) => (
            <div key={course.id} className="col-span-full lg:col-span-6">
              <CourseCard img={course.img} title={course.title} description={course.descrition} url={course.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
