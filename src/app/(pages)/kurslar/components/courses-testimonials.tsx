export default function CoursesTestimonials() {
    const testimonials = [
        {
            name: 'Elif Özkan',
            role: 'Mimarlık Öğrencisi',
            content:
                '3D modelleme kursunu tamamladıktan sonra projelerimi çok daha profesyonel bir şekilde sunabiliyorum. Eğitmenler gerçekten uzman ve sabırlı.',
            rating: 5,
        },
        {
            name: 'Barış Yıldız',
            role: 'İç Mimar',
            content:
                'Fotorealistik görselleştirme kursunda öğrendiklerim sayesinde müşterilerime çok daha etkileyici sunumlar yapabiliyorum. Kesinlikle tavsiye ederim.',
            rating: 5,
        },
        {
            name: 'Canan Aktaş',
            role: 'Peyzaj Mimarı',
            content:
                'Peyzaj tasarımı kursu beklentilerimin çok üzerindeydi. Teorik bilgilerle birlikte pratik uygulamalar da çok faydalıydı.',
            rating: 5,
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Öğrenci Yorumları
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Eğitim programlarımızı tamamlayan öğrencilerimizin
                        deneyimleri
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-white p-8 shadow-lg">
                            <div className="mb-4 flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="h-5 w-5 fill-current text-yellow-400"
                                        viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="mb-6 leading-relaxed text-gray-600 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-indigo-500">
                                    <span className="text-sm font-bold text-white">
                                        {testimonial.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-purple-600">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="mt-12 text-center">
                    <button className="transform rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        Tüm Yorumları Gör
                    </button>
                </div> */}
            </div>
        </section>
    );
}
