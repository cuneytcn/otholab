export default function Page() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative h-[100dvh] w-full overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/assets/img/home-poster.png">
                    <source src="/assets/video/home.mp4" type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="container mx-auto px-6 text-center lg:px-8">
                        <h1 className="animate-fade-in-up font-secondary mb-6 text-4xl/tight font-bold text-white md:text-6xl/tight lg:text-7xl/tight">
                            Mimari Tasarım
                            <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                3D Modelleme
                            </span>
                        </h1>
                        <p className="animate-fade-in-up animation-delay-200 mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
                            Mimari hayallerinizi gerçeğe dönüştürüyoruz. 3D
                            modelleme ve görselleştirme teknolojileriyle
                            projelerinizi en detaylı şekilde tasarlıyor ve
                            sunuyoruz.
                        </p>
                        <div className="animate-fade-in-up animation-delay-400 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button className="transform rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                Projelerimizi İncele
                            </button>
                            <button className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                                Hakkımızda
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
                    <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
                        <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/70" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                                Mimari Tasarım
                                <span className="block text-purple-600">
                                    Uzmanlığımız
                                </span>
                            </h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-600">
                                Modern mimari anlayışı ve 3D modelleme
                                teknolojileriyle, hayalinizdeki yapıları gerçeğe
                                dönüştürüyoruz. Her proje bizim için yeni bir
                                mimari başyapıt yaratma fırsatıdır.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className="mb-2 text-3xl font-bold text-purple-600">
                                        200+
                                    </h3>
                                    <p className="text-gray-600">
                                        Tamamlanan Proje
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-3xl font-bold text-purple-600">
                                        15+
                                    </h3>
                                    <p className="text-gray-600">
                                        Yıllık Deneyim
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 p-8 text-white">
                                <h3 className="mb-6 text-2xl font-bold">
                                    Neden Bizi Seçmelisiniz?
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                            <svg
                                                className="h-3 w-3"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span>
                                            Fotorealistik 3D görselleştirme
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                            <svg
                                                className="h-3 w-3"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span>
                                            Detaylı teknik çizim ve planlar
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                            <svg
                                                className="h-3 w-3"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <span>
                                            Sürdürülebilir tasarım yaklaşımı
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Mimari Hizmetlerimiz
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            Konseptten inşaata kadar tüm mimari süreçlerde
                            profesyonel çözümler sunuyoruz
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-purple-300 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Mimari Tasarım
                            </h3>
                            <p className="text-gray-600">
                                Modern ve fonksiyonel mimari tasarım çözümleri.
                            </p>
                        </div>
                        <div className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-purple-300 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                3D Modelleme
                            </h3>
                            <p className="text-gray-600">
                                Fotorealistik 3D modeller ve görselleştirmeler.
                            </p>
                        </div>
                        <div className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-purple-300 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Teknik Çizim
                            </h3>
                            <p className="text-gray-600">
                                Detaylı teknik çizimler ve uygulama projeleri.
                            </p>
                        </div>
                        <div className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-purple-300 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 5h8m-8 0a2 2 0 01-2-2h12a2 2 0 01-2 2m-8 0v4"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                İç Mekan
                            </h3>
                            <p className="text-gray-600">
                                Fonksiyonel ve estetik iç mekan tasarımları.
                            </p>
                        </div>
                        <div className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-purple-300 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Peyzaj Tasarım
                            </h3>
                            <p className="text-gray-600">
                                Doğayla uyumlu peyzaj ve çevre düzenlemesi.
                            </p>
                        </div>
                        <div className="group rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-purple-300 hover:shadow-xl">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 transition-transform duration-300 group-hover:scale-110">
                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Konsept Tasarım
                            </h3>
                            <p className="text-gray-600">
                                Yaratıcı konsept geliştirme ve ön tasarım.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Son Projelerimiz
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-600">
                            Müşterilerimiz için geliştirdiğimiz başarılı
                            projelere göz atın
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
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
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                                        Villa Projesi {item}
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        Modern villa tasarımı ve 3D
                                        görselleştirme
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
                                            Mimari Tasarım
                                        </span>
                                        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-600">
                                            3D Model
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <button className="transform rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            Tüm Projeleri Görüntüle
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6 text-center lg:px-8">
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                        Hayalinizdeki Mimari Projeye Başlayalım
                    </h2>
                    <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
                        Mimari tasarım ve 3D modelleme konusunda uzman
                        ekibimizle birlikte hayalinizdeki yapıyı gerçeğe
                        dönüştürelim.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button className="transform rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            Ücretsiz Danışmanlık
                        </button>
                        <button className="rounded-lg border border-gray-300 bg-transparent px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50">
                            Projelerimizi İnceleyin
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
