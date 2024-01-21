import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e0b15b7e0ce34bc284737e8b3312ccc7",
  },
});

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    apiClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default APIClient;
