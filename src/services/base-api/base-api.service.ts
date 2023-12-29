
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create();

instance.interceptors.response.use((response: AxiosResponse<any>) => {
  if (response.data) {
    return response.data;
  }
  if (response && response.status === 200) {
    return response.status;
  }
});

const apiService = {
  get: ({ url, data, headers }: AxiosRequestConfig<any>) => {
    const config = { params: {}, headers: {} };
    if (!url) {
      throw Error("endPoint is required param");
    } else {
      if (data) {
        config.params = data;
      }
      if (headers) {
        config.headers = headers;
      }
      const endPoint = url;
      return instance.get(endPoint, config);
    }
  },
  post: ({ url, data, headers }: AxiosRequestConfig<any>) => {
    if (!url || !data) {
      throw Error("endPoint and data are required params");
    }
    const endPoint = url;
    return instance.post(endPoint, data, { headers });
  },
  put: ({ url, data, headers }: AxiosRequestConfig<any>) => {
    if (!url || !data) {
      throw Error("endpoint and data are required params");
    }
    const endPoint = url;
    return instance.put(endPoint, data, { headers });
  },
  delete: ({ url }: AxiosRequestConfig<any>) => {
    if (!url) {
      throw Error("endpoint is required param");
    }
    const endPoint = url;
    return instance.delete(endPoint);
  },
};

export { apiService };
