export default function AboutStats() {
    const stats = [
        { number: '200+', label: 'Tamamlanan Proje' },
        { number: '15+', label: 'Yıllık Deneyim' },
        { number: '50+', label: 'Mutlu Müşteri' },
        { number: '10+', label: 'Uzman Ekip' },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <h3 className="mb-2 text-4xl font-bold text-purple-600 lg:text-5xl">
                                {stat.number}
                            </h3>
                            <p className="font-medium text-gray-600">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
