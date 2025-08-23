import Footer from '@/components/footer';
import { getContact, getSettings, getSocials } from '@/lib/keystatic';
import Header from '../../components/header';

export default async function Layaut({
    children,
}: {
    children: React.ReactNode;
}) {
    const settings = await getSettings();
    const contact = await getContact();
    const socials = await getSocials();

    return (
        <>
            <Header settings={settings} />
            <main>{children}</main>
            <Footer contact={contact} socials={socials} />
        </>
    );
}
