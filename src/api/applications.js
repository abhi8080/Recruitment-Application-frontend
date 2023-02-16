import axios from 'axios';
import { apiConfig } from '../config/api-config';

export const applicationsApi = axios.create({
  withCredentials: true,
  baseURL: `${apiConfig.BACKEND_BASEURL}/applications`,
});

applicationsApi.defaults.headers.common['Content-Type'] = 'application/json';

export async function getAllApplications() {
  const { data } = await applicationsApi.get();
  return data;
}

export async function getApplication(id) {
  const applicationApi = axios.create({
    withCredentials: true,
    baseURL: `${apiConfig.BACKEND_BASEURL}/applications/${id}`,
  });

  const { data } = await applicationApi.get();
  return data;
}
