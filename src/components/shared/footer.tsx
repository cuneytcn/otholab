const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full h-auto bg-white py-5 lg:py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <p className="order-2 md:order-1">© Copyright 2025 — CC Theme by Laborator</p>

          <ul className="flex items-center md:justify-end gap-5 order-1 md:order-2">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 lg:text-lg text-gray-700 hover:text-yellow-400 transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
