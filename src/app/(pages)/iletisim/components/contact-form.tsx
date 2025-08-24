'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(3, 'Ad Soyad zorunlu'),
    email: z.string().email('Geçerli bir e-posta girin'),
    phone: z
        .string()
        .min(10, 'Telefon zorunlu ve en az 10 karakter olmalı')
        .regex(
            /^\+?[0-9]{10,15}$/,
            'Telefon numarası sadece rakam ve başta + içerebilir, boşluk olmamalı'
        ),
    subject: z.string().min(1, 'Konu zorunlu'),
    message: z.string().min(10, 'Mesaj en az 10 karakter olmalı'),
    privacy: z.literal(true, { message: 'KVKK onayı zorunlu' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            privacy: undefined,
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (!response.ok)
                throw new Error(result.message || 'Form gönderilemedi !');

            setIsSubmitted(true);
            reset();

            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'Bir hata oluştu, lutfen tekrar deneyin.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="mb-8 text-3xl font-bold text-gray-900">
                        Mesaj Gönderin
                    </h2>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Ad Soyad *
                                </label>
                                <input
                                    type="text"
                                    {...register('name')}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                    placeholder="Adınız ve soyadınız"
                                />
                                {errors.name && (
                                    <div className="animate-fade-in mt-2 flex items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-3 py-2 text-xs text-red-700 shadow-sm">
                                        <svg
                                            className="h-4 w-4 text-red-500"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                            />
                                            <path
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8v4m0 4h.01"
                                            />
                                        </svg>
                                        <span className="font-medium">
                                            {errors.name.message}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    E-posta *
                                </label>
                                <input
                                    type="email"
                                    {...register('email')}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                    placeholder="ornek@email.com"
                                />
                                {errors.email && (
                                    <div className="animate-fade-in mt-2 flex items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-3 py-2 text-xs text-red-700 shadow-sm">
                                        <svg
                                            className="h-4 w-4 text-red-500"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                            />
                                            <path
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8v4m0 4h.01"
                                            />
                                        </svg>
                                        <span className="font-medium">
                                            {errors.email.message}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Telefon *
                            </label>
                            <input
                                type="tel"
                                {...register('phone')}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                placeholder="+90 555 123 45 67"
                            />
                            {errors.phone && (
                                <div className="animate-fade-in mt-2 flex items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-3 py-2 text-xs text-red-700 shadow-sm">
                                    <svg
                                        className="h-4 w-4 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8v4m0 4h.01"
                                        />
                                    </svg>
                                    <span className="font-medium">
                                        {errors.phone.message}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Konu *
                            </label>
                            <div className="relative">
                                <select
                                    {...register('subject')}
                                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500">
                                    <option value="">Konu seçiniz</option>
                                    <option value="mimari-proje">
                                        Mimari Proje
                                    </option>
                                    <option value="3d-modelleme">
                                        3D Modelleme
                                    </option>
                                    <option value="egitim">
                                        Eğitim Programları
                                    </option>
                                    <option value="danismanlik">
                                        Danışmanlık
                                    </option>
                                    <option value="diger">Diğer</option>
                                </select>
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                                    <svg
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M6 8l4 4 4-4"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </div>
                            {errors.subject && (
                                <div className="animate-fade-in mt-2 flex items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-3 py-2 text-xs text-red-700 shadow-sm">
                                    <svg
                                        className="h-4 w-4 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8v4m0 4h.01"
                                        />
                                    </svg>
                                    <span className="font-medium">
                                        {errors.subject.message}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                Mesajınız *
                            </label>
                            <textarea
                                {...register('message')}
                                rows={6}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                                placeholder="Projeniz veya ihtiyaçlarınız hakkında detayları paylaşın..."></textarea>
                            {errors.message && (
                                <div className="animate-fade-in mt-1 flex items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-3 py-2 text-xs text-red-700 shadow-sm">
                                    <svg
                                        className="h-4 w-4 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8v4m0 4h.01"
                                        />
                                    </svg>
                                    <span className="font-medium">
                                        {errors.message.message}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    {...register('privacy')}
                                    className="mt-1 h-4 w-4 rounded border-gray-300 bg-gray-100 text-purple-600 focus:ring-purple-500"
                                />
                                <label
                                    htmlFor="privacy"
                                    className="text-sm text-gray-600">
                                    Kişisel verilerimin işlenmesine ve iletişim
                                    kurulmasına onay veriyorum.
                                </label>
                            </div>
                            {errors.privacy && (
                                <div className="animate-fade-in mt-1 flex items-center gap-2 rounded-lg border border-red-400 bg-red-50 px-3 py-2 text-xs text-red-700 shadow-sm">
                                    <svg
                                        className="h-4 w-4 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                        <path
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8v4m0 4h.01"
                                        />
                                    </svg>
                                    <span className="font-medium">
                                        {errors.privacy.message}
                                    </span>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full transform rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                                isSubmitting
                                    ? 'cursor-not-allowed opacity-60'
                                    : ''
                            }`}>
                            {isSubmitting && (
                                <svg
                                    className="mr-2 inline h-5 w-5 animate-spin text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                            )}
                            {isSubmitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                        </button>
                    </form>
                    {errorMessage && (
                        <div className="animate-fade-in mt-6 flex items-center gap-2 rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-700 shadow-sm">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v2m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                />
                            </svg>
                            <span>Bir hata oluştu, lutfen tekrar deneyin.</span>
                        </div>
                    )}
                    {isSubmitted && (
                        <div className="animate-fade-in mt-6 flex items-center gap-2 rounded-lg border border-green-300 bg-green-100 px-4 py-3 text-sm text-green-700 shadow-sm">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>Mesajınız başarıyla gönderildi!</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
