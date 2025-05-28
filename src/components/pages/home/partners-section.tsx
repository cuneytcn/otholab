import ClientCard from '~/components/client-card';
import Heading from '~/components/heading';

const partners = [
  {
    id: 1,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-1-300x300.png',
    name: 'Mies Van Der Rohe',
  },
  {
    id: 2,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-2-300x300.png',
    name: 'Nykredit',
  },
  {
    id: 3,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cl-logo-3-300x300.png',
    name: 'École Spécial d’Architecture',
  },
  {
    id: 4,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-4-300x300.png',
    name: 'Architecture Daily',
  },
  {
    id: 5,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-5-300x300.png',
    name: 'Mark',
  },
  {
    id: 6,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-6-300x300.png',
    name: 'HOBI',
  },
  {
    id: 7,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-7-300x300.png',
    name: 'Barclays',
  },
  {
    id: 8,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-8-300x300.png',
    name: 'Dutch Design Award',
  },
  {
    id: 9,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-9-300x300.png',
    name: 'Dezeen',
  },
  {
    id: 10,
    img: 'https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/cp-logo-10-300x300.png',
    name: 'YOU',
  },
];

const PartnersSection = () => {
  return (
    <section className="relative w-full py-10 lg:py-20 bg-neutral-50">
      <div className="container mx-auto px-5">
        {/* Heading Content */}
        <Heading title="Our Partners">
          <p>
            Practicing at the confluence of art, architecture, and building technology, we collaborate with clients to create buildings and environments in dialogue with culture
            and place.
          </p>
        </Heading>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          {partners.map((partner) => (
            <ClientCard key={partner.id} img={partner.img} name={partner.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
