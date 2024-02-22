import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import merge from 'lodash/merge';

enum StatusCode {
   Unauthorized = 401,
   Forbidden = 403,
   TooManyRequests = 429,
   InternalServerError = 500
}

class Http {
   private instance: AxiosInstance;

   private defaults: AxiosRequestConfig = {
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json; charset=utf-8'
      }
   };

   private get http(): AxiosInstance {
      return this.instance != null ? this.instance : this.init();
   }

   public init({ config, configFn }: {
      config?: AxiosRequestConfig;
      configFn?: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
   } = {}) {
      const http = axios.create(merge(this.defaults, config));

      http.interceptors.request.use(
         (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
            if (configFn) {
               const requestConfig = configFn(config);

               if (requestConfig instanceof Promise) {
                  return requestConfig.then(newConfig => Promise.resolve(merge(config, newConfig)));
               }

               return merge(config, requestConfig || {});
            }

            return config;
         },
         error => Promise.reject(error)
      );

      http.interceptors.response.use(response => response, error => {
            const { response } = error;

            return Http.handleError(response);
         }
      );
      this.instance = http;
      return http;
   }

   public get request(): AxiosInstance {
      return this.http;
   }

   private static handleError(error) {
      const { status } = error || {};

      switch (status) {
         case StatusCode.InternalServerError: {
            break;
         }
         case StatusCode.Forbidden: {
            break;
         }
         case StatusCode.Unauthorized: {
            break;
         }
         case StatusCode.TooManyRequests: {
            break;
         }
      }

      return Promise.reject(error);
   }
}

export default new Http();