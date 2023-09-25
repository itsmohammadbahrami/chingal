import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const axiosBase = axios.create({ baseURL: apiBaseUrl });

const onRequestSuccess = (request: InternalAxiosRequestConfig<any>) => {
   return request;
};

const onResponseSuccess = (response: AxiosResponse<any, any>) => {
   return response;
};

const onResponseFail = (error: any) => {
   return Promise.reject(error);
};

[axiosBase].forEach(axiosInstance => {
   axiosInstance?.interceptors?.request?.use(onRequestSuccess);
   axiosInstance?.interceptors?.response?.use(
      onResponseSuccess,
      onResponseFail
   );
});

export { axiosBase };
