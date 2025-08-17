'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navLinks = [
    {
        name: 'Anasayfa',
        url: '/',
    },
    {
        name: 'Hakkımızda',
        url: '/hakkimizda',
    },
    {
        name: 'Projeler',
        url: '/projeler',
    },
    {
        name: 'Kurslar',
        url: '/kurslar',
    },
    {
        name: 'İletişim',
        url: '/iletisim',
    },
];

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 z-50 w-full transition-all duration-300',
                {
                    'bg-white/95 shadow-lg backdrop-blur-md':
                        scrolled || isOpen,
                    'bg-transparent': !scrolled && !isOpen,
                }
            )}>
            <div className="container mx-auto px-6 lg:px-8">
                <nav className="flex h-20 w-full items-center justify-between md:h-24">
                    <div className="flex items-center justify-center">
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="relative flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500">
                                <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
                            </div>
                            <div className="flex flex-col -space-y-0.5">
                                <span
                                    className={clsx(
                                        'font-secondary text-xl font-semibold tracking-wide uppercase md:text-2xl',
                                        {
                                            'text-white': !scrolled,
                                            '!text-black': isOpen,
                                        }
                                    )}>
                                    Otholab.
                                </span>
                                <span
                                    className={clsx(
                                        'font-secondary text-xs tracking-wide text-gray-500',
                                        {
                                            'text-white/50': !scrolled,
                                            '!text-gray-500': isOpen,
                                        }
                                    )}>
                                    Design Studio
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden lg:flex">
                        <ul className="flex items-center justify-center gap-1">
                            {navLinks.map((item, index) => {
                                const isActive = pathname === item.url;
                                return (
                                    <li key={index}>
                                        <Link
                                            href={item.url}
                                            className={clsx(
                                                'group font-secondary relative flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200',
                                                {
                                                    'bg-purple-50 text-black':
                                                        isActive,
                                                    'text-white hover:bg-gray-50 hover:text-black':
                                                        !isActive && !scrolled,
                                                }
                                            )}>
                                            {item.name}
                                            {isActive && (
                                                <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li>
                                <Link
                                    href="/kurslar?source=header"
                                    className="font-secondary relative ml-6 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
                                    <span className="mr-2">Hemen Kayıt Ol</span>
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-center lg:hidden">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className={clsx(
                                'group flex size-12 items-center justify-center rounded-lg p-2 transition-all duration-200',
                                {
                                    'bg-gray-100': isOpen,
                                    'hover:bg-gray-50': !isOpen,
                                }
                            )}>
                            <div className="relative h-5 w-5">
                                <span
                                    className={clsx(
                                        'absolute top-1/2 left-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 group-hover:bg-black',
                                        {
                                            '!-translate-y-2 bg-white': !isOpen,
                                            '-rotate-45 bg-black': isOpen,
                                            '!bg-black': scrolled,
                                        }
                                    )}
                                />
                                <span
                                    className={clsx(
                                        'absolute top-1/2 left-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 group-hover:bg-black',
                                        {
                                            'bg-white opacity-100': !isOpen,
                                            'bg-black opacity-0': isOpen,
                                            '!bg-black': scrolled,
                                        }
                                    )}
                                />
                                <span
                                    className={clsx(
                                        'absolute top-1/2 left-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 group-hover:bg-black',
                                        {
                                            '!translate-y-1.5 bg-white':
                                                !isOpen,
                                            'rotate-45 bg-black': isOpen,
                                            '!bg-black': scrolled,
                                        }
                                    )}
                                />
                            </div>
                        </button>
                    </div>
                </nav>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full border-t border-gray-100 bg-white/95 shadow-xl backdrop-blur-md lg:hidden">
                        <nav className="container mx-auto px-6 py-6">
                            <ul className="space-y-2">
                                {navLinks.map((item, index) => {
                                    const isActive = pathname === item.url;
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.url}
                                                onClick={() => setIsOpen(false)}
                                                className={clsx(
                                                    'font-secondary block rounded-lg px-4 py-3 font-medium transition-colors duration-200',
                                                    {
                                                        'bg-purple-50 text-purple-600':
                                                            isActive,
                                                        'text-gray-700 hover:bg-gray-50 hover:text-purple-600':
                                                            !isActive,
                                                    }
                                                )}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                                <li className="pt-4">
                                    <Link
                                        href="/kurslar?source=header"
                                        onClick={() => setIsOpen(false)}
                                        className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg">
                                        <span className="mr-2">
                                            Hemen Kayıt Ol
                                        </span>
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
