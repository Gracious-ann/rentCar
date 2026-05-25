import axios from 'axios';
export type CarType = 'SUV' | 'Sedan/Hatchback' | 'Van/Minivan' | 'Convertible';

export type Car = {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: CarType;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
};

export type CarListResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getCars = async ({
  pageParam = 1,
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
}: {
  pageParam?: number;
  brand?: string;
  rentalPrice?: string | number;
  minMileage?: string | number;
  maxMileage?: string | number;
}) => {
  const res = await axios.get<CarListResponse>('/cars', {
    params: {
      page: pageParam,
      limit: 12,

      ...(brand && { brand }),
      ...(rentalPrice && { rentalPrice }),
      ...(minMileage && { minMileage }),
      ...(maxMileage && { maxMileage }),
    },
  });

  return res.data;
};

export const getBrands = async (): Promise<string[]> => {
  const res = await axios.get<string[]>('/brands');

  return res.data;
};

export const getSingleNoteCar = async (id: string) => {
  const res = await axios.get<Car>(`/cars/${id}`);
  return res.data;
};
