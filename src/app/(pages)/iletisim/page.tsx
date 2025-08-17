import ContactForm from './components/contact-form';
import ContactHero from './components/contact-hero';
import ContactInfo from './components/contact-info';

export default function IletisimPage() {
    return (
        <main className="w-full">
            <ContactHero />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <ContactForm />
                <ContactInfo />
            </div>
        </main>
    );
}
