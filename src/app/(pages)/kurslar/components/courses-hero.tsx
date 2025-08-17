export default function CoursesHero() {
    return (
        <section className="bg-gradient-to-br from-purple-600 to-indigo-600 py-32">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="font-secondary mb-6 text-4xl/tight font-bold text-white lg:text-6xl/tight">
                        Eğitim Programları
                        <span className="block bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                            Uzmanlık Kazanın
                        </span>
                    </h1>
                    <p className="mb-8 text-xl leading-relaxed text-white/90">
                        Mimari tasarım ve 3D modelleme alanında profesyonel
                        eğitim programlarımızla kariyerinizi ilerletın.
                    </p>
                    {/* <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button className="transform rounded-lg bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            Kurslara Göz At
                        </button>
                        <button className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
                            Ücretsiz Deneme
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
