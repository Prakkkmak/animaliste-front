import httpClient from './httpClient';

const END_POINT = '/users';

const getAllUsers = () => httpClient.get(END_POINT);

// you can pass arguments to use as request parameters/data
const getUser = (userId: string) =>
  httpClient.get(END_POINT, { params: userId });
// maybe more than one..
const register = (mail: string, password: string) =>
  httpClient.post(`${END_POINT}/register`, { mail, password });

const login = (mail: string, password: string) =>
  httpClient.post(`${END_POINT}/login`, { mail, password });

export { getAllUsers, getUser, register, login };
