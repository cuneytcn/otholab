export default function ContactForm() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">
                        Mesaj Gönderin
                    </h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Ad Soyad *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                    placeholder="Adınız ve soyadınız"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    E-posta *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                    placeholder="ornek@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Telefon
                            </label>
                            <input
                                type="tel"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                placeholder="+90 555 123 45 67"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Konu *
                            </label>
                            <div className="relative">
                                <select
                                    required
                                    className="appearance-none w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500 bg-white text-gray-900">
                                    <option value="">Konu seçiniz</option>
                                    <option value="mimari-proje">Mimari Proje</option>
                                    <option value="3d-modelleme">3D Modelleme</option>
                                    <option value="egitim">Eğitim Programları</option>
                                    <option value="danismanlik">Danışmanlık</option>
                                    <option value="diger">Diğer</option>
                                </select>
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Mesajınız *
                            </label>
                            <textarea
                                required
                                rows={6}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                placeholder="Projeniz veya ihtiyaçlarınız hakkında detayları paylaşın..."></textarea>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                required
                                className="mt-1 h-4 w-4 rounded border-gray-300 bg-gray-100 text-purple-600 focus:ring-purple-500"
                            />
                            <label
                                htmlFor="privacy"
                                className="text-sm text-gray-600">
                                Kişisel verilerimin işlenmesine ve iletişim
                                kurulmasına onay veriyorum.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full transform rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            Mesajı Gönder
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
