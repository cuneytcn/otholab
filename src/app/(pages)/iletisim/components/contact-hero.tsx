export default function ContactHero() {
    return (
        <section className="bg-gradient-to-br from-purple-600 to-indigo-600 py-32">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="font-secondary mb-6 text-4xl/tight font-bold text-white lg:text-6xl/tight">
                        İletişim
                        <span className="block bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
                            Bizimle Bağlantı Kurun
                        </span>
                    </h1>
                    <p className="mb-8 text-xl leading-relaxed text-white/90">
                        Mimari projeleriniz ve eğitim programlarımız hakkında
                        detaylı bilgi almak için bizimle iletişime geçin.
                    </p>
                </div>
            </div>
        </section>
    );
}
