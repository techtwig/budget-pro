import {Cookies} from 'react-cookie';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import {CookieGetOptions} from 'universal-cookie/cjs/types';
import {
  API_BASE_URL,
  COOKIE_KEY_USER_ACCESS_TOKEN,
  USER_ACCESS_TOKEN,
} from '@/constants/defaultConstant';

const cookieInstance = new Cookies();

export const getBrowserCookie = (name: string, options?: CookieGetOptions) => {
  return cookieInstance.get(name, options);
};

// let retryAuthRefreshToken = 0;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 300000,
});

axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const authAccessToken = getBrowserCookie(COOKIE_KEY_USER_ACCESS_TOKEN);
    if (!config.headers?.[USER_ACCESS_TOKEN] && authAccessToken) {
      config.headers[USER_ACCESS_TOKEN] = `Bearer ${authAccessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
