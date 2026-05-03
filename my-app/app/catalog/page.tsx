import CatalogCarList from '@/components/CatalogCarList/CatalogCarList';
import Loaging from '@/components/Loading/Loading';
import { getCars } from '@/lib/api';

const Cars = async () => {
  const cars = await getCars();

  // const handLoadMore = () => {};

  return (
    <div>
      <CatalogCarList
        cars={cars}
        // onLoadMore={handLoadMore}
        // // isLoading={Loaging}
        // isLoading={false}
      />
    </div>
  );
};

export default Cars;
