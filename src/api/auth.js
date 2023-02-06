import axios from 'axios';
import { apiConfig } from '../config/api-config';

export const authApi = axios.create({
  baseURL: `${apiConfig.BACKEND_BASEURL}/auth`,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const signUpUser = async (user) => {
  const response = await authApi.post('createAccount', user);
  return response;
};

export const loginUser = async (username, password) => {
  const response = await authApi.post('/login', {
    username,
    password,
  });
  return response;
};
