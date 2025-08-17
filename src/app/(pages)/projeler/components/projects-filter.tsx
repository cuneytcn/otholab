export default function ProjectsFilter() {
    const categories = [
        { id: 'all', name: 'Tümü' },
        { id: 'residential', name: 'Konut' },
        { id: 'commercial', name: 'Ticari' },
        { id: 'interior', name: 'İç Mekan' },
        { id: 'landscape', name: 'Peyzaj' },
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600">
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
