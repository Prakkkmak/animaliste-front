import httpClient from './httpClient';

const END_POINT = '/users';

const getAllUsers = () => httpClient.get(END_POINT);

// you can pass arguments to use as request parameters/data
const getUser = (userId) => httpClient.get(END_POINT, userId);
// maybe more than one..
const register = (mail, password) =>
  httpClient.post(`${END_POINT}/register`, { mail, password });

const login = (mail, password) =>
  httpClient.post(`${END_POINT}/login`, { mail, password });

export { getAllUsers, getUser, register, login };
