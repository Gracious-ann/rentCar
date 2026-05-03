import Image from 'next/image';
import { Car } from '@/lib/api';
import css from './CatalogCarItem.module.css';
import Link from 'next/link';

interface Props {
  item: Car;
}

const CatalogCarItem = ({ item }: Props) => {
  const [street, city, country] = item.address.split(', ');

  return (
    <li className={css.car_card}>
      <div className={css.car_img_wrapper}>
        <Image
          src={item.img}
          alt={item.model}
          width={244}
          height={268}
          className={css.car_img}
        />
      </div>

      <div className={css.car_content}>
        <div className={css.car_header}>
          <h3 className={css.car_header_info}>
            {item.brand} <span className={css.model}>{item.model}</span>,
            <span className={css.year}>{item.year}</span>
          </h3>
          <p className={css.price}>${item.rentalPrice}</p>
        </div>

        <div className={css.car_info}>
          <div className={css.row}>
            <span>{city}</span>
            <span>{country}</span>
            <span className={css.company}>{item.rentalCompany}</span>
          </div>

          <div className={css.row}>
            <span>{item.type}</span>
            <span>{Math.floor(item.mileage * 1.609).toLocaleString()} km</span>
          </div>
        </div>

        <Link
          href={`/catalog/${item.id}`}
          className={css.read_more_btn}
        >
          Read more
        </Link>
      </div>
    </li>
  );
};

export default CatalogCarItem;
