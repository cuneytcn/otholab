'use client';

import { useRouter } from 'next/navigation';

interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    images: string[];
    technologies: string[];
    category: string;
    date: string;
    clientName?: string;
    location?: string;
    area?: string;
    projectUrl?: string;
    tags: string[];
}

const projects: Project[] = [
    {
        id: 'modern-villa-projesi',
        title: 'Modern Villa Tasarımı',
        description: 'Doğayla bütünleşen çağdaş villa projesi',
        longDescription:
            'Bu projede, müşterimizin ihtiyaçlarını modern mimari dille buluşturarak, doğal çevreyle uyumlu bir villa tasarladık. Geniş cam yüzeyler, açık plan yaşam alanları ve sürdürülebilir malzeme seçimleri ile çağdaş yaşamın konforunu sunan bir mekân yaratıldı. Proje, enerji verimliliği ve ekolojik duyarlılık prensipleri gözetilerek hayata geçirildi.',
        images: [
            '/images/hero-bg.jpg',
            '/images/hero-bg.jpg',
            '/images/hero-bg.jpg',
        ],
        technologies: [
            'Sürdürülebilir Malzemeler',
            'Akıllı Ev Sistemleri',
            'Enerji Verimli Tasarım',
            'Doğal Havalandırma',
            'Yağmur Suyu Toplama',
        ],
        category: 'Konut',
        date: '2024-03-15',
        clientName: 'Özel Müşteri',
        location: 'İstanbul, Zekeriyaköy',
        area: '450 m²',
        tags: ['Mimari Tasarım', '3D Model', 'İç Mekan'],
    },
    {
        id: 'ofis-binasi-tasarimi',
        title: 'Kurumsal Ofis Binası',
        description: 'Çalışan odaklı modern ofis kompleksi',
        longDescription:
            'Şirketin kurumsal kimliğini yansıtan, çalışan refahını ön planda tutan bir ofis binası tasarladık. Açık çalışma alanları, sessiz odalar, sosyal alanlar ve yeşil teraslar ile çalışanların verimlilik ve mutluluğunu artıran bir mekân oluşturduk.',
        images: ['/images/hero-bg.jpg', '/images/hero-bg.jpg'],
        technologies: [
            'LEED Sertifikalı',
            'Akıllı Bina Teknolojileri',
            'Modüler Tasarım',
            'Yeşil Çatı',
        ],
        category: 'Ticari',
        date: '2024-02-10',
        clientName: 'ABC Teknoloji',
        location: 'Ankara, Çankaya',
        area: '2.500 m²',
        tags: ['Ofis Tasarımı', '3D Görselleştirme', 'İç Mekan'],
    },
];

export default function ProjectsGrid({
    activeFilter,
}: {
    activeFilter: string;
}) {
    const router = useRouter();

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => {
                        return (
                            (activeFilter === 'Tümü' ||
                                project.category === activeFilter) && (
                                <div
                                    key={project.id}
                                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-400 to-indigo-500">
                                        <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <button
                                                onClick={() =>
                                                    router.push(
                                                        `/projeler/${project.id}`
                                                    )
                                                }
                                                className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100">
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
                            )
                        );
                    })}
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
