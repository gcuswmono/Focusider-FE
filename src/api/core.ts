import axios, {
  type AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
  Method,
  AxiosRequestConfig,
} from 'axios';
import Cookies from 'js-cookie'; // Add this line to import the 'Cookies' module
import { BaseResponse } from './types';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const HTTP_METHODS: Record<
  string,
  Extract<Method, 'get' | 'post' | 'patch' | 'delete' | 'put'>
> = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  DELETE: 'delete',
  PUT: 'put',
} as const;

export const ACCESS_TOKEN = 'accessToken' as const;
export const REFRESH_TOKEN = 'refreshToken' as const;
export const ROLE = 'role' as const;

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get(ACCESS_TOKEN) as string;

    if (!accessToken) {
      return config;
    }

    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${accessToken}`

    return config;
  },
  (error: AxiosError) => {
    return error;
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    // TODO: 에러 세분화
    return error;
  },
);

const createApiMethod =
  (instance: AxiosInstance, method: Method) =>
  <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> =>
    instance({ ...config, method });

const http = {
  get: createApiMethod(axiosInstance, HTTP_METHODS.GET),
  post: createApiMethod(axiosInstance, HTTP_METHODS.POST),
  patch: createApiMethod(axiosInstance, HTTP_METHODS.PATCH),
  put: createApiMethod(axiosInstance, HTTP_METHODS.PUT),
  delete: createApiMethod(axiosInstance, HTTP_METHODS.DELETE),
};

export default http;
