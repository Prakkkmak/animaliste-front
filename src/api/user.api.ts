import httpClient from './httpClient';

const END_POINT = '/users';

const getAllUsers = async () => httpClient.get(END_POINT);

// you can pass arguments to use as request parameters/data
const getUser = async (userId: string) =>
  httpClient.get(END_POINT, { params: userId });
// maybe more than one..
const register =  async (mail: string, password: string) =>
  httpClient.post(`${END_POINT}/register`, { mail, password });

const login = async (mail: string, password: string) =>
  httpClient.post(`${END_POINT}/login`, { mail, password });

export { getAllUsers, getUser, register, login };
