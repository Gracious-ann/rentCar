import { FiMapPin } from 'react-icons/fi';

import css from './CarInfo.module.css';

interface CarInfoProps {
  brand: string;
  model: string;
  address: string;
  year: number;
  description: string;
  rentalPrice: string;
}

const CarInfo = ({
  brand,
  model,
  address,
  year,
  description,
  rentalPrice,
}: CarInfoProps) => {
  return (
    <div className={css.info}>
      <h1 className={css.title}>
        {brand} {model}, {year}
      </h1>

      <div className={css.location}>
        <FiMapPin className={css.icon} />

        <p className={css.address}>{address.split(',').slice(1).join(',')}</p>
      </div>

      <p className={css.price}>${rentalPrice}</p>

      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CarInfo;
