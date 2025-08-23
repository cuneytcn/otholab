export default function Page() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-600 to-indigo-600 py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="font-secondary mb-6 text-4xl font-bold text-white lg:text-6xl">
                            Kullanım Şartları
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed text-white/90">
                            Web sitemizi kullanırken uymanız gereken kurallar
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
                                    Kabul ve Uygulanabilirlik
                                </h2>
                                <p>
                                    Bu web sitesini kullanarak, aşağıdaki
                                    kullanım şartlarını kabul etmiş
                                    sayılırsınız. Bu şartlara katılmıyorsanız,
                                    lütfen siteyi kullanmayın.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Hizmet Tanımı
                                </h2>
                                <p>
                                    Otholab, mimari tasarım, 3D modelleme ve
                                    eğitim hizmetleri sunan bir şirkettir. Web
                                    sitemiz bilgilendirme, portföy paylaşımı ve
                                    iletişim amacıyla hizmet vermektedir.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Kullanıcı Sorumlulukları
                                </h2>
                                <ul className="list-disc space-y-2 pl-6">
                                    <li>Doğru ve güncel bilgiler sağlamak</li>
                                    <li>
                                        Yasadışı veya zararlı içerik paylaşmamak
                                    </li>
                                    <li>Telif haklarını ihlal etmemek</li>
                                    <li>
                                        Sistemi zararlı yazılımlarla etkilememek
                                    </li>
                                    <li>
                                        Diğer kullanıcıların haklarına saygı
                                        göstermek
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Fikri Mülkiyet Hakları
                                </h2>
                                <p>
                                    Bu web sitesindeki tüm içerik, tasarım,
                                    proje görselleri ve diğer materyaller
                                    Otholab'ın fikri mülkiyetidir. İzin
                                    alınmadan kopyalama, dağıtma veya ticari
                                    amaçla kullanma yasaktır.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Hizmet Sınırlamaları
                                </h2>
                                <p>
                                    Otholab, web sitesinin kesintisiz veya
                                    hatasız çalışacağını garanti etmez. Teknik
                                    arızalar, bakım çalışmaları veya diğer
                                    nedenlerle hizmet geçici olarak
                                    durdurulabilir.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Proje ve Eğitim Şartları
                                </h2>
                                <ul className="list-disc space-y-2 pl-6">
                                    <li>
                                        Proje anlaşmaları ayrı sözleşmelerle
                                        düzenlenir
                                    </li>
                                    <li>
                                        Eğitim programları için kayıt şartları
                                        geçerlidir
                                    </li>
                                    <li>
                                        Ödeme ve iade koşulları hizmet türüne
                                        göre değişir
                                    </li>
                                    <li>
                                        Telif hakları ve kullanım izinleri
                                        belirtilir
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Sorumluluk Reddi
                                </h2>
                                <p>
                                    Otholab, web sitesinin kullanımından
                                    doğabilecek doğrudan veya dolaylı
                                    zararlardan sorumlu değildir. Kullanıcılar
                                    siteyi kendi sorumluluklarında kullanır.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Değişiklikler
                                </h2>
                                <p>
                                    Otholab, bu kullanım şartlarını önceden
                                    haber vermeksizin değiştirme hakkını saklı
                                    tutar. Güncel şartlar bu sayfada yayınlanır.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    Uygulanacak Hukuk
                                </h2>
                                <p>
                                    Bu kullanım şartları Türkiye Cumhuriyeti
                                    yasalarına tabidir. Uyuşmazlıklar İstanbul
                                    mahkemelerinde çözülür.
                                </p>
                            </div>

                            <div>
                                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                    İletişim
                                </h2>
                                <p>
                                    Kullanım şartları hakkında sorularınız için:
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
