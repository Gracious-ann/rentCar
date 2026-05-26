import {
  FiCheckCircle,
  FiCalendar,
  FiTruck,
  FiDroplet,
  FiSettings,
  FiActivity,
} from 'react-icons/fi';

import css from './CarDetails.module.css';

interface Props {
  rentalConditions: string[];

  year: number;
  type: string;
  fuelConsumption: string;
  engineSize: string;
  mileage: number;

  accessories: string[];
}

const CarDetails = ({
  rentalConditions,
  year,
  type,
  fuelConsumption,
  engineSize,
  mileage,
  accessories,
}: Props) => {
  return (
    <div className={css.details}>
      {/* Rental Conditions */}

      <div className={css.section}>
        <h2 className={css.title}>Rental Conditions:</h2>

        <ul className={css.list}>
          {rentalConditions.map(condition => (
            <li
              key={condition}
              className={css.item}
            >
              <FiCheckCircle className={css.icon} />

              <span>{condition}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.divider}></div>

      {/* Specifications */}

      <div className={css.section}>
        <h2 className={css.title}>Car Specifications:</h2>

        <ul className={css.list}>
          <li className={css.item}>
            <FiCalendar className={css.icon} />

            <span>Year: {year}</span>
          </li>

          <li className={css.item}>
            <FiTruck className={css.icon} />

            <span>Type: {type}</span>
          </li>

          <li className={css.item}>
            <FiDroplet className={css.icon} />

            <span>Fuel Consumption: {fuelConsumption}</span>
          </li>

          <li className={css.item}>
            <FiSettings className={css.icon} />

            <span>Engine: {engineSize}</span>
          </li>

          <li className={css.item}>
            <FiActivity className={css.icon} />

            <span>Mileage: {mileage} km</span>
          </li>
        </ul>
      </div>
      <div className={css.divider}></div>
      {/* Features */}

      <div className={css.section}>
        <h2 className={css.title}>Features</h2>

        <ul className={css.list}>
          {accessories.map(feature => (
            <li
              key={feature}
              className={css.item}
            >
              <FiCheckCircle className={css.icon} />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
