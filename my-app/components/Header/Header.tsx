import Link from 'next/link';
import Image from 'next/image';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.header_nav}>
        <Link href={'/'}>
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
              className={css.navigation_item_link}
              href={'/'}
            >
              Home
            </Link>
          </li>
          <li className={css.navigation_item}>
            <Link
              className={css.navigation_item_link}
              href={'/catalog'}
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
