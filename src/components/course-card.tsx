import Link from 'next/link';

type Props = {
  img: string;
  title: string;
  description: string;
  url: string;
};

const CourseCard = ({ img, title, description, url = '/' }: Props) => {
  return (
    <div className="relative overflow-hidden group">
      <div className="flex flex-col gap-5 md:flex-row">
        <img src={img} alt={title} className="max-w-full h-auto object-cover" />
        <div className="flex flex-col gap-2.5">
          <h5 className="group-hover:text-yellow-400 transition-all duration-300">Integrated Way of Working</h5>
          <p className="line-clamp-3">{description}</p>
        </div>
      </div>
      <Link href={`/${url}`} className="absolute inset-0 w-full h-full"></Link>
    </div>
  );
};

export default CourseCard;
