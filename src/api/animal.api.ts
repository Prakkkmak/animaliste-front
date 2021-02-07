import Animal from "@/models/Animal";
import httpClient from "./httpClient";

const END_POINT = "/animals";
const api = {
  getAllAnimals: async () => httpClient.get(END_POINT),

  getAnimalById: async (id: string) => httpClient.get(`${END_POINT}/${id}`),

  createAnimal: async (animalBody: any) =>
    httpClient.post(END_POINT, animalBody),

  saveAnimal: async (id: string, animalBody: Animal) =>
    httpClient.put(`${END_POINT}/${id}`, animalBody),

  deleteAnimal: async (id: string) => httpClient.delete(`${END_POINT}/${id}`),
};

export default api;
