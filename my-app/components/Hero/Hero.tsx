import Link from 'next/link';
import css from './Hero.module.css';
const Hero = () => {
  return (
    <div className={css.hero}>
      <div className={css.hero_container_content}>
        <h2 className={css.hero_title}>Find your perfect rental car</h2>
        <p className={css.hero_paragraf}>
          Reliable and budget-friendly rentals for any journey
        </p>
      </div>
      <Link
        className={css.hero_link}
        href='/catalog'
      >
        View Catalog
      </Link>
    </div>
  );
};

export default Hero;
