'use client';

import Link from 'next/link';

interface Contact {
    email?: string;
    phone?: string;
    address?: {
        street?: string | null;
        city?: string | null;
        state?: string | null;
        zip?: string | null;
        country?: string | null;
    };
    mapEmbedUrl?: string | null;
}

interface Social {
    facebook?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    linkedin?: string | null;
    youtube?: string | null;
}

type FooterProps = {
    contact: Contact | null;
    socials: Social | null;
};

export default function Footer({ contact, socials }: FooterProps) {
    return (
        <footer className="w-full bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500">
                                <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
                            </div>
                            <div className="flex flex-col -space-y-0.5">
                                <span className="font-secondary text-xl font-semibold tracking-wide uppercase">
                                    Otholab.
                                </span>
                                <span className="font-secondary text-sm tracking-wide text-gray-400">
                                    Design Studio
                                </span>
                            </div>
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-gray-400 lg:max-w-md">
                            Kreatif çözümler ve dijital deneyimler oluşturarak
                            markanızı bir sonraki seviyeye taşıyoruz.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={socials?.instagram || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-purple-500">
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </a>
                            <a
                                href={socials?.twitter || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-purple-500">
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                </svg>
                            </a>
                            <a
                                href={socials?.linkedin || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-purple-500">
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-secondary mb-4 font-semibold text-white">
                            Site Haritasi
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-400 transition-colors hover:text-white">
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/hakkimizda"
                                    className="text-gray-400 transition-colors hover:text-white">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projeler"
                                    className="text-gray-400 transition-colors hover:text-white">
                                    Projeler
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kurslar"
                                    className="text-gray-400 transition-colors hover:text-white">
                                    Kurslar
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-secondary mb-4 font-semibold text-white">
                            Mimari Hizmetler
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <p className="text-gray-400 transition-colors hover:text-white">
                                    Mimari Çizimler
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-400 transition-colors hover:text-white">
                                    3D Modelleme
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-400 transition-colors hover:text-white">
                                    İç Mekan Tasarımı
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-400 transition-colors hover:text-white">
                                    Proje Danışmanlığı
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-secondary mb-4 font-semibold text-white">
                            İletişim
                        </h3>
                        <div className="space-y-3">
                            <p className="text-sm text-gray-400">
                                <span className="block font-medium">
                                    Email:
                                </span>
                                {contact?.email || ''}
                            </p>
                            <p className="text-sm text-gray-400">
                                <span className="block font-medium">
                                    Telefon:
                                </span>
                                {contact?.phone || ''}
                            </p>
                            <p className="text-sm text-gray-400">
                                <span className="block font-medium">
                                    Adres:
                                </span>
                                {contact?.address
                                    ? [
                                          contact.address.street,
                                          contact.address.city,
                                          contact.address.state,
                                          contact.address.zip,
                                          contact.address.country,
                                      ]
                                          .filter(Boolean)
                                          .join(', ')
                                    : ''}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Otholab. Tüm hakları
                        saklıdır.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link
                            href="/gizlilik"
                            className="text-gray-400 transition-colors hover:text-white">
                            Gizlilik Politikası
                        </Link>
                        <Link
                            href="/kullanim"
                            className="text-gray-400 transition-colors hover:text-white">
                            Kullanım Şartları
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
