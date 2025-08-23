import { getSeo } from '@/lib/keystatic';
import '../styles/globals.css';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const seo = await getSeo();

    return (
        <html lang="tr">
            <head>
                <title>{seo?.title}</title>
                <meta name="description" content={seo?.description || ''} />
                <meta
                    name="keywords"
                    content={
                        seo?.keywords
                            ? seo.keywords.map((k) => k.trim()).join(', ')
                            : ''
                    }
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
