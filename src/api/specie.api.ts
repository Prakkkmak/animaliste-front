import httpClient from "./httpClient";

const END_POINT = "/species";
const api = {
  getAllSpecies: async () => httpClient.get(END_POINT),
};

export default api;
