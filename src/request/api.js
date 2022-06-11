import axios from 'axios';
import config from '../config.json';

let options = {
  baseURL: `${config.SERVER_URL}/api`,
  timeout: 10000,
};

const apiInstance = axios.create(options);

apiInstance.interceptors.request.use((req) => {
  return req;
});

export const requestGet = async (url) => await apiInstance.get(url);

export const requestPost = async (url, data, isJson = true) =>
  await apiInstance.post(url, data, {
    headers: {
      'Content-Type': isJson ? 'application/json' : 'multipart/form-data',
    },
  });

export const requestPut = async (url, data, isJson = true) =>
  await apiInstance.put(url, data, {
    headers: {
      'Content-Type': isJson ? 'application/json' : 'multipart/form-data',
    },
  });

export const requestDelete = async (url) => await apiInstance.delete(url);
