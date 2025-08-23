'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const schema = z.object({
    username: z.string().min(1, 'Kullanıcı adı zorunlu'),
    password: z.string().min(1, 'Parola zorunlu'),
});

type FormData = z.infer<typeof schema>;

export default function Page() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({ resolver: zodResolver(schema) });
    const [error, setError] = useState('');

    const onSubmit = async (data: FormData) => {
        setError('');
        const res = await fetch('/api/ky-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (res.ok) {
            window.location.href = '/keystatic';
        } else {
            const result = await res.json();
            setError(result.message || 'Giriş başarısız');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-100 to-white px-2 py-8">
            <div className="grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2">
                {/* Sol panel */}
                <div className="hidden flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white md:flex">
                    <div className="mb-6 flex items-center gap-2">
                        <span className="text-3xl font-bold tracking-wide">
                            Otholab
                        </span>
                        <span className="rounded-full bg-white/20 px-2 py-1 text-xs">
                            Admin
                        </span>
                    </div>
                    <p className="text-center text-lg font-light">
                        Yönetici paneline giriş yaparak içeriklerinizi kolayca
                        yönetin.
                    </p>
                </div>
                {/* Sağ panel (form) */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-center p-6 sm:p-8">
                    <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
                        Yönetici Girişi
                    </h2>
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Kullanıcı Adı
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                {...register('username')}
                                className={`w-full rounded-lg border px-4 py-3 text-base transition focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                                    errors.username
                                        ? 'border-red-400'
                                        : 'border-gray-300'
                                }`}
                                autoComplete="username"
                            />
                            <span className="absolute top-3 right-4 text-gray-400">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"
                                    />
                                </svg>
                            </span>
                        </div>
                        {errors.username && (
                            <span className="text-xs text-red-500">
                                {errors.username.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Parola
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                {...register('password')}
                                className={`w-full rounded-lg border px-4 py-3 text-base transition focus:ring-2 focus:ring-indigo-400 focus:outline-none ${
                                    errors.password
                                        ? 'border-red-400'
                                        : 'border-gray-300'
                                }`}
                                autoComplete="current-password"
                            />
                            <span className="absolute top-3 right-4 text-gray-400">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-7V7a6 6 0 1 0-12 0v3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm-8-3a4 4 0 1 1 8 0v3H6V7z"
                                    />
                                </svg>
                            </span>
                        </div>
                        {errors.password && (
                            <span className="text-xs text-red-500">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    {error && (
                        <div className="animate-fade-in mb-6 flex items-center gap-2 rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-700 shadow-sm">
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
                            <span>{error}</span>
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-lg font-semibold text-white shadow-md transition hover:scale-105">
                        {isSubmitting ? (
                            <svg
                                className="mr-2 h-5 w-5 animate-spin"
                                viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8z"
                                />
                            </svg>
                        ) : null}
                        Giriş Yap
                    </button>
                </form>
            </div>
        </div>
    );
}
