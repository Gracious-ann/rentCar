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

export const getCars = async ({ pageParam = 1 }) => {
  const res = await axios.get<CarListResponse>('/cars', {
    params: {
      page: pageParam,
      limit: 12,
    },
  });
  return res.data;
};
