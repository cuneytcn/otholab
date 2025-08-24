import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json(
                { message: 'Tüm alanlar zorunlu.' },
                { status: 400 }
            );
        }

        // Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.CONTACT_RECEIVER || 'info@otholab.com',
            subject: `İletişim Formu: ${subject}`,
            text: `Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\nKonu: ${subject}\nMesaj: ${message}`,
            html: `
                <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <style>
                    body { font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #eee; padding: 24px; }
                    .row { margin-bottom: 16px; }
                    .label { font-weight: bold; color: #4f46e5; display: block; margin-bottom: 4px; }
                    .value { color: #222; font-size: 16px; }
                    @media (max-width: 600px) {
                        .container { padding: 12px; }
                        .value { font-size: 15px; }
                    }
                    </style>
                </head>
                <body>
                    <div class="container">
                    <h2 style="color:#6366f1; margin-bottom:24px;">Yeni İletişim Formu Mesajı</h2>
                    <div class="row">
                        <span class="label">Ad Soyad:</span>
                        <span class="value">${name}</span>
                    </div>
                    <div class="row">
                        <span class="label">E-posta:</span>
                        <span class="value">${email}</span>
                    </div>
                    <div class="row">
                        <span class="label">Telefon:</span>
                        <span class="value">${phone}</span>
                    </div>
                    <div class="row">
                        <span class="label">Konu:</span>
                        <span class="value">${subject}</span>
                    </div>
                    <div class="row">
                        <span class="label">Mesaj:</span>
                        <span class="value">${message}</span>
                    </div>
                    </div>
                </body>
                </html>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: 'Mesajınız başarıyla gönderildi.',
        });
    } catch (err) {
        return NextResponse.json(
            { message: 'Mail gönderilemedi, lütfen tekrar deneyin.' },
            { status: 500 }
        );
    }
}
