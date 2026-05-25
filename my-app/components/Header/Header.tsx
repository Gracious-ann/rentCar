'use client';
import Link from 'next/link';
import Image from 'next/image';
import css from './Header.module.css';
import { usePathname } from 'next/dist/client/components/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <nav className={css.header_nav}>
        <Link
          href={'/'}
          aria-label='Home'
        >
          <Image
            // className={css.logoIcon}
            width={102}
            height={16}
            src='/RentalCar.svg'
            alt='CarRental-logo'
          />
        </Link>

        <ul className={css.navigationList}>
          <li className={css.navigation_item}>
            <Link
              href='/'
              className={`${css.navigation_item_link} ${
                pathname === '/' ? css.active : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li className={css.navigation_item}>
            <Link
              className={`${css.navigation_item_link} ${
                pathname === '/catalog' ? css.active : ''
              }`}
              href='/catalog'
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
