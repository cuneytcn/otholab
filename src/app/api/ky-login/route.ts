import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json(
                { message: 'Kullanıcı adı ve parola zorunlu.' },
                { status: 400 }
            );
        }

        const envUsername = process.env.ADMIN_USERNAME;
        const envPassword = process.env.ADMIN_PASSWORD;
        const secretKey = process.env.SECRET_KEY;

        if (!envUsername || !envPassword || !secretKey) {
            return NextResponse.json(
                { message: 'Sunucu yapılandırması eksik.' },
                { status: 500 }
            );
        }

        // Kullanıcı adı veya parola hatalı ise aynı mesajı döndür
        let isValid = true;
        if (username !== envUsername) isValid = false;
        // Parola doğrulama (hashlenmiş parola kullanıyorsan bcrypt ile karşılaştır)
        // const isPasswordValid = await bcrypt.compare(password, envPassword);
        // Eğer düz metin ise:
        const isPasswordValid = password === envPassword;
        if (!isPasswordValid) isValid = false;

        if (!isValid) {
            return NextResponse.json(
                { message: 'Kullanıcı adı veya parola hatalı.' },
                { status: 401 }
            );
        }

        // Giriş başarılı, secretKey'i hashleyip cookie'ye ekle (1 saatlik)
        const hashedSecret = await bcrypt.hash(secretKey, 10);
        const response = NextResponse.json({ message: 'Giriş başarılı.' });
        response.cookies.set('auth_secret', hashedSecret, {
            httpOnly: true,
            maxAge: 60 * 60, // 1 saat
            path: '/',
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        });
        return response;
    } catch (err) {
        return NextResponse.json(
            { message: 'Sunucu hatası. Lütfen tekrar deneyin.' },
            { status: 500 }
        );
    }
}
