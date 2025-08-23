interface Course {
    id: string;
    title: string;
    duration: string;
    level: string;
    price: string;
    description: string;
    features: string[];
    paymentUrl: string;
}

export default function CoursesGrid({ data }: { data: Course[] }) {
    const courses = data;

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Kurs Programlarımız
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Uzman eğitmenlerimiz eşliğinde profesyonel seviyeye
                        ulaşın
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-purple-300 hover:shadow-2xl">
                            <div className="mb-4 flex items-start justify-between">
                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                                        course.level === 'Başlangıç'
                                            ? 'bg-green-100 text-green-600'
                                            : course.level === 'Orta'
                                              ? 'bg-yellow-100 text-yellow-600'
                                              : 'bg-red-100 text-red-600'
                                    }`}>
                                    {course.level}
                                </span>
                                <span className="text-2xl font-bold text-purple-600">
                                    {course.price}₺
                                </span>
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-gray-900">
                                {course.title}
                            </h3>

                            <p className="mb-4 leading-relaxed text-gray-600">
                                {course.description}
                            </p>

                            <div className="mb-6 flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    {course.duration}
                                </span>
                            </div>

                            <div className="mb-6 flex-1">
                                <h4 className="mb-2 font-semibold text-gray-900">
                                    Öğrenecekleriniz:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {course.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="rounded bg-purple-50 px-2 py-1 text-sm text-purple-600">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={course.paymentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full transform cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                Hemen Kayıt Ol
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
