export default function Page() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 to-indigo-600 py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="font-secondary mb-6 text-4xl font-bold text-white lg:text-6xl">
                            Gizlilik Politikası
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed text-white/90">
                            Kişisel verilerinizin korunması bizim için önemlidir
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="prose prose-lg mx-auto max-w-4xl">
                        <div className="space-y-8 text-gray-600">
                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Kişisel Verilerin Toplanması
                                </h2>
                                <p>
                                    Otholab olarak, web sitemizi ziyaret eden
                                    kullanıcılarımızın gizliliğini korumayı
                                    taahhüt ediyoruz. Bu politika, hangi kişisel
                                    bilgilerin toplandığını, nasıl
                                    kullanıldığını ve korunduğunu açıklar.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Topladığımız Bilgiler
                                </h2>
                                <ul className="list-disc space-y-2 pl-6">
                                    <li>
                                        İletişim bilgileri (ad, e-posta,
                                        telefon)
                                    </li>
                                    <li>Proje ve hizmet talepleri</li>
                                    <li>Web sitesi kullanım verileri</li>
                                    <li>Çerez bilgileri</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Bilgilerin Kullanımı
                                </h2>
                                <p>
                                    Toplanan kişisel veriler sadece aşağıdaki
                                    amaçlarla kullanılır:
                                </p>
                                <ul className="mt-3 list-disc space-y-2 pl-6">
                                    <li>Hizmet taleplerinize yanıt vermek</li>
                                    <li>Proje danışmanlığı sağlamak</li>
                                    <li>
                                        Eğitim programları hakkında bilgi vermek
                                    </li>
                                    <li>Web sitesini geliştirmek</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Veri Güvenliği
                                </h2>
                                <p>
                                    Kişisel verilerinizi yetkisiz erişim,
                                    değişiklik, ifşa veya imhaya karşı korumak
                                    için uygun güvenlik önlemleri alıyoruz.
                                    Verileriniz şifrelenmiş ortamlarda saklanır.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Çerezler
                                </h2>
                                <p>
                                    Web sitemiz, kullanıcı deneyimini
                                    iyileştirmek için çerezler kullanır.
                                    Tarayıcı ayarlarınızdan çerezleri devre dışı
                                    bırakabilirsiniz.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Üçüncü Taraflar
                                </h2>
                                <p>
                                    Kişisel verilerinizi yasal zorunluluklar
                                    dışında üçüncü taraflarla paylaşmayız. İş
                                    ortaklarımızla paylaşılan veriler sadece
                                    hizmet sunumu amacıyladır.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Haklarınız
                                </h2>
                                <p>
                                    KVKK kapsamında aşağıdaki haklara
                                    sahipsiniz:
                                </p>
                                <ul className="mt-3 list-disc space-y-2 pl-6">
                                    <li>
                                        Kişisel verilerinizin işlenip
                                        işlenmediğini öğrenme
                                    </li>
                                    <li>
                                        Kişisel verileriniz hakkında bilgi talep
                                        etme
                                    </li>
                                    <li>
                                        Kişisel verilerinizin düzeltilmesini
                                        isteme
                                    </li>
                                    <li>
                                        Kişisel verilerinizin silinmesini talep
                                        etme
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    İletişim
                                </h2>
                                <p>
                                    Gizlilik politikası hakkında sorularınız
                                    için:
                                    <a
                                        href="mailto:info@otholab.com"
                                        className="text-purple-600 hover:text-purple-800">
                                        {' '}
                                        info@otholab.com
                                    </a>
                                </p>
                                <p className="mt-4 text-sm text-gray-500">
                                    Son güncelleme: Ağustos 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
