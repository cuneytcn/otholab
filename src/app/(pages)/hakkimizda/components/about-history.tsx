export default function AboutHistory() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-4xl font-bold text-gray-900">
                            Hikayemiz
                        </h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-600">
                                2009 yılında mimari tasarım tutkusuyla kurulan
                                Otholab, modern mimari anlayışı ve teknolojik
                                yenilikleri harmanlayarak sektörde öncü bir
                                konuma gelmiştir.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-600">
                                İlk günden bu yana amacımız, sadece yapılar inşa
                                etmek değil, yaşam alanları yaratmak olmuştur.
                                Her projemizde fonksiyonellik, estetik ve
                                sürdürülebilirlik prensiplerini birleştiriyoruz.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-600">
                                3D modelleme ve görselleştirme teknolojilerinde
                                uzmanlaşarak, müşterilerimizin projelerini
                                gerçeğe dönüştürmeden önce en detaylı şekilde
                                görmelerini sağlıyoruz.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 p-8 text-white">
                            <h3 className="mb-6 text-2xl font-bold">
                                Vizyonumuz
                            </h3>
                            <p className="mb-6 leading-relaxed text-white/90">
                                Mimari tasarımda yenilikçi yaklaşımlar
                                benimseyerek, çevreye duyarlı ve kullanıcı
                                odaklı yapılar tasarlamak.
                            </p>
                            <h3 className="mb-4 text-2xl font-bold">
                                Misyonumuz
                            </h3>
                            <p className="leading-relaxed text-white/90">
                                Her müşterimizin benzersiz ihtiyaçlarını
                                anlayarak, hayallerindeki yapıları en yüksek
                                kalite standartlarında gerçeğe dönüştürmek.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
