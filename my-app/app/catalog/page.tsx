'use client';

import CatalogCarList from '@/components/CatalogCarList/CatalogCarList';
import BrandSelect from '@/components/SelectorBrands/BrandSelect';
import { getBrands, getCars } from '@/lib/api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import css from './page.module.css';
import { form } from 'framer-motion/client';
import Button from '@/components/Button/Button';
// import Select from 'react-select';

interface Option {
  label: string;
  value: string;
}

const Cars = () => {
  const [filters, setFilters] = useState({
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  });
  const [submittedFilters, setSubmittedFilters] = useState(filters);

  const convertKmToMiles = (km: string) => {
    return Math.round(Number(km) / 1.60934);
  };

  // Pagination
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['cars', submittedFilters],
      queryFn: ({ pageParam = 1 }) => {
        return getCars({
          pageParam,
          brand: submittedFilters.brand,
          rentalPrice: submittedFilters.rentalPrice,

          minMileage: submittedFilters.minMileage
            ? convertKmToMiles(submittedFilters.minMileage)
            : '',

          maxMileage: submittedFilters.maxMileage
            ? convertKmToMiles(submittedFilters.maxMileage)
            : '',
        });
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

  const { data: brandsData } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  const brandOptions: Option[] =
    brandsData?.map(brand => ({
      label: brand,
      value: brand,
    })) || [];

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmittedFilters(filters);
  };

  const handleReset = () => {
    setFilters({
      brand: '',
      rentalPrice: '',
      minMileage: '',
      maxMileage: '',
    });
    setSubmittedFilters({
      brand: '',
      rentalPrice: '',
      minMileage: '',
      maxMileage: '',
    });
  };

  const priceOptions: Option[] = [
    { label: '$30', value: '30' },
    { label: '$40', value: '40' },
    { label: '$50', value: '50' },
    { label: '$60', value: '60' },
    { label: '$70', value: '70' },
    { label: '$80', value: '80' },
  ];

  return (
    <div className='container'>
      <form
        className={css.filter}
        onSubmit={handleSubmit}
      >
        <div className={css.selects}>
          <BrandSelect
            options={brandOptions}
            value={filters.brand}
            onChange={value => updateFilter('brand', value)}
            label='Car brand'
            placeholder='Choose a brand'
          />

          <BrandSelect
            options={priceOptions}
            value={filters.rentalPrice}
            onChange={value => updateFilter('rentalPrice', value)}
            label='Price/ 1 hour'
            placeholder='Choose a price'
          />

          <div className={css.mileage_wrapper}>
            <span className={css.mileage_label}>Car mileage / km</span>

            <div className={css.mileage_inputs}>
              <input
                type='text'
                placeholder='From'
                value={filters.minMileage}
                onChange={e => updateFilter('minMileage', e.target.value)}
                className={css.mileage_input}
              />

              <input
                type='text'
                placeholder='To'
                value={filters.maxMileage}
                onChange={e => updateFilter('maxMileage', e.target.value)}
                className={css.mileage_input}
              />
            </div>
          </div>
        </div>
        <div className={css.buttons}>
          <Button type='submit'>Search</Button>
          <Button
            variant='tertiary'
            onClick={handleReset}
          >
            Clear filters
          </Button>
        </div>
      </form>

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
