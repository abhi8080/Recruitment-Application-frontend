import axios from 'axios';
import { apiConfig } from '../config/api-config';

const BASE_URL = `${apiConfig.BACKEND_BASEURL}/auth`;

console.log(BASE_URL);

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const signUpUserFn = async (user) => {
  const response = await authApi.post('createAccount', user);
  return response;
};

export const loginUserFn = async (user) => {
  const response = await authApi.post('login', user);
  return response.data;
};
