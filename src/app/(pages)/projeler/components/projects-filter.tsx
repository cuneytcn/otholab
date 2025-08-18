'use client';

import { useState } from 'react';
import ProjectsGrid from './projects-grid';

interface ProjectsFilterProps {
    onFilterChange?: (categoryId: string) => void;
}

export default function ProjectsFilter({
    onFilterChange,
}: ProjectsFilterProps) {
    const [activeFilter, setActiveFilter] = useState('Tümü');

    const categories = [
        { id: 'Tümü', name: 'Tümü' },
        { id: 'Konut', name: 'Konut' },
        { id: 'Ticari', name: 'Ticari' },
        { id: 'İç Mekan', name: 'İç Mekan' },
        { id: 'Peyzaj', name: 'Peyzaj' },
    ];

    const handleFilterClick = (categoryId: string) => {
        setActiveFilter(categoryId);
        onFilterChange?.(categoryId);

        console.log('Filter clicked:', categoryId);
    };

    return (
        <>
            <section className="bg-white py-12">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleFilterClick(category.id)}
                                className={`rounded-lg border px-6 py-3 font-semibold transition-all duration-300 ${
                                    activeFilter === category.id
                                        ? 'border-purple-500 bg-purple-100 text-purple-700'
                                        : 'border-gray-300 text-gray-700 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600'
                                }`}>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <ProjectsGrid activeFilter={activeFilter} />
        </>
    );
}
