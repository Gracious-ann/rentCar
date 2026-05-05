'use client';

import CatalogCarList from '@/components/CatalogCarList/CatalogCarList';
import { getCars } from '@/lib/api';
import { useInfiniteQuery } from '@tanstack/react-query';

const Cars = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['cars'],
      queryFn: ({ pageParam = 1 }) => {
        return getCars({ pageParam });
      },
      initialPageParam: 1,
      getNextPageParam: lastPage => {
        const current = Number(lastPage.page);
        const total = Number(lastPage.totalPages);

        return current < total ? current + 1 : undefined;
      },
      select: data => {
        return {
          ...data,
          cars: data.pages.flatMap(page => page.cars || []),
        };
      },
    });

  const cars = data?.cars ?? [];

  console.log(data);
  return (
    <div className='container'>
      <CatalogCarList
        cars={cars}
        onLoadMore={() => fetchNextPage()}
        isLoading={isFetchingNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default Cars;
