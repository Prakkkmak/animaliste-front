import httpClient from './httpClient';

const END_POINT = '/animals';

const getAllAnimals = () => httpClient.get(END_POINT);

const getAnimalById = (id) => httpClient.get(`${END_POINT}/${id}`);

const createAnimal = (animalBody) => httpClient.post('', animalBody);

const saveAnimal = (id, animalBody) =>
  httpClient.put(`${END_POINT}/${id}`, animalBody);

const deleteAnimal = (id) => httpClient.delete(`${END_POINT}/${id}`);

export { getAllAnimals, getAnimalById, createAnimal, saveAnimal, deleteAnimal };
