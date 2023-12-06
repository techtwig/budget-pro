import {AxiosRequestConfig, AxiosResponse} from 'axios';
import axiosInstance from "@/network/axios/axiosInstance";

/** Axios catch block handler */
const errorHandler = (error: {response: any; request?: any; message?: any}) => {
  throw error;
};

async function apiGet<T = any>(
    apiPath: string,
    config: AxiosRequestConfig = {},
): Promise<AxiosResponse> {
  return axiosInstance.get(apiPath, config);
}

async function apiPost<R = any, T = any>(
    apiPath: string,
    data?: R,
    config: AxiosRequestConfig = {},
): Promise<AxiosResponse> {
  return axiosInstance.post(apiPath, data, config);
}

async function apiDelete<T = any>(apiPath: string): Promise<AxiosResponse> {
  return axiosInstance.delete(apiPath);
}

async function apiPut<R = any, T = any>(
    apiPath: string,
    data?: R,
    config: AxiosRequestConfig = {},
): Promise<AxiosResponse> {
  return axiosInstance.put(apiPath, data,config);
}

export {apiGet, apiPost, apiDelete, apiPut};
