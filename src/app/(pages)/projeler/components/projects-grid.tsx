export default function ProjectsGrid() {
    const projects = [
        {
            id: 1,
            title: 'Modern Villa Tasarımı',
            category: 'Konut',
            description: 'Minimalist yaklaşımla tasarlanan lüks villa projesi',
            tags: ['Mimari Tasarım', '3D Model', 'İç Mekan'],
        },
        {
            id: 2,
            title: 'Ofis Kompleksi',
            category: 'Ticari',
            description: 'Çok fonksiyonlu iş merkezi tasarım projesi',
            tags: ['Ticari Mimari', 'Peyzaj', '3D Görselleştirme'],
        },
        {
            id: 3,
            title: 'Cafe İç Mekan',
            category: 'İç Mekan',
            description: 'Sıcak ve davetkar atmosfer yaratma odaklı tasarım',
            tags: ['İç Mimari', 'Konsept', 'Detay Tasarım'],
        },
        {
            id: 4,
            title: 'Bahçe Düzenlemesi',
            category: 'Peyzaj',
            description: 'Doğal peyzaj tasarımı ve çevre düzenlemesi',
            tags: ['Peyzaj Tasarım', 'Sürdürülebilirlik', '3D Model'],
        },
        {
            id: 5,
            title: 'Apartman Cephesi',
            category: 'Konut',
            description: 'Modern apartman cephe yenileme projesi',
            tags: ['Cephe Tasarım', 'Renovasyon', '3D Görselleştirme'],
        },
        {
            id: 6,
            title: 'Restoran Tasarımı',
            category: 'Ticari',
            description: 'Özgün konsept restoran iç mekan tasarımı',
            tags: ['Restoran', 'İç Mekan', 'Lighting'],
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-400 to-indigo-500">
                                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <button className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100">
                                        Detayları Gör
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="mb-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600">
                                    {project.category}
                                </span>
                                <h3 className="mb-2 text-xl font-bold text-gray-900">
                                    {project.title}
                                </h3>
                                <p className="mb-4 leading-relaxed text-gray-600">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="transform rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        Daha Fazla Proje Yükle
                    </button>
                </div>
            </div>
        </section>
    );
}
