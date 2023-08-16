import axios from "axios";
import { camelizeKeys, decamelizeKeys, camelize } from "humps";

export class Api {
  constructor() {
    this.client = axios.create();
    this.client.defaults.baseURL = "https://nginx-proxy-server.ru/api";
    // this.client.defaults.baseURL = "http://localhost:5153";
    this.client.timeout = 3000;

    this.client.interceptors.response.use((response) => {
      if (
        response.data &&
        response.headers["content-type"].includes("application/json")
      ) {
        response.data = camelizeKeys(response.data);
      }

      return response;
    });

    // Axios middleware to convert all api requests to snake_case
    this.client.interceptors.request.use((config) => {
      const newConfig = { ...config };
      if (newConfig.headers["Content-Type"] === "multipart/form-data")
        return newConfig;

      if (config.params) {
        newConfig.params = decamelizeKeys(config.params);
      }

      if (config.data) {
        newConfig.data = decamelizeKeys(config.data);
      }
      return newConfig;
    });
  }

  clientWrapper = (method, url, data, config = {}) => {
    const clientResult = this.client[method](url, data, config);
    return clientResult;
  };

  getEvents = () => {
    return this.clientWrapper("get", "/events");
  };
}
const api = new Api();

export default api;
