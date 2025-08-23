import { getProjectBySlug } from '@/lib/keystatic';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = await getProjectBySlug(id);

    console.log(project);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gray-900 py-32">
                <div className="relative z-10 container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center text-white">
                        <Link
                            href="/projeler"
                            className="group mb-8 inline-flex items-center text-white/80 transition-colors hover:text-white">
                            <svg
                                className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Projelere Dön
                        </Link>

                        <h1 className="mb-6 text-5xl leading-tight font-light tracking-wide md:text-6xl">
                            {project.title}
                        </h1>

                        <p className="mb-10 text-xl leading-relaxed font-light text-white/90 md:text-2xl">
                            {project.description}
                        </p>

                        {/* Project Meta */}
                        <div className="flex flex-wrap justify-center gap-8 text-white/80">
                            <div className="flex items-center">
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                {new Date(project.date).toLocaleDateString(
                                    'tr-TR'
                                )}
                            </div>

                            <div className="flex items-center">
                                <svg
                                    className="mr-2 h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                    />
                                </svg>
                                {project.category}
                            </div>

                            {project.location && (
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    {project.location}
                                </div>
                            )}

                            {project.area && (
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                        />
                                    </svg>
                                    {project.area}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Images Gallery */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-4 text-4xl font-light tracking-wide text-gray-800">
                                Proje Görselleri
                            </h2>
                            <div className="mx-auto h-1 w-20 bg-gray-800"></div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {project.images?.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden">
                                    <div className="relative h-96 bg-gray-200">
                                        <img
                                            src={image}
                                            alt={`${project.title} - Görsel ${index + 1}`}
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <div className="mb-12">
                                    <h2 className="mb-6 text-3xl font-light tracking-wide text-gray-800">
                                        Proje Hakkında
                                    </h2>
                                    <div className="mb-8 h-1 w-16 bg-gray-800"></div>
                                    <p className="text-lg leading-relaxed font-light text-gray-600">
                                        {project.longDescription}
                                    </p>
                                </div>

                                {/* Design Features */}
                                <div className="mb-12">
                                    <h3 className="mb-6 text-2xl font-light tracking-wide text-gray-800">
                                        Tasarım Özellikleri
                                    </h3>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center border-l-4 border-gray-800 bg-gray-50 p-4">
                                                    <span className="font-light text-gray-700">
                                                        {tech}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Info Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 p-8">
                                    <h3 className="mb-6 text-2xl font-light tracking-wide text-gray-800">
                                        Proje Bilgileri
                                    </h3>
                                    <div className="space-y-6">
                                        <div>
                                            <dt className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                                                Kategori
                                            </dt>
                                            <dd className="mt-1 text-lg text-gray-800">
                                                {project.category}
                                            </dd>
                                        </div>

                                        {project.clientName && (
                                            <div>
                                                <dt className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                                                    Müşteri
                                                </dt>
                                                <dd className="mt-1 text-lg text-gray-800">
                                                    {project.clientName}
                                                </dd>
                                            </div>
                                        )}

                                        {project.location && (
                                            <div>
                                                <dt className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                                                    Konum
                                                </dt>
                                                <dd className="mt-1 text-lg text-gray-800">
                                                    {project.location}
                                                </dd>
                                            </div>
                                        )}

                                        {project.area && (
                                            <div>
                                                <dt className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                                                    Alan
                                                </dt>
                                                <dd className="mt-1 text-lg text-gray-800">
                                                    {project.area}
                                                </dd>
                                            </div>
                                        )}

                                        <div>
                                            <dt className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                                                Tarih
                                            </dt>
                                            <dd className="mt-1 text-lg text-gray-800">
                                                {new Date(
                                                    project.date
                                                ).toLocaleDateString('tr-TR')}
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-900 py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center text-white">
                        <h2 className="mb-6 text-4xl font-light tracking-wide md:text-5xl">
                            Hayalinizdeki Projeyi Birlikte Tasarlayalım
                        </h2>
                        <p className="mb-10 text-xl leading-relaxed font-light text-white/80 md:text-2xl">
                            Mimari tasarım ve iç mekan projeleriniz için bizimle
                            iletişime geçin.
                        </p>
                        <Link
                            href="/iletisim"
                            className="inline-block border-2 border-white px-8 py-4 text-lg font-light tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-gray-900">
                            İLETİŞİME GEÇİN
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
