import Image from 'next/image';
import css from './CarHero.module.css';
import Loading from '../Loading/Loading';

interface CarHeroProps {
  images: string; // Replace 'any' with the actual type for your car object
}

const CarHero = ({ images }: CarHeroProps) => {
  return (
    <Image
      className={css.carHeroImg}
      src={images}
      alt='Car Image'
      width={640}
      height={514}
    />
  );
};

export default CarHero;
