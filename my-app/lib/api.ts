import axios from 'axios';
export type CarType = 'SUV' | 'Sedan/Hatchback' | 'Van/Minivan' | 'Convertible';

// export type Car = {
//   id: string;
//   year: number;
//   brand: string;
//   model: string;
//   type: CarType;
//   img: string;
//   description: string;
//   fuelConsumption: string;
//   engineSize: string;
//   accessories: string[];
//   functionalities: string[];
//   rentalPrice: string;
//   rentalCompany: string;
//   address: string;
//   rentalConditions: string[];
//   mileage: number;
// };

export type Car = {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: CarType;
  img: string;
  description: string;
  fuelConsumption: string;
  engine: string;

  features: string[];

  rentalPrice: string;
  rentalCompany: string;

  location: {
    country: string;
    city: string;
    address: string;
  };

  rentalConditions: string[];
  mileage: number;
};

export type CarListResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

export type CarFilters = {
  brands: string[];
  price: {
    min: number;
    max: number;
  };
};

axios.defaults.baseURL = 'https://car-rental-api.goit.study';

export const getCars = async ({
  pageParam = 1,
  brand,
  price,
  minMileage,
  maxMileage,
}: {
  pageParam?: number;
  brand?: string;
  price?: string | number;
  minMileage?: string | number;
  maxMileage?: string | number;
}) => {
  const res = await axios.get<CarListResponse>('/cars', {
    params: {
      page: pageParam,
      perPage: 12,

      ...(brand && { brand }),
      ...(price && { price }),
      ...(minMileage && { minMileage }),
      ...(maxMileage && { maxMileage }),
    },
  });

  return res.data;
};

// export const getBrands = async (): Promise<string[]> => {
//   const res = await axios.get<string[]>('/brands');

//   return res.data;
// };

export const getFilter = async (): Promise<CarFilters> => {
  const res = await axios.get<CarFilters>('/cars/filters');

  return res.data;
};

export const getSingleNoteCar = async (id: string) => {
  const res = await axios.get<Car>(`/cars/${id}`);
  return res.data;
};

export const SendFormData = async (
  id: string,
  body: { name: string; email: string; comment: string },
) => {
  const res = await axios.post(`/cars/${id}/booking-requests`, body);
  return res.data;
};
