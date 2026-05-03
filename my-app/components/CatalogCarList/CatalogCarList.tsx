import { Car } from '@/lib/api';
import css from './CatalogCarList.module.css';
import CatalogCarItem from '../CatalogCarItem/CatalogCarItem';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

interface Props {
  cars: Car[];
  onLoadMore: () => void;
  isLoading: boolean;
}

const CatalogCarList = ({ cars, onLoadMore, isLoading }: Props) => {
  return (
    cars && (
      <div className='container'>
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
          <Button
            onClick={onLoadMore}
            disabled={isLoading}
          >
            {/* {isLoading && <Loading />} */}
            {isLoading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      </div>
    )
  );
};

export default CatalogCarList;
