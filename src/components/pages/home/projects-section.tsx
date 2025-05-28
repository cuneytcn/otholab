import { clsx } from 'clsx';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    image: '/projects/MF-Architecture-Tree-House-Residence-2-930x480.jpg',
    link: '/projects/project-one',
    span: '7',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    video: '/projects/arch-1.gif',
    link: '/projects/project-two',
    span: '5',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description for project three.',
    image: '/projects/Eichler-in-Marinwood-Shoup-Building-Lab-2-330x480.jpg',
    link: '/projects/project-three',
    span: '3',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Description for project four.',
    image: '/projects/150223_brays_island_sc_modern_i_01-570x480.jpg',
    link: '/projects/project-four',
    span: '5',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'Description for project five.',
    image: '/projects/SAOTAfirstcrescent1-450x480.jpg',
    link: '/projects/project-five',
    span: '4',
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative w-full h-auto py-10 lg:py-20">
      <div className="container mx-auto px-5">
        {/* Heading Content */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-full md:col-span-5">
            <h2>Welcome</h2>
            <hr className="max-w-32 mt-5 opacity-50" />
          </div>
          <div className="col-span-full md:col-span-7">
            <div className="flex flex-col gap-10">
              <p>
                Practicing at the confluence of art, architecture, and building technology, we collaborate with clients to create buildings and environments in dialogue with
                culture and place.
              </p>
              <p>
                Praesent ut sem eu diam varius sodales. Integer erat tellus, accumsan a diam sit amet, sollicitudin molestie erat. Nulla quis aliquet elit. Nullam ac accumsan nisi,
                vitae bibendum elit. Ut felis lacus, fermentum ut orci nec, consectetur rhoncus ipsum. Donec tincidunt ipsum eget vehicula facilisis. Duis quis odio ut turpis
                fringilla umet.
              </p>
            </div>
          </div>
        </div>
        {/* Heading Content End */}

        {/* Projects Grid */}
        <div className="grid grid-cols-12 gap-5 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={clsx('col-span-full md:col-span-6 bg-white overflow-hidden', {
                'lg:col-span-1': project.span == '1',
                'lg:col-span-2': project.span == '2',
                'lg:col-span-3': project.span == '3',
                'lg:col-span-4': project.span == '4',
                'lg:col-span-5': project.span == '5',
                'lg:col-span-6': project.span == '6',
                'lg:col-span-7': project.span == '7',
                'lg:col-span-8': project.span == '8',
                'lg:col-span-9': project.span == '9',
                'lg:col-span-10': project.span == '10',
                'lg:col-span-11': project.span == '11',
                'lg:col-span-12': project.span == '12',
              })}>
              <a href={project.link} className="relative block group">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-72 lg:h-[400px] object-fill" />
                ) : (
                  <video muted loop autoPlay playsInline poster={project.video} className="w-full h-72 lg:h-[400] object-cover lg:object-fill">
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
                <div
                  className={clsx(
                    'absolute inset-0 flex justify-end items-start flex-col opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible bg-white/90',
                    {
                      'p-10': project.image,
                      'p-5 m-5': project.video,
                    }
                  )}>
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        {/* Projects Grid End */}

        <Link href="/projects" className="text-2xl mt-10 inline-block">
          See our latest projects <MoveRight className="inline-block stroke-[1.5] size-6 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
