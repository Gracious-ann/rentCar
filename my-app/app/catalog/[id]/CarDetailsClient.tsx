'use client';

import { getSingleNoteCar } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import CarHero from '@/components/CarHero/CarHero';
import CarInfo from '@/components/CarInfo/CarInfo';
import CarDetails from '@/components/CarDetails/CarDetails';
import CarForm from '@/components/CarForm/CarForm';
import css from './CarDetails.module.css';
import Load from '@/components/Loading/Loading';
import ErrorView from '@/components/Error/ErrorView';
import NotFound from '../not-found';

const CarDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: car,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['car', id],
    queryFn: () => getSingleNoteCar(id),
    refetchOnMount: false,
  });

  if (isLoading) return <Load />;

  if (error || !car)
    return (
      <ErrorView
        error={error as Error}
        reset={() => {}}
      />
    );

  if (!car) {
    return <NotFound />;
  }

  return (
    <div className='container'>
      {car && (
        <div className={css.car_fullInfo}>
          <div className={css.carimg_form}>
            <CarHero images={car.img} />
            <CarForm id={car.id} />
          </div>
          <div className={css.carinfo_details}>
            <CarInfo
              brand={car.brand}
              model={car.model}
              rentalPrice={car.rentalPrice}
              address={car.address}
              year={car.year}
              description={car.description}
            />

            <CarDetails
              rentalConditions={car.rentalConditions}
              year={car.year}
              type={car.type}
              fuelConsumption={car.fuelConsumption}
              engineSize={car.engineSize}
              mileage={car.mileage}
              accessories={car.accessories}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailsClient;
