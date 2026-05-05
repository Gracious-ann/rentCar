import { Car } from '@/lib/api';
import css from './CatalogCarList.module.css';
import CatalogCarItem from '../CatalogCarItem/CatalogCarItem';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

interface Props {
  cars: Car[];
  onLoadMore: () => void;
  isLoading: boolean;
  hasNextPage?: boolean;
}

const CatalogCarList = ({
  cars,
  onLoadMore,
  isLoading,
  hasNextPage,
}: Props) => {
  return (
    <>
      <div className={css.car_containerList}>
        <ul className={css.car_list}>
          {cars.map(car => (
            <CatalogCarItem
              key={car.id}
              item={car}
            />
          ))}
        </ul>
      </div>
      <div className={css.car_loadMore}>
        {isLoading ? (
          <Loading />
        ) : hasNextPage ? (
          <Button onClick={onLoadMore}>Load More</Button>
        ) : null}
      </div>
    </>
  );
};

export default CatalogCarList;
