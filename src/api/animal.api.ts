import Animal from '@/models/Animal';
import httpClient from './httpClient';

const END_POINT = '/animals';
const api = {
  getAllAnimals: () => httpClient.get(END_POINT),

  getAnimalById: (id: string) => httpClient.get(`${END_POINT}/${id}`),

  createAnimal: (animalBody: any) => httpClient.post('', animalBody),

  saveAnimal: (id: string, animalBody: Animal) =>
    httpClient.put(`${END_POINT}/${id}`, animalBody),

  deleteAnimal: (id: number) => httpClient.delete(`${END_POINT}/${id}`),
};

export default api;
