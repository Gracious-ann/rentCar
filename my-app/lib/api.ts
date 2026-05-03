import axios from 'axios';
export type CarType = 'SUV' | 'Sedan' | 'Hatchback' | 'Coupe' | 'Convertible';

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

export const getCars = async () => {
  const res = await axios.get<CarListResponse>('/cars');
  return res.data.cars;
};
