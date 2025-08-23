import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/keystatic')) {
        const secretCookie = request.cookies.get('auth_secret')?.value;
        // Sadece hashlenmiş keyin varlığını kontrol et
        if (!secretCookie) {
            return NextResponse.redirect(new URL('/ky-login', request.url));
        }
    }
    return NextResponse.next();
}
