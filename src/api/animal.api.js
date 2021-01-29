import httpClient from './httpClient';

const END_POINT = '/animals';
const api = {
  getAllAnimals: () => httpClient.get(END_POINT),

  getAnimalById: (id) => httpClient.get(`${END_POINT}/${id}`),

  createAnimal: (animalBody) => httpClient.post('', animalBody),

  saveAnimal: (id, animalBody) =>
    httpClient.put(`${END_POINT}/${id}`, animalBody),

  deleteAnimal: (id) => httpClient.delete(`${END_POINT}/${id}`),
};

export default api;
