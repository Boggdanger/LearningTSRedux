import axios, { AxiosRequestConfig, Method } from "axios";

interface IAxiosRequest {
  endpoint: string;
  method: Method;
  data?: unknown;
  config?: AxiosRequestConfig;
}

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const makeRequest = async ({
  endpoint,
  method = "GET",
  data,
  config,
}: IAxiosRequest): Promise<unknown> => {
  const response = await axios({
    method,
    url: `${API_BASE_URL}${endpoint}`,
    data,
    ...config,
  });
  return response.data;
};
