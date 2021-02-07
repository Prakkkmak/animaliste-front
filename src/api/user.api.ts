import httpClient from "./httpClient";

const END_POINT = "/users";

const api = {
  getAllUsers: async () => httpClient.get(END_POINT),
  getUser: async (userId: string) =>
    httpClient.get(END_POINT, { params: userId }),
  register: async (mail: string, password: string) =>
    httpClient.post(`${END_POINT}/register`, { mail, password }),
  login: async (mail: string, password: string) =>
    httpClient.post(`${END_POINT}/login`, { mail, password }),
};

export default api;
