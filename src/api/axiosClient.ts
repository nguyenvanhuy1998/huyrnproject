import axios from 'axios';
import queryString from 'query-string';
import {BASE_URL, BASE_URL_ANDROID} from '../constants';
import {Platform} from 'react-native';

const axiosClient = axios.create({
  baseURL: Platform.OS === 'ios' ? BASE_URL : BASE_URL_ANDROID,
  paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use((config: any) => {
  config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers,
  };
  config.data;
  return config;
});

axiosClient.interceptors.response.use(
  res => {
    if (res.data && res.status === 200) {
      return res.data;
    }
    throw new Error('Error');
  },
  error => {
    console.log(`Error api ${JSON.stringify(error)}`);
    throw new Error(error.response);
  },
);
export default axiosClient;
