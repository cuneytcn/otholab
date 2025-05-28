'use client';

import { clsx } from 'clsx';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalByName, toggleModal } from '../../store/features/modal/modalSlice';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Studio', href: '/studio' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
  { name: 'Courses', href: '/courses' },
];

const Header = () => {
  const mobileMenu = useSelector(selectModalByName('mobileMenu'));
  const dispatch = useDispatch();
  const pathname = usePathname();

  // Toggle overflow on body when mobile menu is open
  React.useEffect(() => {
    mobileMenu.isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenu.isOpen]);

  // Handle click escape key to close the mobile menu
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenu.isOpen) {
        dispatch(toggleModal({ modalName: 'mobileMenu' }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenu.isOpen, dispatch]);

  // Handle clicks outside the mobile menu
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenu.isOpen && !(event.target as HTMLElement).closest('#mobile-menu')) {
        dispatch(toggleModal({ modalName: 'mobileMenu' }));
      }
    };

    if (mobileMenu.isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenu.isOpen, dispatch]);

  return (
    <>
      <header
        className={clsx('relative z-[999] transition-all duration-300', {
          'bg-transparent': !mobileMenu.isOpen,
          'bg-white': mobileMenu.isOpen,
        })}>
        <div className="container mx-auto px-5">
          <div className="flex justify-between items-center py-5">
            {/* Left Side */}
            <div className="flex justify-center items-center">
              <Link href="/">
                <img src="https://demo.kaliumtheme.com/architecture/wp-content/uploads/2018/05/logo4.png" alt="Otholab" className="max-w-full h-10 lg:h-14 object-cover" />
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => dispatch(toggleModal({ modalName: 'mobileMenu' }))}
                className={clsx('size-10 lg:size-11 flex justify-center items-center flex-col cursor-pointer transition-all duration-300', {
                  'space-y-3': !mobileMenu.isOpen,
                })}>
                <span
                  className={clsx('inline-block w-full h-px rounded-full bg-neutral-800 transition-all duration-300', {
                    'rotate-45': mobileMenu.isOpen,
                  })}
                />
                <span
                  className={clsx('inline-block w-full h-px rounded-full bg-neutral-800 transition-all duration-300', {
                    '-rotate-45': mobileMenu.isOpen,
                  })}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dialog */}
      <div
        id="mobile-menu"
        className={clsx('fixed inset-0 w-full h-full z-50 bg-white transition-all duration-300', {
          'opacity-0 invisible': !mobileMenu.isOpen,
        })}>
        <div className="container mx-auto px-5">
          <div className="pt-20 lg:pt-24">
            <ul>
              {navigation.map((item) => (
                <li key={item.name} className="py-2">
                  <Link
                    href={item.href}
                    onClick={() => dispatch(toggleModal({ modalName: 'mobileMenu' }))}
                    className="relative text-3xl lg:text-4xl leading-10 md:leading-12 lg:leading-14 tracking-wide text-neutral-800 hover:text-neutral-600 transition-colors duration-300">
                    {item.name === 'Courses' ? (
                      <>
                        Courses <MoveRight className="inline lg:size-10 stroke-[1.5] ml-1" />
                      </>
                    ) : (
                      item.name
                    )}
                    {pathname === item.href && (
                      <div className="absolute top-3 left-0 flex">
                        {item.name.split('').map((char, index) => (
                          <span key={index} className="block opacity-50 hover:-translate-y-1 transition-all duration-300">
                            {char}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
